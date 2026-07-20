const path = require("path");

const { openDatabase } = require("../common/sqlite");

async function openRouterDatabase(rootPath) {

    const databasePath = path.join(
        rootPath,
        "db",
        "data.sqlite"
    );

    return await openDatabase(databasePath);

}

function getTableNames(db) {

    const result = db.exec(
        "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;"
    );

    if (!result.length)
        return [];

    return result[0].values.map(row => row[0]);

}

function getRowCount(db, tableName) {

    const result = db.exec(
        `SELECT COUNT(*) FROM ${tableName};`
    );

    if (!result.length)
        return 0;

    return result[0].values[0][0];

}

module.exports = {
    openRouterDatabase,
    getTableNames,
    getRowCount
};