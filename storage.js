// Save to localStorage
export function saveUrls(urls) {
  localStorage.setItem("shortener_urls", JSON.stringify(urls));
}

// Load from localStorage
export function loadUrls() {
  const data = localStorage.getItem("shortener_urls");
  return data ? JSON.parse(data) : [];
}
