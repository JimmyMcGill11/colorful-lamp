let result = document.querySelector(".result");
let lamp = document.querySelector(".lamp");
let submit = document.querySelector(".submit");
let font = document.querySelector(".font");
let color = document.querySelector(".color");
let size = document.querySelector(".size");

if (window.localStorage.getItem("font") &&
  window.localStorage.getItem("color") &&
  window.localStorage.getItem("size")) {

    font.value = window.localStorage.getItem("font");
    color.value = window.localStorage.getItem("color");
    size.value = window.localStorage.getItem("size");

    result.style.fontFamily = window.localStorage.getItem("font");
    result.style.color = window.localStorage.getItem("color");
    result.style.fontSize = window.localStorage.getItem("size");
    
    let shadowColor = window.localStorage.getItem("color");
    lamp.style.cssText = `box-shadow: 0 30px 70px 30px ${shadowColor}; background-color: ${shadowColor}`;
    submit.style.color = shadowColor;
  }

submit.addEventListener("click", function(e) {
  e.preventDefault();

  window.localStorage.setItem("font", font.value);
  window.localStorage.setItem("color", color.value);
  window.localStorage.setItem("size", size.value);

  result.style.fontFamily = window.localStorage.getItem("font");
  result.style.color = window.localStorage.getItem("color");
  result.style.fontSize = window.localStorage.getItem("size");
  
  let shadowColor = window.localStorage.getItem("color");
  lamp.style.cssText = `box-shadow: 0 30px 70px 30px ${shadowColor}; background-color: ${shadowColor}`;
  
  submit.style.color = shadowColor;
});
