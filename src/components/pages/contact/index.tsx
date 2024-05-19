import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Logo from "../../../assets/logo.svg";

const ContactFormSection = () => {
    const formSchema = z.object({
        firstName: z.string().min(2, {
            message: "First name must be at least 2 characters.",
        }),
        lastName: z.string().min(2, {
            message: "Last name must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Invalid email format.",
        }),
        message: z.string().min(5, {
            message: "Message must be at least 5 characters.",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        }
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data); // Here, you can handle form submission, e.g., send data to an API
        form.reset();
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="First name..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last name..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Input placeholder="Message..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-2 justify-end flex-wrap">
                        <Button
                            type="button"
                            variant="outline"
                        >
                            Cancel
                        </Button>
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

const ContactUsPage = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-6xl flex flex-col md:flex-row">
                {/* Company Information Section */}
                <div className="w-full md:w-1/2 p-8 bg-gray-200 flex flex-col justify-center space-y-6">
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                        <img src={Logo} alt="Company Logo" className="mb-4 text-start" />
                        <h1 className="text-2xl font-bold text-[#C80B45]">Library Management System</h1>
                        <p className="text-center text-md text-slate-600">
                            A short description about the company. This can include your mission,
                            values, and what makes your company unique.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-[#C80B45]">Email Us</h2>
                        <p className="mt-2 text-gray-700">info@company.com</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-[#C80B45]">Contact Us</h2>
                        <p className="mt-2 text-gray-700">Phone: +123 456 7890</p>
                        <p className="mt-2 text-gray-700">123 Main St, City, Country</p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="w-full md:w-1/2 p-8">
                    <ContactFormSection />
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
