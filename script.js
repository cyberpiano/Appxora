// script to handle sidemenu
var sidemen = document.getElementById("sidemenu");
var menuToggle = document.querySelector(".fa-bars"); // Open button
var closeMenuBtn = document.querySelector(".fa-xmark"); // Close button
var menuLinks = document.querySelectorAll("#sidemenu a"); // All links inside the menu

// Function to open the menu
function openmenu() {
    if (window.innerWidth <= 767) { // Ensure it only runs on mobile
        sidemen.style.right = "0";
        sidemen.style.display = "block";
        menuToggle.style.display = "none"; // Hide menu button
        closeMenuBtn.style.display = "block"; // Show close button
        document.body.style.overflow = "hidden"; // Prevent background scrolling
        sidemen.classList.add("active");
    }
}

// Function to close the menu
function closemenu() {
    if (window.innerWidth <= 767) { // Ensure it only runs on mobile
        sidemen.style.right = "-100%"; // Fully hide the menu
        document.body.style.overflow = ""; // Restore scrolling
        sidemen.classList.remove("active");
        menuToggle.style.display = "block"; // Show menu button
        closeMenuBtn.style.display = "none"; // Hide close button
    }
}
// Close menu when clicking a link inside it
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        closemenu(); // Close menu
    });
});

// Close menu when clicking outside of it
document.addEventListener("click", function (event) {
    if (!sidemen.contains(event.target) && !menuToggle.contains(event.target)) {
        closemenu();
    }
});


// Add event listeners to menu buttons
if (menuToggle) {
    menuToggle.addEventListener("click", openmenu);
}
if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closemenu);
}




// Script to handle call and email triggers apps
         // Function to initiate a phone call
         function callNumber(phoneNumber) {
            window.location.href = `tel:${phoneNumber}`;
        }

        // Function to send an email
        function sendEmail(email) {
            window.location.href = `mailto:${email}`;
        }

// Script to handle form data input
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScveozYvHRoYbGG4_VB5t7Cit58ArKgGB0DcWeyDgQZ1v1x1g/formResponse";

        // ✅ Replace with actual entry IDs
        const formPayload = new URLSearchParams();
        formPayload.append("entry.1053221750", formData.get("Name"));  // Name field
        formPayload.append("entry.998078091", formData.get("Email")); // Email field
        formPayload.append("entry.1458466013", formData.get("Message")); // Message field

        fetch(googleFormURL, {
            method: "POST",
            mode: "no-cors",
            body: formPayload
        }).then(() => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(() => msg.innerHTML = "", 5000);
            contactForm.reset();
        }).catch((error) => console.error("Error sending message:", error));
    });
});



    // Script to handle about page tab-titles
    document.addEventListener("DOMContentLoaded", function () {
        const tabLinks = document.querySelectorAll(".tab-links");
        const tabContainer = document.querySelector(".tab-titles");
    
        let activeIndex = 0; // Track the current active tab index
    
        tabLinks.forEach((tab, index) => {
            tab.addEventListener("click", function () {
                // Remove active class from all tabs
                tabLinks.forEach((link) => link.classList.remove("active-link"));
    
                // Add active class to the clicked tab
                this.classList.add("active-link");
    
                // Calculate scrolling direction
                if (index > activeIndex) {
                    // If clicked tab is to the right of the active tab, move it to the leftmost part
                    tabContainer.scrollTo({
                        left: this.offsetLeft - tabContainer.offsetLeft,
                        behavior: "smooth",
                    });
                } else if (index < activeIndex) {
                    // If clicked tab is to the left of the active tab, move it to the rightmost visible part
                    tabContainer.scrollTo({
                        left: this.offsetLeft - tabContainer.offsetLeft - tabContainer.clientWidth + this.clientWidth,
                        behavior: "smooth",
                    });
                }
    
                // Update active tab index
                activeIndex = index;
            });
        });
    });

    
    
//    script to handle all animations on viewport
    document.addEventListener("DOMContentLoaded", function () {
        const animatedSections = document.querySelectorAll("#about, #service, #portfolio, #contact");
        const animatedElements = document.querySelectorAll(
            ".about-col-1 img, .about-col-2, .tab-titles, .services-list div, .work, .contact-left, .contact-right"
        );
    
        function checkScroll() {
            animatedSections.forEach((section) => {
                const sectionPos = section.getBoundingClientRect().top;
                const screenPos = window.innerHeight * 0.8;
    
                if (sectionPos < screenPos) {
                    section.classList.add("show");
                } else {
                    section.classList.remove("show"); // Reset when out of view
                }
            });
    
            animatedElements.forEach((element) => {
                const elementPos = element.getBoundingClientRect().top;
                const screenPos = window.innerHeight * 0.85;
    
                if (elementPos < screenPos) {
                    element.classList.add("show");
                } else {
                    element.classList.remove("show"); // Reset when out of view
                }
            });
        }
    
        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Run once in case elements are already in view
    });


    // script to handle contact form animation
    document.addEventListener("DOMContentLoaded", function () {
        const contactSection = document.querySelector("#contact");
        const contactElements = document.querySelectorAll(".contact-left, .contact-right");
    
        function checkScroll() {
            const contactPos = contactSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight * 0.8;
    
            if (contactPos < screenPos) {
                contactSection.classList.add("show");
                contactElements.forEach(el => el.classList.add("show"));
            } else {
                contactSection.classList.remove("show");
                contactElements.forEach(el => el.classList.remove("show"));
            }
        }
    
        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Run once on page load
    });
    


    // script to handle the "More" button in services sections
    document.addEventListener("DOMContentLoaded", function () {
        const moreButtons = document.querySelectorAll(".services-list div button");
        
        const descriptions = {
            "ERP Solutions": "Our ERP solutions streamline business processes, integrating finance, HR, supply chain, and operations for maximum efficiency.",
            "Web development": "We build secure, high-performance websites with custom front-end and back-end development, CMS solutions, and e-commerce features, ensuring mobile responsiveness and a seamless user experience.",
            "Digital Marketing": "Leverage SEO, social media, and targeted ads to boost brand visibility and drive traffic to your business.",
            "Graphic Designing": "From logos to marketing materials, we create visually stunning graphics that align with your brand identity.",
            "Videography": "Professional video production services including promotional videos, corporate presentations, and animations.",
            "Company Branding": "Craft a unique brand identity with strategic logo design, color schemes, and messaging tailored to your vision."
        };
        
        moreButtons.forEach(button => {
            button.addEventListener("click", function () {
                const serviceBox = this.parentElement;
                const serviceTitle = serviceBox.querySelector("h2").textContent.trim();
                let moreText = serviceBox.querySelector(".more-text");
                
                if (!moreText) {
                    moreText = document.createElement("p");
                    moreText.classList.add("more-text");
                    moreText.style.marginBottom = "5px"; // Add spacing between text and button
                    moreText.innerHTML = descriptions[serviceTitle] || "More details about this service will be added soon.";
                    serviceBox.insertBefore(moreText, button); // Insert text before the button
                }
                
                if (moreText.style.display === "block") {
                    moreText.style.display = "none";
                    this.querySelector("p").textContent = "More";
                } else {
                    moreText.style.display = "block";
                    this.querySelector("p").textContent = "Less";
                }
            });
        });
    });
    

    document.addEventListener("DOMContentLoaded", function() {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00a8cc" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#0077b6", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    });