import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error: Error;
  message: string;
};

export const transporter = nodemailer.createTransport({
  host: "smtp.zeptomail.com",
  port: 587,
  auth: {
    user: "emailapikey",
    pass: "PHtE6r1eR7jjjjYnoRAI5qDtH8eiY4gvqO1hKFEW5oZGAqBWHE1Rrdp4xGKy/hstU/IQEPTInY9htbjOse6NJzzlZzsaCmqyqK3sx/VYSPOZsbq6x00auF0acUPdUo7oetNj1Sffs9rbNA==",
  },
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Data>>
) {
  if (req.method === "POST") {
    const { to, subject, html } = req.body;
    transporter.sendMail(
      {
        from: `Truyalty <support@truyaltyventures.com>`,
        to,
        subject,
        html,
      },
      (err, info) => {
        if (err) return res.status(500).json({ error: err });
        console.log(info);
        res.status(200).json({ message: "success" });
      }
    );
  }
}
