// Function to get the current day of the week
function getDayOfWeek() {
    const today = new Date();
    const dayIndex = today.getDay(); // Returns a number from 0 to 6
    let de;
ayNam
    if (dayIndex === 0) {
        dayName = "Sunday";
    } else if (dayIndex === 1) {
        dayName = "Monday";
    } else if (dayIndex === 2) {
        dayName = "Tuesday";
    } else if (dayIndex === 3) {
        dayName = "Wednesday";
    } else if (dayIndex === 4) {
        dayName = "Thursday";
    } else if (dayIndex === 5) {
        dayName = "Friday";
    } else if (dayIndex === 6) {
        dayName = "Saturday";
    }

    return dayName;
}

// Display the current day of the week in the footer
function displayDayOfWeek() {
    // Create a new <p> element to hold the day of the week
    const footer = document.querySelector('.footer');
    if (footer) {
        const dayOfWeekElement = document.createElement('p');
        dayOfWeekElement.textContent = `Today is ${getDayOfWeek()}`;
        footer.appendChild(dayOfWeekElement);
    }
}

// Add a click event listener to the "Subscribe" button
function addSubscribeButtonListener() {
    const subscribeButton = document.querySelector('button');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', () => {
            alert('Thank you for subscribing!');
        });
    }
}

// Initialize the script
function initialize() {
    displayDayOfWeek();
    addSubscribeButtonListener();
}

// Run the initialization function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', initialize);
