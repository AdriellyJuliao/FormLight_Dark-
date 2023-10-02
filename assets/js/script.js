const modeIcon = document.getElementById('mode_icon')

const IconPassword = document.getElementById('IconPassword')

modeIcon.addEventListener('click', () =>{
    const form = document.getElementById('login_form')
    const container = document.getElementById('container')

    if (modeIcon.classList.contains('fa-moon')) {
        modeIcon.classList.remove('fa-moon')
        modeIcon.classList.add('fa-sun')
        
        form.classList.add('dark')
        container.classList.add('dark')
    }
    else{
        modeIcon.classList.add('fa-moon')
        modeIcon.classList.remove('fa-sun')
        form.classList.remove('dark')
        container.classList.remove('dark')
    }
})

/*passwordOcult.addEventListener('click', ()=>{
    if(passwordOcult.classList.contains('fa-lock')){
        passwordOcult.classList.remove('fa-lock')
        passwordOcult.classList.add('fa-unlock')

    } else{
        passwordOcult.classList.add('fa-lock')
        passwordOcult.classList.remove('fa-unlock')
    }
})*/

function passwordOcult() {
    const password = document.getElementById('password')
    const IconPassword = document.getElementById('IconPassword')

    if(IconPassword.classList.contains('fa-lock')){
        IconPassword.classList.remove('fa-lock')
        IconPassword.classList.add('fa-unlock')

    } else{
        IconPassword.classList.add('fa-lock')
        IconPassword.classList.remove('fa-unlock')
    }
}