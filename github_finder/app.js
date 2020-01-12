// GitHub is a class so we need to instantiate it by declaring a variable equal to a new GitHub
// INit Github
const github = new Github();
// INit UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // make http call
        github.getUser(userText).then(data => {
            // check to see if the user we are searching for is not found
            if (data.profile.message === 'Not found') {
                // Show alert
            } else {
                // or show the profile
                ui.showProfile(data.profile);
            }
        });
    } else {
        // clear the profile
    }
});
