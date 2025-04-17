import type { Metadata } from "next";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Cairo } from "next/font/google";
import { cookies } from "next/headers";
import React from "react";
import { getLangDir } from "rtl-detect";
import MainLayout from "@/Library/common/Layouts/MainLayout";

const poppins: NextFontWithVariable = Cairo({
	weight: ["500", "600", "700"],
	style: ["normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--poppins-font",
});

export const metadata: Metadata = {
	title: "Almotawer Alzaki",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookiesJar = cookies();
	// @ts-ignore
	const locale = cookiesJar.get("NEXT_LOCALE")?.value ?? "ar";
	const direction: "ltr" | "rtl" = getLangDir(locale);

	return (
		<html className={poppins.variable} lang={locale} dir={direction}>
			{/*@ts-ignore*/}
			<MainLayout locale={locale}>{children}</MainLayout>
		</html>
	);
}
