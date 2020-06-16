//email
"use strict";
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var email_receptor = localStorage.getItem("email_receptor");
//enviar email Orden #1
function orden1_Filled() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #1 completada 🏁",
			html: "<center><b>Orden #1 completada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
function orden1_CANCELED() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #1 cancelada 🏁",
			html: "<center><b>Orden #1 cancelada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
//enviar email Orden #2
function orden2_Filled() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #2 completada 🏁",
			html: "<center><b>Orden #2 completada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
function orden2_CANCELED() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #2 cancelada 🏁",
			html: "<center><b>Orden #2 cancelada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
//enviar email Orden #3
function orden3_Filled() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #3 completada 🏁",
			html: "<center><b>Orden #3 completada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
function orden3_CANCELED() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #3 cancelada 🏁",
			html: "<center><b>Orden #3 cancelada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
//enviar email Orden #4
function orden4_Filled() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #4 completada 🏁",
			html: "<center><b>Orden #4 completada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
function orden4_CANCELED() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #4 cancelada 🏁",
			html: "<center><b>Orden #4 cancelada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
//enviar email Orden #5
function orden5_Filled() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #5 completada 🏁",
			html: "<center><b>Orden #5 completada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
function orden5_CANCELED() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #5 cancelada 🏁",
			html: "<center><b>Orden #5 cancelada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
//enviar email Orden #6
function orden6_Filled() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #6 completada 🏁",
			html: "<center><b>Orden #6 completada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
function orden6_CANCELED() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #6 cancelada 🏁",
			html: "<center><b>Orden #6 cancelada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
//enviar email Orden #7
function orden7_Filled() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #7 completada 🏁",
			html: "<center><b>Orden #7 completada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
function orden7_CANCELED() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #7 cancelada 🏁",
			html: "<center><b>Orden #7 cancelada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
//enviar email Orden #8
function orden8_Filled() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #8 completada 🏁",
			html: "<center><b>Orden #8 completada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}
function orden8_CANCELED() {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: uheuh,
				pass: jukfl
			}
		});
		var mailOptions = {
			from: '"Binance TradingBot 🤖" <' + email_receptor + '>',
			to: email_receptor,
			subject: "Orden #8 cancelada 🏁",
			html: "<center><b>Orden #8 cancelada 🏁.<br><u>BINANCE</u></b><center>"
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
				alert("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				if (logs == 1) {
					console.log("Error en el email de envío o contraseña, compruebe también si el email receptor está bien escrito.");
				} else {}
			}
			if (localStorage.getItem("log_txt") == "Si") {
				writeLog("Mensaje enviado: %s", info.messageId + " | Fecha y hora: " + Date().toLocaleString());
			} else {}
			if (logs == 1) {
				console.log("Mensaje enviado: %s", info.messageId);
			} else {}
		});
	}
	main().catch(console.error);
}