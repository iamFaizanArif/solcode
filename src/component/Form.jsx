import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {contactUs, contactUsHero} from "../assets/index.js";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (formData.name === '') {
            newErrors.name = 'Name is required';
        }

        if (formData.email === '') {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (formData.message === '') {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            emailjs.sendForm('service_fabk4ul', 'template_lge0cws', form.current, 'su8Xbv8q9ctJT5Rmw')
                .then((result) => {
                    toast.success("Message Sent");
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                    e.target.reset();
                    console.log(result.text);
                }, (error) => {
                    toast.error("Message not Sent");
                    console.log(error.text);
                });
        }
    };

    const form = useRef();
    return (
        <section>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={`container mx-auto p-5 py-28 mt-24`}>
                <div className={`flex flex-wrap md:flex-nowrap items-center space-x-0 md:space-x-40`}>
                    <span>
                        <p className={`text-secondary underline text-lg font-semibold mb-2 leading-loose tracking-wide`}>Get In Touch</p>
                        <h1 className="text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Contact Us If You Have More Questions.</h1>
                        <img src={contactUs}
                             className={`hidden md:inline w-[90%] h-[630px] object-center object-cover rounded-sm`}
                             alt={`contact-us`}/>
                    </span>
                    <div className={`w-full md:w-[45%] p-5`}>
                        <form ref={form} onSubmit={handleSubmit}>
                            {/*Name */}
                            <div>
                                <label htmlFor={`name`} className={`block text-[18px] my-[12px]`}>Name <span
                                    className={`text-red-600`}>*</span></label>
                                <input name="name"
                                       className={`border border-[#DDDDDD] text-black placeholder-text-black text-base block rounded-md focus:ring-blue-500 focus:border-blue-500 p-3 w-full`}
                                       value={formData.name}
                                       onChange={handleChange}
                                />
                                <div className={`text-red-600 text-base py-4`}>{errors.name}</div>
                            </div>
                            {/*Email */}
                            <div>
                                <label htmlFor={`email`} className={`block text-[18px] my-[12px]`}>Email <span
                                    className={`text-red-600`}>*</span></label>
                                <input
                                    name="email"
                                    type="email"
                                    className={`border border-[#DDDDDD] text-black placeholder-text-black text-base block rounded-md focus:ring-blue-500 focus:border-blue-500 p-3 w-full`}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <div className={`text-red-600 text-base py-4`}>{errors.email}</div>
                            </div>
                            {/*Phone Number*/}
                            <div>
                                <label htmlFor={`phoneNo`} className={`block text-[18px] my-[12px]`}>Phone
                                    Number</label>
                                <input name="phoneNo"
                                       className={`border border-[#DDDDDD] text-black placeholder-text-black text-base block rounded-md focus:ring-blue-500 focus:border-blue-500 p-3 w-full`}
                                />
                            </div>
                            {/*Message*/}
                            <div>
                                <label htmlFor={`message`} className={`block text-[18px] my-[12px]`}>How we can
                                    help?<span className={`text-red-600`}>*</span></label>
                                <textarea name="message" rows={6}
                                          className={`border border-[#DDDDDD] text-black placeholder-text-black text-base block rounded-md focus:ring-blue-500 focus:border-blue-500 p-3 w-full`}
                                          value={formData.message}
                                          onChange={handleChange}
                                ></textarea>
                                <div className={`text-red-600 text-base py-4`}>{errors.message}</div>
                            </div>
                            {/*Button */}
                            <button type="submit"
                                    className={`my-[32px] py-[16px] px-[24px] bg-black rounded-md text-white w-full`}>
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
