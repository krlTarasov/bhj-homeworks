let tooltipOwners = document.getElementsByClassName('has-tooltip');

Array.from(tooltipOwners).forEach((tooltipOwner) => {
    tooltipOwner.addEventListener('click', () => {
        event.preventDefault();
        tooltipOwner.insertAdjacentHTML('afterend', `<div class="tooltip" style="display: block; left: ${tooltipOwner.getBoundingClientRect().left}px; top: ${tooltipOwner.getBoundingClientRect().bottom}px">
        ${tooltipOwner.title}
        </div>`)
    })
})