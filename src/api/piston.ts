import axios from "axios";
import { LANGUAGE_VERSIONS, LanguagesNames } from "../constants";

export const pistonAxios = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function excuteCode(language: LanguagesNames, sourceCode: string) {
  const response = await pistonAxios.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
}
