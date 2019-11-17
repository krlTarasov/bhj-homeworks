let editor = document.getElementById('editor');
if (!localStorage.editorValue) localStorage.editorValue = '';
editor.value = localStorage.editorValue
editor.addEventListener('input', () => {
    localStorage.editorValue = editor.value;
})