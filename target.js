// Select all button elements with the class 'myButton'
const buttons = document.querySelectorAll('.myButton');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Use the target property to get the element that triggered the event
        const targetElement = event.target;

        // Perform an action with the target element
        console.log('Button clicked:', targetElement);

        // Example: Change the button text
        targetElement.textContent = 'Clicked!';
    });
});
