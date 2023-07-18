/** Database setup for BizTime. */

const { Client } = require("pg")

const client = new Client({
    connectionString: "postgresql://postgres:12345@localhost:5432/biztime"
})

client.connect();

module.exports = client;