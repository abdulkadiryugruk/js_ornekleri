const renk = document.getElementById('renk')


renk.addEventListener('click', () =>{
    const  random = Math.floor(
        Math.random() * 256
    )
    const random2 = Math.floor(
     Math.random() * 256
 )
    const random3 = Math.floor(
     Math.random() * 256
 )

 document.body.style.backgroundColor = `rgb(${random}, ${random2}, ${random3})`
})


