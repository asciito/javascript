window.addEventListener('load', () => {
    const inputs = document.getElementsByClassName('input-file__wrapper');

    const addDragClass = el => el.classList.add('is-dropping');
    const removeDragClass = el => el.classList.remove('is-dropping');

    for (const inputWrapper of inputs) {
        const fakeInput = inputWrapper.querySelector('.input-file__input');
        const input = inputWrapper.querySelector('input[type="file"]');
        const info = inputWrapper.querySelector('.input-file__info');
        
        fakeInput.addEventListener('click', () => {
            if (! input.files.length) return input.click()
        });

        input.addEventListener('change', e => {
            if (input.files.length) {
                addDragClass(fakeInput);
                info.querySelector('p').classList.add('disable')
                info.querySelector('div').classList.remove('disable');
            }
        });

        fakeInput.addEventListener('dragenter', e => addDragClass(e.target));
        fakeInput.addEventListener('dragleave', e => removeDragClass(e.target));
        fakeInput.addEventListener('dragover', e => e.preventDefault());
        document.addEventListener('drop', e => {
            e.preventDefault();
            
            if (e.dataTransfer.files.length) {
                input.files =  e.dataTransfer.files;
                addDragClass(e.target);

                info.querySelector('p').classList.add('disable')
                info.querySelector('div').classList.remove('disable');
            }
        }, false);
    }
});