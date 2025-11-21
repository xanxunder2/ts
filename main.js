const fs = require("fs");

// package.json লোড করো
const pkg = JSON.parse(fs.readFileSync("./package.json"));

// আসল, পরিবর্তন করতে না পারা value গুলো
const ORIGINAL = {
    name: "MyBotProject",
    author: "YourName",
    facebook: "https://facebook.com/yourpage"
};

// 1️⃣ Project Name check
if (pkg.name !== ORIGINAL.name) {
    console.log("❌ Project Name changed! Bot blocked.");
    process.exit(1);
}

// 2️⃣ Author check
if (pkg.author !== ORIGINAL.author) {
    console.log("❌ Author changed! Bot blocked.");
    process.exit(1);
}

// 3️⃣ Facebook URL check
if (pkg.facebook !== ORIGINAL.facebook) {
    console.log("❌ Facebook URL changed! Bot blocked.");
    process.exit(1);
}

console.log("✔ package.json integrity OK");

const fs = require("fs");

// config.json read করো
const config = JSON.parse(fs.readFileSync("./config.json"));

// তোমার আসল admin UID
const REAL_ADMIN = "10001234567890";

// কেউ config.json এ admin uid change করেছে?
if (config.admin !== REAL_ADMIN) {
    console.log("❌ Admin UID changed!");
    console.log("➡ Bot cannot start.");
    process.exit(1);
}

console.log("✔ Admin UID OK");

const fs = require("fs");

// package.json লোড করো
const pkg = JSON.parse(fs.readFileSync("./package.json"));

// আসল, পরিবর্তন করতে না পারা value গুলো
const ORIGINAL = {
    name: "MyBotProject",
    author: "YourName",
    facebook: "https://facebook.com/yourpage"
};

// 1️⃣ Project Name check
if (pkg.name !== ORIGINAL.name) {
    console.log("❌ Project Name changed! Bot blocked.");
    process.exit(1);
}

// 2️⃣ Author check
if (pkg.author !== ORIGINAL.author) {
    console.log("❌ Author changed! Bot blocked.");
    process.exit(1);
}

// 3️⃣ Facebook URL check
if (pkg.facebook !== ORIGINAL.facebook) {
    console.log("❌ Facebook URL changed! Bot blocked.");
    process.exit(1);
}

console.log("✔ package.json integrity OK");

