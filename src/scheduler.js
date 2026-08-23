console.log("Cron scheduler ticking every minute. Reading expressions...");
setInterval(() => {
  const now = new Date();
  console.log(`[${now.toLocaleTimeString()}] Ticking cron schedules...`);
}, 60000);
