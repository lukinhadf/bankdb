module.exports = {
    client: 'mysql2',
    connection: {
        host : "localhost",
        user : "root",
        password: "usbw",
        database: "escola"
    },
    migrations: {
        directory: "mingrations",
        tableName: "knex_migrations"
    },
    seeds: {
        directory: "seeds"
    }
};