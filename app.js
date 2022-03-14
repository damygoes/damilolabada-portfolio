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



// Navbar changes color on scroll
// $(document).ready(function(){
//     $(body).scroll(function(){
//         if($(window).scrollTop() > $(window).height()){
//             $("#main-Nav .container").css({"background-color":"black"});   
//         }
//         else{
//             $("#main-Nav .container").css({"background-color":"white"});
//         }

//     })
// })

window.addEventListener('scroll', function() {
    let mainNavBar = document.querySelector('#main-Nav');
    let windowPosition = window.scrollY > 0;
    mainNavBar.classList.toggle('scrolling-active', windowPosition)
})