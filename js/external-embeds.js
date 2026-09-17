document.querySelectorAll(".external-embed").forEach((placeholder) => {
  const loadButton = placeholder.querySelector(".external-embed-load");
  if (!loadButton) {
    return;
  }

  loadButton.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    const width = Number.parseInt(placeholder.dataset.embedWidth, 10);
    const height = Number.parseInt(placeholder.dataset.embedHeight, 10);

    iframe.className = "external-embed-frame";
    iframe.src = placeholder.dataset.embedUrl;
    iframe.title = placeholder.dataset.embedTitle;
    iframe.loading = "eager";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    if (Number.isFinite(width) && Number.isFinite(height)) {
      iframe.width = String(width);
      iframe.height = String(height);
      iframe.style.aspectRatio = `${width} / ${height}`;
    }

    placeholder.classList.add("is-loaded");
    placeholder.replaceChildren(iframe);
  });
});
