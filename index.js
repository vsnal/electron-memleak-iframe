(function() {
    function startup() {
        var element = null;

        setInterval(function() {
            if (element) {
                element.remove();
            }

            element = document.createElement('iframe');
            document.body.appendChild(element);
        }, 100);
    }

    window.addEventListener('load', startup);
})();
