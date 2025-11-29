import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const VITE_EMAILJS_WELCOME_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_WELCOME_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export const sendResponseEmail = async (userName, responseType, date) => {
  try {
    const responseText =
      {
        accept: "لقد قبلت بك زوجي 💍",
        think: "وقت للتفكير 🤔",
        reject: "رفض 😔",
      }[responseType] || responseType;

    const templateParams = {
      to: "mustafa06mahmoud@gmail.com",
      to_email: "mustafa06mahmoud@gmail.com",
      userName,
      message: responseText,
      date: date,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent successfully:", response.status, response.text);
    return { success: true, response };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};

export const sendWelcomeEmail = async () => {
  try {
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      VITE_EMAILJS_WELCOME_TEMPLATE_ID,
      {},
      EMAILJS_PUBLIC_KEY
    );

    console.log("Welcome email sent successfully:", response.status, response.text);
    return { success: true, response };
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    return { success: false, error };
  }
};
