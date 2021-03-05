'use strict';
const wrapper = document.querySelector('.wrapper');
const toast = document.querySelector('.toast');
const wifiIcon = document.querySelector('.icon');
const title = document.querySelector('span');
const subTitle = document.querySelector('p');
const closeIcon = document.querySelector('.close-icon');


window.onload = () => {
    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://www.json-generator.com/api/json/get/cgCGVqsyNu?indent=2", true)
        xhr.onload = (e) => {
            if (xhr.status == 200 && xhr.status < 300) {
                online();
                console.log(e);
            } else {
                offline();
                console.log(e);
            }
        }
        xhr.onerror = (e) => {
            offline();
            console.log(e);
        };
        xhr.send();
    };

    function online() {
        toast.classList.remove('offline');
        title.textContent = "You're Online now";
        subTitle.textContent = "Hurray! Internet is connected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>'
        subTitle.style.color = "#14853F";
        closeIcon.onclick = () => {
            wrapper.classList.add('hide');
        }

    };

    function offline() {
        wrapper.classList.remove('hide');
        toast.classList.add('offline');
        title.textContent = "You're offline now";
        subTitle.textContent = "Opps! internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>'
        subTitle.style.color = "#878787";

    };
    setTimeout(() => {
        wrapper.classList.add('hide');
    }, 5000)

    setInterval(() => {
        ajax();
    }, 100)


}