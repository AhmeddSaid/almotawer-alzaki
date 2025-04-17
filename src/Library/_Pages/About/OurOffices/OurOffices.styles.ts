"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";
import { NewHeading3 } from "@/Library/common/Typograhy/Typography";

export const OurOfficesSection = styled.section<{ lightBG?: boolean }>`

padding-block: 135px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 194px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-block: 233px;
	}
	
	
	
	//background-color: var(--neutral--200, #f7f8fc);
background: ${({ lightBG }) => (lightBG ? "#fff" : " var(--neutral--200, #f7f8fc)")}};
`;

export const OurOfficesHeaderContainer = styled.div`
	max-width: 750px;
	margin: 0 auto 40px;
`;
export const OurOfficesImageContainer = styled.div`
	border-radius: 24px;
	margin-bottom: 45px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const OurOfficesHeading = styled(NewHeading3)`
	color: var(--neutral--800, #1f3154);
	margin-bottom: 16px;
`;

export const OurOfficeList = styled.li<{ dotColor: "red" | "blue" | "yellow" }>`
    position: relative;
    margin-bottom: 16px;
    margin-inline-start: 20px;

    color: var(--neutral--600, #6e7a91);

    a {

        color: var(--neutral--600, #6e7a91);
				transition: all .3s ease-in-out;

        &:hover {
            color: var(--accent--primary-1, #4187ff);
        }
    }
;

    &:after {
        content: "";
        width: 7px;
        height: 7px;
        background-color: ${({ dotColor }) => {
					switch (dotColor) {
						case "red":
							return `var(--secondary--color-4,#ff5f55)`;
						case "yellow":
							return `var(--secondary--color-1,#ffc32a)`;
						case "blue":
							return `var(--accent--primary-1,#4187ff)`;
						default:
							return `var(--accent--primary-1,#4187ff)`;
					}
				}};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        right: 101.5%;
        transform: translateY(-50%);
        z-index: 1212;

`;
