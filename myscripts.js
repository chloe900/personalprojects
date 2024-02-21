document.addEventListener('DOMContentLoaded', function() {
    let aboutSection = document.getElementById('about');
    let floatingImage = document.getElementById('floating-image');
    let aboutPosition = aboutSection.offsetTop;

    function checkScroll() {
        let scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > aboutPosition) {
            aboutSection.classList.add('show');
        }

        let floatingImagePosition = floatingImage.offsetTop;

        if (scrollPosition > floatingImagePosition) {
            floatingImage.classList.add('show');
        }
    }

    window.addEventListener('scroll', checkScroll);
});


document.addEventListener('DOMContentLoaded', function() {
    let serviceItems = document.querySelectorAll('.services-list div');

    function checkScroll() {
        var scrollPosition = window.scrollY + window.innerHeight;

        serviceItems.forEach(function(serviceItem) {
            var serviceItemPosition = serviceItem.offsetTop;

            if (scrollPosition > serviceItemPosition) {
                serviceItem.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    var workElements = document.querySelectorAll(".work");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        workElements.forEach(function (workElement) {
            if (isInViewport(workElement)) {
                workElement.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial page load
});



let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
let sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwnm7X8aPXJ4ctOD_kzFe-YmeJh4ZNzTWTUBixstXRlmUnzYBIgr_BiGjwA9Kc_36TT/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML = "Message Sent!"
setTimeout(function(){
    msg.innerHTML = ""
}, 1000)
form.reset()
})
    .catch(error => console.error('Error!', error.message))
})