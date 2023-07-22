import loadHomePage from "./load.home";
import loadRecipesPage from "./load.recipes";
import loadAboutPage from "./load.about";
import './styles.css';

loadHomePage();


const homeB = document.querySelector(".home-nav");
const recipesB = document.querySelector(".recipes-nav");
const aboutB = document.querySelector(".about-nav");
const navList = [homeB, recipesB, aboutB];

homeB.classList.add('selected');

const unSelectPages = () => {
    navList.forEach(element => {
        element.classList.remove('selected');
    });
};

navList.forEach(element => {
    element.addEventListener('click', () => {
        unSelectPages();
        element.classList.add('selected');
    })
});

homeB.addEventListener('click', loadHomePage);
recipesB.addEventListener('click', loadRecipesPage);
aboutB.addEventListener('click', loadAboutPage);