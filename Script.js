function checkURL() {
  let url = document.getElementById("url").value;
  let result = document.getElementById("result");

  if (url.includes("login") || url.includes("verify")) {
    result.innerHTML = "⚠️ Phishing URL Detected";
    result.style.color = "red";
  } else {
    result.innerHTML = "✅ Safe URL";
    result.style.color = "green";
  }
}
