"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterAr, FooterEn } from "../../../../messages/Footer";
import { NavBarAr, NavBarEn } from "../../../../messages/NavBar";
import {
	FooterBottom,
	FooterBoxInner,
	FooterMiddle,
	FooterSection,
} from "@/Library/common/Footer/Footer.styles";
import { Col, Flexbox, Row, Section } from "@/Library/common/Grids/Grids";
// import FaceBook from "@/Library/common/Icons/FaceBook/FaceBook";
// import Instagram from "@/Library/common/Icons/Instagram/Instagram";
// import Linkedin from "@/Library/common/Icons/Linkedin/Linkedin";
// import Twitter from "@/Library/common/Icons/Twitter/Twitter";
// import Youtube from "@/Library/common/Icons/YouTube/Youtube";
import { Text300 } from "@/Library/common/Typograhy/Typography";

// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line react/prop-types
const Footer = ({
	services,
	locale,
}: {
	services: { id: string; title: { rendered: string }; slug: string }[];
	// eslint-disable-next-line
	locale: any;
}) => {
	const t = locale === "ar" ? NavBarAr : NavBarEn;
	const footerT = locale === "ar" ? FooterAr : FooterEn;

	return (
		<FooterSection>
			<Section as={"div"}>
				<FooterMiddle>
					<Col lg={5} className={"FooterCardCol"}>
						<FooterBoxInner>
							<p>{footerT.contactText}</p>
							{/* <p>{footerT.description}</p> */}
							{/* <Link href={"/contact"}>
								<button>{footerT.button}</button>
							</Link> */}
							<Image
								src={"/Image-footer-contact-inbound-template.svg"}
								alt={""}
								width={254}
								height={294}
							/>
						</FooterBoxInner>

						<div className={"footerCaption"}>
							<Image src="/logo.png" alt="" width={200} height={144} />
							{/* <FooterCaptionParagraph>
								Laculis scelerisque viverra enim egestas amet velit morbi sit sed ultrices
								pellentesque erat tempor sit purus.
							</FooterCaptionParagraph> */}
						</div>
						<div className={"paymentIcons"}>
							<Image src="/icons/payments.png" alt="" width={200} height={50} />
							{/* <Image src="/icons/mastercard.png" alt="" width={50} height={50} />
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="800"
								width="1200"
								viewBox="-76.79115 -52.55 665.5233 315.3"
							>
								<path d="M93.541 27.1c-6 7.1-15.6 12.7-25.2 11.9-1.2-9.6 3.5-19.8 9-26.1 6-7.3 16.5-12.5 25-12.9 1 10-2.9 19.8-8.8 27.1m8.7 13.8c-13.9-.8-25.8 7.9-32.4 7.9-6.7 0-16.8-7.5-27.8-7.3-14.3.2-27.6 8.3-34.9 21.2-15 25.8-3.9 64 10.6 85 7.1 10.4 15.6 21.8 26.8 21.4 10.6-.4 14.8-6.9 27.6-6.9 12.9 0 16.6 6.9 27.8 6.7 11.6-.2 18.9-10.4 26-20.8 8.1-11.8 11.4-23.3 11.6-23.9-.2-.2-22.4-8.7-22.6-34.3-.2-21.4 17.5-31.6 18.3-32.2-10-14.8-25.6-16.4-31-16.8m80.3-29v155.9h24.2v-53.3h33.5c30.6 0 52.1-21 52.1-51.4s-21.1-51.2-51.3-51.2zm24.2 20.4h27.9c21 0 33 11.2 33 30.9s-12 31-33.1 31h-27.8zm129.8 136.7c15.2 0 29.3-7.7 35.7-19.9h.5v18.7h22.4V90.2c0-22.5-18-37-45.7-37-25.7 0-44.7 14.7-45.4 34.9h21.8c1.8-9.6 10.7-15.9 22.9-15.9 14.8 0 23.1 6.9 23.1 19.6v8.6l-30.2 1.8c-28.1 1.7-43.3 13.2-43.3 33.2 0 20.2 15.7 33.6 38.2 33.6zm6.5-18.5c-12.9 0-21.1-6.2-21.1-15.7 0-9.8 7.9-15.5 23-16.4l26.9-1.7v8.8c0 14.6-12.4 25-28.8 25zm82 59.7c23.6 0 34.7-9 44.4-36.3l42.5-119.2h-24.6l-28.5 92.1h-.5l-28.5-92.1h-25.3l41 113.5-2.2 6.9c-3.7 11.7-9.7 16.2-20.4 16.2-1.9 0-5.6-.2-7.1-.4v18.7c1.4.4 7.4.6 9.2.6z" />
							</svg>
							<Image src="/icons/mada.png" alt="" width={50} height={50} />
							<Image src="/icons/knet.svg" alt="" width={50} height={50} /> */}
							{/*<Image src="/icons/paypal.png" alt="" width={50} height={50} />*/}
						</div>
					</Col>
					<Col lg={7} className={"footerLinksCol"}>
						<Row justify={"space-around"}>
							<Col md={6} lg={4}>
								<ul className={"pages"}>
									<li>
										<Text300>{locale === "ar" ? "صفحات" : "Pages"}</Text300>
									</li>
									<li>
										<Link href={"/"}>{t.Home}</Link>
									</li>
									<li>
										<Link href={"/about"}>{t.About}</Link>
									</li>
									<li>
										<Link href={"/contact"}>{t.Contact}</Link>
									</li>
									<li>
										<Link href={"/blog"}>{t.Blogs}</Link>
									</li>
								</ul>
							</Col>
							<Col md={6} lg={4}>
								<ul className={"pages"}>
									<li>
										<Text300>{locale === "ar" ? "الخدمات" : "Services"}</Text300>
									</li>
									{services.map(
										(service: { id: string; title: { rendered: string }; slug: string }) => (
											<li key={service.id}>
												<Link href={`/services/${service.slug}`}>
													{locale === "ar"
														? /* @ts-ignore */
															service.acf.title_ar
														: service.title || "Untitled Service"}
												</Link>
											</li>
										),
									)}
								</ul>
							</Col>
						</Row>
					</Col>
				</FooterMiddle>

				<FooterBottom justify={"space-between"}>
					{/* <Flexbox justify={"center"} gap={10}>
						<FooterIconStyles>
							<FaceBook />
						</FooterIconStyles>
						<FooterIconStyles>
							<Linkedin />
						</FooterIconStyles>
						<FooterIconStyles>
							<Twitter />
						</FooterIconStyles>
						<FooterIconStyles>
							<Instagram />
						</FooterIconStyles>
						<FooterIconStyles>
							<Youtube />
						</FooterIconStyles>
					</Flexbox> */}

					<Flexbox justify={"center"} gap={10}>
						<Link href={"/terms"}>
							{locale === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
						</Link>
						<Link href={"/refund"}>{locale === "ar" ? "سياسة الاسترجاع" : "Refund Policy"}</Link>
						<Link href={"/privacy"}>{locale === "ar" ? "سياسة الخصوصية" : "Privacy policy"}</Link>
					</Flexbox>
					{locale === "ar" ? (
						<p>حقوق الطبع والنشر © المطور الذكي {new Date().getFullYear()}</p>
					) : (
						<p>Copyright © El motawar el zaki {new Date().getFullYear()}</p>
					)}
				</FooterBottom>
			</Section>
		</FooterSection>
	);
};

export default Footer;
