let rotatorCases = document.getElementsByClassName('rotator__case'),
i = 0;
setInterval(() => {
    
    rotatorCases[i].classList.remove('rotator__case_active');
    rotatorCases[(i + 1) >= rotatorCases.length ? i = 0 : ++i].classList.add('rotator__case_active');
}, 1000)