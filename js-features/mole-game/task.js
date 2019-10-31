let holes = document.getElementsByClassName('hole'),
lost = document.getElementById('lost'), dead = document.getElementById('dead');

function getHole(num) {
    let hole = document.getElementById(`hole${num}`);
    hole.onclick = () => {
        if (hole.className == 'hole hole_has-mole') {
            dead.textContent++;
            console.log(dead.textContent);
        } else {
            lost.textContent++;
        }
        
        if (dead.textContent >= 10) {
            alert('you win');
            dead.textContent = lost.textContent = 0;
        }

        if (lost.textContent >= 5) {
            alert('you lost');
            dead.textContent = lost.textContent = 0;
        }
    }
}

for (let i = 1; i < 10; i++) {
    getHole(i);
}