let cookies = document.getElementById('cookie'), 
counter = document.getElementById('clicker__counter'),
i = 0;
cookies.onclick = () => {
    i++;
    counter.textContent = i;
    cookies.width = 200 + 10 * (i % 2);
}