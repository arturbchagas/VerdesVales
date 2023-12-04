window.addEventListener('scroll',function(){
    let scroll = this.document.querySelector('.back-to-top')
        scroll.classList.toggle('active',this.window.scrollY>450)

})
function backTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}