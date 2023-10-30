export default (function () {
    if (!window.location.pathname.includes("artikel.html")) return // guard clause

    const OBSERVER = new IntersectionObserver(callback, {
        threshold: 1.0
    })
    const PARAGRAPHS = document.querySelectorAll(".artikel p")

    const btnObserve = new IntersectionObserver(btnCallback, {
        threshold: 1.0
    });
    const TOTOP = document.querySelector(".top");

    PARAGRAPHS.forEach(function (p) {
        OBSERVER.observe(p);
    });

    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.style.fontWeight = "normal"
            }
            if (entry.intersectionRatio >= 0.5) {
                entry.target.style.fontWeight = "bold"
            }
        });
    }

    btnObserve.observe(TOTOP);

    function btnCallback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.style.opacity = "0"
            }
            if (entry.intersectionRatio >= 0.5) {
                entry.target.style.opacity = "1"
                entry.target.style.width = "100px"
                TOTOP.addEventListener("click", () => {
                    window.scrollTo(0, 0)
                })
            }
        })
    }
})();
