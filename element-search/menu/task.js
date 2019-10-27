let subMenuList = document.querySelectorAll('.menu_sub');

for (const elem of subMenuList) {
    let parent = elem.parentElement;
    console.log(elem);
    parent.onclick = () => {
        console.log(elem);
        if (elem.className == 'menu menu_sub') {
            elem.className = 'menu menu_sub menu_active';
        } else {
            elem.className = 'menu menu_sub';
        }
        return false;
    }
}
