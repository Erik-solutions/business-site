import express from "express";
import {
 bookingsTable as submitBookingForm,
  contactForm as submitContactForm,
} from "../controllers/formController";

const router = express.Router();

router.post("/contact", submitContactForm);
router.post("/booking", submitBookingForm);

export default router;
