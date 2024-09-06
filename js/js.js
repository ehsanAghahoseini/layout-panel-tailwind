

const handelSideBar = () => {
    const arrow = document.getElementById('arrow');
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('container');
    const userInfo = document.getElementById('userInfo');
    const textSideBar = document.getElementsByClassName('sidebar-text-item')
    const social = document.getElementById('social')
    if (sidebar.classList.contains('w-[250px]')) {
        sidebar.classList.remove('w-[250px]')
        sidebar.classList.add('w-[90px]')

        container.classList.remove('lg:w-[calc(100%-250px)]')
        container.classList.add('w-[calc(100%-90px)]')

        userInfo.classList.remove('flex')
        userInfo.classList.add('hidden')

        social.classList.remove('flex')
        social.classList.add('hidden')

        arrow.classList.remove('rotate-180')

        for (let i of textSideBar) {
            i.classList.add('hidden')
        }


    }
    else {
        sidebar.classList.add('w-[250px]')
        sidebar.classList.remove('w-[90px]')

        container.classList.add('lg:w-[calc(100%-250px)]')
        container.classList.remove('w-[calc(100%-90px)]')

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
}