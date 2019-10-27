let subMenuList = document.querySelectorAll('.menu_sub');

for (const elem of subMenuList) {
    let parent = elem.parentElement;
    console.log(elem);
    parent.onclick = () => {
        console.log(elem);
        elem.className = 'menu menu_sub menu_active';
        return false;
    }
}
