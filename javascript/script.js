document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







// document.addEventListener('DOMContentLoaded', function () {
//     var dropdownToggle = document.querySelector('.nav-link.dropdown-toggle');
//     var dropdownMenu = document.querySelector('.dropdown-menu');
//     var navbarToggler = document.querySelector('.navbar-toggler');
//     var navbarMenu = document.querySelector('.collapse');

//     // Dropdown toggle
//     dropdownToggle.addEventListener('click', function (event) {
//         event.stopPropagation();
//         dropdownMenu.classList.toggle('hidden');
//     });

//     // Clicking outside the dropdown should close it
//     window.addEventListener('click', function () {
//         if (!dropdownMenu.classList.contains('hidden')) {
//             dropdownMenu.classList.add('hidden');
//         }
//     });

//     // Navbar toggler
//     navbarToggler.addEventListener('click', function () {
//         navbarMenu.classList.toggle('hidden');
//     });
// });



// document.addEventListener('DOMContentLoaded', function () {
//     var dropdownToggle = document.querySelector('.dropdown-toggle');
//     var dropdownMenu = dropdownToggle.nextElementSibling;
//     var navbarToggler = document.querySelector('.navbar-toggler');
//     var navbarMenu = document.querySelector('.navbar-nav');
    
//     // Dropdown toggle
//     dropdownToggle.addEventListener('click', function (event) {
//         event.stopPropagation();
//         dropdownMenu.classList.toggle('visible');
//     });
    
//     // Clicking outside the dropdown should close it
//     window.addEventListener('click', function () {
//         if (dropdownMenu.classList.contains('visible')) {
//             dropdownMenu.classList.remove('visible');
//         }
//     });
    
//     // Navbar toggler
//     navbarToggler.addEventListener('click', function () {
//         navbarMenu.classList.toggle('visible');
//     });
// });




function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

function toggleDropdown() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
}

// Optional: Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}