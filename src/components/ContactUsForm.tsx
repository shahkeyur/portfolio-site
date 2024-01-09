"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  companyName: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value && !/^\d+$/.test(value)) {
          return false;
        }

        return true;
      },
      {
        message: "Phone number should contain only numbers.",
      }
    )
    .refine(
      (value) => {
        if (value && value.length < 10) {
          return false;
        }

        return true;
      },
      {
        message: "Phone number be at least 10 characters.",
      }
    ),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      companyName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/contact-form", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (!res.ok)
        throw new Error("Something went wrong. Please try again later.");

      form.reset();
    } catch (e) {
      form.setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again later.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-8 lg:space-y-0">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="lg:flex-auto">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="lg:flex-auto">
                <FormLabel>Company Name (optional)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-8 lg:space-y-0">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="lg:flex-auto">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="lg:flex-auto">
                <FormLabel>
                  Phone <>(optional)</>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* Add successful message */}
        {form.formState.isSubmitSuccessful && (
          <FormDescription className="bg-green-100 p-2 rounded">
            Your message has been sent! We will get back to you as soon as
            possible. Thank you!
          </FormDescription>
        )}{" "}
        {form.formState.errors.root?.message && (
          <FormDescription className="bg-red-100 p-2 rounded">
            {form.formState.errors.root.message}
          </FormDescription>
        )}
        <Button
          className="dark"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </Form>
  );
}
