let request = new XMLHttpRequest();
let itemsWrapper = document.getElementById('items');
let loader = document.getElementById('loader');
request.open('GET', ' https://netology-slow-rest.herokuapp.com');
request.responseType = 'json';
request.onreadystatechange = () => {
    if (request.readyState === 4) {
        let response = request.response;
        console.log(response.response.Valute)
        console.log(typeof response.response.Valute);
        for (const key in response.response.Valute) {
            if (response.response.Valute.hasOwnProperty(key)) {
                const valute = response.response.Valute[key];
                console.log(valute);
                itemsWrapper.insertAdjacentHTML('beforeend',
                `<div class="item">
                <div class="item__code">
                    ${valute.CharCode}
                </div>
                <div class="item__value">
                    ${valute.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
                </div>`)
            }
        }
        loader.classList.remove('loader_active');
    }
}
request.send();