const Users = require("../controllers/user.controller")
const Locations = require("../controllers/location.controller")
const { authen } = require("../config/jwt");

module.exports = app => {
    app.post("/api/register", Users.register)
    app.post("/api/login", Users.login)
    app.get("/api/users/loggedin", authen, Users.getLoggedInUser)
    app.get("/api/users/logout", Users.logout)

    app.post('/api/locations/read', authen, Locations.getLocations)
    app.post('/api/location/create', authen, Locations.addLocation)
    app.post('/api/location/read', authen, Locations.getLocation)

}