
export default (function () {
    if (!window.location.pathname.includes("artikel.html")) return // guard clause
    const json = {
        "name": "Brian",
        "age": 2561,
        "hair_color": false
    }

    localStorage.setItem("fnyf", JSON.stringify(json))

    console.log(JSON.parse(localStorage.getItem("fnyf")).age)
})()