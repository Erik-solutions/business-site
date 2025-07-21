import express from "express";
import { contactForm, bookingsTable } from "../controllers/formController";

const router = express.Router();

// POST /forms/contact
router.post("/contact", contactForm);

// POST /forms/booking
router.post("/booking", bookingsTable);

export default router;

