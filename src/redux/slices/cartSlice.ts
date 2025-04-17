import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
	id: number;
	name: string;
	qty: number;
	price: number;
	total: number;
}

interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items:
		typeof window !== "undefined" && localStorage.getItem("cart")
			? JSON.parse(localStorage.getItem("cart")!)
			: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const existingProductIndex = state.items.findIndex(item => item.id === action.payload.id);

			if (existingProductIndex >= 0) {
				state.items[existingProductIndex].qty += action.payload.qty;
				state.items[existingProductIndex].total += action.payload.total;
			} else {
				state.items.push(action.payload);
			}

			localStorage.setItem("cart", JSON.stringify(state.items));
		},
		loadCart: state => {
			const storedCart = localStorage.getItem("cart");
			if (storedCart) {
				state.items = JSON.parse(storedCart);
			}
		},
	},
});

export const { addToCart, loadCart } = cartSlice.actions;

export default cartSlice.reducer;
