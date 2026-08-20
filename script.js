"use strict";

/**
 * script.js
 * Handles button interactions for the two-button demo page.
 */

(function () {
  // Wait until the DOM is fully parsed before querying elements.
  document.addEventListener("DOMContentLoaded", function () {
    var primaryBtn   = document.getElementById("btn-primary");
    var secondaryBtn = document.getElementById("btn-secondary");
    var statusMsg    = document.getElementById("status-message");

    /**
     * Update the status message and briefly highlight it.
     * @param {string} text - Message to display.
     */
    function setStatus(text) {
      statusMsg.textContent = text;
    }

    // Primary button handler
    primaryBtn.addEventListener("click", function () {
      setStatus("Primary button clicked — action confirmed.");
    });

    // Secondary button handler
    secondaryBtn.addEventListener("click", function () {
      setStatus("Secondary button clicked — action cancelled.");
    });
  });
})();
