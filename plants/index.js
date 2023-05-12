console.log(" При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50 \n Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50 \n В разделе contacts реализован select с выбором городов +25 \n Оценка 100 баллов")



let owerLay = document.querySelector('.owerlay');
let navBtn = document.querySelector('.nav-button');
let navMenu = document.querySelector('.popup');
let menu = document.querySelector('.navigation-list').cloneNode(1);
let links = Array.from(menu.children);
navBtn.addEventListener('click', activePopup)
function activePopup() {
    navBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    owerLay.classList.toggle('active')
    renderCont();
}
function renderCont() {
    navMenu.appendChild(menu);
}
function closePopup() {
    navMenu.classList.remove('active');
    navBtn.classList.remove('active');
    owerLay.classList.remove('active');
};
links.forEach(function (link) {
    link.addEventListener('click', closePopup)
});
owerLay.addEventListener('click', closePopup);

let cityBtn = document.querySelector('.city-button');
let cityList = document.querySelector('.city-list');
let btnCrc = document.querySelector('.button-circle-city');
let cityLinks = Array.from(cityList.children);
let cardList = document.querySelector('.card-list');
let cityCards = Array.from(cardList.children)
let cityCard = document.querySelector('.city-card');
let imgCity = document.querySelector('.woman-image');
let contImg = document.querySelector('.contacts-image');
let sel = document.getElementsByClassName('selected');

cityBtn.addEventListener('click', activeCityButton)
function activeCityButton() {
    if(sel.length>0&&cityBtn.classList.contains('active') && cityList.classList.contains('active')) {
        cityBtn.classList.add('active');
        btnCrc.classList.add('active');
        cityList.classList.remove('active');
    }
   
     else  if (cityBtn.classList.contains('active') && cityList.classList.contains('active')) {
        cityBtn.classList.remove('active');
        cityList.classList.remove('active');
        btnCrc.classList.remove('active');
            
    }
    else{
        cityBtn.classList.add('active');
        cityList.classList.toggle('active');
        btnCrc.classList.add('active');
        owerLay.classList.add('active');
    }
}
owerLay.addEventListener('click', closeCity);
function closeCity() {
    cityList.classList.remove('active');
    cityBtn.classList.remove('active');
    btnCrc.classList.remove('active');
    imgCity.classList.remove('hidden');
    contImg.classList.remove('lite');
    cityBtn.firstChild.innerText = 'City';
    owerLay.classList.remove('active');
}
owerLay.addEventListener('click', function closeCard() {
    for (j = 0; j < cityCards.length; j++) {
        cityCard = cityCards[j];
        cityCard.classList.remove('selected');
    }
})

cityLinks.forEach(function (linkCity, i) {
    linkCity.addEventListener('click', closeList);
    linkCity.addEventListener('click', removeText => cityBtn.firstChild.innerText = linkCity.outerText)
    linkCity.addEventListener('click', function selectCard() {
        for (j = 0; j < cityCards.length; j++) {
            cityCard = cityCards[j];
            cityCard.classList.remove('selected');
        }
        cityCards[i].classList.toggle('selected')
    }
    )
})


function closeList() {
    cityList.classList.remove('active');
    imgCity.classList.add('hidden')
    contImg.classList.add('lite')
}

let priceBtns = document.querySelectorAll('.price-button');
let visible = document.getElementsByClassName('visible');

Array.from(priceBtns).forEach(function (priceBtn, i, priceBtns) {
    priceBtn.addEventListener('click', function (openPrice) {
        if (visible.length > 0 && visible[0] !== this){
        visible[0].classList.remove('visible');
    }
        this.classList.toggle('visible');
    });
});
let serviceBtns = document.querySelectorAll('.service-button');
let activate = document.getElementsByClassName('activate');
let serviceTable = document.querySelectorAll('.service-item');
let gardenItems = document.querySelectorAll('.garden')
let lawnItems = document.querySelectorAll('.lawn')
let plantingItems = document.querySelectorAll('.planting')

Array.from(serviceBtns).forEach(function (serviceBtn, i, serviceBtns) {
    serviceBtn.addEventListener('click', function (selectCard) {
        if (activate.length > 1 && activate[0] !== this && activate[1] !== this) {
            activate[0].classList.remove('activate')
        }
        this.classList.toggle('activate');
        owerLay.classList.add('active');
        Array.from(serviceTable).forEach(function (serviceItem) {
            if (activate.length >0) {
                    serviceItem.classList.add('blur');
            }
            else {
                serviceItem.classList.remove('blur');
            }
            if (serviceBtns[0].classList.contains('activate')) {
                Array.from(gardenItems).forEach(function (gardenItem) {
                    gardenItem.classList.remove('blur')
                })
            }
            if (serviceBtns[1].classList.contains('activate')) {
                Array.from(lawnItems).forEach(function (lawnItem) {
                    lawnItem.classList.remove('blur')
                })
            }
            if (serviceBtns[2].classList.contains('activate')) {
                Array.from(plantingItems).forEach(function (plantingItem) {
                    plantingItem.classList.remove('blur')
                })
            }
        })
    })
})
owerLay.addEventListener('click', function closeService() {
    Array.from(serviceTable).forEach(function (serviceItem) {
        serviceItem.classList.remove('blur');
    })
    Array.from(serviceBtns).forEach(function (serviceBtn, i, serviceBtns) {
        serviceBtn.classList.remove('activate');
    })
})
