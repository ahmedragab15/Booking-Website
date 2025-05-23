//? Main Search Page
let sliderContainer = document.querySelectorAll(".range-slider")

sliderContainer.forEach(container => {

let slider = container.querySelector(".slider")
let thumb = container.querySelector(".slider-thumb")
let tooltip = container.querySelector(".tooltip")
let progress = container.querySelector(".progress")

    function customSlider() {
        const maxVal = slider.getAttribute("max");
        const val = (slider.value / maxVal) * 100 + "%";

        tooltip.innerHTML = slider.value;
        progress.style.width = val;
        thumb.style.left = val;
    }

    slider.addEventListener('input', customSlider);
    customSlider(); 
});

//? Hotel Search Page
const searchHotel = () => {
    window.location.href = "search-hotel.html"
}

//? Flight Search Page
const searchFlight = () => {
    window.location.href = "search-flight.html"
}

//? Tour Search Page
const searchTour = () => {
    window.location.href = "search-tour.html"
}

//? Car Search Page
const searchCar = () => {
    window.location.href = "search-car.html"
}
