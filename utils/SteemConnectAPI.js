import steemconnect from "steemconnect";
import { STEEMCONNECT_CALLBACK_URL } from "../config";

const api = steemconnect.Initialize({
  app: "travelfeed.app",
  callbackURL: STEEMCONNECT_CALLBACK_URL,
  accessToken: "access_token",
  scope: ["login", "vote", "comment", "custom_json"]
});

export default api;
