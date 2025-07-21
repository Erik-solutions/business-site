import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Contact Form
export const contactForm = async (req: Request, res: Response) => {
  const { name, email, message , lastName  } = req.body;

  try {
    const submission = await prisma.contactForm.create({
      data: { name, email, message, lastName },
    });

    // TODO: send email to admin and user

    res.status(201).json({ message: "Contact form submitted", submission });
  } 
  catch (error) {
    console.error("Error submitting contact form:", error);
    // Handle specific error cases if needed
    res.status(500).json({ error: "Failed to submit contact form" });
  }
};

// Booking Form
export const bookingsTable = async (req: Request, res: Response) => {
  const { name, email, phone, service, bookingDate, notes } = req.body;

  try {
    const booking = await prisma.bookingsTable.create({
      data: {
        name,
        email,
        phone,
        service,
        bookingDate: new Date(bookingDate),
        notes,
      },
    });

    // TODO: send email to admin and user

    res.status(201).json({ message: "Booking submitted", booking });
  }
   catch (error) {
    console.error("Error submitting booking:", error);
    res.status(500).json({ error: "Failed to submit booking" });
  }
};
