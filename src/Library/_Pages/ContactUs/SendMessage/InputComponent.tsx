import React, { forwardRef } from "react";
import {
	ErrorMessage,
	InputStyles,
	LabelName,
} from "@/Library/_Pages/ContactUs/SendMessage/InputComponent.styles";

const InputComponent = forwardRef<
	HTMLInputElement,
	{
		Label: string;
		type: string;
		name?: string;
		placeHolder: string;
		error?: string;
	}
>(({ Label, type, placeHolder, error, name, ...rest }, ref) => (
	<div>
		{error && <ErrorMessage>{error}</ErrorMessage>}
		<LabelName htmlFor={Label}>{Label}</LabelName>
		<InputStyles
			id={Label}
			type={type}
			placeholder={placeHolder}
			hasError={!!error}
			ref={ref}
			name={name}
			{...rest}
		/>
	</div>
));

InputComponent.displayName = "InputComponent";

export default InputComponent;
