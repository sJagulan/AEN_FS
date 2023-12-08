document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('workOrderForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var jobData = {
            account: document.getElementById('account').value,
            jobCategory: document.getElementById('jobCategory').value,
            workOrderName: document.getElementById('workOrderName').value,
            workOrderNumber: document.getElementById('workOrderNumber').value,
            customerMobile: document.getElementById('customerMobile').value,
            customerPhone: document.getElementById('customerPhone').value,
            customerAddress: document.getElementById('customerAddress').value
            // Add other necessary fields here if needed
        };

        fetch('http://127.0.0.1:5000/add-job', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Job added:', data);
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Error adding job:', error);
        });
    });
});
