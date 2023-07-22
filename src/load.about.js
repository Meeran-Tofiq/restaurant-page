function loadAboutPage() {
    const mainDiv = document.createElement('div');
    const aboutDiv = document.createElement('div');
    const contactUsDiv = document.createElement('div');

    mainDiv.setAttribute('class', 'main about');
    aboutDiv.setAttribute('class', 'info');
    contactUsDiv.setAttribute('class', 'contact-us');

    aboutDiv.innerHTML = "<h3>Lorem Ipsum es simplemente el texto de relleno</h3>" + 
    "de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno "+
    "estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)";

    contactUsDiv.innerText = "Jimmy: jimmy@thisisarealemail.com, 112328982\n" + 
                             "Billy: billy@thisisarealemail.com, 926738217\n" +
                             "Hanky: hanky@thisisarealemail.com, 271887284";
    mainDiv.append(aboutDiv);
    mainDiv.append(contactUsDiv);

    document.querySelector('.main').replaceWith(mainDiv);
}

export default loadAboutPage;