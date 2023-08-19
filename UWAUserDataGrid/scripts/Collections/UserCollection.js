define('scripts/Collections/UserCollection', ['UWA/Class/Collection', 'scripts/Models/User'], function (Collection, User) {
    var UserCollection = Collection.extend({
        model: User,
        url: 'https://jsonplaceholder.typicode.com/users/',
        // Parse the response from the server to get the users data
        parse: function(response) {
            // The user data is returned as an array of objects
            // We want to extract the objects and return them as an array of attributes for each model in the collection
            return response.map(function(user) {
                return {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    website: user.website,
                    city: user.address.city,
                    street: user.address.street,
                    suite: user.address.suite,
                    zipcode: user.address.zipcode,
                    company: user.company.name
                };
            });
        }
    });
    return UserCollection;
});
