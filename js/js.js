const arrow = document.getElementById('arrow');
const sidebar = document.getElementById('sidebar');
const cover = document.getElementById('cover');
const container = document.getElementById('container');
const userInfo = document.getElementById('userInfo');
const textSideBar = document.getElementsByClassName('sidebar-text-item')
const social = document.getElementById('social')

const handelSideBar = () => {
    if (sidebar.classList.contains('w-[250px]')) {
        handelOpenSideBar()
    }
    else {
        handelCloseSideBar()
    }
}


const handelOpenSideBar = () => {
    sidebar.classList.remove('w-[250px]')
    sidebar.classList.add('w-[90px]')

    container.classList.remove('lg:w-[calc(100%-250px)]')
    container.classList.add('lg:w-[calc(100%-90px)]')

    userInfo.classList.remove('flex')
    userInfo.classList.add('hidden')

    social.classList.remove('flex')
    social.classList.add('hidden')

    arrow.classList.remove('rotate-180')

    for (let i of textSideBar) {
        i.classList.add('hidden')
    }
}


const handelCloseSideBar = () => {
    sidebar.classList.add('w-[250px]')
    sidebar.classList.remove('w-[90px]')

    container.classList.add('lg:w-[calc(100%-250px)]')
    container.classList.remove('lg:w-[calc(100%-90px)]')

    arrow.classList.add('rotate-180')

    setTimeout(() => {
        userInfo.classList.add('flex')
        userInfo.classList.remove('hidden')

        social.classList.add('flex')
        social.classList.remove('hidden')

        for (let i of textSideBar) {
            i.classList.remove('hidden')
        }
    }, 500);
}


const handelMobileSideBar = () => {
    if (sidebar.classList.contains('right-[-300px]')) {
        sidebar.classList.remove('right-[-300px]')
        sidebar.classList.add('right-0')

        cover.classList.remove('right-full')
        cover.classList.add('right-0')

        if (sidebar.classList.contains('w-[90px]')) {
            handelCloseSideBar()
        }
    }
    else {
        sidebar.classList.add('right-[-300px]')
        sidebar.classList.remove('right-0')

        cover.classList.add('right-full')
        cover.classList.remove('right-0')
    }
}

const handelForm = (type) => {
    let btnLogin = document.getElementById('btnLogin')
    let btnRegister = document.getElementById('btnRegister')
    let coverRegister = document.getElementById('coverRegister')
    let coverLogin = document.getElementById('coverLogin')
    let registerForm = document.getElementById('registerForm')
    let loginForm = document.getElementById('loginForm')

    if (type == 'login') {
        btnLogin.classList.add('bg-[#0e286b]')
        btnLogin.classList.add('text-white')
        btnRegister.classList.remove('bg-[#0e286b]')
        btnRegister.classList.remove('text-white')

        coverLogin.classList.add('z-[1]')
        coverLogin.classList.add('top-0')
        coverLogin.classList.add('opacity-100')
        coverLogin.classList.remove('z-[-1]')
        coverLogin.classList.remove('top-[-20px]')
        coverLogin.classList.remove('opacity-0')

        coverRegister.classList.remove('z-[1]')
        coverRegister.classList.remove('top-0')
        coverRegister.classList.remove('opacity-100')
        coverRegister.classList.add('z-[-1]')
        coverRegister.classList.add('top-[-20px]')
        coverRegister.classList.add('opacity-0')

        loginForm.classList.add('flex')
        loginForm.classList.remove('hidden')
        registerForm.classList.add('hidden')
        registerForm.classList.remove('flex')
    }
    else {
        btnRegister.classList.add('bg-[#0e286b]')
        btnLogin.classList.remove('text-white')
        btnLogin.classList.remove('bg-[#0e286b]')
        btnRegister.classList.add('text-white')

        coverRegister.classList.add('z-[1]')
        coverRegister.classList.add('top-0')
        coverRegister.classList.add('opacity-100')
        coverRegister.classList.remove('z-[-1]')
        coverRegister.classList.remove('top-[-20px]')
        coverRegister.classList.remove('opacity-0')

        coverLogin.classList.remove('z-[1]')
        coverLogin.classList.remove('top-0')
        coverLogin.classList.remove('opacity-100')
        coverLogin.classList.add('z-[-1]')
        coverLogin.classList.add('top-[-20px]')
        coverLogin.classList.add('opacity-0')

        registerForm.classList.add('flex')
        registerForm.classList.remove('hidden')
        loginForm.classList.add('hidden')
        loginForm.classList.remove('flex')
    }
}