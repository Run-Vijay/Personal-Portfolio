// dark and light mode
let modeBtn = document.getElementById("mode")
let text = document.querySelector(".black")
modeBtn.addEventListener("click", () => {
    if (modeBtn.textContent == "Light") {
        modeBtn.textContent = "Dark"
        document.body.style.backgroundColor = "white"

    } else {
        modeBtn.textContent = "Light"
        document.body.style.backgroundColor = "rgb(17 24 39 / var(--tw-bg-opacity, 1))"
    }

})

// JavaScript for responsive navbar
let burgur = document.querySelector('.burgur');
let ulList = document.querySelector('.ul-list');
burgur.addEventListener('click', () => {
    ulList.classList.toggle('active');
    burgur.classList.toggle('active');
});

document.body.addEventListener('click', (e) => {
    if (!burgur.contains(e.target) && !ulList.contains(e.target)) {
        ulList.classList.remove('active');
        burgur.classList.remove('active');
    }
});

// button click

// navhadding button 
const heading = document.getElementById("nav-hadding");
heading.style.cursor = "pointer"; // Shows hand cursor
heading.addEventListener("click", () => {
    window.location.href = "index.html"; // Redirect to index.html in same tab
    console.log("hello")
});

// instagram button
function insta() {
    let instabtn = document.getElementById("insta")
    instabtn.addEventListener("click", () => {
        window.open("https://www.instagram.com/vijay_vlogger1/", "_blank");
    })
}


// github button
function github() {
    let github = document.getElementById("github")
    github.addEventListener("click", () => {
        window.open("https://github.com/Run-Vijay", "_blank");
    })
}

// linkedin button
function linkedin() {
    let linkedin = document.getElementById("linkedin")
    linkedin.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/vijay-kumar1198/", "_blank");
    })
}

// facebook button
function facebook() {
    let facebook = document.getElementById("facebook")
    facebook.addEventListener("click", () => {
        window.open("https://www.facebook.com/share/1C3Cbo2z6S/", "_blank");
    })
}
