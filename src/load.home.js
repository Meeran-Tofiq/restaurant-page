import image from  './img/grill.jpg';

function loadHomePage() {
    const content = document.createElement('div');
    content.classList.add("content");

    const header = document.createElement("header");
    const logoDiv = document.createElement("div");
    const nav = document.createElement("nav");
    const navList = document.createElement("ul");
    const navHome = document.createElement("li");
    const navRecipes = document.createElement("li");
    const navAbout = document.createElement("li");
    const settings = document.createElement("div");

    const mainDiv = document.createElement("div");
    const imgContainerDiv = document.createElement("div");
    const imgGrill = document.createElement("img");
    const imgCredits = document.createElement("div");
    const infoDiv = document.createElement("div");

    logoDiv.setAttribute("class", "logo");
    nav.setAttribute("class", "nav");
    navHome.classList.add('home-nav');
    navRecipes.classList.add('recipes-nav');
    navAbout.classList.add('about-nav');
    settings.setAttribute("class", "settings");
    mainDiv.setAttribute("class", "main");
    imgContainerDiv.setAttribute("class", "img-container");
    imgGrill.setAttribute("src", image);
    imgGrill.setAttribute("alt", "Picture of a grill, with a lot of grilled food on top of it. Taken by Evan Wise.");
    imgCredits.setAttribute("class", "credits");
    infoDiv.setAttribute("class", "info");

    navHome.innerText = "Home";
    navRecipes.innerText = "Recipes";
    navAbout.innerText = "About";

    imgCredits.innerHTML = 'Photo by <a href="https://unsplash.com/@evanthewise">Evan Wise</a>.';
    infoDiv.innerHTML = "<h3>Lorem Ipsum es simplemente el texto de relleno</h3>" + 
    "de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)" + 
    " desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.";

    header.appendChild(logoDiv);

    navList.appendChild(navHome);
    navList.appendChild(navRecipes);
    navList.appendChild(navAbout);
    nav.appendChild(navList);
    header.appendChild(nav);

    header.appendChild(settings)

    imgContainerDiv.appendChild(imgGrill);
    imgContainerDiv.appendChild(imgCredits);
    imgContainerDiv.appendChild(infoDiv);
    mainDiv.appendChild(imgContainerDiv);

    content.appendChild(header);
    content.appendChild(mainDiv);

    if(document.body.children.length !== 0) {
        document.querySelector('.main').replaceWith(mainDiv);
    } else {
        document.body.append(content);
    }
}

export default loadHomePage;