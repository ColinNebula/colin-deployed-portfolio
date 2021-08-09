//Display Date and time 
$(document).ready(function () {
    var currentDay = moment();
    $("#currentDay").text(currentDay.format('MMMM, Do YYYY, h:mm:ss a'));
});

// Resume Modal
const resumeBtn = document.querySelector('#resumeBtn');
const backBtn = document.querySelector('#deleteButton');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
console.log('a button was clicked');
// Add event listener
resumeBtn.addEventListener('click', () => {
    modal.classList.add('is-active');
});
modalBg.addEventListener('click', () => {
    modal.classlist.remove('is-active');
});

deleteButton.addEventListener('click', () => {
    modal.classlist.remove('is-active');
});


  
//Weather Fetch
fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=b26a1b41c4125331917058bf632db977"
)
    .then(
        function (res) {
            console.log(res);
            return res.json();
        })
    .then(function (data) {
        const { coord } = data
        const { lon, lat } = coord
        console.log(data.coord.lon, data.coord.lat);
        getWeather(lat, lon,);
    });


var weatherEl = $('#weather');
var apiKey = 'b26a1b41c4125331917058bf632db977 '
var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
function getWeatherData(cityName) {
    fetch(weatherUrl + cityName + "/?token=" + apiKey)
        .then(function (response) {
            console.log(response);
            return response.json()
                .then(function (weatherData) {
                    const { status, data } = weatherData;
                    weatherEl.empty();
                    if (status == "ok") {
                        displayWeather(weatherData);
                    }
                    else {
                        var alertEl = $("<div>");
                        alertEl.addClass("notification is-danger");
                        alertEl.text("Please check the city name or try another city");
                        searchCityEl.after(alertEl);
                        setTimeout(function () {
                            alertEl.remove();
                        }, 2000)
                    };
                })
                .catch(function (error) {

                })
        });
}















// toggles the class is-active
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});
