
"use client"
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ReactSVG } from 'react-svg';
export default function Home() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent default form submission

        emailjs
            .sendForm(
                "your_service_id", // Replace with your Service ID
                "your_template_id", // Replace with your Template ID
                form.current,
                "your_public_key"  // Replace with your Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                    form.current.reset(); // Reset the form after submission
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send the message. Please try again later.");
                }
            );
    };
    return (
        <div className='#'>
            <HeaderTwo />

            <>
                {/* contact banner areas start */}
                <div className="contact-page-banner jarallax bg_iamge"></div>
                {/* contact banner areas end */}
                {/* contact area form wrapper start */}
                <div className="contact-area-form-wrapper rts-section-gapTop">
                    <div className="container-contact">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center-title-bg-white">
                                    <h2 className="title">İletişime Geçin</h2>
                                    <p>Sorunlarınızı bizimle paylaşın</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="contact-form"
                                    id="contact-form"
                                >
                                    <div className="half-input-wrapper">
                                        <div className="single">
                                            <label htmlFor="name">Adınız</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="first_name"
                                                placeholder="Adınız"
                                                required
                                            />
                                        </div>
                                        <div className="single">
                                            <label htmlFor="last">Soyadınız</label>
                                            <input
                                                type="text"
                                                id="last"
                                                name="last_name"
                                                placeholder="Soyadınız"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="single">
                                        <label htmlFor="email">E-Posta Adresiniz</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="ertas@tech.com"
                                            required
                                        />
                                    </div>
                                    <div className="single">
                                        <label htmlFor="phone">Telefon Numaranız</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            placeholder="+90 (555) 000-0000"
                                        />
                                    </div>
                                    <div className="single">
                                        <label htmlFor="message">Mesajınız</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Mesajınızı buraya yazın..."
                                            required
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="defaultCheck1"
                                            name="agree"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            “Gizlilik politikasını kabul ediyorum.”
                                        </label>
                                    </div>
                                    <button type="submit" className="rts-btn btn-primary">
                                        Mesajınızı Gönderin
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact area form wrapper end */}
                
                
            </>




            <FooterOne />
            <BackToTop />
        </div>
    );
}
