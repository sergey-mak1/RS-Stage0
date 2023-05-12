const preloader = document.querySelector('.preload');
const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const greetingCont = document.querySelector('.greeting-container');
const date = document.querySelector('.date');
const name = document.querySelector('.name');
const slideNext = document.querySelector('.slider-next');
const slidePrev = document.querySelector('.slider-prev');
const weather = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const quoteBtn = document.querySelector('.quote-button');
const quoteCont = document.querySelector('.quote-container');
const playBtn = document.querySelector('.switch');
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
const playListCont = document.querySelector('.play-list');
const progress = document.querySelector('.progress');
const timeProgress = document.querySelector('.time-progress');
const audioLengthTime = document.querySelector('.audio-length');
const range = document.querySelector('.range');
const volume = document.querySelector('.volume');
const mute = document.querySelector('.mute');
const audioTitle = document.querySelector('.audio-title');
const playListBtn = document.querySelector('.button-playlist');
const player = document.querySelector('.player');
let played = document.getElementsByClassName('played');
const settingsBtn = document.querySelector('.button-settings');
const settings = document.querySelector('.settings');
const switchBtns = document.querySelectorAll('.switch-button');
const switchOnAll = document.querySelectorAll('.on');
const switchOffAll = document.querySelectorAll('.off');
const imgBtn = document.querySelector('.image-button');
const imgList = document.querySelector('.image-list');
const imgItem = document.querySelector('.image-item');
const overLay = document.querySelector('.overlay');
const langSettings = document.querySelector('.language-title');
const engLang = document.querySelector('.english');
const rusLang = document.querySelector('.russian');
const playerSettings = document.querySelector('.player-title');
const weatherSettings = document.querySelector('.weather-title');
const timeSettings = document.querySelector('.time-title');
const dateSettings = document.querySelector('.date-title');
const greetingSettings = document.querySelector('.greeting-title');
const quoteSettings = document.querySelector('.quote-title');
const imageSettings = document.querySelector('.image-server');
const imageItems = Array.from(imgList.children);
const langSwitch = document.querySelector('.language-switch');
const playerSwitch = document.querySelector('.player-switch');
const weatherSwitch = document.querySelector('.weather-switch');
const timeSwitch = document.querySelector('.time-switch');
const dateSwitch = document.querySelector('.date-switch');
const greetingSwitch = document.querySelector('.greeting-switch');
const quoteSwitch = document.querySelector('.quote-switch');
let assigned = document.getElementsByClassName('assigned');
const selectTitle = document.querySelector('.select-title');
const selectList = document.querySelector('.select-list');
const selectItems = Array.from(selectList.children);
const selectButton = document.querySelector('.select-ico');
const selectHead = document.querySelector('.select-head');
const toDoAdd = document.querySelector('.todo-add');
const itemsList = document.querySelector('.items-list');
const toDoItems = Array.from(itemsList.children);
const toDoValue = document.querySelector('.todo-value');
const activeItems = document.querySelector('.active-items');
const itemsAll = document.getElementsByClassName('todo-item');
const completeButtons = document.getElementsByClassName('button-complete');
const deleteButtons = document.getElementsByClassName('button-delete');
const buttonClear = document.querySelector('.button-clear');
const toDoList = document.querySelector('.todo-list');
const activSelect = document.querySelector('.active');
const completedSelect = document.querySelector('.completed');
const deletedSelect = document.querySelector('.deleted');
const toDoSwitch = document.querySelector('.todo-switch');
const toDoSetting = document.querySelector('.todo-title');

const greetingTranslation = {
    en: ['Good', 'night', 'morning', 'afternoon', 'evening'],
    ru: ['Добрый', 'ночи', 'утро', 'день', 'вечер', 'Доброе', 'Доброй']
};
const dateTranslation = {
    en: 'en-US',
    ru: 'ru-RU'
};
const weatherTranslation = {
    en: ['Wind speed:', 'm/s', 'Humidity:', 'en'],
    ru: ['Скорость ветра:', 'м/с', 'Влажность:', 'ru']
};
const settingsTranslation = {
    en: ['Language', 'EN', 'RU', 'On', 'Off', 'Player', 'Weather', 'Time', 'Date', 'Greeting', 'Quote', 'Image Server', 'toDoList'],
    ru: ['Язык', 'Англ.', 'Рус.', 'Вкл', 'Выкл', 'Проигрыватель', 'Погода', 'Время', 'Дата', 'Приветствие', 'Цитаты', 'Источник изображений', 'Заметки']
};
const toDoTranslation = {
    en: ['active', 'completed', 'deleted', 'Clear History'],
    ru: ['активные', 'выполненные', 'удаленные', 'Очистить']
};
let randomNum;
let quoteIndex;
let playNum = 0;
let isPlay = false;
let audioTime = 0;
let audioLength = 0;
let quotes;
let languageGreeting = greetingTranslation.en;
let languageDate = dateTranslation.en;
let languageToDo = toDoTranslation.en;
let languageWeather = weatherTranslation.en;
let languageSettings = settingsTranslation.en;
window.addEventListener('load', getLocalStorageWeather);


//preload

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('preload-remove')
    }, 1000);
});

//time

showTime();
function showTime() {
    time.innerHTML = (hours() + ":" + minutes() + ":" + seconds());
    setTimeout(showTime, 1000);
    showDate(languageDate);
    showGreeting(languageGreeting);
};
function hours() {
    let h = new Date().getHours();
    if (h < 10) {
        return '0' + h;
    }
    return '' + h;
}
function minutes() {
    let m = new Date().getMinutes();
    if (m < 10) {
        return '0' + m;
    }
    return '' + m;
}
function seconds() {
    let s = new Date().getSeconds();
    if (s < 10) {
        return '0' + s;
    }
    return '' + s;
}
function showDate(languageDate) {
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    date.innerHTML = new Date().toLocaleDateString(languageDate, options);
}

//greeting
name.placeholder = "[Enter name]";
function getTimeOfDay(languageGreeting) {
    let hour = new Date().getHours();
    switch (true) {
        case (6 > hour && hour >= 0):
            return `${languageGreeting[1]}`;
        case (12 > hour && hour >= 6):
            return `${languageGreeting[2]}`;
        case (18 > hour && hour >= 12):
            return `${languageGreeting[3]}`;
        case (hour >= 18 && hour <= 23):
            return `${languageGreeting[4]}`;
    }

}
function getTimeGreeting(languageGreeting) {
    if (languageGreeting === greetingTranslation.en) {
        return languageGreeting[0];
    }
    else {
        let hour = new Date().getHours();
        switch (true) {
            case (6 > hour && hour >= 0):
                return `${languageGreeting[6]}`;
            case (12 > hour && hour >= 6):
                return `${languageGreeting[5]}`;
            case (18 > hour && hour >= 12):
                return `${languageGreeting[0]}`;
            case (hour >= 18 && hour <= 23):
                return `${languageGreeting[0]}`;
        }
    }
}


function showGreeting(languageGreeting) {
    greeting.innerHTML = `${getTimeGreeting(languageGreeting)} ${getTimeOfDay(languageGreeting)}`;
}


function setLocalStorage() {
    localStorage.setItem('.name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('.name')) {
        name.value = localStorage.getItem('.name');

    }
}
window.addEventListener('load', getLocalStorage);

//background

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNum(1, 20);

function timeOfDay() {
    let hour = new Date().getHours();
    switch (true) {
        case (6 > hour && hour >= 0):
            return 'night';
        case (12 > hour && hour >= 6):
            return 'morning';
        case (18 > hour && hour >= 12):
            return 'afternoon';
        case (hour >= 18 && hour <= 23):
            return 'evening';
    }

}

function setBg() {
    let timeDay = timeOfDay()

    let bgNum;
    if (String(randomNum).length === 1) {
        bgNum = String(randomNum).padStart(2, '0');
    }
    else { bgNum = String(randomNum) }
    const img = new Image();
    img.src = "https://raw.githubusercontent.com/sergey-mak1/images/assets/images/" + timeDay + "/" + bgNum + ".jpg";
    img.onload = () => {
        document.body.style.backgroundImage = "url(" + img.src + ")";
    }
}
async function getLinkToImageOfUnsplash() {
    const img = new Image();
    let timeDay = timeOfDay();
    const url = 'https://api.unsplash.com/photos/random?query=' + timeDay + '&client_id=NrFW9NQH294WkKUhpfDzxRGpureaMlVUgHuhm2RKyOg';
    const res = await fetch(url);
    const data = await res.json();
    img.src = data.urls.regular;
    img.onload = () => {
        document.body.style.backgroundImage = "url(" + data.urls.regular + ")";
    }
}

async function getLinkToImageOfFlickr() {
    const img = new Image();
    let timeDay = timeOfDay();
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5e29d55ab615ed42511ced4a5192fed6&tags=' + timeDay + '&extras=url_l&format=json&nojsoncallback=1';
    const res = await fetch(url);
    const data = await res.json();
    img.src = data.photos.photo[randomNum].url_l;
    img.onload = () => {
        document.body.style.backgroundImage = "url(" + data.photos.photo[randomNum].url_l + ")";
    }
}
backgroundServer();
function backgroundServer() {
    if (assigned.length === 0) {
        setBg();
    }
    else {
        if (assigned[0].classList.contains('flickr-server')) {
            getLinkToImageOfFlickr();
        }
        else if (assigned[0].classList.contains('unsplash-server')) {
            getLinkToImageOfUnsplash();
        }
        else {
            setBg();
        }
    }
}

function getSlideNext() {
    if (randomNum < 20) {
        randomNum++;
        backgroundServer();
    }
    else {
        randomNum = 1;
        backgroundServer();
    }
}
function getSlidePrev() {

    if (randomNum > 1 && randomNum <= 20) {
        randomNum--;
        backgroundServer();
    }
    else {
        randomNum = 20;
        backgroundServer();
    }
}
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

//weather

async function getWeather(languageWeather) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${languageWeather[3]}&appid=1facf7d94b02bdc871690a8b2bd9cc42&units=metric`;
    const res = await fetch(url);
    if (res.status === 404 || res.status === 400) {
        city.value = 'City not found!';
        temperature.textContent = `??? °C`;
        weatherDescription.textContent = '???';
        windSpeed.textContent = `???`;
        humidity.textContent = `??? %`;
    }
    else {
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        windSpeed.textContent = `${languageWeather[0]} ${Math.round(data.wind.speed)} ${languageWeather[1]}`;
        humidity.textContent = `${languageWeather[2]} ${Math.round(data.main.humidity)}%`;
    }
}
function setLocalStorageWeather() {
    localStorage.setItem('.city', city.value);
}
window.addEventListener('beforeunload', setLocalStorageWeather);

function getLocalStorageWeather() {
    if (localStorage.getItem('.city') === 'City not found!' || localStorage.getItem('.city').length === 0) {
        city.value = 'Minsk';
    }
    else {
        city.value = localStorage.getItem('.city');
    }

}
city.addEventListener('change', getWeather);
city.addEventListener('change', translate);

//quotes
let random;
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    random = Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandom(1, 50);
async function getQuotes(quotes) {
    const res = await fetch(quotes);
    const data = await res.json();
    quoteIndex = random;
    quoteText.textContent = `"${data[quoteIndex].text}"`;
    quoteAuthor.textContent = `${data[quoteIndex].author}`;
}

getQuotes('quotesEn.json');
quotes = 'quotesEn.json';
function clickReload() {
    getRandom(1, 50);
    getQuotes(quotes);
    quoteCont.classList.add('hidden');
    setTimeout(removeClass, 1500);
}
quoteBtn.addEventListener('click', clickReload);
function removeClass() {
    quoteCont.classList.remove('hidden');
}

//  player

import playList from './playList.js';
playList.forEach(el => {
    const li = document.createElement('li');
    playListCont.append(li);
    li.classList.add('track');
    li.textContent = el.title;
})
const tracks = Array.from(playListCont.children);
const audio = new Audio();
playAudio();
playBtn.addEventListener('click', playAudio);
playBtn.addEventListener('click', playSwitch);

function playAudio() {
    audio.currentTime = 0;
    if (played.length === 0) {
        audio.src = playList[0].src;
        audio.pause();
        isPlay = false;
    }
    else {
        audio.src = playList[playNum].src;
    }
    if (!isPlay && played.length !== 0) {
        audio.play();
        isPlay = true;
    }
    else {
        audio.pause();
        isPlay = false;
    }
    activeTrack();
}
function playSwitch() {

    if (isPlay) {
        audio.currentTime = audioTime;
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');
        tracks[playNum].classList.add('small_pause');
        tracks[playNum].classList.remove('small_play');
    }
    else {
        audio.currentTime = audioTime;
        playBtn.classList.add('play');
        playBtn.classList.remove('pause');
        tracks[playNum].classList.add('small_play');
        tracks[playNum].classList.remove('small_pause');
    }
}

tracks.forEach(function (track, i) {
    track.addEventListener('click', function () {
        playNum = i;
        playSwitch();
        audio.src = playList[playNum].src;
        if (!isPlay && audioTime > 0 && played[0] !== this) {
            playBtn.classList.remove('play');
            playBtn.classList.add('pause');
            isPlay = true;
            audio.play();
            audio.currentTime = 0
        }
        else if (!isPlay && played[0] === this) {
            playBtn.classList.remove('play');
            playBtn.classList.add('pause');
            isPlay = true;
            audio.play();
            audio.currentTime = audioTime;
        }
        else if (played.length > 0 && played[0] === this) {
            isPlay = false;
            audio.pause();
            audio.currentTime = audioTime;
        }
        else {
            audio.currentTime = 0;
            playBtn.classList.remove('play');
            playBtn.classList.add('pause');
            isPlay = true;
            audio.play();
        }
        activeTrack();
    })
})

function activeTrack() {
    tracks.forEach(function (track, i) {
        track.classList.remove('played');
        track.classList.remove('small_pause');
        track.classList.remove('small_play');
    });
    tracks[playNum].classList.add('played');
    if (isPlay) {
        tracks[playNum].classList.remove('small_play');
        tracks[playNum].classList.add('small_pause');
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');
    }
    else {
        tracks[playNum].classList.add('small_play');
        tracks[playNum].classList.remove('small_pause');
        playBtn.classList.add('play');
        playBtn.classList.remove('pause');
    }

    audioTitle.textContent = document.querySelector('.played').innerHTML;
}



audio.addEventListener('timeupdate', function () {
    audioTime = Math.round(audio.currentTime);
    audioLength = Math.round(audio.duration);
    showAudioTime();
    let progress = Math.floor((audioTime * 100) / audioLength);
    if (isNaN(progress)) {
        return;
    }
    range.value = progress;
});
function showAudioTime() {
    let minAudio;
    let secAudio;
    minAudio = Math.floor(audioTime / 60);
    if (audioTime < 60) {
        secAudio = audioTime;
    }
    else {
        secAudio = audioTime - 60 * minAudio;
    }
    timeProgress.textContent = twoNumber(minAudio) + ':' + twoNumber(secAudio);
}
audio.onloadedmetadata = function () {
    let second;
    let minute;
    let audioLength = (Math.round(audio.duration));
    minute = Math.floor(audioLength / 60);
    if (audioLength < 60) {
        second = audioLength;
    }
    else {
        second = audioLength - 60 * minute;
    }
    audioLengthTime.textContent = twoNumber(minute) + ':' + twoNumber(second);
};

function twoNumber(a) {
    if (a < 10) {
        return '0' + a;
    }
    return '' + a;
}
let clickedValue;
range.addEventListener('click', function () {
    let position = event.pageX - (range.offsetLeft + + player.offsetLeft);
    clickedValue = position * range.max / range.offsetWidth;
    let clickedAudio = Math.floor((audioLength / 100) * clickedValue);
    range.value = clickedValue;
    audio.currentTime = clickedAudio;
})
let clickedValueVol;
volume.addEventListener('click', function () {
    console.log(volume.value)
    let position = event.pageX - (volume.offsetLeft + player.offsetLeft - 1);
    clickedValueVol = position * volume.max / volume.offsetWidth;
    volume.value = clickedValueVol;
    audio.volume = clickedValueVol / 100;
    return clickedValueVol;
})
window.addEventListener('load', getLocalStorageMute);
mute.addEventListener('click', function () {
    if (mute.classList.contains('mute-off') && audio.muted !== true) {
        audio.muted = true;
        mute.classList.add('mute-on');
        mute.classList.remove('mute-off');
        setLocalStorageVol2();
        volume.value = 0;
        audio.volume = 0;
    }
    else if ((mute.classList.contains('mute-on') && audio.muted === true)) {
        audio.muted = false;
        mute.classList.remove('mute-on');
        mute.classList.add('mute-off');
        getLocalStorageVol2();
    }
})

volume.addEventListener('click', function () {
    if (mute.classList.contains('mute-on') && audio.muted === true) {
        mute.classList.remove('mute-on');
        mute.classList.add('mute-off');
        audio.muted = false;
    }
    else if (mute.classList.contains('mute-off') && audio.muted === false && volume.value === 0) {
        mute.classList.remove('mute-off');
        mute.classList.add('mute-on');
        audio.muted = true;
    }
})
function setLocalStorageVol() {
    localStorage.setItem('.volume', volume.value);
    localStorage.setItem('.audio', audio.volume);
}
function setLocalStorageVol2() {
    localStorage.setItem('.volume2', volume.value);
    localStorage.setItem('.audio2', audio.volume);
}
function setLocalStorageMute() {
    localStorage.setItem('.mute', mute.className);
}

window.addEventListener('beforeunload', setLocalStorageVol);
window.addEventListener('beforeunload', setLocalStorageMute);

function getLocalStorageMute() {
    if (localStorage.getItem('.mute')) {
        mute.className = localStorage.getItem('.mute');

        if (localStorage.getItem('.mute') === 'button mute mute-on') {
            audio.muted = true;
            getLocalStorageVol2();
        }
    }
}

function getLocalStorageVol() {
    if (localStorage.getItem('.volume') && localStorage.getItem('.audio')) {
        volume.value = localStorage.getItem('.volume');
        audio.volume = localStorage.getItem('.audio');
    }
    else {
        volume.value = 100;
        audio.volume = 1;
    }
}

function getLocalStorageVol2() {
    volume.value = localStorage.getItem('.volume2');
    audio.volume = localStorage.getItem('.audio2');
}

window.addEventListener('load', getLocalStorageVol);


function getPlayNext() {

    if (playNum < playList.length - 1) {

        playNum++;
        resetTimeTrack();
    }
    else {
        playNum = 0;
        resetTimeTrack();
    }
}


function getPlayPrev() {
    if (playNum !== 0) {
        playNum--;
        resetTimeTrack();
    }

    else {
        playNum = playList.length - 1;
        resetTimeTrack();
    }

}
function resetTimeTrack() {
    if (isPlay) {
        isPlay = false;
        playAudio();
    }
    activeTrack();
    audio.currentTime = 0;
}
audio.addEventListener('ended', getPlayNext);
playNext.addEventListener('click', getPlayNext);
playPrev.addEventListener('click', getPlayPrev);
playListBtn.addEventListener('click', function () {
    playListBtn.classList.toggle('playlist-on');
    player.classList.toggle('active');
    playListCont.classList.toggle('playlist-open');
})

//settings

settingsBtn.addEventListener('click', function () {
    settingsBtn.classList.toggle('settings-on');
    if (settingsBtn.classList.contains('settings-on')) {
        settings.classList.add('settings-active');
        settings.classList.remove('settings-not-active');
    }
    else {
        imgList.classList.remove('image-list-active');
        imgList.classList.add('image-list-not-active');
        settings.classList.add('settings-not-active');
        settings.classList.remove('settings-active');
        imgBtn.classList.remove('mouseover');
    }
})

imgBtn.addEventListener('click', function () {
    if (imgBtn.classList.contains('mouseover')) {
        imgList.classList.remove('image-list-active');
        imgList.classList.add('image-list-not-active');
        imgBtn.classList.remove('mouseover');
    }
    else {
        imgList.classList.add('image-list-active');
        imgList.classList.remove('image-list-not-active');
        imgBtn.classList.add('mouseover');
        overLay.classList.add('overlay-active');
    }
})
overLay.addEventListener('mouseover', function () {
    imgList.classList.remove('image-list-active');
    imgList.classList.add('image-list-not-active');
    imgBtn.classList.remove('mouseover');
    overLay.classList.remove('overlay-active');
})

function settingsTranslate(languageSettings) {
    langSettings.textContent = languageSettings[0];
    switchOnAll.forEach(switchOn => {
        engLang.textContent = languageSettings[1];
        switchOn.textContent = languageSettings[3];
    });
    switchOffAll.forEach(switchOff => {
        rusLang.textContent = languageSettings[2];
        switchOff.textContent = languageSettings[4];
    });
    playerSettings.textContent = languageSettings[5];
    weatherSettings.textContent = languageSettings[6];
    timeSettings.textContent = languageSettings[7];
    dateSettings.textContent = languageSettings[8];
    greetingSettings.textContent = languageSettings[9];
    quoteSettings.textContent = languageSettings[10];
    imageSettings.textContent = languageSettings[11];
    toDoSetting.textContent = languageSettings[12];
}
settingsTranslate(languageSettings);

function translate() {
    if (langSwitch.children[1].classList.contains('switch-on')) {
        quotes = 'quotesRu.json';
        getQuotes(quotes);
        languageGreeting = greetingTranslation.ru;
        name.placeholder = "[Введите имя]";
        languageDate = dateTranslation.ru;
        languageWeather = weatherTranslation.ru;
        getWeather(languageWeather);
        languageSettings = settingsTranslation.ru;
        settingsTranslate(languageSettings);
        if (city.value === 'Minsk') {
            city.value = 'Минск';
        }
        languageToDo = toDoTranslation.ru;
        toDoTranslate(languageToDo);
        switch (selectTitle.textContent) {
            case toDoTranslation.en[0]:
                selectTitle.textContent = toDoTranslation.ru[0];
                break;
            case toDoTranslation.en[1]:
                selectTitle.textContent = toDoTranslation.ru[1];
                break;
            case toDoTranslation.en[2]:
                selectTitle.textContent = toDoTranslation.ru[2];
                break;
        }
    }
    else {
        quotes = 'quotesEn.json';
        getQuotes(quotes);
        languageGreeting = greetingTranslation.en;
        name.placeholder = "[Enter name]";
        languageDate = dateTranslation.en;
        languageWeather = weatherTranslation.en;
        getWeather(languageWeather);
        languageSettings = settingsTranslation.en;
        settingsTranslate(languageSettings);
        if (city.value === 'Минск') {
            city.value = 'Minsk';
        }
        languageToDo = toDoTranslation.en;
        toDoTranslate(languageToDo);
        switch (selectTitle.textContent) {
            case toDoTranslation.ru[0]:
                selectTitle.textContent = toDoTranslation.en[0];
                break;
            case toDoTranslation.ru[1]:
                selectTitle.textContent = toDoTranslation.en[1];
                break;
            case toDoTranslation.ru[2]:
                selectTitle.textContent = toDoTranslation.en[2];
                break;
        }
    }

}
switchBtns.forEach(switchBtn => {
    switchBtn.addEventListener('click', function () {
        switchBtn.classList.toggle('switch-on');

        switch (switchBtn.parentElement.className) {
            case 'language-switch':
                this.previousElementSibling.classList.toggle('selected');
                this.nextElementSibling.classList.toggle('selected');
                translate();
                break;

            case 'player-switch':
                this.previousElementSibling.classList.toggle('selected');
                this.nextElementSibling.classList.toggle('selected');
                if (player.classList.contains('player-off')) {
                    player.classList.add('player-on');
                    player.classList.remove('player-off');
                }
                else {
                    player.classList.add('player-off');
                    player.classList.remove('player-on');
                }
                break;

            case 'weather-switch':
                this.previousElementSibling.classList.toggle('selected');
                this.nextElementSibling.classList.toggle('selected');
                if (weather.classList.contains('weather-off')) {
                    weather.classList.add('weather-on');
                    weather.classList.remove('weather-off');
                }
                else {
                    weather.classList.add('weather-off');
                    weather.classList.remove('weather-on');
                }
                break;

            case 'time-switch':
                this.previousElementSibling.classList.toggle('selected');
                this.nextElementSibling.classList.toggle('selected');
                if (time.classList.contains('time-off')) {
                    time.classList.add('time-on');
                    time.classList.remove('time-off');
                }
                else {
                    time.classList.add('time-off');
                    time.classList.remove('time-on');
                }
                break;
            case 'date-switch':
                this.previousElementSibling.classList.toggle('selected');
                this.nextElementSibling.classList.toggle('selected');
                if (date.classList.contains('date-off')) {
                    date.classList.add('date-on');
                    date.classList.remove('date-off');
                }
                else {
                    date.classList.add('date-off');
                    date.classList.remove('date-on');
                }
                break;

            case 'greeting-switch':
                this.previousElementSibling.classList.toggle('selected');
                this.nextElementSibling.classList.toggle('selected');
                if (greetingCont.classList.contains('greeting-off')) {
                    greetingCont.classList.add('greeting-on');
                    greetingCont.classList.remove('greeting-off');
                }
                else {
                    greetingCont.classList.add('greeting-off');
                    greetingCont.classList.remove('greeting-on');
                }
                break;

            case 'quote-switch':
                this.previousElementSibling.classList.toggle('selected');
                this.nextElementSibling.classList.toggle('selected');
                if (quoteCont.classList.contains('quote-off')) {
                    quoteCont.classList.add('quote-on');
                    quoteCont.classList.remove('quote-off');
                    quoteBtn.classList.add('quote-on');
                    quoteBtn.classList.remove('quote-off');
                }
                else {
                    quoteCont.classList.add('quote-off');
                    quoteCont.classList.remove('quote-on');
                    quoteBtn.classList.remove('quote-on');
                    quoteBtn.classList.add('quote-off');
                }
                break;
            case 'todo-switch':
                this.previousElementSibling.classList.toggle('selected');
                this.nextElementSibling.classList.toggle('selected');
                if (toDoList.classList.contains('todo-off')) {
                    toDoList.classList.add('todo-on');
                    toDoList.classList.remove('todo-off');
                }
                else {
                    toDoList.classList.add('todo-off');
                    toDoList.classList.remove('todo-on');
                }
                break;
        }
    });
})

imageItems.forEach(function (imageItem, i) {
    imageItem.addEventListener('click', function () {
        imageItems.forEach(function (imageItem) {
            imageItem.classList.remove('assigned');
        })
        this.classList.add('assigned');
        backgroundServer();
    })
})

let imageServer = Array.from(imgList.children);
function setLocalStorageImageServer() {
    localStorage.setItem('.gitServer', imageServer[0].classList);
    localStorage.setItem('.unsplashServer', imageServer[1].classList);
    localStorage.setItem('.flickrServer', imageServer[2].classList);
}
window.addEventListener('beforeunload', setLocalStorageImageServer);

function getLocalStorageImageServer() {
    if (localStorage.getItem('.gitServer') && localStorage.getItem('.unsplashServer') && localStorage.getItem('.flickrServer')) {
        imageServer[0].classList = localStorage.getItem('.gitServer');
        imageServer[1].classList = localStorage.getItem('.unsplashServer');
        imageServer[2].classList = localStorage.getItem('.flickrServer');
        backgroundServer();
    }
}
window.addEventListener('load', getLocalStorageImageServer);

function setLocalStorageLanguage() {
    localStorage.setItem('.ru', langSwitch.children[2].classList);
    localStorage.setItem('.en', langSwitch.children[0].classList);
    localStorage.setItem('.lang_on', langSwitch.children[1].classList);
}

window.addEventListener('beforeunload', setLocalStorageLanguage);

function getLocalStorageLanguage() {
    if (localStorage.getItem('.ru') && localStorage.getItem('.en') && localStorage.getItem('.lang_on')) {
        langSwitch.children[2].classList = localStorage.getItem('.ru');
        langSwitch.children[0].classList = localStorage.getItem('.en');
        langSwitch.children[1].classList = localStorage.getItem('.lang_on');
        translate();
    }
}
window.addEventListener('load', getLocalStorageLanguage);

function setLocalStoragePlayerSet() {
    localStorage.setItem('.off_player', playerSwitch.children[2].classList);
    localStorage.setItem('.on_player', playerSwitch.children[0].classList);
    localStorage.setItem('.player_switch', playerSwitch.children[1].classList);
    localStorage.setItem('.player_off', player.classList);
}

window.addEventListener('beforeunload', setLocalStoragePlayerSet);

function getLocalStoragePlayerSet() {
    if (localStorage.getItem('.off_player') && localStorage.getItem('.on_player') && localStorage.getItem('.player_off')) {
        playerSwitch.children[2].classList = localStorage.getItem('.off_player');
        playerSwitch.children[0].classList = localStorage.getItem('.on_player');
        playerSwitch.children[1].classList = localStorage.getItem('.player_switch');
        if (playerSwitch.children[1].classList.contains('switch-on')) {
            player.classList = localStorage.getItem('.player_off');
        }
    }
}

window.addEventListener('load', getLocalStoragePlayerSet);

function setLocalStorageWeatherSet() {
    localStorage.setItem('.off_weather', weatherSwitch.children[2].classList);
    localStorage.setItem('.on_weather', weatherSwitch.children[0].classList);
    localStorage.setItem('.weather_switch', weatherSwitch.children[1].classList);
    localStorage.setItem('.weather_off', weather.classList);
}

window.addEventListener('beforeunload', setLocalStorageWeatherSet);

function getLocalStorageWeatherSet() {
    if (localStorage.getItem('.off_weather') && localStorage.getItem('.on_weather') && localStorage.getItem('.weather_off')) {
        weatherSwitch.children[2].classList = localStorage.getItem('.off_weather');
        weatherSwitch.children[0].classList = localStorage.getItem('.on_weather');
        weatherSwitch.children[1].classList = localStorage.getItem('.weather_switch');
        if (weatherSwitch.children[1].classList.contains('switch-on')) {
            weather.classList = localStorage.getItem('.weather_off');
        }
    }
}

window.addEventListener('load', getLocalStorageWeatherSet);

function setLocalStorageTimeSet() {
    localStorage.setItem('.off_time', timeSwitch.children[2].classList);
    localStorage.setItem('.on_time', timeSwitch.children[0].classList);
    localStorage.setItem('.time_switch', timeSwitch.children[1].classList);
    localStorage.setItem('.time_off', time.classList);
}

window.addEventListener('beforeunload', setLocalStorageTimeSet);

function getLocalStorageTimeSet() {
    if (localStorage.getItem('.off_time') && localStorage.getItem('.on_time') && localStorage.getItem('.time_off')) {
        timeSwitch.children[2].classList = localStorage.getItem('.off_time');
        timeSwitch.children[0].classList = localStorage.getItem('.on_time');
        timeSwitch.children[1].classList = localStorage.getItem('.time_switch');

        if (timeSwitch.children[1].classList.contains('switch-on')) {
            time.classList = localStorage.getItem('.time_off');
        }
    }
}

window.addEventListener('load', getLocalStorageTimeSet)

function setLocalStorageDateSet() {
    localStorage.setItem('.off_date', dateSwitch.children[2].classList);
    localStorage.setItem('.on_date', dateSwitch.children[0].classList);
    localStorage.setItem('.date_switch', dateSwitch.children[1].classList);
    localStorage.setItem('.date_off', date.classList);
}

window.addEventListener('beforeunload', setLocalStorageDateSet);

function getLocalStorageDateSet() {
    if (localStorage.getItem('.off_date') && localStorage.getItem('.on_date') && localStorage.getItem('.date_off')) {
        dateSwitch.children[2].classList = localStorage.getItem('.off_date');
        dateSwitch.children[0].classList = localStorage.getItem('.on_date');
        dateSwitch.children[1].classList = localStorage.getItem('.date_switch');

        if (dateSwitch.children[1].classList.contains('switch-on')) {
            date.classList = localStorage.getItem('.date_off');
        }
    }
}
window.addEventListener('load', getLocalStorageDateSet);

function setLocalStorageGreetingSet() {
    localStorage.setItem('.off_greeting', greetingSwitch.children[2].classList);
    localStorage.setItem('.on_greeting', greetingSwitch.children[0].classList);
    localStorage.setItem('.greeting_switch', greetingSwitch.children[1].classList);
    localStorage.setItem('.greeting_off', greetingCont.classList);
}

window.addEventListener('beforeunload', setLocalStorageGreetingSet);

function getLocalStorageGreetingSet() {
    if (localStorage.getItem('.off_greeting') && localStorage.getItem('.on_greeting') && localStorage.getItem('.greeting_off')) {
        greetingSwitch.children[2].classList = localStorage.getItem('.off_greeting');
        greetingSwitch.children[0].classList = localStorage.getItem('.on_greeting');
        greetingSwitch.children[1].classList = localStorage.getItem('.greeting_switch');

        if (greetingSwitch.children[1].classList.contains('switch-on')) {
            greetingCont.classList = localStorage.getItem('.greeting_off');
        }
    }
}
window.addEventListener('load', getLocalStorageGreetingSet);

function setLocalStorageQuoteSet() {
    localStorage.setItem('.off_quote', quoteSwitch.children[2].classList);
    localStorage.setItem('.on_quote', quoteSwitch.children[0].classList);
    localStorage.setItem('.quote_switch', quoteSwitch.children[1].classList);
    localStorage.setItem('.quote_off', quoteCont.classList);
}

window.addEventListener('beforeunload', setLocalStorageQuoteSet);

function getLocalStorageQuoteSet() {
    if (localStorage.getItem('.off_quote') && localStorage.getItem('.on_quote') && localStorage.getItem('.quote_off')) {
        quoteSwitch.children[2].classList = localStorage.getItem('.off_quote');
        quoteSwitch.children[0].classList = localStorage.getItem('.on_quote');
        quoteSwitch.children[1].classList = localStorage.getItem('.quote_switch');

        if (quoteSwitch.children[1].classList.contains('switch-on')) {
            quoteCont.classList = localStorage.getItem('.quote_off');
            quoteBtn.classList.add('quote-off');
        }
    }
}
window.addEventListener('load', getLocalStorageQuoteSet);

function setLocalStorageToDoSet() {
    localStorage.setItem('.off_toDo', toDoSwitch.children[2].classList);
    localStorage.setItem('.on_toDo', toDoSwitch.children[0].classList);
    localStorage.setItem('.toDo_switch', toDoSwitch.children[1].classList);
    localStorage.setItem('.toDo_off', toDoList.classList);
}

window.addEventListener('beforeunload', setLocalStorageToDoSet);

function getLocalStorageToDoSet() {
    if (localStorage.getItem('.off_toDo') && localStorage.getItem('.on_toDo') && localStorage.getItem('.toDo_off')) {
        toDoSwitch.children[2].classList = localStorage.getItem('.off_toDo');
        toDoSwitch.children[0].classList = localStorage.getItem('.on_toDo');
        toDoSwitch.children[1].classList = localStorage.getItem('.toDo_switch');

        if (toDoSwitch.children[1].classList.contains('switch-on')) {
            toDoList.classList = localStorage.getItem('.toDo_off');
        }
    }
}

window.addEventListener('load', getLocalStorageToDoSet);


// toDoList

selectTitle.textContent = selectItems[0].textContent;
selectButton.addEventListener('click', activeSelect);
selectList.addEventListener('mouseleave', () => {

    selectButton.classList.remove('open-button');
    selectHead.classList.remove('open-head');
    selectList.classList.remove('open-list');
})
function activeSelect() {
    selectButton.classList.toggle('open-button');
    selectHead.classList.toggle('open-head');
    selectList.classList.toggle('open-list');
}
selectItems.forEach(function (selectItem, i) {

    selectItem.addEventListener('click', function () {
        toDoItems.forEach(el => {
            el.classList.remove('todo-items-active');

        })
        toDoItems[i].classList.add('todo-items-active');
        selectTitle.textContent = this.textContent;
        activeSelect();
        if (selectTitle.textContent === toDoTranslation.en[2] || selectTitle.textContent === toDoTranslation.ru[2]) {
            toDoValue.classList.add('not-input');
            buttonClear.classList.add('clear-active');
        }
        else {
            toDoValue.classList.remove('not-input');
            buttonClear.classList.remove('clear-active');
        }
    })
});

function addItem(toDoItem, l) {
    const li = document.createElement('li');
    toDoItems[l].append(li);
    li.classList.add('todo-item');
    li.textContent = toDoItem;
    toDoValue.value = '';
}

let buttonComplete = [];
let buttonDelete = [];
let activeItemsArray = [];
toDoAdd.addEventListener('click', () => {
    if (toDoValue.value.length > 0) {
        addItemActive();
        setTimeout(actCompButtons, 1000);
        setTimeout(actDelButtons, 1000);
    }
})
toDoValue.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && toDoValue.value.length > 0) {
        addItemActive();
        setTimeout(actCompButtons, 1000);
        setTimeout(actDelButtons, 1000);
    }
})
function addItemActive() {
    activeItemsArray.push(toDoValue.value);
    addItem(toDoValue.value, 0);
    selectTitle.textContent = selectItems[0].textContent;
    toDoItems.forEach(el => {
        el.classList.remove('todo-items-active');
        toDoItems[0].classList.add('todo-items-active');
        Array.from(activeItems.children).forEach(actItem => {
            completeButton(actItem);
            deleteButton(actItem);
        });
    })
}

function buttonsComplete() {
    setTimeout(buttonsComplete, 1000);

}
buttonsComplete();

function buttonsDelete() {
    setTimeout(buttonsDelete, 1000);

}
buttonsDelete();
setTimeout(actCompButtons, 1000);
setTimeout(actDelButtons, 1000);
function setLocalStorageActiveItems() {
    localStorage.setItem('.activeValue', JSON.stringify(activeItemsArray));
}

window.addEventListener('beforeunload', setLocalStorageActiveItems);

function getLocalStorageActiveItems() {
    let toDoActive = JSON.parse(localStorage.getItem('.activeValue'));
    if (toDoActive.length > 0) {
        toDoActive.forEach(item => {
            addItem(item, 0);
            activeItemsArray.push(item);
        })
    }
    Array.from(activeItems.children).forEach(actItem => {
        completeButton(actItem);
        deleteButton(actItem);
    });
}
function completeButton(item) {
    const span = document.createElement('span');
    if (item.children.length < 2) {
        item.append(span);
        span.classList.add('button-complete');
    }
}

function deleteButton(item) {
    const span = document.createElement('span');
    if (item.children.length < 2) {
        item.append(span);
        span.classList.add('button-delete');
    }
}

function addButtonDelete() {
    Array.from(itemsAll).forEach(el => {
        deleteButton(el);
    });
}

window.addEventListener('load', getLocalStorageActiveItems);

let completeItemsArray = [];

function actCompButtons() {
    buttonComplete = Array.from(completeButtons);
    buttonComplete.forEach(button => {
        button.addEventListener('click', () => {
            toDoItems[1].append(button.parentElement);
            if (button.parentElement.textContent !== completeItemsArray[completeItemsArray.length - 1]) {
                completeItemsArray.push(button.parentElement.textContent);
            }
            activeItemsArray = activeItemsArray.filter((function (x) { return x !== button.parentElement.textContent }));
            setTimeout(() => { button.remove() }, 500);
        })
    })
}
setTimeout(actCompButtons, 1000);
setTimeout(actDelButtons, 1000);
let delNum;
let deleteItemsArray = [];
function actDelButtons() {
    buttonDelete = Array.from(deleteButtons);
    buttonDelete.forEach(button => {
        button.addEventListener('click', e => {
            toDoItems[2].append(button.parentElement)
            if (button.parentElement.textContent !== deleteItemsArray[deleteItemsArray.length - 1]) {
                deleteItemsArray.push(button.parentElement.textContent);
            }
            activeItemsArray = activeItemsArray.filter((function (x) { return x !== button.parentElement.textContent }));
            completeItemsArray = completeItemsArray.filter((function (x) { return x !== button.parentElement.textContent }));
            if (button.previousElementSibling) {
                button.previousElementSibling.remove();
            }
            setTimeout(() => { button.remove() }, 500);
        })

    })
}
function setLocalStorageCompleteItems() {
    localStorage.setItem('.completeValue', JSON.stringify(completeItemsArray));
}

window.addEventListener('beforeunload', setLocalStorageCompleteItems);

function getLocalStorageCompleteItems() {
    let toDoComplete = JSON.parse(localStorage.getItem('.completeValue'));
    if (toDoComplete.length > 0) {
        toDoComplete.forEach(item => {
            addItem(item, 1);
            completeItemsArray.push(item);
            addButtonDelete();
        })
    }
}
window.addEventListener('load', getLocalStorageCompleteItems);

function setLocalStorageDeleteItems() {
    localStorage.setItem('.deleteValue', JSON.stringify(deleteItemsArray));
}
window.addEventListener('beforeunload', setLocalStorageDeleteItems)

function getLocalStorageDeleteItems() {
    let toDoDelete = JSON.parse(localStorage.getItem('.deleteValue'));
    if (toDoDelete.length > 0) {
        toDoDelete.forEach(item => {
            addItem(item, 2);
            deleteItemsArray.push(item);
        })
    }
}
window.addEventListener('load', getLocalStorageDeleteItems);

buttonClear.addEventListener('click', () => {
    deleteItemsArray.length = 0;
    Array.from(toDoItems[2].children).forEach(delItem => {
        delItem.remove();
    })
})
function toDoTranslate(languageToDo) {
    activSelect.textContent = languageToDo[0];
    completedSelect.textContent = languageToDo[1];
    deletedSelect.textContent = languageToDo[2];
    buttonClear.textContent = languageToDo[3];
}
toDoTranslate(languageToDo);

console.log(
    'Выполненные пункты:\n\n1) время выводится в 24-часовом формате, например: 21:01:00\n\n 2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается)\n\n 3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня"\n\n 4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток\n\n 5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется\n\n 6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз\n\n 7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке)\n\n 8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке)\n\n 9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения\n\n 10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage\n\n 11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел\n\n 12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов)\n\n 13) при загрузке страницы приложения отображается рандомная цитата и её автор\n\n 14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую)\n\n 15) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause\n\n 16) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play\n\n 17) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev)\n\n 18) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем\n\n 19) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый.\n\n 20) добавлен прогресс-бар в котором отображается прогресс проигрывания\n\n 21) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека\n\n 22) над прогресс-баром отображается название трека\n\n 23) отображается текущее и общее время воспроизведения трека\n\n 24) есть кнопка звука при клике по которой можно включить/отключить звук\n\n 25) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука\n\n 26) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте\n\n 27) переводится язык и меняется формат отображения даты\n\n 28) переводится приветствие и placeholder\n\n 29) переводится прогноз погоды в т.ч описание погоды и город по умолчанию\n\n 30) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая\n\n 31) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется\n\n 32) в качестве источника изображений может использоваться Unsplash API\n\n 33) в качестве источника изображений может использоваться Flickr API\n\n 34) в настройках приложения можно указать язык приложения (en/ru или en/be)\n\n 35) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API\n\n 36) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал\n\n 37) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их\n\n 38) настройки приложения сохраняются при перезагрузке страницы\n\n 39) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным\n\n\nСпасибо за проверку!!!\n\n Оценка: 150 баллов'
)