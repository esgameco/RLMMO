import apihelper from './helper/api.js'

window.addEventListener('load', () => {
    const catForm = document.getElementById('cats');
    const catSubmit = catForm.elements['submit'];
    const catOutput = catForm.elements['output'];

    catSubmit.addEventListener('click', async () => {
        catOutput.innerHTML = await apihelper.getCats();
    });

    const plusTwoForm = document.getElementById('plustwo');
    const plusTwoInput = plusTwoForm.elements['num'];
    const plusTwoSubmit = plusTwoForm.elements['submit'];
    const plusTwoOutput = plusTwoForm.elements['output'];

    plusTwoSubmit.addEventListener('click', async () => {
        plusTwoOutput.innerHTML = await apihelper.postPlusTwo(plusTwoInput.value);
    });
});
