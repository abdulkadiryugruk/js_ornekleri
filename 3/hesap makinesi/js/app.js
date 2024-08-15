let dugme = document.getElementsByTagName("button");
let ekran = document.getElementsByClassName("ekran1")[0];
let hesapla = document.getElementById("hesapla");
let temizle = document.getElementById("temizle");

for(var i = 0; i<16;i++)
{
    if(i!=12 && i!=14)
dugme[i].addEventListener("click", yazdir);
}

function yazdir() {
    ekran.value=ekran.value+this.value;
}

temizle.addEventListener("click", ()=>{
    ekran.value=""
})

hesapla.addEventListener("click", ()=>{
    ekran.value=eval(ekran.value)
})