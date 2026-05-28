// Task 3 — Module: Export a config

// config.js
export const API_BASE_URL = "https://api.example.com";

// main.js
import { API_BASE_URL } from "./config.js";

console.log(API_BASE_URL);