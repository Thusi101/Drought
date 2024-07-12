const { expect } = require('chai');
const { executeQuery } = require('../main/database');

describe('Database Queries', () => {
    it('should return user data for a valid user ID', async () => {
        const result = await executeQuery('SELECT * FROM users WHERE id = $1', [1]);
        expect(result).to.be.an('array').that.is.not.empty;
    });

    // Additional tests...
});

