import React from "react";
import { ButtonShell } from "@/Library/common/Button/Button.styles";
import RightArrow from "@/Library/common/Icons/RightArrow/RightArrow";

const Button = ({
	body,
	size,
	Bgcolor,
	weight,
	fullWidth,
	arrow,
	width,
	locale,
}: {
	body: string;
	size?: string;
	Bgcolor?: string;
	weight?: boolean;
	fullWidth?: boolean;
	arrow?: boolean;
	width?: string;
	locale?: string;
}) => {
	return (
		<ButtonShell fullWidth={fullWidth} weight={weight} Bgcolor={Bgcolor} size={size} width={width}>
			{body}
			{arrow && <RightArrow dir={locale === "ar"} />}
		</ButtonShell>
	);
};

export default Button;
