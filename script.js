// dark and light mode






var typed = new Typed('#element', {
    strings: ['Web Developer ', 'Designer ', 'Content Creator '],
    typeSpeed: 50, repeat: true, backSpeed: 30, backDelay: 800, loop: true
});


// JavaScript for responsive navbar
const burgur = document.querySelector('.burgur');
const ulList = document.querySelector('.ul-list');
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



