let editor = document.getElementById('editor');
if (!editor.value) editor.value = localStorage.editorValue
editor.addEventListener('input', () => {
    localStorage.editorValue = editor.value;
})