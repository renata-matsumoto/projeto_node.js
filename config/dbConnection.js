const { Client } = require('pg')

const client = new Client({
    connectionString : 'postgres://erlsudcgqelvka:de110dda582bf88845d4385c2bc2ba8983d191fea6bd30457e2f7be50c46856b@ec2-44-198-24-0.compute-1.amazonaws.com:5432/dv4f9oq96sv8c', ssl : {
        rejectUnauthorized : false
    }
})

client.connect()

module.exports = client 