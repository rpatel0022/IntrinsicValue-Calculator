// Function to handle form submission
console.log("Hello World"); 

// function calculateIntrinsicValue(event) {
//   event.preventDefault();

//   // Get input values from the form
//   const stockTicker = document.getElementById('stock-input').value;
//   const eps = parseFloat(document.getElementById('eps-input').value);
//   const peRatio = parseFloat(document.getElementById('pe-input').value);
//   const growthRate = parseFloat(document.getElementById('growth-input').value);
//   const discountRate = parseFloat(document.getElementById('discount-input').value);
//   const currentStockValue = parseFloat(document.getElementById('stock-input').value);

//   // Perform calculations
//   const intrinsicValue = (eps * (1 + growthRate / 100) * (1 - Math.pow(1 + discountRate / 100, -5))) / (peRatio / 100);
//   const marginOfSafety = intrinsicValue - currentStockValue;

//   // Display results
//   const resultElement = document.getElementById('intrinsic-value-result');
//   resultElement.innerHTML = `
//     <p>Intrinsic Value: $${intrinsicValue.toFixed(2)}</p>
//     <p>Margin of Safety: $${marginOfSafety.toFixed(2)}</p>
//   `;

//   // Enable the display button
//   const displayButton = document.querySelector('.display-button');
//   displayButton.disabled = false;
// }

// // Event listener for form submission
// const calculatorForm = document.getElementById('calculator-form');
// calculatorForm.addEventListener('submit', calculateIntrinsicValue);

