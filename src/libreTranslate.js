// src/libreTranslate.js
export async function batchTranslateText(texts, page, targetLang) {
  const API_URL = "https://translator.cloudqlobe.com/translate"; // Flask backend

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        texts: texts,
        lang: targetLang,
        page: page,
        project: "evershine"
      }),
    });

    const data = await response.json();
    return data.translatedTexts || texts;
  } catch (err) {
    console.error("Batch translation failed:", err);
    return texts;
  }
}