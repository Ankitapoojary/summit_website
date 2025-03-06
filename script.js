const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
//toggle mobile menu visibility
document.body.classList.toggle("show-mobile-menu");
});

//close menu for mobile visibility
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//initialize swiper
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


    
     // Function to validate the form before submission
function validateForm() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const branch = document.getElementById('branch').value;
  const usn = document.getElementById('usn').value;
  const phone = document.getElementById('phone').value;

  // Simple validation to check if the fields are empty
  if (!firstName || !lastName || !branch || !usn || !phone) {
      alert("Please fill in all the fields.");
      return false;
  }
  // Validate phone number: Check if it contains exactly 10 digits
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // If all fields are filled, show the popup message
  showPopup();
  return false;  // Prevent form submission for the sake of demo
}

// Function to show the popup message
function showPopup() {
  document.getElementById('popup-message').style.display = 'flex';
}

// Function to close the popup message
function closePopup() {
  document.getElementById('popup-message').style.display = 'none';
}
