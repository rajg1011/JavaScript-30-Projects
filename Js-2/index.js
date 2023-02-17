const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate() {
    // console.log('Hi');  To look whether its working
    const now = new Date();
    const seconds = now.getSeconds();
    // console.log(seconds);  It will print seconds from 1 to 59 then again 0 and its bcz of Date() and getSeconds()
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;


    const minutes = now.getMinutes();
    const minuteDegree = ((minutes / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hours = now.getMinutes();
    const hourDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setDate, 1000)