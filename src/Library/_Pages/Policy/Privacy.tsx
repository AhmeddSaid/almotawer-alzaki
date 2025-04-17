import React, { ReactNode } from "react";
import { TermsContainer } from "../Terms/Terms.styles";

export default function Privacy({ content }: { content: ReactNode }) {
	return (
		<TermsContainer>
			<article>{content}</article>
		</TermsContainer>
	);
}
