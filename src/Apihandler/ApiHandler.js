import axios from "axios";

class ApiHandler {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    });
  }
  post(route, info, config) {
    return this.api.post(route, info, config);
  }
  get(route, query) {
    return this.api.get(route, query);
  }
  delete(route) {
    return this.api.delete(route);
  }
}

export default ApiHandler;
