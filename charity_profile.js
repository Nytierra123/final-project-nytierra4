 document.addEventListener("DOMContentLoaded", () => {
    // Get all the "Volunteer Here" buttons
    const volunteerButtons = document.querySelectorAll('.volunteer-btn');
    const modal = document.getElementById("volunteerModal");
    const closeButton = document.querySelector(".close");

    volunteerButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = "block";  // Show the modal when button is clicked
        });
    });

    // When the user clicks on <span> (x), close the modal
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside the modal, close it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    const volunteerForm = document.getElementById("volunteerForm");
    volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for volunteering! We will be in touch soon.");
        modal.style.display = "none";  // Hide the modal after submission
    });

    // Handle the cancel button
    const cancelButton = document.getElementById("cancelForm");
    cancelButton.addEventListener('click', () => {
        modal.style.display = "none";  // Close the modal if user cancels
    });
});
