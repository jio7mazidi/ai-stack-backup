const { detectInstallation } = require("../lib/detector");

async function inspect(path) {

    const report = detectInstallation(path);

    console.log("");

    console.log("AI Stack Backup Kit");

    console.log("------------------------------");

    console.log("Installation :", report.found ? "YES" : "NO");

    console.log("Database     :", report.database ? "YES" : "NO");

    console.log("JWT Secret   :", report.jwtSecret ? "YES" : "NO");

    console.log("Machine ID   :", report.machineId ? "YES" : "NO");

    console.log("");
}

module.exports = {
    inspect
};