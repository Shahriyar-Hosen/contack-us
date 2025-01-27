"use server";

import { emailTemplate } from "@/lib/templates";
import { sendMail } from "@/lib/utils/send-mail";
import { IContact } from "@/types";

export const sendMessage = async (emails: string[], data: IContact) => {
  await sendMail({
    to: emails.join(", "),
    subject: `${data.name} has massaged you from the contact form!`,
    html: emailTemplate(data),
  });
};
