window.onload = function () {
    setTimeout(window.print(), 500);
    var search = location.search.substring(1);
    const params = JSON.parse(
    '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
    return key === "" ? value : decodeURIComponent(value);
    }
    );
    for (const [key, value] of Object.entries(params)) {
    if (value !== "true") {
    const element = document.getElementById(key);
    element.classList.add("disable");
    }
    }
    };