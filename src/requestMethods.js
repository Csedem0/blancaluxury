import axios from "axios";

const BASE_URL = "https://shopwithvikbackend.onrender.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmRiMDY3YWYyNTYzMTdkYzc4ZmRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTEzMDQwNSwiZXhwIjoxNzA1NDc2MDA1fQ.j9rIOAL8TTG1W0tT7EuUXgEKPASXL7AVRIYwexF8fzw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
