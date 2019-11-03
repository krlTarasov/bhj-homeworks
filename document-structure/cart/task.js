let incButtons = document.getElementsByClassName('product__quantity-control_inc'),
decButtons = document.getElementsByClassName('product__quantity-control_dec'),
addButtons = document.getElementsByClassName('product__add'),
cart = document.getElementsByClassName('cart__products')[0];

Array.from(incButtons).forEach(button => {
    button.addEventListener('click', () => {
        button.previousElementSibling.textContent++;
    })
});

Array.from(decButtons).forEach(button => {
    button.addEventListener('click', () => {
        if(button.nextElementSibling.textContent > 0) button.nextElementSibling.textContent--;
    })
});

Array.from(addButtons).forEach((button) => {
    button.addEventListener('click', () => {
        let oldProduct;
        if (Array.from(cart.children).some(child => {
            console.log(child.dataset.id);
            if (child.dataset.id == button.closest('.product').dataset.id) {
                oldProduct = child;
                return true;
            };
        })) {
            oldProduct.children[1].textContent = Number(oldProduct.children[1].textContent) + Number(button.previousElementSibling.children[1].textContent.trim());
            
        } else {
            cart.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${
                button.closest('.product').dataset.id
            }">
                <img class="cart__product-image" src="${
                    button.closest('.product__controls').previousElementSibling.src
                }">
                <div class="cart__product-count">${
                    button.previousElementSibling.children[1].textContent.trim()
                }</div>
            </div>
            `);
        }
    })
})