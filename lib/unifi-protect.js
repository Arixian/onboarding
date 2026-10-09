import { getClient } from "./api.js";

const protectUrl = process.env.UNIFI_PROTECT_URL;
const apiKey = process.env.UNIFI_PROTECT_API_KEY;

if (!protectUrl || !apiKey) {
  throw new Error("UNIFI_PROTECT_URL and UNIFI_PROTECT_API_KEY must be set");
}

const client = getClient(protectUrl, apiKey);

export async function getApplicationInfo() {
  const response = await client.get("/proxy/protect/integration/v1/meta/info");
  return response.data;
}

export async function getAllCameras() {
  const response = await client.get("/proxy/protect/integration/v1/cameras");
  return response.data;
}

export async function getRTSPStreamsForCamera(cameraId) {
  const response = await client.get(
    `/proxy/protect/integration/v1/cameras/${cameraId}/rtsps-stream`
  );
  return response.data;
}

export async function getCameraSnapshot(cameraId) {
  const response = await client.get(
    `/proxy/protect/integration/v1/cameras/${cameraId}/snapshot`,
    {
      responseType: "arraybuffer",
    }
  );

  return response.data;
}
