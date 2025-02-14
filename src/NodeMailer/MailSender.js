const nodemailer = require("nodemailer")
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: process.env.UserNamenodemailer,
        pass: process.env.password
    }
});

exports.OTPSender = async (userName, name, randomOtp) => {

    const info = await transporter.sendMail({
        from: '"Ravi Singh 👻😊💕😊" <your-email@gmail.com>',
        to: userName,
        subject: "Your Email OTP to verify login",

        html: `
        <div style="background-color:#16253D;padding:20px;color:#fff;font-family:Arial, sans-serif;border-radius:10px;">
            <h2 style="color:#FF4500;">MoviesAll</h2>
            <p>Hi ${name},</p>
            <p>Please find your One Time Password (OTP) for reset password below:</p>
            <div style="background-color:#fff;color:#000;font-size:24px;font-weight:bold;text-align:center;padding:10px;margin:20px 0;border-radius:5px;">
                ${randomOtp}
            </div>
            <p>The OTP is valid for 5 minutes.</p>
            <p>For account safety, do not share your OTP with others.</p>
            <br>
            <p>Regards,</p>
            <p>Team MoviesAll</p>
        </div>
        `,
    });

    // console.log("Message sent: %s", info.messageId);

}