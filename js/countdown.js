/*=========================================
IGNITE COUNTDOWN
=========================================*/

/*
Set the event date here.

Leave it as null while the date
is secret.
*/

const EVENT_DATE = "2026-08-08T14:00:00";

// Example:
//
// const EVENT_DATE =
// "2026-10-24T17:30:00";

const section = document.getElementById("countdownSection");
const message = document.getElementById("countdownMessage");

if (!EVENT_DATE) {

message.textContent = "📢 Registrations are now open. Event date will be announced soon.";

document.getElementById("countdown").style.display = "none";

} else {

const target = new Date(EVENT_DATE).getTime();

const timer = setInterval(() => {

const now = Date.now();

const distance = target - now;

if (distance <= 0) {

clearInterval(timer);

document.getElementById("countdown").style.display = "none";

message.textContent = "🎉 The Event Has Started!";

return;

}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").textContent =
String(days).padStart(2, "0");

document.getElementById("hours").textContent =
String(hours).padStart(2, "0");

document.getElementById("minutes").textContent =
String(minutes).padStart(2, "0");

document.getElementById("seconds").textContent =
String(seconds).padStart(2, "0");

}, 1000);

}
