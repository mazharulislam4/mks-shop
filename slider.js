const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".wrapper .item");
const container = document.querySelector(".container");
const next = document.querySelector(".next");




let counter = 0; 




next.addEventListener("click", function () {
    counter =  (items.length + counter + 1) % items.length;
    container.scrollLeft = items[0].offsetWidth * counter + 30;
    console.log(items.length);
    console.dir(container);
    console.log(counter);
});

