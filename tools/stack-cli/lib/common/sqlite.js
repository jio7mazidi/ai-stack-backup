const fs = require("fs");
const initSqlJs = require("sql.js");

async function openDatabase(databasePath) {
    if (!fs.existsSync(databasePath)) {
        throw new Error(`Database not found: ${databasePath}`);
    }

    const SQL = await initSqlJs();

    const fileBuffer = fs.readFileSync(databasePath);

    return new SQL.Database(fileBuffer);
}

module.exports = {
    openDatabase
};