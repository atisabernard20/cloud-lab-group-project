const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');

const homeSection = document.getElementById('homeSection');
const aboutSection = document.getElementById('aboutSection');
const contactSection = document.getElementById('contactSection');

function updateNavbarHighlight(targetButton) {
    const buttons = [homeBtn, aboutBtn, contactBtn];
    buttons.forEsch(btn => btn,classList.remove('active'));
    targetButton.classList.add('active');
}

homeBtn.addEventListener('click',() => {
    updateNavbarHighlight(aboutBtn);
    homeSection.scrollIntoView({ behaviour: 'smooth'});
});

aboutBtn,addEventListener('click', () => {
    updateNavbarHighlight(aboutBtn);
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

contactBtn,addEventListener('click', () => {
    updateNavbarHighlight(contactBtn);
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY + 180;

    if (currenttScrollPos >= contactSection.offsetTop) {
        updateNavbarHighlight(contactBtn);
    } else if (currentScrollPos >= aboutSection.offsetTop) {
        updateNavbarHighlight(aboutBtn);
    } else{
        updateNavbarHighlight(homeBtn);
    }
});

