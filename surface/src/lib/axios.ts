import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default apiClient;
