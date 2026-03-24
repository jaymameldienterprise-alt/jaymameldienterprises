// Scroll Reveal
window.addEventListener("scroll", function(){
    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
});


// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function(){

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    if(toggle && nav){
        toggle.addEventListener("click", function(){
            nav.classList.toggle("active");
        });
    }

});


// WhatsApp popup delay
window.addEventListener("load", function(){
    setTimeout(function(){
        const whatsappBox = document.getElementById("whatsapp-container");
        if(whatsappBox){
            whatsappBox.classList.add("show");
        }
    }, 3000);
});


// Contact Form Submit (Updated Professional Version)
document.addEventListener("DOMContentLoaded", function(){

  document.querySelectorAll(".contact-form-main").forEach(form => {

    form.addEventListener("submit", async function(e){
      e.preventDefault();

      const messageBox = form.querySelector(".form-message");

      const data = {
        name: form.querySelector("input[type='text']").value,
        email: form.querySelector("input[type='email']").value,
        message: form.querySelector("textarea").value
      };

      try{
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if(result.success){
          messageBox.textContent = "Message sent successfully!";
          messageBox.className = "form-message success";
          messageBox.style.display = "block";
          form.reset();
        } else {
          messageBox.textContent = "Failed to send message.";
          messageBox.className = "form-message error";
          messageBox.style.display = "block";
        }

      } catch(error){
        messageBox.textContent = "Server error. Please try again.";
        messageBox.className = "form-message error";
        messageBox.style.display = "block";
        console.log(error);
      }

      setTimeout(() => {
        messageBox.style.display = "none";
      }, 3000);

    });

  });

});