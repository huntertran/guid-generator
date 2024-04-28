var guidGenerator = (function () {
    'use strict'
    const generateButton = document.getElementById('generate');
    const resultTextbox = document.getElementById('result');

    function registerEvents() {
        generateButton.addEventListener('click', () => {
            resultTextbox.value = generateGuid();
        });
    }

    function generateGuid() {
        return crypto.randomUUID();
    }

    return {
        init: function () {
            registerEvents();
        }
    }
})();

guidGenerator.init();