const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const inputFile = path.resolve(__dirname,"dbegau_20251229153127.sql.gz");

const readFile = fs.createReadStream(inputFile);
const response = readFile.pipe(zlib.createGunzip());
const dataFile = response.pipe(fs.createWriteStream("output.sql"));