document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    heading.style.opacity = 0;
    heading.style.transition = "opacity 2s";

    setTimeout(() => {
        heading.style.opacity = 1;
    }, 500);
});