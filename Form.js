const nodemailer = require('nodemailer');
if (process.method === 'POST') {
    // Replace these variables with your Gmail SMTP settings and App Password
    const smtpUsername = 'xxxxxxxxx@gmail.com';
    const smtpAppPassword = 'xxxxxxxxx';
    const smtpHost = 'smtp.gmail.com';
    const smtpPort = xxx;

    // Recipient email address
    const to = 'xxxxxxx@gmail.com';

    // Get form data
    const name = process.body.name;
    const email = process.body.email;
    const message = process.body.message;

    // Email subject
    const subject = 'New Roofing Quote Request';

    // Email headers
    const headers = `From: ${name} <${email}>\r\n`;
    const replyTo = `Reply-To: ${email}\r\n`;
    const mimeVersion = 'MIME-Version: 1.0\r\n';
    const contentType = 'Content-type: text/html; charset=utf-8\r\n';

    // Email message
    const emailBody = `
        <html>
        <head>
            <title>New Roofing Quote Request</title>
        </head>
        <body>
            <h2>New Roofing Quote Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        </body>
        </html>
    `;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: false,
        auth: {
            user: smtpUsername,
            pass: smtpAppPassword,
        },
    });

    // Email options
    const mailOptions = {
        from: `${name} <${email}>`,
        to: to,
        subject: subject,
        html: emailBody,
        replyTo: email,
    };

    // Sending email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Message could not be sent.');
            console.error('Error: ' + error.message);
        } else {
            console.log('Message has been sent');
        }
    });
} else {
    console.log('Invalid request');
}