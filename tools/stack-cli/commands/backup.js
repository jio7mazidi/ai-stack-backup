const fs = require("fs");

const { detectInstallation } = require("../lib/router/detector");

const {
    openRouterDatabase,
    getProviderDetails
} = require("../lib/router/database");

const {
    createBackup
} = require("../lib/router/backup");

async function backup(rootPath, outputPath = "backup.json") {

    const report = detectInstallation(rootPath);

    if (!report.database) {
        throw new Error("9router database not found.");
    }

    const db = await openRouterDatabase(rootPath);

    const providers = getProviderDetails(db);

    const backupData = createBackup(providers);

    fs.writeFileSync(
        outputPath,
        JSON.stringify(backupData, null, 2)
    );

    console.log(`Backup saved to ${outputPath}`);

}

module.exports = {
    backup
};