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

    logoDiv.setAttribute("class", "logo");
    nav.setAttribute("class", "nav");
    mainDiv.setAttribute("class", "main");
    imgContainerDiv.setAttribute("class", "img-container");
    imgGrill.setAttribute("src", "../src/img/grill.jpg");
    imgGrill.setAttribute("alt", "Picture of a grill, with a lot of grilled food on top of it.");
    imgCredits.setAttribute("class", "credits");

    navHome.innerText = "Home";
    navRecipes.innerText = "Recipes";
    navAbout.innerText = "About";

    imgCredits.innerHTML = 'Photo by <a href="https://unsplash.com/@evanthewise">Evan Wise</a>.';

    header.appendChild(logoDiv);

    navList.appendChild(navHome);
    navList.appendChild(navRecipes);
    navList.appendChild(navAbout);
    nav.appendChild(navList);
    header.appendChild(nav);

    header.appendChild(settings)

    imgContainerDiv.appendChild(imgGrill);
    imgContainerDiv.appendChild(imgCredits);
    mainDiv.appendChild(imgContainerDiv);

    content.appendChild(header);
    content.appendChild(mainDiv);

    document.body.append(content);
}

export default loadHomePage;