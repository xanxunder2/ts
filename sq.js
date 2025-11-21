const fs = require("fs");
const axios = require("axios");

/* ===============================
    1) PACKAGE.JSON PROTECTION
================================ */
const pkg = JSON.parse(fs.readFileSync("./package.json"));

const ORIGINAL = {
    name: "MyBotProject",
    author: "YourName",
    facebook: "https://facebook.com/yourpage"
};

function checkPackageLock() {

    if (pkg.name !== ORIGINAL.name) {
        console.log("❌ Project name changed! Bot blocked.");
        process.exit(1);
    }

    if (pkg.author !== ORIGINAL.author) {
        console.log("❌ Author changed! Bot blocked.");
        process.exit(1);
    }

    if (pkg.facebook !== ORIGINAL.facebook) {
        console.log("❌ Facebook URL changed! Bot blocked.");
        process.exit(1);
    }

    console.log("✔ Package.json Lock Passed");
}


/* ===============================
    2) MAIN PATH SERVER VERIFY
================================ */
const MAIN_API = "https://yourdomain.com/mainpath.json";

let localMain =
    pkg.main ||
    (pkg.scripts?.start?.replace("node ", ""));

async function checkMainPath() {
    try {
        const res = await axios.get(MAIN_API);
        const serverMain = res.data.main;

        if (localMain !== serverMain) {
            console.log("❌ MAIN PATH DOES NOT MATCH SERVER!");
            console.log("➡ Update Required. Project modified.");
            process.exit(1);
        }

        console.log("✔ Main Path Verified");

    } catch (e) {
        console.log("❌ Cannot verify main path from server!");
        process.exit(1);
    }
}


/* ===============================
   3) GLOBAL BAN CHECK
================================ */
const config = JSON.parse(fs.readFileSync("./config.json"));
const ADMIN_UID = config.admin;

const BAN_API = "https://yourdomain.com/banned.json";

async function checkBan() {
    try {
        const res = await axios.get(BAN_API);
        const bannedList = res.data.banned;

        if (bannedList.includes(ADMIN_UID)) {
            console.log("\n❌ You are banned!");
            console.log("➡ Contact owner.\n");
            process.exit(1);
        }

        console.log("✔ Global Ban Passed");

    } catch (err) {
        console.log("❌ Cannot load ban list!");
        process.exit(1);
    }
}


/* ===============================
       START SAFE SYSTEM
================================ */

(async () => {
    checkPackageLock();
    await checkMainPath();
    await checkBan();

    console.log("\n🔥 All Security Checks Passed!");
    console.log("➡ Starting Bot...\n");

    require("./b.js");
})();
