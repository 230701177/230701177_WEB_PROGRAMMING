// write you Scripts here
document.addEventListener("DOMContentLoaded", function () {
    const para = document.getElementById("textPara");
    const btn = document.getElementById("highlightBtn");
    if (btn && para) {
        btn.addEventListener("click", function () {
            para.classList.toggle("highlight");
        });
    }
});