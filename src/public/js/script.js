window.addEventListener('load', () => {
    const catForm = document.getElementById('cats');
    const catSubmit = catForm.elements['submit'];
    const catOutput = catForm.elements['output']

    catSubmit.addEventListener('click', async () => {
        const res = await fetch('/api/cats');
        const resJson = await res.json();
        catOutput.innerHTML = resJson.cats;
    });
});