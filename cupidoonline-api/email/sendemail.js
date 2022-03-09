import nodemailer from 'nodemailer';
import handler from "../libs/Handler-lib";
//"body": "{\"name\":\"maykon\",\"email\":\"maaykon51@gmail.com\",\"message\":\"oioioioi\"}" test mocking body
//"body": "{\"email\":\"maaykon51@gmail.com\"}" for test mocks
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const sendingEmail = handler(async (event, context) => {
    const { name, email, message } = JSON.parse(event.body);

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Cupido Online!",
        html: `
            <h1>Oi, ${name}!</h1></br></br>
            <h2>Você tem um admirador secreto! </h2></br></br>
            <h4>Ele lhe contatou pelo Cupido Online para dizer:</h4></br>
            <p>${message}</p>
        `
    });

    return { status: true };
});