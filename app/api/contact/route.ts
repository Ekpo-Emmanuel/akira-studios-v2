import { transporter, mailOptions } from '@/utils/mail.utils';
import type { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server';

type ResponseData = {
    message: string;
    error?: string;
};

export async function POST(req: Request, res: NextApiResponse<ResponseData>) {
  try {
    const body = await req.json();
    const { name, email, message } = body

    await transporter.sendMail({
      ...mailOptions,
      subject: `Akira Studios`,
      html:`
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f9;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            .header {
              background-color: #007bff;
              padding: 20px;
              color: #ffffff;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 20px;
            }
            .content p {
              margin: 0 0 10px;
              line-height: 1.5;
            }
            .content .label {
              font-weight: 600;
              color: #333333;
            }
            .content .value {
              font-weight: 400;
              color: #555555;
            }
            .footer {
              background-color: #f1f1f1;
              padding: 10px 20px;
              text-align: center;
              font-size: 14px;
              color: #777777;
            }
            .footer a {
              color: #007bff;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Contact Form Submission</h1>
            </div>
            <div class="content">
              <p class="label">Name:</p>
              <p class="value">${name}</p>
              <p class="label">Email:</p>
              <p class="value">${email}</p>
              <p class="label">Message:</p>
              <p class="value">${message}</p>
            </div>
            <div class="footer">
              <p>This email was sent to <a href="mailto:admin@akiramediamarketing.com">admin@akiramediamarketing.com</a></p>
              <p>${new Date().getFullYear()} Akira Studios. All Rights Reserved.</p>
            </div>
          </div>
        </body>
      </html>`
    });

    return new Response('Form submitted successfully');
  } catch (error) {
      res.status(500).json({ message: 'Failed to submit form'});
    }
}