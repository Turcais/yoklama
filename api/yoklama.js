// /api/yoklama.js
export default async function handler(req, res) {
  // Apps Script URL’in
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwYHzA9ebmXQ9d8F_i91FF4dbY7CaAXWKeO-LqAvoy1ZoyURMW3u-kGSFjsaMAnJ7-z/exec";

  // Apps Script’e POST isteği atıyoruz (server-side)
  const response = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(req.body)
  });

  const text = await response.text();

  // Tarayıcıya CORS header’ları ile geri veriyoruz
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  res.status(200).send(text);
}