const { exists, join } = require("./utils");

function detectInstallation(root) {

    const result = {
        root,
        found: false,
        database: false,
        jwtSecret: false,
        machineId: false
    };

    if (!exists(root))
        return result;

    result.found = true;

    result.database =
        exists(join(root, "db", "data.sqlite"));

    result.jwtSecret =
        exists(join(root, "jwt-secret"));

    result.machineId =
        exists(join(root, "machine-id"));

    return result;
}

module.exports = {
    detectInstallation
};