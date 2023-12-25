const secondHand = document.querySelector('.second-hand')
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360 + (seconds / 60 * 6));
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360 + (minutes / 60 * 30) + (seconds / 60 * 6));
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

}
setInterval(setDate, 1000)