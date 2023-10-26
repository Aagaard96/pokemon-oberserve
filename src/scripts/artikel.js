export default (function () {
    if (!window.location.pathname.includes("artikel.html")) return // guard clause

    const OBSERVER = new IntersectionObserver(callback, {
        threshold: 1.0
    })

    const paragraphs = document.querySelectorAll(".artikel p")

    paragraphs.forEach(p => observer)

})()