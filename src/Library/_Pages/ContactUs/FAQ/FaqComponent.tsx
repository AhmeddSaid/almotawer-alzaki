"use client";
import React, { useState } from "react";
import {
	Answer,
	FaqInnerContainer,
	IconContainer,
	Question,
	QuestionContainer,
} from "@/Library/_Pages/ContactUs/FAQ/FaqComponent.styles";

const FaqComponent = ({ question, answer }: { question: string; answer: string }) => {
	const [open, setOpen] = useState(false);
	return (
		<FaqInnerContainer as={"li"} onClick={() => setOpen(prev => !prev)}>
			<QuestionContainer>
				<Question>{question}</Question>
				<Answer open={open}>{answer}</Answer>
			</QuestionContainer>
			<IconContainer className={open ? "active" : ""}>
				<svg
					width="24px"
					height="24px"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					color="#000000"
				>
					<path
						d="M9 6L15 12L9 18"
						stroke="#000000"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</IconContainer>
		</FaqInnerContainer>
	);
};

export default FaqComponent;
