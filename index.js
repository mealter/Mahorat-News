const hamburger = document.getElementById("hamburger");
        const navLinks = document.querySelector(".nav-links");
        const nav = document.querySelector("nav");
        const header = document.querySelector("header")

        hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
        nav.classList.toggle("open"); // 🔥 navga class berish
        header.classList.toggle("open")
        });