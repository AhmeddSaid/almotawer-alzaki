"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "@/Library/common/Button/Button";
import { Flexbox, Section } from "@/Library/common/Grids/Grids";
import {
	HamburgerMenu,
	HeaderDropDown,
	LinkStyles,
	Logo,
	MobileMenu,
	NavBarShell,
} from "@/Library/common/NavBar/NavBar.styles";
import "animate.css/animate.compat.css";
// eslint-disable-next-line import/order
import { NavBarAr, NavBarEn } from "../../../../messages/NavBar"; // eslint-disable-next-line

// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line react/prop-types
const NavBar = ({ services, locale }) => {
	const [open, setOpen] = useState(false);

	const t = locale === "ar" ? NavBarAr : NavBarEn;

	return (
		<NavBarShell>
			<Section className={"NavBarSection"} as={"div"}>
				<Flexbox align={"center"} justify={"space-between"}>
					<Link href={"/"}>
						<Logo>
							<Image src="/logo.png" alt="" width={200} height={144} />
						</Logo>
					</Link>

					<div className={"desktopMenu"}>
						<Flexbox as={"ul"}>
							<LinkStyles as={Link} href={"/"}>
								{t.Home}
							</LinkStyles>
							<LinkStyles as={Link} href={"/about"}>
								{t.About}
							</LinkStyles>
							<LinkStyles as={Link} href={"/blog"}>
								{t.Blogs}
							</LinkStyles>
							<LinkStyles as={Link} href={"/products"}>
								{t.Products}
							</LinkStyles>
							<HeaderDropDown align={"center"}>
								<LinkStyles as={Link} href={"/services"}>
									{t.Services}
								</LinkStyles>
								<svg
									width="16px"
									height="16px"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									color="#102d18"
								>
									<path
										d="M6 9L12 15L18 9"
										stroke="#102d18"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<ul>
									{/* @ts-ignore*/}
									{/* eslint-disable-next-line react/prop-types */}
									{services.map(
										(service: {
											id: string;
											slug: string;
											acf: { title_ar: string; title: string };
										}) => (
											<li key={service.id}>
												<Link href={`/services/${service.slug}`}>
													{locale === "ar"
														? service.acf.title_ar
														: service.acf.title || "Untitled Service"}
												</Link>
											</li>
										),
									)}
								</ul>
							</HeaderDropDown>
							<LinkStyles as={Link} href={"/contact"}>
								{t.Contact}
							</LinkStyles>
						</Flexbox>
					</div>
					<div className={"NavBarButton"}>
						<Link href={"/contact"}>
							<Button size={"small"} body={t.GetinToush} arrow />
						</Link>
					</div>
					<HamburgerMenu
						onClick={() => setOpen(prev => !prev)}
						id={"menuButton"}
						className={` ${open ? "active" : undefined}  `}
					>
						<div>
							<span></span>
							<span></span>
						</div>
					</HamburgerMenu>
					<MobileMenu open={open} className={"MobileMenu"}>
						<Flexbox direction={"column"} as={"ul"}>
							<LinkStyles as={Link} href={"/"} onClick={() => setOpen(false)}>
								{t.Home}
							</LinkStyles>
							<LinkStyles as={Link} href={"/about"} onClick={() => setOpen(false)}>
								{t.About}
							</LinkStyles>
							<LinkStyles as={Link} href={"/blog"} onClick={() => setOpen(false)}>
								{t.Blogs}
							</LinkStyles>
							<LinkStyles as={Link} href={"/services"} onClick={() => setOpen(false)}>
								{t.Services}
							</LinkStyles>
							<LinkStyles as={Link} href={"/contact"} onClick={() => setOpen(false)}>
								{t.Contact}
							</LinkStyles>
							<Link href={"/contact"} onClick={() => setOpen(false)}>
								<Button body={t.GetinToush} fullWidth locale={locale} />
							</Link>
						</Flexbox>
					</MobileMenu>
				</Flexbox>
			</Section>
		</NavBarShell>
	);
};

// NavBar.propTypes = {
// 	services: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.string.isRequired,
// 			slug: PropTypes.string.isRequired,
// 			title: PropTypes.shape({
// 				rendered: PropTypes.string,
// 			}),
// 		}),
// 	).isRequired,
// };

export default NavBar;
