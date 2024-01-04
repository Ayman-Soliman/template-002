let menuBar = document.querySelector('.toggle-bar');
let menus = document.querySelector('.links');



menuBar.onclick = function () {
    menus.classList.toggle('flex-menu');
    // if (menus.style.display = 'none') {
    //     console.log('menus are disply  none');
    //     // menus.style.display = 'flex';
    //     // menus.style.position = 'absolute';
    //     // menus.style.top = '100%';
    //     // menus.style.right = '0';
    //     // menus.style.flexDirection = 'column';
    // }
}