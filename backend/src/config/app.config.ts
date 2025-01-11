import { getEnv } from "../common/utils/get-env";
const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "developement"),
  APP_ORIGIN: getEnv("APP_ORIGIN", "localhoast"),
  PORT: getEnv("PORT", "5000"),
  MONGO_URI: getEnv("MONGO_URI"),
  BASE_PATH: getEnv("BASE_PATH", "/api/v1"),
  JWT: {
    SECRET: getEnv("JWT_SECRET"),
    EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15m"),
    REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
    REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_IN", "30d"),
  },
});
export const config = appConfig();
