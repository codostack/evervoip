// src/usePageTranslator.js
import { useEffect, useRef, useState } from "react";
import { batchTranslateText } from "./libreTranslate";

export default function usePageTranslator(language) {
  const originalTextsRef = useRef([]);
  const [loading, setLoading] = useState(false); // <-- loader state

  useEffect(() => {
    if (!language) return;

    const getTextNodes = (node) => {
      let nodes = [];

      // Skip style, script, noscript
      if (node.nodeType === Node.ELEMENT_NODE &&
          ["STYLE", "SCRIPT", "NOSCRIPT"].includes(node.tagName)) {
        return [];
      }

      if (
        node.nodeType === Node.TEXT_NODE &&
        node.textContent.trim() !== "" &&
        !node.parentElement?.closest("[data-no-translate]")
      ) {
        nodes.push(node);
      } else {
        node.childNodes.forEach((child) => {
          nodes = nodes.concat(getTextNodes(child));
        });
      }

      return nodes;
    };

    const nodes = getTextNodes(document.body);

    if (originalTextsRef.current.length === 0) {
      originalTextsRef.current = nodes.map((n) => n.textContent);
    }

    const translateAll = async () => {
      setLoading(true); // start loader
      const originals = originalTextsRef.current;

      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const page = pathParts.length > 0 ? pathParts[0] : "home";

      // ⚡ Skip translation if home page AND language is Korean
      if (page === "home" && language === "ko") {
        nodes.forEach((n, i) => (n.textContent = originals[i]));
        setLoading(false); // stop loader
        return;
      }

      // Reset to English if selected
      if (language === "en") {
        nodes.forEach((n, i) => (n.textContent = originals[i]));
        setLoading(false); // stop loader
        return;
      }

      try {
        const translated = await batchTranslateText(originals, page, language);

        translated.forEach((text, i) => {
          const clean = (text || "").replace(/\(.*?\)/g, "").trim();
          nodes[i].textContent = clean || originals[i];
        });
      } catch (error) {
        console.error("Translation failed:", error);
      } finally {
        setLoading(false); // stop loader
      }
    };

    translateAll();
  }, [language]);

  return loading; // <-- expose loader state
}