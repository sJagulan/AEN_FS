document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('healthConsentButton').addEventListener('click', function() {
        window.location.href = 'health-consent-form.html'; // Change to your actual file name
    });

    document.getElementById('approvalToProceedButton').addEventListener('click', function() {
        window.location.href = 'approval-to-proceed-form.html'; // Change to your actual file name
    });

    document.getElementById('approvalToRemoveDisposeButton').addEventListener('click', function() {
        window.location.href = 'approval-to-remove-dispose-form.html'; // Change to your actual file name
    });
});
