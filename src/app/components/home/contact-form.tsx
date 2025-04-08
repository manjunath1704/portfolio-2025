"use client";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            await emailjs.send(
                "service_9h3tavt",
                "template_yepwoy9",
                data,
                "MEolZhuaAm-atgvkh"
            );
            toast.success("Email sent successfully!");
            reset();
        } catch (error) {
            toast.error("Failed to send email.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Toaster />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
                {/* Name */}
                <div>
                    <label className="text-lg text-neutral-100" htmlFor="name">Name</label>
                    <div className={`flex items-center border-b py-2 ${errors.name ? 'border-red-500' : 'border-neutral-40'}`}>
                        <input

                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Hello..."
                            {...register("name", { required: "Name is required" })}
                        />
                    </div>
                    {errors.name && typeof errors.name.message === "string" && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                

                {/* Email*/}
                <div>
                    <label className="text-lg text-neutral-100" htmlFor="email">Email Address</label>
                    <div className={`flex items-center border-b py-2 ${errors.email ? 'border-red-500' : 'border-neutral-40'}`}>
                        <input

                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"

                            placeholder="Where can I reply?"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email" }
                            })}
                        />
                    </div>
                    {errors.email && typeof errors.email.message === "string" && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>
             
                {/* company name */}
                <div>
                    <label className="text-lg text-neutral-100" htmlFor="company">Company Name</label>
                    <div className={`flex items-center border-b py-2 ${errors.company ? 'border-red-500' : 'border-neutral-40'}`}>
                        <input

                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Your company or website?"
                            {...register("company", { required: "Company name is required" })}
                        />
                    </div>
                    {errors.company && typeof errors.company.message === "string" && (
                        <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                    )}
                </div>
               

                {/* Message */}
                <div>
                    <label className="text-lg text-neutral-100" htmlFor="message">Message</label>
                    <div className={`flex items-center border-b py-2 ${errors.message ? 'border-red-500' : 'border-neutral-40'}`}>
                        <textarea

                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            placeholder="I want to build some..."
                            {...register("message", { required: "Message is required" })}
                        />
                    </div>
                    {errors.message && typeof errors.message === "string" && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>
                 {/* Submit Button */}
                 <div className="text-end">
                            <button type="submit" className="text-xl font-semibold text-neutral-0 bg-neutral-100 rounded-full px-16 py-5 hover:opacity-60 transition-opacity" disabled={loading}>
                               {loading ? " Submitting" : " Submit" }
                            </button>
                        </div>
            </form>
        </div>
    );
}