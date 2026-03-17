import { apiFetch } from "./api";

export const createEmployee = (data) => {
  return apiFetch("/employee", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const getEmployees = () => {
  return apiFetch("/employee");
};