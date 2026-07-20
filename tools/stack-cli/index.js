#!/usr/bin/env node

const { inspect } = require("./commands/inspect");
const { backup } = require("./commands/backup");

const args = process.argv.slice(2);

const command = args[0];

const pathIndex = args.indexOf("--path");

const targetPath =
    pathIndex >= 0
        ? args[pathIndex + 1]
        : null;

const outputIndex = args.indexOf("--output");

const outputPath =
    outputIndex >= 0
        ? args[outputIndex + 1]
        : "backup.json";

switch (command) {

    case "inspect":

        if (!targetPath) {

            console.log("Usage:");
            console.log('stack inspect --path "<9router-folder>"');

            process.exit(1);

        }

        inspect(targetPath);

        break;

    case "backup":

        if (!targetPath) {

            console.log("Usage:");
            console.log('stack backup --path "<9router-folder>" --output backup.json');

            process.exit(1);

        }

        backup(targetPath, outputPath);

        break;

    default:

        console.log("Unknown command.");

}