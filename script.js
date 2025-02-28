// script to handle sidemenu
var sidemen = document.getElementById("sidemenu");
var menuToggle = document.querySelector(".fa-bars"); // Open button
var closeMenuBtn = document.querySelector(".fa-xmark"); // Close button
var menuLinks = document.querySelectorAll("#sidemenu a"); // All links inside the menu

// Function to open the menu
function openmenu() {
    sidemen.style.right = "0";
    sidemen.style.display = "block";
    menuToggle.style.display = "none"; // Hide menu button
    closeMenuBtn.style.display = "block"; // Show close button
    document.body.style.overflow = "hidden"; // Prevent background scrolling
    sidemen.classList.add("active");
}

// Function to close the menu
function closemenu() {
    sidemen.style.right = "-100%"; // Completely hide the menu
    document.body.style.overflow = ""; // Restore background scrolling
    sidemen.classList.remove("active");
    menuToggle.style.display = "block"; // Show menu button
    closeMenuBtn.style.display = "none"; // Hide close button
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

// Script to handle form
const scriptURL = 'https://script.google.com/macros/s/AKfycbx57QUQIOr31Wl4v6X3zfUViQZx_RWhRL4JsZevHG0dBxge1PbKb3B5mfa06bY9gIzD/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent succesfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


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
    
    // script to handle the about page animation
    document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector("#about");
        const aboutImage = document.querySelector(".about-col-1 img");
        const aboutText = document.querySelector(".about-col-2");
        const tabTitles = document.querySelector(".tab-titles");
    
        function revealOnScroll() {
            const sectionPos = aboutSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3; // Triggers slightly before full view
    
            if (sectionPos < screenPos) {
                aboutSection.classList.add("show");
                aboutImage.classList.add("show");
                aboutText.classList.add("show");
                tabTitles.classList.add("show");
            }
        }
    
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // Run once in case it's already in view
    });



    // script for handling services animation
    document.addEventListener("DOMContentLoaded", function () {
        const serviceSection = document.querySelector("#service");
        const serviceCards = document.querySelectorAll(".services-list div");
    
        function revealOnScroll() {
            const sectionPos = serviceSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
    
            if (sectionPos < screenPos) {
                serviceSection.classList.add("show");
    
                // Add staggered delay for each service card
                serviceCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 200); // 200ms delay per card
                });
            }
        }
    
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // Run once in case it's already in view
    });
    

    // script to handle animation of portfolio
    document.addEventListener("DOMContentLoaded", function () {
        const portfolioSection = document.querySelector("#portfolio");
        const portfolioItems = document.querySelectorAll(".portfolio-list .work");
    
        function revealOnScroll() {
            const sectionPos = portfolioSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
    
            if (sectionPos < screenPos) {
                portfolioSection.classList.add("show");
    
                // Add staggered effect for each portfolio card
                portfolioItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("show");
                    }, index * 200); // 200ms delay per item
                });
            }
        }
    
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // Run once in case it's already in view
    });
    

    // script to handle contact section
    document.addEventListener("DOMContentLoaded", function () {
        const contactSection = document.querySelector("#contact");
        const contactLeft = document.querySelector(".contact-left");
        const contactRight = document.querySelector(".contact-right");
    
        function revealOnScroll() {
            const sectionPos = contactSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
    
            if (sectionPos < screenPos) {
                contactSection.classList.add("show");
    
                // Delay animation for left and right elements
                setTimeout(() => contactLeft.classList.add("show"), 200);
                setTimeout(() => contactRight.classList.add("show"), 400);
            }
        }
    
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // Run once in case it's already in view
    });
    