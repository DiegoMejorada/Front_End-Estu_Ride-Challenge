# Simple Airbnb-Style Reservation System with Weather Information

## Overview
This project is a basic web application that simulates an Airbnb-style reservation system for a single room. It displays current reservations, shows the current weather using a public API, and allows users to make new reservations. The application also handles booking conflicts for dates that are already booked.

---

## Requirements

### User Interface
- Develop a simple UI using HTML and CSS.
- Include:
  - A section to display current weather using a public API.
  - A reservation form with a date picker and number of guests input (1-4).
  - A display area for current reservations.

### Functionality and API Integration
- Use JavaScript for interactivity and logic.
- Integrate a public weather API (like OpenWeatherMap) for current weather data.
- Display a list of current reservations (use pre-set data).

### Reservation Logic
- Allow users to submit reservation requests.
- Check for booking conflicts against current reservations.
- Display error messages for booking conflicts.
- Display a confirmation message for successful reservations.

### Simplified Data Handling
- Use a JavaScript array to store and display reservations.
- No backend or database is required.

---

## Evaluation Criteria
- Code organization and clarity.
- Functionality and correctness.
- UI/UX design.
- Error handling and data display.

---

## Steps to Fork and Share the Repository
1. Fork the Repository:

    - Go to the GitHub repository page.
    - Click the 'Fork' button on the top right corner of the page. This creates a copy of the repository in your GitHub account.

2. Clone the Forked Repository:

    - On your forked repository page, click the 'Code' button and copy the URL.  
    - Open your terminal or command prompt.  
    - Run git clone [URL] to clone the repository to your local machine.

3. Implement the Challenge:

    - Make the necessary changes and improvements to the codebase as per the challenge requirements.  
    - Include the steps for the reviewer to run your application, you can delete or modify the content of this README file to include instructions.

4. Push Changes:

    - After making your changes, commit them and push them back to your forked repository.
    - Use git add ., git commit -m "Your commit message", and git push origin main.

5. Share Your Work:

    - Once you've pushed your changes, share the link to your forked repository as your submission for the challenge.

---

## How to Make a Reservation

1. **Check the Weather**: Before making a reservation, you can view the current weather conditions for the location. This information is displayed at the top of the application.

2. **Select a Date**: Use the date picker in the reservation form to select the date for which you want to make a reservation. Please ensure the date is in the future.

3. **Select the Number of Guests**: Enter the number of guests for the reservation. The system currently supports 1 to 4 guests.

4. **Submit the Reservation**: Click the 'Submit Reservation' button to submit your reservation request.

5. **View Confirmation or Error Messages**: After submitting, you will receive a confirmation message if the reservation is successful. If the selected date is already booked, an error message will be displayed.

6. **Review Current Reservations**: You can view a list of all current reservations below the reservation form.

Thank you for using our Airbnb-style reservation system. We hope you have a pleasant experience!

---

## Submission
Share the link to your forked repository as your submission.

---

## Note
Remember, this is a basic implementation for educational purposes. No real reservations will be processed.
