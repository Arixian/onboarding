import fs from "fs";

import {
  getCameraSnapshot,
} from "./lib/unifi-protect.js";

const cameraId = process.argv[2];
if (!cameraId) {
  console.error("Usage: node test.js <camera-id>");
  process.exit(1);
}

const snapshot = await getCameraSnapshot(cameraId);
fs.writeFileSync("snapshot.jpg", Buffer.from(snapshot), "binary");
