document.body.onload = addElementToPage();

function addElementToPage() {
  console.log('log 1');
  

  

  addElementToRegistry();
}

function addElementToRegistry() {
  // const p = new PopUpInfo();
  // customElements.define('popup-info', PopUpInfo);
  // customElements.define('ImgElement', ImgElement);

  var p = document.createElement("img-element");
  document.body.append(p);
  console.log('element added to registry');
}

function addImage() {
  // create a new div element 
  var img1 = document.createElement("IMG");
  // and give it some content 
  img1.alt = "Test Img";
  img1.src = "https://wd.eleadcrm.com/evo2/companies/FLNADAMAR/Images/DiscoveryEmail/exterior3.jpg";
  // add the newly created element and its content into the DOM 
  document.body.append(img1);

  console.log('image added');
}

