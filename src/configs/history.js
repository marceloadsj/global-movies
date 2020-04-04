import { createBrowserHistory } from "history";

export default createBrowserHistory({
  basename:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_NAME
      : "/",
});
