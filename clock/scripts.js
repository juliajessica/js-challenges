

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondHand = document.querySelector('.second-hand');
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  const minutes = now.getMinutes();
  const minHand = document.querySelector('.min-hand');
  const minsDegrees = ((minutes / 60) * 360) + (seconds/60*6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getMinutes();
  const hourHand = document.querySelector('.hour-hand');
  const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log(hourDegrees);
  console.log(minutes);
}
setInterval(setDate, 1000);



///NOTES

// ((seconds / 60) * 360) + 90;
//seconds / 60 total seconds will give us our precentage and then * it by 360 degrees
// //by default the transform line goes left to right so we set the rotate to 90deg so we add 90 to have it calculate the seconds from top to bottom because we started it from the top here: transform: rotate(90deg);
