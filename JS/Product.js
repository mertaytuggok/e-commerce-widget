/*Nike */
let brandImagesNike = document.querySelector("#brandImage");
let popup = document.getElementById("popup");
let Logo = document.querySelector("#Logo");
let ProductsNike = document.querySelector("#ProductsNike");
let NikeLogo = document.querySelector("#NikeLogo");

/*Adidas */
let brandImageAdidas = document.querySelector("#brandImageAdidas");
let buttonAdidas = document.querySelector("ADIDAS");
let AdidasLogo = document.querySelector("#AdidasLogo");
let ProductsAdidas = document.querySelector("#ProductsAdidas");
/*Vans */
let brandImageVans = document.querySelector("#brandImageVans");
let VansLogo = document.querySelector("#VansLogo");
let ProductsVans = document.querySelector("#ProductsVans");
/*Puma */
let brandImagePuma = document.querySelector("#brandImagePuma");
let PumaLogo = document.querySelector("#PumaLogo");
let ProductsPuma = document.querySelector("#ProductsPuma");
/*Jordan */
let brandImageJordan = document.querySelector("#brandImageJordan");
let JordanLogo = document.querySelector("#JordanLogo");
let ProductsJordan = document.querySelector("#ProductsJordan");
/*Skechers */
let brandImageSkechers = document.querySelector("#brandImageSkechers");
let SkechersLogo = document.querySelector("#SkechersLogo");
let ProductsSkechers = document.querySelector("#ProductsSkechers");
/*Asics */
let brandImageAsics = document.querySelector("#brandImageAsics");
let AsicsLogo = document.querySelector("#AsicsLogo");
let ProductsAsics = document.querySelector("#ProductsAsics");

const fetchData = async () => {
  const response = await fetch("./katalog.json");
  const data = await response.json();
  console.log(data[0].products[0].image);
  /*Nike Card*/
  data[0].products.forEach((item) => {
    let ProductsContaier = document.createElement("div");
    ProductsContaier.classList.add("Card");
    ProductsNike.appendChild(ProductsContaier);
    let ProductsImage = document.createElement("img");
    ProductsImage.src = item.image;
    ProductsImage.classList.add("CardImage");
    ProductsContaier.appendChild(ProductsImage);
    let Name = document.createElement("p");
    Name.innerHTML = item.name;
    ProductsContaier.appendChild(Name);
    let Price = document.createElement("p");
    Price.classList.add("CardText");
    Price.innerHTML = `${item.price} TL`;
    ProductsContaier.appendChild(Price);
    let Button = document.createElement("button");
    Button.onclick = function () {
      popup.classList.add("open-popup");
    };
    Button.innerHTML = "Sepete Ekle";
    Button.classList.add("Button");
    ProductsContaier.appendChild(Button);
  });
  /*Adidas Card*/
  data[1].products.forEach((item) => {
    let ProductsContaier = document.createElement("div");
    ProductsContaier.classList.add("Card");
    ProductsAdidas.appendChild(ProductsContaier);
    let ProductsImage = document.createElement("img");
    ProductsImage.src = item.image;
    ProductsImage.classList.add("CardImage");
    ProductsContaier.appendChild(ProductsImage);
    let Name = document.createElement("p");
    Name.innerHTML = item.name;
    ProductsContaier.appendChild(Name);
    let Price = document.createElement("p");
    Price.classList.add("CardText");
    Price.innerHTML = `${item.price} TL`;
    ProductsContaier.appendChild(Price);
    let Button = document.createElement("button");
    Button.onclick = function () {
      popup.classList.add("open-popup");
    };
    Button.innerHTML = "Sepete Ekle";
    ProductsContaier.appendChild(Button);
  });
  /*Vans Card*/
  data[2].products.forEach((item) => {
    let ProductsContaier = document.createElement("div");
    ProductsContaier.classList.add("Card");
    ProductsVans.appendChild(ProductsContaier);
    let ProductsImage = document.createElement("img");
    ProductsImage.src = item.image;
    ProductsImage.classList.add("CardImage");
    ProductsContaier.appendChild(ProductsImage);
    let Name = document.createElement("p");
    Name.innerHTML = item.name;
    ProductsContaier.appendChild(Name);
    let Price = document.createElement("p");
    Price.classList.add("CardText");
    Price.innerHTML = `${item.price} TL`;
    ProductsContaier.appendChild(Price);
    let Button = document.createElement("button");
    Button.onclick = function () {
      popup.classList.add("open-popup");
    };
    Button.innerHTML = "Sepete Ekle";
    ProductsContaier.appendChild(Button);
  });
  /*Puma Card*/
  data[3].products.forEach((item) => {
    let ProductsContaier = document.createElement("div");
    ProductsContaier.classList.add("Card");
    ProductsPuma.appendChild(ProductsContaier);
    let ProductsImage = document.createElement("img");
    ProductsImage.src = item.image;
    ProductsImage.classList.add("CardImage");
    ProductsContaier.appendChild(ProductsImage);
    let Name = document.createElement("p");
    Name.innerHTML = item.name;
    ProductsContaier.appendChild(Name);
    let Price = document.createElement("p");
    Price.classList.add("CardText");
    Price.innerHTML = `${item.price} TL`;
    ProductsContaier.appendChild(Price);
    let Button = document.createElement("button");
    Button.onclick = function () {
      popup.classList.add("open-popup");
    };
    Button.innerHTML = "Sepete Ekle";
    ProductsContaier.appendChild(Button);
  });
  /*Jordan Card*/
  data[4].products.forEach((item) => {
    let ProductsContaier = document.createElement("div");
    ProductsContaier.classList.add("Card");
    ProductsJordan.appendChild(ProductsContaier);
    let ProductsImage = document.createElement("img");
    ProductsImage.src = item.image;
    ProductsImage.classList.add("CardImage");
    ProductsContaier.appendChild(ProductsImage);
    let Name = document.createElement("p");
    Name.innerHTML = item.name;
    ProductsContaier.appendChild(Name);
    let Price = document.createElement("p");
    Price.classList.add("CardText");
    Price.innerHTML = `${item.price} TL`;
    ProductsContaier.appendChild(Price);
    let Button = document.createElement("button");
    Button.onclick = function () {
      popup.classList.add("open-popup");
    };
    Button.innerHTML = "Sepete Ekle";
    ProductsContaier.appendChild(Button);
  });
  /*Skechers Card*/
  data[5].products.forEach((item) => {
    let ProductsContaier = document.createElement("div");
    ProductsContaier.classList.add("Card");
    ProductsSkechers.appendChild(ProductsContaier);
    let ProductsImage = document.createElement("img");
    ProductsImage.src = item.image;
    ProductsImage.classList.add("CardImage");
    ProductsContaier.appendChild(ProductsImage);
    let Name = document.createElement("p");
    Name.innerHTML = item.name;
    ProductsContaier.appendChild(Name);
    let Price = document.createElement("p");
    Price.classList.add("CardText");
    Price.innerHTML = `${item.price} TL`;
    ProductsContaier.appendChild(Price);
    let Button = document.createElement("button");
    Button.onclick = function () {
      popup.classList.add("open-popup");
    };
    Button.innerHTML = "Sepete Ekle";
    ProductsContaier.appendChild(Button);
  });

  /*Asics Card*/
  data[6].products.forEach((item) => {
    let ProductsContaier = document.createElement("div");
    ProductsContaier.classList.add("Card");
    ProductsAsics.appendChild(ProductsContaier);
    let ProductsImage = document.createElement("img");
    ProductsImage.src = item.image;
    ProductsImage.classList.add("CardImage");
    ProductsContaier.appendChild(ProductsImage);
    let Name = document.createElement("p");
    Name.innerHTML = item.name;
    ProductsContaier.appendChild(Name);
    let Price = document.createElement("p");
    Price.classList.add("CardText");
    Price.innerHTML = `${item.price} TL`;
    ProductsContaier.appendChild(Price);
    let Button = document.createElement("button");
    Button.onclick = function () {
      popup.classList.add("open-popup");
    };
    Button.innerHTML = "Sepete Ekle";
    ProductsContaier.appendChild(Button);
  });
  /*BrandLogos */
  NikeLogo.src = `${data[0].brandLogo}`;
  AdidasLogo.src = `${data[1].brandLogo}`;
  VansLogo.src = `${data[2].brandLogo}`;
  PumaLogo.src = `${data[3].brandLogo}`;
  JordanLogo.src = `${data[4].brandLogo}`;
  SkechersLogo.src = `${data[5].brandLogo}`;
  AsicsLogo.src = `${data[6].brandLogo}`;

  /*BrandImages */
  brandImagesNike.src = `${data[0].brandImage}`;
  brandImageAdidas.src = `${data[1].brandImage}`;
  brandImageVans.src = `${data[2].brandImage}`;
  brandImagePuma.src = `${data[3].brandImage}`;
  brandImageJordan.src = `${data[4].brandImage}`;
  brandImageSkechers.src = `${data[5].brandImage}`;
  brandImageAsics.src = `${data[6].brandImage}`;
};

function closePopup() {
  popup.classList.remove("open-popup");
}

function changeNike() {
  brandImagesNike.classList.remove("NotActive");
  brandImageAdidas.classList.add("NotActive");
  brandImageVans.classList.add("NotActive");
  brandImagePuma.classList.add("NotActive");
  brandImageJordan.classList.add("NotActive");
  brandImageSkechers.classList.add("NotActive");
  brandImageAsics.classList.add("NotActive");
  ProductsNike.classList.add("CardBox");
  ProductsNike.classList.remove("NotActive");

  ProductsNike.classList.add("CardBox");
  ProductsAdidas.classList.remove("CardBox");
  ProductsVans.classList.remove("CardBox");
  ProductsPuma.classList.remove("CardBox");
  ProductsJordan.classList.remove("CardBox");
  ProductsSkechers.classList.remove("CardBox");
  ProductsAsics.classList.remove("CardBox");
}
function changeAdidas() {
  brandImagesNike.classList.add("NotActive");
  brandImageAdidas.classList.remove("NotActive");
  brandImageVans.classList.add("NotActive");
  brandImagePuma.classList.add("NotActive");
  brandImageJordan.classList.add("NotActive");
  brandImageSkechers.classList.add("NotActive");
  brandImageAsics.classList.add("NotActive");

  ProductsNike.classList.remove("CardBox");
  ProductsNike.classList.add("NotActive");
  ProductsAdidas.classList.add("CardBox");
  ProductsVans.classList.remove("CardBox");
  ProductsPuma.classList.remove("CardBox");
  ProductsJordan.classList.remove("CardBox");
  ProductsSkechers.classList.remove("CardBox");
  ProductsAsics.classList.remove("CardBox");
}
function changeVans() {
  brandImagesNike.classList.add("NotActive");
  brandImageAdidas.classList.add("NotActive");
  brandImageVans.classList.remove("NotActive");
  brandImagePuma.classList.add("NotActive");
  brandImageJordan.classList.add("NotActive");
  brandImageSkechers.classList.add("NotActive");
  brandImageAsics.classList.add("NotActive");

  ProductsNike.classList.remove("CardBox");
  ProductsNike.classList.add("NotActive");
  ProductsAdidas.classList.add("NotActive");
  ProductsAdidas.classList.remove("CardBox");
  ProductsVans.classList.add("CardBox");
  ProductsPuma.classList.remove("CardBox");
  ProductsJordan.classList.remove("CardBox");
  ProductsSkechers.classList.remove("CardBox");
  ProductsAsics.classList.remove("CardBox");
}
function changePuma() {
  brandImagesNike.classList.add("NotActive");
  brandImageAdidas.classList.add("NotActive");
  brandImageVans.classList.add("NotActive");
  brandImagePuma.classList.remove("NotActive");
  brandImageJordan.classList.add("NotActive");
  brandImageSkechers.classList.add("NotActive");
  brandImageAsics.classList.add("NotActive");

  ProductsNike.classList.remove("CardBox");
  ProductsNike.classList.add("NotActive");
  ProductsAdidas.classList.add("NotActive");
  ProductsAdidas.classList.remove("CardBox");
  ProductsVans.classList.remove("CardBox");
  ProductsPuma.classList.add("CardBox");
  ProductsJordan.classList.remove("CardBox");
  ProductsSkechers.classList.remove("CardBox");
  ProductsAsics.classList.remove("CardBox");
}
function changeJordan() {
  brandImagesNike.classList.add("NotActive");
  brandImageAdidas.classList.add("NotActive");
  brandImageVans.classList.add("NotActive");
  brandImagePuma.classList.add("NotActive");
  brandImageJordan.classList.remove("NotActive");
  brandImageSkechers.classList.add("NotActive");
  brandImageAsics.classList.add("NotActive");

  ProductsNike.classList.remove("CardBox");
  ProductsNike.classList.add("NotActive");
  ProductsAdidas.classList.add("NotActive");
  ProductsAdidas.classList.remove("CardBox");
  ProductsVans.classList.remove("CardBox");
  ProductsPuma.classList.remove("CardBox");
  ProductsJordan.classList.add("CardBox");
  ProductsSkechers.classList.remove("CardBox");
  ProductsAsics.classList.remove("CardBox");
}
function changeSkechers() {
  brandImagesNike.classList.add("NotActive");
  brandImageAdidas.classList.add("NotActive");
  brandImageVans.classList.add("NotActive");
  brandImagePuma.classList.add("NotActive");
  brandImageJordan.classList.add("NotActive");
  brandImageSkechers.classList.remove("NotActive");
  brandImageAsics.classList.add("NotActive");

  ProductsNike.classList.remove("CardBox");
  ProductsNike.classList.add("NotActive");
  ProductsAdidas.classList.add("NotActive");
  ProductsAdidas.classList.remove("CardBox");
  ProductsVans.classList.remove("CardBox");
  ProductsPuma.classList.remove("CardBox");
  ProductsJordan.classList.remove("CardBox");
  ProductsSkechers.classList.add("CardBox");
  ProductsAsics.classList.remove("CardBox");
}
function changeAsics() {
  brandImagesNike.classList.add("NotActive");
  brandImageAdidas.classList.add("NotActive");
  brandImageVans.classList.add("NotActive");
  brandImagePuma.classList.add("NotActive");
  brandImageJordan.classList.add("NotActive");
  brandImageSkechers.classList.add("NotActive");
  brandImageAsics.classList.remove("NotActive");

  ProductsNike.classList.remove("CardBox");
  ProductsNike.classList.add("NotActive");
  ProductsAdidas.classList.add("NotActive");
  ProductsAdidas.classList.remove("CardBox");
  ProductsVans.classList.remove("CardBox");
  ProductsPuma.classList.remove("CardBox");
  ProductsJordan.classList.remove("CardBox");
  ProductsSkechers.classList.remove("CardBox");
  ProductsAsics.classList.add("CardBox");
}
fetchData();
