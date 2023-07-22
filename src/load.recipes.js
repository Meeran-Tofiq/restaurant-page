import chickenImg from './img/grilled-chicken.jpg';
import burgerImg from './img/grilled-patty.jpg';

function loadRecipesPage() {
    const mainDiv = document.createElement('div');
    const recipesBold = document.createElement('h1');
    const chickenRecipe = document.createElement('div');
    const burgerRecipe = document.createElement('div');
    const comingSoonText = document.createElement('h2');
    const chickenRInfo = document.createElement('div');
    const burgerRInfo = document.createElement('div');

    comingSoonText.innerText = "More recipes coming soon... (not really)";
    
    mainDiv.setAttribute('class', 'main recipes');
    recipesBold.setAttribute('class', 'head');
    chickenRecipe.setAttribute('class', 'recipe');
    burgerRecipe.setAttribute('class', 'recipe');
    comingSoonText.setAttribute('class', 'coming-soon');

    recipesBold.innerText = "Recipes";
    
    const chickenImage = document.createElement('img');
    chickenImage.setAttribute('src', chickenImage);
    chickenImage.setAttribute('alt', 'Photo of a grilled chicken meal. Taken by Sam Moghadam Khamesh.');
    chickenRInfo.innerHTML = "<h3>Lorem Ipsum es simplemente el texto de relleno</h3>" + 
    "de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)";
    
    const burgerImage = document.createElement('img');
    burgerImage.setAttribute('src', burgerImage);
    burgerImage.setAttribute('alt', 'Photo of a grilled burger patty. Taken by Norbert Braun.');
    burgerRInfo.innerHTML = "<h3>Lorem Ipsum es simplemente el texto de relleno</h3>" + 
    "de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)";

    chickenRecipe.append(chickenImage);
    chickenRecipe.append(chickenRInfo);
    burgerRecipe.append(burgerImage);
    burgerRecipe.append(burgerRInfo);

    mainDiv.append(recipesBold);
    mainDiv.append(chickenRecipe);
    mainDiv.append(burgerRecipe);
    mainDiv.append(comingSoonText);

    document.querySelector('.main').replaceWith(mainDiv);
}

export default loadRecipesPage;