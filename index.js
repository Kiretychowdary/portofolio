const imgs = document.querySelectorAll("img");
const d1 = document.querySelector(".d1");
// d1.appendChild(imgs[0]);
let ind = 0;
setTimeout(() => {
    if (ind== 3){ ind=0};

    d1.innerHTML = ''; // Clear current content
    d1.appendChild(imgs[ind]);
    ind+=1;
}, 0);

setInterval(() => {
    if (ind== 3){ ind=0};

    d1.innerHTML = ''; // Clear current content
    d1.appendChild(imgs[ind]);
    ind+=1;
}, 3005);

