 document.addEventListener("DOMContentLoaded", () => {
  // Hover effect to show additional charity details
  const charityNames = document.querySelectorAll('.charity-name');

  charityNames.forEach(charity => {
    charity.addEventListener('mouseover', (event) => {
      const description = event.target.getAttribute('data-description');
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.textContent = description;

      // Position the tooltip near the charity name
      charity.appendChild(tooltip);
    });

    charity.addEventListener('mouseout', () => {
      const tooltip = charity.querySelector('.tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });
  });

  // Get all the "Volunteer Now" buttons
  const volunteerButtons = document.querySelectorAll('.volunteer-btn');

  volunteerButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const charityName = event.target.getAttribute('data-charity'); // Get the charity name

      // Create a form dynamically
      const formContainer = document.createElement('div');
      formContainer.classList.add('volunteer-form-container');
      
      const formHtml = `
        <h3>Volunteer for ${charityName}</h3>
        <form id="volunteerForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br>
          <label for="message">Why do you want to volunteer?</label><br>
          <textarea id="message" name="message" rows="4" required></textarea><br>
          <button type="submit">Submit</button>
          <button type="button" id="cancelForm">Cancel</button>
        </form>
      `;
      
      formContainer.innerHTML = formHtml;

      // Append the form container to the body or a specific section
      document.body.appendChild(formContainer);

      // Close the form when cancel is clicked
      const cancelButton = formContainer.querySelector('#cancelForm');
      cancelButton.addEventListener('click', () => {
        formContainer.remove();
      });

      // Handle form submission
      const volunteerForm = formContainer.querySelector('#volunteerForm');
      volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(`Thank you for volunteering for ${charityName}!`);
        formContainer.remove(); // Remove form after submission
      });
    });
  });
});
