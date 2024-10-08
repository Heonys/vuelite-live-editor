import axios from "axios";

export const npmAxios = axios.create({
  baseURL: "https://registry.npmjs.org/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getLatestVersion(packageName: string) {
  const response = await npmAxios.get(packageName);
  return response.data["dist-tags"].latest;
}
