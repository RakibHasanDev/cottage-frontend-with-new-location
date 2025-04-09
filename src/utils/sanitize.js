// utils/sanitize.js
import createDOMPurify from "isomorphic-dompurify";
import linkifyHtml from "linkify-html";

export const sanitizeAndLinkify = (html) => {
  const structured = html
    .replace(/(<br\s*\/?>\s*){2,}/gi, "</p><p>") // Double break = new paragraph
    .replace(/(<br\s*\/?>)+/gi, ""); // Remove leftover single <br/>

  const wrapped = `<p>${structured}</p>`
    .replace(/<p>\s*<\/p>/g, "") // Clean empty paragraphs
    .replace(/<p>\s*<p>/g, "<p>")
    .replace(/<\/p>\s*<\/p>/g, "</p>");

  const linked = linkifyHtml(wrapped, {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-blue-600 hover:underline",
  });

  return createDOMPurify.sanitize(linked, {
    USE_PROFILES: { html: true },
  });
};
