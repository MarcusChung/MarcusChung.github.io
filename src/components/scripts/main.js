// UNUSED JAVASCRIPT

import ClipboardJS from 'clipboard';

// Initialize Clipboard.js for all elements with the class "copy-button"
new ClipboardJS('.copy-button');

// Show a success message after copying
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.copy-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Copied to clipboard!');
    });
  });
});
