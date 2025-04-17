"use client";
import { useFormik } from "formik";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import * as yup from "yup";
import { ContactUsTranslationAr } from "../../../../../messages/ContactUs";
import styles from "./../../../common/Grids/Spaces.module.css";
import { SendUsMessageBG } from "@/Library/_Pages/ContactUs/ContactUsHeroSection/ContactUsHeroSection.styles";
import ContactLink from "@/Library/_Pages/ContactUs/SendMessage/ContactLink";
import InputComponent from "@/Library/_Pages/ContactUs/SendMessage/InputComponent";
import {
	FormContainer,
	SendMessageHeaderContainer,
	SendMessageSection,
} from "@/Library/_Pages/ContactUs/SendMessage/SendMessage.styles";
import TextAreaComponent from "@/Library/_Pages/ContactUs/SendMessage/TextAreaComponent";
import Button from "@/Library/common/Button/Button";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import SectionHeader from "@/Library/common/SectionHeader/SectionHeader";
import "animate.css/animate.compat.css";
import uuid from "@/utils/uuid";

const SendMessage = ({ sectionVisible = true }: { sectionVisible?: boolean }) => {
	const t = ContactUsTranslationAr.SendMessage;
	const initialValues = {
		firstName: "",
		email: "",
		company: "",
		phoneNumber: "",
		message: "",
	};
	const validationSchema = yup.object().shape({
		firstName: yup.string().required("First name is required"),
		email: yup.string().email("Invalid email").required("Last name is required"),
		company: yup.string().required("Company is required"),
		phoneNumber: yup.string().required("Budget is required"),
		message: yup.string().notRequired(),
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: () => {},
	});

	return (
		<>
			<SendMessageSection>
				<Section as={"div"}>
					<Row columnGap={1.5}>
						<Col xl={6}>
							<ScrollAnimation animateIn={"fadeIn"}>
								<SendMessageHeaderContainer>
									<SectionHeader title={t.Title} header={t.Heading} caption={t.Caption} />
								</SendMessageHeaderContainer>
								<Row as={"ul"} direction={"column"} gap={32}>
									{[...Array(2)].map((_, i) => (
										<Col key={uuid} as={"li"}>
											<ContactLink
												Icon={t.ContactInfo[i].Icon}
												Header={t.ContactInfo[i].Header}
												Info={t.ContactInfo[i].Info}
											/>
										</Col>
									))}
								</Row>
							</ScrollAnimation>
						</Col>
						<Col xl={6} id={"form"}>
							<ScrollAnimation animateIn={"fadeIn"}>
								<FormContainer>
									<form onSubmit={formik.handleSubmit}>
										<Row columnGap={2}>
											<Col md={6} className={`${styles.marginBottom32}`}>
												<InputComponent
													Label={t.Form.Input1.Label}
													type={"text"}
													placeHolder={t.Form.Input1.PlaceHolder}
													name={"firstName"}
													error={
														formik.errors.firstName && formik.touched.firstName
															? formik.errors.firstName
															: ""
													}
												/>
											</Col>
											<Col md={6} className={`${styles.marginBottom32}`}>
												<InputComponent
													Label={t.Form.Input2.Label}
													type={"email"}
													placeHolder={t.Form.Input2.PlaceHolder}
													name={"email"}
													error={
														formik.errors.email && formik.touched.email ? formik.errors.email : ""
													}
												/>
											</Col>
											<Col md={6} className={`${styles.marginBottom32}`}>
												<InputComponent
													Label={t.Form.Input3.Label}
													type={"text"}
													placeHolder={"Facebook"}
													name={t.Form.Input3.PlaceHolder}
													error={
														formik.errors.company && formik.touched.company
															? formik.errors.company
															: ""
													}
												/>
											</Col>
											<Col md={6} className={`${styles.marginBottom32}`}>
												<InputComponent
													Label={t.Form.Input4.Label}
													type={"number"}
													placeHolder={"+99999999999"}
													name={t.Form.Input4.PlaceHolder}
													error={
														formik.errors.phoneNumber && formik.touched.phoneNumber
															? formik.errors.phoneNumber
															: ""
													}
												/>
											</Col>

											<Col md={12} className={`${styles.marginBottom32}`}>
												<TextAreaComponent
													Label={t.Form.TextArea.Label}
													placeHolder={t.Form.TextArea.PlaceHolder}
													error={
														formik.errors.message && formik.touched.message
															? formik.errors.message
															: ""
													}
												/>
											</Col>
											<Col md={12}>
												<button type={"submit"}>
													<Button size={"large"} weight body={t.Form.Button} />
												</button>
											</Col>
										</Row>
									</form>
								</FormContainer>
							</ScrollAnimation>
						</Col>
					</Row>
				</Section>
			</SendMessageSection>

			{sectionVisible && (
				<SendUsMessageBG>
					<Section as={"div"}>
						<div className="container">
							<div className="a1">
								<div></div>
							</div>
							<div className="a2"></div>
							<div className="a3"></div>
							<div className="a4"></div>
							<div className="a5">
								<div></div>
							</div>
							<div className="a6">
								<div></div>
							</div>
						</div>
					</Section>
				</SendUsMessageBG>
			)}
		</>
	);
};

export default SendMessage;
