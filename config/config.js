const config = {};

config.port = process.env.PORT || 5000;
config.dbURL = process.env.DATABASEURL || "mongodb+srv://sussybaka:sussybaka@cluster0.17qn9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = config;
