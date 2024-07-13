### Informations to keep
- State Variables: Separate state variables (showKeyIngredients, showHowToUse, showAllergyInfo) are used to manage the visibility of the details for each section.

- Toggle Function: Each section has its own toggle button that changes the respective state variable, ensuring that only the details of the clicked section are shown.

- Conditional Rendering: Each section's details are conditionally rendered based on the corresponding state variable.