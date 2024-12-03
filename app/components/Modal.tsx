"use client";

import React, { useState } from "react";
import { Mail, X, Loader } from "lucide-react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useModal } from "./ModalContext";

const Modal = () => {
  const { isFormVisible, setIsFormVisible } = useModal();
  const [isLoading, setIsLoading] = useState(false);
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
    setIsSuccess(false);
    setIsError(false);
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div>
      <Mail
        className="text-white rounded-full cursor-pointer fixed bottom-8 right-10 transition-all duration-300 ease-in-out hover:scale-110 active:scale-90 z-[9999] bg-black px-3"
        size={72}
        onClick={() => setIsFormVisible(true)}
      />

      {isFormVisible && (
        <div className="modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold w-full max-w-5xl z-[9999] flex">
          <div className="w-1/2 bg-background flex flex-col justify-center py-10 px-20 slide-in-left">
            <h3 className="text-2xl font-bold">Here&apos;s a bit about me.</h3>
            <h4 className="mt-3 mb-6">Frontend Software Engineer</h4>
            <p className="mb-2 leading-7">
              I&apos;m an American{" "}
              <span className="text-orange">frontend software engineer</span>{" "}
              with a strong passion for developing websites with great{" "}
              <span className="text-orange">user experiences.</span>
              <br />I currently work on extremely difficult engineering problems
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
                    className="object-contain"
                  />
                </div>
                <span className="language__name">Next.js</span>
              </figure>
            </div>
          </div>
          <div className="w-1/2 bg-black text-white py-10 px-20 flex flex-col justify-center relative slide-in-right">
            <div
              className="absolute top-7 right-7 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
              onClick={() => setIsFormVisible(false)}
            >
              <X size={36} />
            </div>
            <h3 className="text-2xl font-bold">Let&apos;s have a chat!</h3>
            <h4 className="mt-3 mb-6 text-sm">
              I&apos;m currently open to new opportunities.
            </h4>
            <form id="contact__form" onSubmit={contact}>
              <div className="mb-5">
                <label className="text-sm font-bold">Name</label>
                <input
                  className="input"
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
                  className="input"
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
                  className="input resize-y h-24 mt-2"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <button id="contact__submit" className="formButton" type="submit">
                Send it my way
              </button>
            </form>

            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute flex top-0 left-0 w-full h-full justify-center items-center bg-black bg-opacity-50">
                <Loader size={80} className="loader" />
              </div>
            )}

            {/* Success Message */}
            {isSuccess && (
              <div className="absolute flex top-0 left-0 w-full h-full justify-center items-center bg-success text-4xl font-bold text-center p-7">
                <div
                  className="absolute top-7 right-7 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
                  onClick={handleClose}
                >
                  <X size={36} />
                </div>
                Thanks for the message! Looking forward to speaking to you soon.
              </div>
            )}

            {/* Error Message */}
            {isError && (
              <div className="absolute flex top-0 left-0 w-full h-full justify-center items-center bg-red-600 text-2xl font-bold text-center p-7">
                <div
                  className="absolute top-7 right-7 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
                  onClick={handleClose}
                >
                  <X size={36} />
                </div>
                The email service is temporarily unavailable. Please contact me
                directly at williamgiammona94@gmail.com
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
