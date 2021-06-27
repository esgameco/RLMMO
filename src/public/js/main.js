import apihelper from './helper/api.js'

window.addEventListener('load', () => {
    const catForm = document.getElementById('cats');
    const catSubmit = catForm.elements['submit'];
    const catOutput = catForm.elements['output'];

    catSubmit.addEventListener('click', async () => {
        const res = await apihelper.getCats();
        catOutput.innerHTML = res.data.cats;
    });
});
