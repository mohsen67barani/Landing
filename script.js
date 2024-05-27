// Countdown Timer
const countdown = () => {
    const countDate = new Date("June 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById("countdown").innerHTML = `${textDay}d ${textHour}h ${textMinute}m ${textSecond}s`;
};

setInterval(countdown, 1000);

// Email Sign-Up Form
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    // Here you would normally send the email to your server
    console.log(`Email submitted: ${email}`);

    alert("Thank you for signing up! We will keep you updated.");
    document.getElementById("signup-form").reset();
});
