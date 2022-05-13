let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.getElementById('modal');
let imagen = document.getElementById('modal__img');
let boton = document.getElementById('modal__boton');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', (e) => {
        modal.classList.toggle('modal--show');
        let src = e.target.src;
        imagen.setAttribute("src", src);
    });
};

boton.addEventListener('click', () => {
    modal.classList.toggle('modal--show');
});

