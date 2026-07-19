#!/usr/bin/env node

const { inspect } = require("./commands/inspect");

const args = process.argv.slice(2);

const command = args[0];

const pathIndex = args.indexOf("--path");

const targetPath =
    pathIndex >= 0
        ? args[pathIndex + 1]
        : null;

switch (command) {

    case "inspect":

        if (!targetPath) {

            console.log("Usage:");

            console.log('stack inspect --path "<9router-folder>"');

            process.exit(1);
        }

        inspect(targetPath);

        break;

    default:

        console.log("Unknown command.");

}