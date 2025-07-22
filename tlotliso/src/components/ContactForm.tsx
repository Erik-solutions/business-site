import React, { useState } from 'react';

interface FormProps {
  isActive: boolean;
  closeForm: () => void;
}

export const Form: React.FC<FormProps> = ({ isActive, closeForm }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setSurname] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setTextMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | ''>('');

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setFeedbackType('error');
      setFeedbackMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setFeedbackMessage('');
    setFeedbackType('');

    const formData = {
      name,
      lastName,
      email,
      subject,
      message,
    };

    try {
      const res = await fetch("https://business-site-qqev.onrender.com/forms/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      console.log("Response:", data);

      setFeedbackType('success');
      setFeedbackMessage("Form submitted successfully!");
      setName('');
      setSurname('');
      setEmail('');
      setSubject('');
      setTextMessage('');
      closeForm(); // Optional: delay this if you want feedback to show longer

    } catch (error) {
      console.error("Error submitting form:", error);
      setFeedbackType('error');
      setFeedbackMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isActive) return null;

  return (
    <div className="form__container fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 transition-opacity duration-300">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <form className="contact__form pt-2 border border-gray-200 pb-2 rounded-lg" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm text-left">Enter Your Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded"
              placeholder="Joshua"
            />
          </label>

          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm text-left">Enter your Surname</span>
            <input
              value={lastName}
              onChange={(e) => setSurname(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded"
              placeholder="Smith"
            />
          </label>

          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm text-left">Enter your email address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded"
              placeholder="joshua@example.com"
            />
          </label>

          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm text-left">Enter subject</span>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded"
              placeholder="Service Inquiry"
            />
          </label>

          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm text-left">Message</span>
            <textarea
              value={message}
              onChange={(e) => setTextMessage(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded"
              placeholder="Type your message here..."
            />
          </label>

          {feedbackMessage && (
            <p className={`text-sm mb-2 ${feedbackType === 'error' ? 'text-red-500' : 'text-green-600'}`}>
              {feedbackMessage}
            </p>
          )}

          <button
            type="submit"
            className={`submit__btn bg-blue-500 text-white px-4 py-2 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
  