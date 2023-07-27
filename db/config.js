
const { Sequelize } = require('sequelize');

const username = 'postgres';
const password = 'bishal@123'; // Password contains an "@" symbol
const host = 'localhost';
const port = 5432;
const databaseName = 'testseq';

const passwordEncoded = encodeURIComponent(password); // URL-encode the password

const sequelize = new Sequelize(`postgres://${username}:${passwordEncoded}@${host}:${port}/${databaseName}`, {
    dialectModule: require('pg')
});
(async () => {
    try {
        await sequelize.sync(); // Automatically creates tables based on the models
        console.log('Sequelize synchronized successfully.');
    } catch (error) {
        console.error('Sequelize synchronization error:', error);
    }

    // Start your application here
})();
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database error:', error);
    }
}

testConnection();

module.exports = { sequelize };
