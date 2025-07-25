import axios from "axios";
import https from "https";

export function getClient(baseURL, apiKey) {
  const client = axios.create({
    baseURL,
    headers: {
      "X-API-KEY": apiKey,
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  return client;
}
