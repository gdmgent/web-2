function openDialog($dialog) {
    $dialog.showModal();

    const $closeButtons = $dialog.querySelectorAll("[data-action='close']");

    $closeButtons.forEach($closeButton => {
        $closeButton.addEventListener('click', () => {
            $dialog.close();
        }, { once: true })
    });
}

function initDialogs() {
    const $openButtons = document.querySelectorAll('[data-dialog-trigger]');

    if ($openButtons) {
        $openButtons.forEach($openButton => {
            $openButton.addEventListener('click', () => {
                const dialogName = $openButton.getAttribute('data-dialog-trigger');

                const $dialog = document.querySelector(`[data-dialog=${dialogName}]`);

                if ($dialog) {
                    openDialog($dialog);
                }
            });
        });
    }
}

export default initDialogs;