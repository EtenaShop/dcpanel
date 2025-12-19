const API_URL = "https://ricky-briefing-loc-involve.trycloudflare.com";
const API_KEY = "123";

function kaydet() {
  const prefix = document.getElementById("prefix").value;
  const aktif = document.getElementById("aktif").value === "true";

  fetch(API_URL + "/config", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": API_KEY
    },
    body: JSON.stringify({
      prefix: prefix,
      aktif: aktif
    })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("durum").innerText = "✅ Ayarlar kaydedildi";
  })
  .catch(() => {
    document.getElementById("durum").innerText = "❌ Hata oluştu";
  });
}

function restart() {
  fetch(API_URL + "/restart", {
    method: "POST",
    headers: { "key": API_KEY }
  })
  .then(() => {
    document.getElementById("durum").innerText = "🔄 Bot restartlandı";
  });
}
