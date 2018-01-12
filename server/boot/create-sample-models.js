module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function(err) {
    if (err) throw err;

    app.models.CoffeeShop.create([
  {
    "name": "My Cafe",
    "city": "Bengaluru"
  },
  {
    "name": "Malabar",
    "city": "Kannur"
  },
  {
    "name": "90s",
    "city": "SG Palya"
  },
  {
    "name": "Chill Out",
    "city": "Kottayam"
  },
  {
    "name": "Best",
    "city": "Pala"
  }
], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};
