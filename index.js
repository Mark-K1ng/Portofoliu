function HeightFinder() {
    var rect = document.querySelector('.navbar').getBoundingClientRect();
    var navbarHeight = rect.height

    var rect2 = document.querySelector('.sitegrid').getBoundingClientRect();
    var sitegridHeight = rect2.height

    document.documentElement.style.setProperty('--navbarHeight', navbarHeight + 'px');
    document.documentElement.style.setProperty('--sitegridHeight', sitegridHeight + 'px');

    console.log(navbarHeight);
    console.log(sitegridHeight);
}
HeightFinder()