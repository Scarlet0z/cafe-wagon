const mobMenuBtn = document.querySelector('#mobMenu')
const mobExitMenu = document.querySelector('#mobExit')
const navMenu = document.querySelector('.navigationMenu')

mobMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobileView')
})

mobExitMenu.addEventListener('click', () => {
    navMenu.classList.remove('mobileView')
})

// menu tabs
const menuItems = document.querySelectorAll('.menu-item')
const menuTabs = document.querySelectorAll(".menu-tab")
console.log('hey');
menuTabs.forEach((a) => {
    a.addEventListener('click', () => {
        menuTabs.forEach((tab) => tab.classList.remove('active-tab'))
        menuItems.forEach((item) => item.classList.remove('noDisplay'))
        a.classList.add('active-tab')

        const type = a.innerHTML.toLowerCase()

        if (type === "all") {
            menuItems.forEach((item) => item.classList.remove('noDisplay'))
        } else {
            menuItems.forEach((b) => {
                if (b.getAttribute('data-type') !== type) {
                    b.classList.add("noDisplay");
                }
            })
        }
    })
})