"use server";

import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email(),
});

export async function subscribeToNewsletter(formData: { email: string; }) {
  const parsed = FormSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, message: "Invalid email address." };
  }

  const subscriptionData = {
    email: parsed.data.email,
    subscribedAt: new Date(),
  };

  try {
    // Here you would typically save the data to a database like Firestore
    // For this example, we'll just log it to the console
    console.log("New Newsletter Subscription:", subscriptionData);

    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Subscribed successfully!" };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
