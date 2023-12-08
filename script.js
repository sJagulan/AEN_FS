function displayJobs() {
    $('#jobsContainer').empty();
    
    fetch('http://127.0.0.1:5000/get-jobs')
    .then(response => response.json())
    .then(jobs => {
        jobs.forEach(function(job) {
            var jobBlock = $('<div></div>').addClass('job-block');
            jobBlock.append($('<h3></h3>').text(job.account));
            jobBlock.append($('<p></p>').text(job.customerMobile));
            jobBlock.append($('<p></p>').text(job.customerAddress));
            $('#jobsContainer').append(jobBlock);
        });
    })
    .catch(error => {
        console.error('Error fetching jobs:', error);
    });
}

function displayJobs() {
    $('#jobsContainer').empty();

    fetch('http://127.0.0.1:5000/get-jobs')
    .then(response => response.json())
    .then(jobs => {
        jobs.forEach(function(job) {
            var jobBlock = $('<div class="job-block"></div>');
            jobBlock.append($('<p></p>').text("Account: " + job.account));
            jobBlock.append($('<p></p>').text("Mobile: " + job.customerMobile));
            jobBlock.append($('<p></p>').text("Address: " + job.customerAddress));

            // Make the job block clickable
            jobBlock.click(function() {
                window.location.href = 'form-page.html'; // Replace with the actual URL of your other page
            });

            $('#jobsContainer').append(jobBlock);
        });
    })
    .catch(error => {
        console.error('Error fetching jobs:', error);
    });
}

// Call displayJobs when the page loads
$(document).ready(function() {
    displayJobs();
});

