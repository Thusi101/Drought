require('dotenv').config();

const config = {
    database: {
        connectionString: process.env.DATABASE_URL,
    },
    server: {
        port: process.env.PORT || 3000,
    },
    security: {
        saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
        jwtSecret: process.env.JWT_SECRET || 'secret',
    },
};

module.exports = config;

