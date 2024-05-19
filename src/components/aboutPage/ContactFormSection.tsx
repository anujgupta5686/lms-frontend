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
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-slate-600 text-[2rem] font-bold pb-5">Contact Us</h1>
            <div className="bg-white p-5 rounded-lg shadow-md max-w-md w-full mx-auto">
                {/* <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2> */}
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
                                onClick={() => form.reset()}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                            >
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ContactFormSection;
