// for image we can use randomuser.me
const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

// create a variable set to the function iterator with a data variable
const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
// grab the id of next and add an event that calls the function next profile
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    // get the value of profiles and iterate with the next method to find all profiles
    const currentProfile = profiles.next().value;
    // if the current profile variable undefined then we will load next person, otherwise we just reload the page to start over which happens in the else
    if (currentProfile !== undefined) {
        // insert values into the empty div with the id of profileDisplay, using back ticks and bootstrap classnames to style the inserted html
        document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;
        // get the className for the img and insert an img tag with the src from current profile
        document.getElementById(
            'imageDisplay'
        ).innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // No more profiles - if the profiles is undefined then the window will reload
        window.location.reload();
    }
}

// Profile Iterator that takes in profiles
function profileIterator(profiles) {
    // the counter
    let nextIndex = 0;
    // return object with a next function
    return {
        next: function() {
            // return the value and done false or return done true. User turnery
            return nextIndex < profiles.length // profiles length is 3
                ? // iterate through the index of available profiles until done true, which puts us back at the beginning
                  { value: profiles[nextIndex++], done: false }
                : { done: true };
        }
    };
}
