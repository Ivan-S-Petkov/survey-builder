import axios from "axios";

const client = axios.create({
  baseURL: "https://run.mocky.io/v3/950dc5bf-71bf-4134-bb6c-541e9fc68e8d",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const reqres = axios.create({
  baseURL: "https://reqres.in/api/users",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export function postForm(data) {
  return reqres.post("", data);
}
