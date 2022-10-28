'use strict'
//global variables
const button1 = document.querySelector('#color1');
const button2 = document.querySelector('#color2');
const button3 = document.querySelector('#color3');

const legend = document.querySelector('legend');
const heading = document.querySelector('h1');
const link = document.querySelector('a');


const colorChange = () =>{

  //if button # pressed, remove current class and change  heading and legend color to color # and change legend to display "theme #";
  if(button1.checked){
    heading.classList.remove('color2', 'color3');
    legend.classList.remove('color2', 'color3');
    heading.classList.add('color1');
    legend.classList.add('color1');
    legend.innerHTML = "Theme 1";
  }
  else if(button2.checked)
  {
    heading.classList.remove('color1', 'color3');
    legend.classList.remove('color1', 'color3');
    heading.classList.add('color2');
    legend.classList.add('color2');
    legend.innerHTML = "Theme 2";
  }
  else{
    heading.classList.remove('color1', 'color2');
    legend.classList.remove('color1', 'color2');
    heading.classList.add('color3');
    legend.classList.add('color3');
    legend.innerHTML = "Theme 3";
  }

}

//event listeners
button1.addEventListener('click', colorChange);
button2.addEventListener('click', colorChange);
button3.addEventListener('click', colorChange);