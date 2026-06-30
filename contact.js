// JavaScript Document

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("open");  
};

function sendEmail() {
	Email.send({
    SecureToken : "e3b33e7b-688c-40f5-82e7-aaba344aae20",
    To : 'armaan.6102007@gmail.com',
    From : 'armaan.6102007@gmail.com',
    Subject : "New Contact From Website",
    Body : "Full Name: " + document.getElementById('name').value
		+ "<br> Phone Number: " + document.getElementById('number').value
		+ "<br> Email: " + document.getElementById('email').value
		+ "<br> Message: " + document.getElementById('message').value
}).then(
		message => alert("Message Sent Successfully")
);
}

