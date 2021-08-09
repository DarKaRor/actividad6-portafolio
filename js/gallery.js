const images = document.querySelectorAll('.clickable');
const imageShow = document.querySelector('.image img');
const container = document.querySelector('.image');



images.forEach(image=>{
    image.addEventListener('click',()=>{
        showImage(image.getAttribute('src'));
    })
})

container.addEventListener('click',(e)=>{
    if(e.target != imageShow){
        container.classList.toggle('active');
    }
})

const showImage = (image)=>{
    imageShow.src = image;
    container.classList.toggle('active');
}