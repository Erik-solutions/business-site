import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Contact Form Submission
export const contactForm = async (req: Request, res: Response) => {
  const { name, lastName, email, message } = req.body;

  if (!name || !lastName || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const submission = await prisma.contactForm.create({
      data: { name, lastName, email, message },
    });

    res.status(201).json({
      message: "Contact form submitted successfully.",
      data: submission,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Failed to submit contact form." });
  }
};

// Booking Form Submission
export const bookingsTable = async (req: Request, res: Response) => {
  const { name, email, phone, service, bookingDate, notes } = req.body;

  if (!name || !email || !phone || !service || !bookingDate) {
    return res.status(400).json({ error: "Name, email, phone, service, and booking date are required." });
  }

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

    res.status(201).json({
      message: "Booking submitted successfully.",
      data: booking,
    });
  } catch (error) {
    console.error("Error submitting booking:", error);
    res.status(500).json({ error: "Failed to submit booking." });
  }
};
