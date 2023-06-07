//Fot toggling the hamburger menu
let navigation_bar = document.querySelector('.navbar');
let menu_btn = document.querySelector('.menu-bar');
let close_btn = document.querySelector('.close-btn');

menu_btn.addEventListener('click', function () {
    navigation_bar.classList.add("active2");
});

close_btn.addEventListener('click', function () {
    navigation_bar.classList.remove("active2");
});

/*slide in*/
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const sections = document.querySelectorAll('.slide-in');

    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();