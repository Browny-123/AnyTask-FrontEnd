import axios from "axios";

class ApiHandler {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5500/"
    });
  }
  post(route, info, config) {
    return this.api.post(route, info, config);
  }
  get(route, query, config) {
    return this.api.get(route, query);
  }
}

export default ApiHandler;
