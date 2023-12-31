// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the form and display button
  const form = document.getElementById('calculator-form');
  const displayButton = document.querySelector('.display-button');

  const buyButton = document.querySelector('.buy-button');
  const sellButton = document.querySelector('.sell-button');

  // Add event listener to the form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Retrieve input values
    const EPS = parseFloat(document.getElementById('eps-input').value);
    const peRatio = parseFloat(document.getElementById('pe-input').value);
    const Growth_rate = parseFloat(document.getElementById('growth-input').value);
    const discount = parseFloat(document.getElementById('discount-input').value);
    const currentStockValue = parseFloat(document.getElementById('stock-input').value);

    // Perform the calculations
    const margin_safety_growth_rate = Growth_rate * (1 - 0.25) 
    const growth_rate_decimal = margin_safety_growth_rate / 100 

    const Intrinsic_value = EPS * peRatio * (1 + growth_rate_decimal) ** 5
    const Final_intrinsic_value = (Intrinsic_value / (1 + (discount/100)) ** 5) 

    // Update the display button with the result
    displayButton.textContent = 'Intrinsic Value: ' + Final_intrinsic_value.toFixed(2);
    displayButton.disabled = false;

    displayButton.classList.add('highlight');

    console.log(typeof Final_intrinsic_value);
    console.log(typeof currentStockValue);
    console.log(currentStockValue)

    if (currentStockValue < Final_intrinsic_value) {
      buyButton.style.backgroundColor = 'green';
      sellButton.style.backgroundColor = ''; // Remove any previous styling
    } else {
      sellButton.style.backgroundColor = 'red';
      buyButton.style.backgroundColor = ''; // Remove any previous styling
    }

  });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get reference to the reset button
  const resetButton = document.querySelector('.reset-button');

  // Add event listener to the reset button
  resetButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent button click from submitting the form

    // Reload the page
    location.reload();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Toggle the visibility of the answer
      answer.classList.toggle("active");

      if (answer.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var icon = document.getElementById("icon");

  icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "Images/Sun-Icon.png";
    } else {
      icon.src = "Images/MoonIcon.png";
    }
  };
}); 
