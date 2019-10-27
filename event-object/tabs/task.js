let tabs = document.getElementsByClassName('tab'),
tabContens = document.getElementsByClassName('tab__content');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        for (const tab of tabs) {
            tab.classList.remove('tab_active')
        }
        for (const tabContent of tabContens) {
            tabContent.classList.remove('tab__content_active')
        }
        tabs[i].classList.add('tab_active');
        tabContens[i].classList.add('tab__content_active');
    })
}