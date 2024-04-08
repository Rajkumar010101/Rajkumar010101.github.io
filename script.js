// JavaScript code to change header color on click
 
// Get the header element
const header = document.querySelector('header');
 
// Add click event listener to the header
header.addEventListener('click', function() {
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the background color of the header
header.style.backgroundColor = randomColor;
});