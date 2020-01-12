class Github {
    constructor() {
        this.client_id = 'a9bd5b79232ccc281e42';
        this.client_secret = 'c6c354369d87e97ff00f54e17e938392f771c030';
    }

    async getUser(user) {
        // dynamically find the user variable in the request. the "?" makes a query to the client id, ampersand to add a query string of the client secret
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        // gives us the json data, data needs to json always
        const profile = await profileResponse.json();

        // we need to return an object, not jus the data. Callback, would have a CB for response and another with the CB to get a the repos, async await allows us not to do that
        return {
            profile
        };
    }
}
