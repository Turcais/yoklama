// /api/yoklama.js
export default async function handler(req, res) {
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwYHzA9ebmXQ9d8F_i91FF4dbY7CaAXWKeO-LqAvoy1ZoyURMW3u-kGSFjsaMAnJ7-z/exec";

const res = await fetch(API_URL, {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({uuid, name, email, phone})
});
const json = await res.json(); // text yerine json
statusEl.innerText = json.message;


  // Tarayıcıya CORS header’ı ile geri dön
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.status(200).send(text);
}

