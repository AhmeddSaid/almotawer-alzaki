import React from "react";
import { Toaster } from "sonner";
import NavBar from "../NavBar/NavBar";
import { Locale } from "@/Global";
import Footer from "@/Library/common/Footer/Footer";
import { GlobalStyle } from "@/Library/common/Globals/Globals";
import StyledComponentsRegistry from "@/Library/common/Globals/Registery";
import Providers from "@/redux/Provider";
import { fetchServices } from "@/utils/fetchServices";

const MainLayout = async ({
	children,
	locale,
}: Readonly<{
	children: React.ReactNode;
	locale: Locale;
}>) => {
	const { services } = (await fetchServices()) as {
		services: { id: string; title: { rendered: string }; slug: string }[];
	};

	return (
		<>
			<Toaster position="top-center" />
			<StyledComponentsRegistry>
				<GlobalStyle />
				<body>
					<Providers>
						<NavBar services={services} locale={locale} />
						<main>{children}</main>
						<Footer services={services} locale={locale} />
					</Providers>
				</body>
			</StyledComponentsRegistry>
		</>
	);
};

export default MainLayout;
