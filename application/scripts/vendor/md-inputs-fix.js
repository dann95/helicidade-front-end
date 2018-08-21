document.addEventListener("change", function(event) {
    var el = event.target;
    if (el && el.matches(".form-element-field")) {
        el.classList[el.value ? "add" : "remove"]("-hasvalue");
    }
});