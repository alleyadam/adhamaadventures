"use server";

import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(formData: {name: string; email: string; message: string;}) {
  const parsed = FormSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  try {
    // Here you would typically save the data to a database like Firestore
    // For this example, we'll just log it to the console
    console.log("New Contact Form Submission:", parsed.data);
    
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
