import axios from "axios";
const LocalBASE_URL="http://localhost:8000/api";
const BASE_URL = "https://notesharingbackend-ankitkr437.onrender.com/api/";

export const pf="https://notesharingbackend-ankitkr437.onrender.com/images";

const backend_url = "https://notesharing-backend-4suu.onrender.com/api";

export const publicRequest = axios.create({
  baseURL: backend_url,
});

export const userRequest = axios.create({
  baseURL: backend_url,
});