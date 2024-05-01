var guidGenerator = (function () {
    'use strict'
    const generateElement = document.getElementById('generate');
    const resultElement = document.getElementById('result');
    const uppercaseElement = document.getElementById('uppercase');
    const clipboardElement = document.getElementById('clipboard');
    const copiedElement = document.getElementById('copied');

    function registerEvents() {
        generateElement.addEventListener('click', () => {
            autoGenerateGuid();
            hideCopiedNotification();
        });

        uppercaseElement.addEventListener('change', () => {
            autoGenerateGuid();
        });

        clipboardElement.addEventListener('click', () => {
            const textarea = document.createElement('textarea');
            const guid = resultElement.value;

            if (!guid) {
                return;
            }

            textarea.value = guid;
            document.body.appendChild(textarea);
            textarea.select();

            if (!navigator.clipboard) {
                document.execCommand('copy');
            } else {
                navigator.clipboard.writeText(guid);
            }

            textarea.remove();
            showCopiedNotification();
        });
    }

    function hideCopiedNotification() {
        if (copiedElement.classList.contains("show")) {
            copiedElement.classList.remove("show");
        }
    }

    function showCopiedNotification() {
        hideCopiedNotification();
        copiedElement.classList.add("show");
        setTimeout(hideCopiedNotification, 1000);
    }

    function generateGuid() {
        let newGUID = crypto.randomUUID();
        if (uppercaseElement.checked) {
            newGUID = newGUID.toUpperCase();
        }
        crypto.randomUUID
        return newGUID;
    }

    function autoGenerateGuid() {
        resultElement.value = generateGuid();
    }

    return {
        init: function () {
            registerEvents();
            autoGenerateGuid();
        }
    }
})();

guidGenerator.init();