const addSign = document.querySelector(".add-sign");
addSign.addEventListener("click", () => {
    input.style.display = "block";
});
const text = document.querySelector(".text");
const input = document.querySelector(".input");
const span = document.querySelectorAll("span");
const ul = document.querySelector("ul");
text.addEventListener("click", () => {
    if (input.value == "" || input.value == " ") {
        alert("Please add something to do");
        input.style.display = "none";
    } else {
        input.style.display = "none";
        const li = document.createElement("li");
        li.innerText = input.value;
        let span = document.createElement("span");
        let img = document.createElement("img");
        img.setAttribute("src", "./assets/img/delete.png");
        img.setAttribute("class", "remove");
        li.style.listStyleType = "none";
        span.append(img);
        li.append(span);
        ul.append(li);
        input.value = "";
    }
});
const myList = document.getElementById("myList");
myList.addEventListener("mouseover", (e) => {
    if (e.target.tagName = "img") {
        e.target.src = "./assets/img/delete1.png";
    };
});
myList.addEventListener("mouseout", (e) => {
    if (e.target.tagName = "img") {
        e.target.src = "./assets/img/delete.png";
    };
});
// Removing of items
myList.addEventListener("click", (e) => {
    if (e.target.tagName = "img") {
        e.target.parentElement.parentElement.remove();
    };
});
// Sorting of items
const firstImg = document.querySelector(".first-img");
firstImg.addEventListener("click", () => {
    firstImg.style.display = "none";
    secondImg.style.display = "block";
    let arr = [];
    const info = [...myList?.children];
    info.forEach(item => {
        arr.push(item.innerHTML);
    });
    arr.sort();
    myList.innerHTML = "";
    arr.forEach(item => {
        let liS = `<li>${item}</li>`;
        myList.innerHTML += liS;
    });
});
firstImg.addEventListener("mouseover", () => {
    firstImg.src = "./assets/img/sort-bold1.png";
});
firstImg.addEventListener("mouseout", () => {
    firstImg.src = "./assets/img/sort1.png";
});
const secondImg = document.querySelector(".second-img");
secondImg.addEventListener("click", () => {
    secondImg.style.display = "none";
    firstImg.style.display = "block";
    let arr = [];
    const info = [...myList?.children];
    info.forEach(item => {
        arr.push(item.innerHTML);
    });
    arr.sort();
    arr.reverse();
    myList.innerHTML = "";
    arr.forEach(item => {
        let liS = `<li>${item}</li>`;
        myList.innerHTML += liS;
    });
});
secondImg.addEventListener("mouseover", () => {
    secondImg.src = "./assets/img/sort-bold2.png";
});
secondImg.addEventListener("mouseout", () => {
    secondImg.src = "./assets/img/sort2.png";
});
// AZ
const az = document.querySelector(".aze");
const h1 = document.querySelector("h1");
az.addEventListener("click", () => {
    h1.innerText = "Görüləcək işlər siyahısı";
    text.innerText = "Əlavə et";
    text.style.marginRight='23px';
});
// RU
const ru = document.querySelector(".ru");
ru.addEventListener("click", () => {
    h1.innerText = "Список дел";
    text.innerText = "Добавить";
    text.style.marginRight='13px'
});
// EN
const en = document.querySelector(".eng");
en.addEventListener("click", () => {
    h1.innerText = "To-Do List";
    text.innerText = "Add";  
    text.style.paddingRight='22px'
});