import app from "./app";
import { logger } from "./lib/logger";
import { runAutomatedCheck } from "./routes/trademark-monitoring";

const rawPort = process.env["PORT"];

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

app.listen(port, (err) => {
  if (err) {
    logger.error({ err }, "Error listening on port");
    process.exit(1);
  }

  logger.info({ port }, "Server listening");
});

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

setTimeout(() => {
  runAutomatedCheck().catch((err) => {
    logger.error({ err }, "scheduled trademark monitoring check failed to run");
  });
}, 60_000);

setInterval(() => {
  runAutomatedCheck().catch((err) => {
    logger.error({ err }, "scheduled trademark monitoring check failed to run");
  });
}, ONE_DAY_MS);
