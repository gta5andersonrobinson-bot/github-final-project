document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------------------
    // 1. Mobile Navigation Toggle
    // -------------------------------------------------------------------------
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu").querySelector(".nav-links");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            navToggle.setAttribute("aria-expanded", isOpen.toString());
        });
    }

    // -------------------------------------------------------------------------
    // 2. Light / Dark Mode Toggle
    // -------------------------------------------------------------------------
    const themeBtn = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("portfolio-theme") || "light";

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
            themeBtn.textContent = "🌙";
            localStorage.setItem("portfolio-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeBtn.textContent = "☀️";
            localStorage.setItem("portfolio-theme", "dark");
        }
    });

    // -------------------------------------------------------------------------
    // 3. Dynamic Project Filtering (DOM Manipulation)
    // -------------------------------------------------------------------------
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "block";
                    card.style.opacity = "1";
                } else {
                    card.style.display = "none";
                    card.style.opacity = "0";
                }
            });
        });
    });

    // -------------------------------------------------------------------------
    // 4. Contact Form Validation
    // -------------------------------------------------------------------------
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset error messages
        document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
        feedback.textContent = "";

        // Name verification
        if (nameInput.value.trim() === "") {
            document.getElementById("nameError").textContent = "Please enter your name.";
            isValid = false;
        }

        // Email regex check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById("emailError").textContent = "Please provide a valid email address.";
            isValid = false;
        }

        // Message verification
        if (messageInput.value.trim().length < 5) {
            document.getElementById("messageError").textContent = "Message must be at least 5 characters long.";
            isValid = false;
        }

        if (isValid) {
            feedback.className = "form-feedback success";
            feedback.textContent = "Thank you! Your message has been sent successfully.";
            form.reset();
        }
    });
});