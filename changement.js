const changementThemeBtn = document.querySelector('.changement')
let toggleTheme = 0;

changementThemeBtn.addEventListener('click', () => {
    if(toggleTheme === 0){
        document.documentElement.style.setProperty('--ecriture', 'black');
        document.documentElement.style.setProperty('--background', 'url(omerde.png)no-repeat center');
        toggleTheme++;

    }else {
        document.documentElement.style.setProperty('--background', 'url(psg.png)no-repeat center');
        document.documentElement.style.setProperty('--ecriture', 'red');
        toggleTheme--;
    }
})