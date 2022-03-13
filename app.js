const navItems = document.querySelector('#nav-items');
const openNavBar = document.querySelector('#hamburger-menu');
const closeNavBar = document.querySelector('#close-menu');

openNavBar.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBar.style.display = 'none';
    closeNavBar.style.display = 'inline-block';
})

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBar.style.display = 'inline-block';
    closeNavBar.style.display = 'none';
}

closeNavBar.addEventListener('click', closeNav);




// Close nav when a menu item is clicked
// Only on small and medium devices
if(window.innerWidth < 1024) {
    document.querySelectorAll('#nav-items a').forEach(navItem => {
        navItem.addEventListener('click', () => {closeNav()})
    })
}