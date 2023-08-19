var MyWidget = {
    tableCreated: false,
    onLoad: function () {
        if (MyWidget.tableCreated) {
            return;
        }
        require(['scripts/Models/User', 'scripts/Collections/UserCollection'], function (User, UserCollection) {
            var userCollection = new UserCollection(); // create an instance of UserCollection
            userCollection.fetch({
                onComplete: function (collection, response, options) {
                    // The user data has been fetched and parsed, and is now available in the collection
                    UWA.log(collection.toJSON());
                    const myDataGrid = new UWA.Controls.DataGrid({
                        className: 'table',
                        id: 'my-DataGrid',
                        className: 'my-dataGrid',
                        columns: myColumns,
                        data: collection.toJSON(),
                        sortable: widget.getBool('sortable')
                    }).inject(widget.body);
                    myDataGrid.addScroller();
                },
                onFailure: function (collection, response, options) {
                    // There was an error fetching the user data
                    console.log("Error fetching user data.");
                },
                parse: true // This option tells fetch() to automatically call the parse() method on the collection
            });
        });
    }
};