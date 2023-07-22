function loadRecipesPage() {
    const mainDiv = document.createElement('div');
    const recipesBold = document.createElement('h1');
    const chickenRecipe = document.createElement('div');
    const burgerRecipe = document.createElement('div');
    const comingSoonText = document.createElement('h2');
    const chickenRInfo = document.createElement('div');
    const chickenRTitle = document.createElement('h3');
    const burgerRInfo = document.createElement('div');
    const burgerRTitle = document.createElement('h3');

    comingSoonText.innerText = "More recipes coming soon... (not really)";
    
    mainDiv.setAttribute('class', 'main');
    recipesBold.setAttribute('class', 'recipes-head');
    chickenRecipe.setAttribute('class', 'recipe');
    burgerRecipe.setAttribute('class', 'recipe');
    comingSoonText.setAttribute('class', 'coming-soon');
    chickenRTitle.setAttribute('class', 'info');
    burgerRTitle.setAttribute('class', 'info');

    recipesBold.innerText = "Recipes";
    
    const chickenImage = document.createElement('img');
    chickenImage.setAttribute('src', '../src/img/grilled-chicken.jpg');
    chickenImage.setAttribute('alt', 'Photo of a grilled chicken meal. Taken by Sam Moghadam Khamesh.');
    chickenRInfo.append(chickenRTitle);
    
    const burgerImage = document.createElement('img');
    burgerImage.setAttribute('src', '../src/img/grilled-patty.jpg');
    burgerImage.setAttribute('alt', 'Photo of a grilled burger patty. Taken by Norbert Braun.');
    burgerRInfo.append(burgerRTitle);

    chickenRecipe.append(chickenImage);
    burgerRecipe.append(burgerImage);

    mainDiv.append(chickenRecipe);
    mainDiv.append(burgerRecipe);
    mainDiv.append(comingSoonText);

    document.querySelector('.main').replaceWith(mainDiv);
}

export default loadRecipesPage;