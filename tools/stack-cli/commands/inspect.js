const { detectInstallation } = require("../lib/router/detector");

const {
    openRouterDatabase,
    getTableNames,
    getRowCount
} = require("../lib/router/database");

async function inspect(rootPath) {

    const report = detectInstallation(rootPath);

    console.log("");
    console.log("AI Stack Backup Kit");
    console.log("------------------------------");

    console.log("Installation :", report.found ? "YES" : "NO");
    console.log("Database     :", report.database ? "YES" : "NO");
    console.log("JWT Secret   :", report.jwtSecret ? "YES" : "NO");
    console.log("Machine ID   :", report.machineId ? "YES" : "NO");

    console.log("");

    if (!report.database) {
        return;
    }

    try {

        const db = await openRouterDatabase(rootPath);

        const tables = getTableNames(db);

        console.log("Database");
        console.log("------------------------------");
        console.log(`Tables       : ${tables.length}`);
        console.log(`Providers    : ${getRowCount(db, "providerConnections")}`);
        console.log(`Proxy Pools  : ${getRowCount(db, "proxyPools")}`);
        console.log(`API Keys     : ${getRowCount(db, "apiKeys")}`);
        console.log(`Combos       : ${getRowCount(db, "combos")}`);
        console.log("");

    } catch (err) {

        console.log("Database Error");
        console.log("------------------------------");
        console.log(err.message);
        console.log("");

    }

}

module.exports = {
    inspect
};