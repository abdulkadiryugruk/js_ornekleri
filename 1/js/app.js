/* secim islemleri baslangic*/
/** @type {HTMLElement} */
let b1 = document.getElementsByClassName("b1")[0];

/** @type {HTMLElement} */
let d1 = document.getElementsByClassName("d1")[0];

/* secim islemleri bitis*/

b1.addEventListener('click', () => {
if (
    d1.style.display === "" || 
    d1.style.display === "block"
){
    d1.style.display = "none"
}
else{
    d1.style.display = "block"
}
});

