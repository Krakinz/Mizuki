//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var fs = require("fs-extra");
var logger = require("@/logger");
var git = require("simple-git")();
var { exec } = require("child_process");

var gitPull = async () => {
  try {
    logger.info("📢: Checking for updates...");
    await git.fetch();
    var newCommits = await git.log(["magneum..origin/magneum"]);
    if (newCommits.total) {
      logger.info("📢: New update pending, updating...");
      await git.pull("origin", "Magneum™");
      var update = await git.diffSummary(["--name-only"]);
      if (update.files.includes("package.json")) {
        logger.info(
          "📢: Changes in package.json detected, updating dependencies..."
        );
        await fs.emptyDir(__dirname);
        await new Promise((resolve, reject) => {
          var childProcess = exec("yarn install");
          childProcess.stderr.pipe(process.stderr);
          childProcess.stdout.pipe(process.stdout);
          childProcess.on("close", (code) => {
            if (code === 0) {
              logger.info("📢: Installed dependencies.");
              resolve();
            } else {
              logger.error("📢: Failed to install dependencies.");
              reject(new Error("Failed to install dependencies."));
            }
          });
        });
      } else {
        logger.info(
          "📢: No changes in package.json. Skipping dependency update."
        );
      }

      logger.info("📢: Updated the bot with latest changes.");
    } else {
      logger.info("📢: bot is already working on the latest version.");
    }
  } catch (error) {
    logger.error(`📢: Error occurred during update: ${error.message}`);
  }
};

module.exports = gitPull;

