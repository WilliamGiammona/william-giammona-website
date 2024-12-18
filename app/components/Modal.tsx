"use client";

import React, { useState } from "react";
import { Mail, X, Loader } from "lucide-react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useModal } from "./ModalContext";

const Modal = () => {
  const { isFormVisible, setIsFormVisible } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMailClick = () => {
    setIsClosing(false);
    setIsFormVisible(true);
  };

  const contact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const result = await emailjs.sendForm(
        serviceId!,
        templateId!,
        e.currentTarget,
        {
          publicKey: publicKey!,
        }
      );

      console.log("SUCCESS!", result.text);
      setIsSuccess(true);
    } catch (error) {
      console.error("FAILED...", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFormVisible(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <div>
      <Mail
        className="text-primary-foreground rounded-full cursor-pointer fixed bottom-6 right-10 transition-all duration-300 ease-in-out hover:scale-110 active:scale-90 z-20 bg-mailButtonBg px-3 w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
        onClick={handleMailClick}
      />

      {isFormVisible && (
        <>
          <div className="fixed inset-0 backdrop-blur-sm bg-foreground/50 z-30" />
          <div className="fixed inset-0 z-40 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className={`modal ${isClosing ? "closing" : ""}`}>
                <div
                  className={`w-full md:w-1/2 bg-background text-foreground flex flex-col justify-center py-6 md:py-10 px-6 md:px-20 min-h-[400px] relative ${
                    isClosing ? "slide-out-left" : "slide-in-left"
                  }`}
                >
                  {/* Close button for mobile */}
                  <div
                    className="absolute top-4 right-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-90 md:hidden text-foreground"
                    onClick={handleClose}
                  >
                    <X size={24} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold">
                    Here&apos;s a bit about me.
                  </h3>
                  <h4 className="mt-2 md:mt-3 mb-4 md:mb-6 text-base md:text-lg">
                    Frontend Software Engineer
                  </h4>
                  <p className="mb-2 leading-7 text-base md:text-lg">
                    I&apos;m an American{" "}
                    <span className="text-orange font-bold">
                      frontend software engineer
                    </span>{" "}
                    with a strong passion for developing websites with great{" "}
                    <span className="text-orange font-bold">
                      user experiences.
                    </span>
                    <br className="hidden md:block" />
                    <span className="block mt-2 md:mt-0 md:inline">
                      I currently work on extremely difficult engineering
                      problems
                    </span>
                  </p>

                  <div className="flex flex-wrap">
                    <figure className="modal__language">
                      <div className="relative w-full aspect-square">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                          alt="html logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="language__name">HTML</span>
                    </figure>

                    <figure className="modal__language">
                      <div className="relative w-full aspect-square">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                          alt="CSS logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="language__name">CSS</span>
                    </figure>

                    <figure className="modal__language">
                      <div className="relative w-full aspect-square">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
                          alt="TS logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="language__name">TypeScript</span>
                    </figure>

                    <figure className="modal__language">
                      <div className="relative w-full aspect-square">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
                          alt="React logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="language__name">React</span>
                    </figure>

                    <figure className="modal__language">
                      <div className="relative w-full aspect-square">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                          alt="Next.js logo"
                          fill
                          className="object-contain dark:invert"
                        />
                      </div>
                      <span className="language__name">Next.js</span>
                    </figure>
                  </div>
                </div>
                <div
                  className={`w-full md:w-1/2 bg-primary text-primary-foreground py-6 md:py-10 px-6 md:px-20 flex flex-col justify-center relative min-h-[400px] ${
                    isClosing ? "slide-out-right" : "slide-in-right"
                  }`}
                >
                  {/* Close button for desktop */}
                  <div
                    className="absolute top-7 right-7 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-90 hidden md:block"
                    onClick={handleClose}
                  >
                    <X size={36} />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Let&apos;s have a chat!
                  </h3>
                  <h4 className="mt-3 mb-6 text-sm">
                    I&apos;m currently open to new opportunities.
                  </h4>
                  <form id="contact__form" onSubmit={contact}>
                    <div className="mb-5">
                      <label className="text-sm font-bold">Name</label>
                      <input
                        className="input bg-transparent"
                        name="user_name"
                        type="text"
                        required
                        value={formData.user_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-5">
                      <label className="text-sm font-bold">Email</label>
                      <input
                        className="input bg-transparent"
                        name="user_email"
                        type="email"
                        required
                        value={formData.user_email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-5">
                      <label className="text-sm font-bold">Message</label>
                      <textarea
                        className="input bg-transparent resize-y h-24 mt-2"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button
                      id="contact__submit"
                      className="formButton"
                      type="submit"
                    >
                      Send it my way
                    </button>
                  </form>

                  {/* Loading Spinner */}
                  {isLoading && (
                    <div className="absolute flex top-0 left-0 w-full h-full justify-center items-center bg-primary/50">
                      <Loader size={80} className="loader" />
                    </div>
                  )}

                  {/* Success Message */}
                  {isSuccess && (
                    <div className="absolute flex flex-col top-0 left-0 w-full h-full justify-center items-center bg-emerald-600 text-white font-bold text-center p-4 md:p-7">
                      <div
                        className="absolute top-4 right-4 md:top-7 md:right-7 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
                        onClick={handleClose}
                      >
                        <X size={24} className="md:hidden" />
                        <X size={36} className="hidden md:block" />
                      </div>
                      <p className="mb-2 text-lg md:text-2xl">
                        Thanks for the message!
                      </p>
                      <p className="text-base md:text-xl">
                        Looking forward to speaking to you soon.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {isError && (
                    <div className="absolute flex flex-col top-0 left-0 w-full h-full justify-center items-center bg-destructive text-destructive-foreground font-bold text-center p-4 md:p-7">
                      <div
                        className="absolute top-4 right-4 md:top-7 md:right-7 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
                        onClick={handleClose}
                      >
                        <X size={24} className="md:hidden" />
                        <X size={36} className="hidden md:block" />
                      </div>
                      <p className="mb-2 text-lg md:text-2xl">
                        The email service is temporarily unavailable.
                      </p>
                      <p className="text-base md:text-xl">
                        Please contact me directly at:
                      </p>
                      <a
                        href="mailto:williamgiammona94@gmail.com"
                        className="mt-2 text-base md:text-xl underline"
                      >
                        williamgiammona94@gmail.com
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
