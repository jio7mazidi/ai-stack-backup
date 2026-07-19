const path = require("path");
const fs = require("fs");

function exists(target) {
    return fs.existsSync(target);
}

function join(...parts) {
    return path.join(...parts);
}

module.exports = {
    exists,
    join
};