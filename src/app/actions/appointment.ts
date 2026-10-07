"use server";

import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  date: z.date(),
  time: z.string(),
  message: z.string().optional(),
});

export async function bookAppointment(formData: z.infer<typeof FormSchema>) {
  const parsed = FormSchema.safeParse(formData);

  if (!parsed.success) {
    console.error("Invalid appointment data:", parsed.error);
    return { success: false, message: "Invalid form data. Please check your entries." };
  }

  try {
    // Here you would typically save the data to a database like Firestore
    // For this example, we'll just log it.
    console.log("New Appointment Booking:", parsed.data);

    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    return { success: true, message: "Appointment booked successfully!" };
  } catch (error) {
    console.error("Error booking appointment:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
