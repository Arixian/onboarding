import { getClient } from "./api.js";

const client = getClient(
  "https://192.168.0.196",
  "CPvwUKViW0wy3AmqtZUtBeJQPvAB_KVw"
);

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
