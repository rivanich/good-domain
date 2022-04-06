const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
    //boucler sur tous les items => retirer la classe "is-active"
    items.forEach(item => 
        {

    item.classList.remove('is-active');
    item.removeAttribute('style');
    })
    
    const elementColor = el.dataset.activeColor;

    //styliser l'indicateur 
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.backgroundColor = elementColor;
    indicator.style.left = `${el.offsetLeft}px`;

    //ajout la classe is-active
el.classList.add('is-active');
el.style.color = elementColor;

}

items.forEach((item, index) => {
        item.addEventListener('click', e => 
        {
            handleIndicator(e.target)
        });
        item.classList.contains('is-active') && handleIndicator(item);
    });

/*styliser ladetection des majuscules */
const capsMessage =
document.querySelector('#message');

window.addEventListener('keyup', event => {

    if(event.getModifierState('CapsLock')) {
        capsMessage.style.display = "flex";
    }
    else {
        capsMessage.style.display = "none";
    }
});
