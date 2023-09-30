let show_variable = false;

function onLoaded() {
  const omniassistMessenger = document.getElementsByTagName("omniassist-messenger")[0];
  let chat_icon = omniassistMessenger.getAttribute("chat_icon");
  let bot_id = omniassistMessenger.getAttribute("bot_id");

  // Log the values to the console (you can use these values as needed)
  console.log("Chat Icon:", chat_icon);
  console.log("Bot ID:", bot_id);

  const omniassistMessengerHTML = `
<link href="./test.css" rel="stylesheet" />
<style data-tag="reset-style-sheet">
html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }
</style>
<link rel="stylesheet" href="./style.css" />

<div class="test-container">
  <div class="test-container1">
    <div class="test-container2">
      <iframe
        src="https://example.com"
        class="test-iframe"
      ></iframe>
    </div>
    <div class="test-container3" onClick="handleClick()">
      <div class="test-container4" style="  background-image: url(${chat_icon});"></div>
      <svg viewBox="0 0 1024 1024" class="test-icon">
        <path
          d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
        ></path>
      </svg>
    </div>
  </div>
</div>
`;

  omniassistMessenger.innerHTML = omniassistMessengerHTML;
}



function handleClick() {
  let omniassistMessenger = document.querySelector("omniassist-messenger");
  let iframeInsideOmniassist = omniassistMessenger.querySelector(".test-iframe");
  let bgImageInsideOmniassist = omniassistMessenger.querySelector(".test-container4");
  let iconInsideOmniassist = omniassistMessenger.querySelector(".test-icon");

  show_variable = !show_variable;
  if (show_variable) {
    iframeInsideOmniassist.style.display = "block";
    bgImageInsideOmniassist.style.display = "none";
    iconInsideOmniassist.style.display = "block";
  } else {
    iframeInsideOmniassist.style.display = "none";
    bgImageInsideOmniassist.style.display = "block";
    iconInsideOmniassist.style.display = "none";
  }
}

window.onload = onLoaded