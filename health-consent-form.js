document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as default
    var today = new Date().toISOString().substr(0, 10);
    document.getElementById('dateOfCompletion').value = today;

    // Function to show or hide additional input based on dropdown selection
    function toggleAdditionalInput(dropdownId, inputId) {
        var dropdown = document.getElementById(dropdownId);
        var input = document.getElementById(inputId);
        dropdown.addEventListener('change', function() {
            input.style.display = this.value === 'yes' ? 'block' : 'none';
        });
    }

    // Call function for each dropdown-input pair
    toggleAdditionalInput('allergiesDropdown', 'specifyAllergies');
    toggleAdditionalInput('chemicalSensitivityDropdown', 'specifyChemicalSensitivity');
    toggleAdditionalInput('additionalInfoDropdown', 'specifyAdditionalInfo');
});

// Initialize the signature pad
var canvas = document.getElementById('signature-pad');
var signaturePad = new SignaturePad(canvas);

// Add logic to handle form submission including extracting the signature data
// Example:
document.getElementById('healthConsentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (signaturePad.isEmpty()) {
        return alert("Please provide a signature.");
    }

    var signatureData = signaturePad.toDataURL(); // Get signature data
    // Add logic to include this data in your form submission
});

