define('scripts/Models/User', ['UWA/Class/Model'], function (Model) {
    var User = Model.extend({
        defaults: {
            id: null,
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
            city: '',
            street: '',
            suite: '',
            zipcode: '',
            company: '',
        }
    });
    return User;
});
