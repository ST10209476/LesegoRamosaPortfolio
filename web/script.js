function funcResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

// Get new tab buttons
const githubRepoButtons = document.querySelectorAll('.github-repo-btn');
const youtubeButtons = document.querySelectorAll('.video-demo-btn');

// Event listener for GitHub buttons
githubRepoButtons.forEach(button => {
    button.addEventListener('click', function() {   // When clicked, function will be executed
        const repoUrl = this.getAttribute('data-repo-url');
        if (repoUrl) {
            window.open(repoUrl, '_blank');
        } else {
            console.error('GitHub repository URL not found for this project.');
            alert('GitHub link not available.');
        }
    });
});

// Event listener for YouTube buttons
youtubeButtons.forEach(button => {
    button.addEventListener('click', function() {   // When clicked, function will be executed
        const repoUrl = this.getAttribute('data-repo-url');
        if (repoUrl) {
            window.open(repoUrl, '_blank');
        } else {
            console.error('YouTube URL not found for this project.');
            alert('YouTube link not available.');
        }
    });
});

// Copy to clipboard button
function copyText() {
    navigator.clipboard.writeText("lesegoramosa23@gmail.com")
    .then(() => {
        alert("Email has been copied to clipboard!");
    })
    .catch(err => {
        console.error('Failed to copy email: ', err);
        alert("Failed to copy email address.");
    });
}

// Take to LinkedIn page
function toLinkedin() {
    window.open("https://www.linkedin.com/in/lesegoramosa", "_blank");
}
