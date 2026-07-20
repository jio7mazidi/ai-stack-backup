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

function getProviders(db) {
    const result = db.exec(`
        SELECT
            provider,
            authType,
            name,
            data
        FROM providerConnections;
    `);

    if (!result.length)
        return [];

    const columns = result[0].columns;

    return result[0].values.map(row =>
        Object.fromEntries(
            columns.map((col, i) => [col, row[i]])
        )
    );
}

function getProviderDetails(db) {
    const result = db.exec(`
        SELECT
            provider,
            authType,
            name,
            data
        FROM providerConnections;
    `);

    if (!result.length)
        return [];

    const columns = result[0].columns;

    return result[0].values.map(row => {
        const obj = Object.fromEntries(
            columns.map((c, i) => [c, row[i]])
        );

        try {
            obj.data = JSON.parse(obj.data);
        } catch {
            // اگر JSON نبود همان رشته را نگه می‌داریم
        }

        return obj;
    });
}

module.exports = {
    openRouterDatabase,
    getTableNames,
    getRowCount,
    getProviders,
    getProviderDetails
};