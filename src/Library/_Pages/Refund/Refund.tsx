import React, { ReactNode } from "react";
import { TermsContainer } from "../Terms/Terms.styles";

export default function Refund({ content }: { content: ReactNode }) {
	return (
		<TermsContainer>
			<article>{content}</article>
		</TermsContainer>
	);
}
