import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nytimes.com/svc/topstories/v2/",
});

export default api;

// api-key=HbIHW4Mq94mvMAKFZpb4RrPqy748UAkP
