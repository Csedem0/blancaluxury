import axios from "axios";

const BASE_URL = "https://shopwithvikbackend.onrender.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmRiMDY3YWYyNTYzMTdkYzc4ZmRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTEwOTI0MCwiZXhwIjoxNzIzNzQ5MjQwfQ.CNjE1mctmi6hvKFtrBkNphAMgqNfbNaMI7mKe4K14vI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
