const professions = [ "Web Developer",  "Software Engineer",  "Graphics Designer"];

// the span to be popuklated with the current word
const profession = document.getElementById("profession");

let currentWordIndex = 0;
let currentCharIndex = 0;
let currentWord;

/*
0. create an index variable
1. type the next string of the professions list
2. clear the typed string
3.  add 1 to the index if less than the list length, else reset to 0
4. repeat step 1
*/

// this function is responsible for the typing animation
function typingAnimation() {
    currentWord = professions[currentWordIndex];
    const currentWordLength = currentWord.length;
    if(currentCharIndex < currentWordLength) {
        profession.innerHTML += currentWord[currentCharIndex];
        currentCharIndex++;
        setTimeout(typingAnimation, 70)
    } else {
        // wait 3000 miliseconds before deleting the word
        currentCharIndex = 0;
        setTimeout(clearWord, 3000);
    }
}

function clearWord() {
    if(currentWord.length > 0) {
        let tempWord = currentWord.slice(0, -1);
        profession.innerHTML = tempWord;
        currentWord = tempWord;
        setTimeout(clearWord, 40)
    } else {
        currentWordIndex++;
        if(currentWordIndex === professions.length) {
            currentWordIndex = 0;
        }
        typingAnimation();
    }
}

typingAnimation()

const form = document.querySelector("#contact_form");
form.addEventListener("submit", (e) => sendWhatsAppMessage(e))

  function sendWhatsAppMessage(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    const phoneNumber = "+263782825818"; // 🔁 Replace with your WhatsApp number (no '+' or spaces)
    // const encodedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
    const fullMessage = `Hello, my name is ${name}. ${message}`
    let msg = `New message from: ${name} \n`
    msg += `Email: ${email} \n`
    msg += `Mesage: ${message}`
    const whatsappURL = `https://wa.me/${phoneNumber}?text='${msg}'`;

    console.log(msg);
    
    // window.open(whatsappURL, "_blank");
    window.location.href = whatsappURL;
  }

const allLinks = document.querySelectorAll(".link");
allLinks.forEach(link => {
    link.addEventListener("click", e => {
        // remove the active class from all links
        removeactivelinks()

        // add the active class to the clicked link
        link.classList.add("active")
    })
})

function removeactivelinks(){
    allLinks.forEach(link => {
        link.classList.remove("active")
    })
}

const mobile_navbar = document.getElementById("mobile_navbar")

const humburger_menu = document.getElementById("humburger_menu");
humburger_menu.addEventListener("click", () => {
    console.log("button clickrd");
    
    if(mobile_navbar.classList.contains("flex")){
        mobile_navbar.classList.remove("flex")
        mobile_navbar.classList.add("none")
        console.log("flex removed");
        

    } else{
        mobile_navbar.classList.add("flex")
        mobile_navbar.classList.remove("none")
        console.log("flex added");
        
    }


})