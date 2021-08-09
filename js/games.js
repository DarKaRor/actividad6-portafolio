class Image{
    constructor(element,base,hover){
        this.element = element;
        this.base = base;
        this.hover = hover;
    }
}

var arr = [];
arr.push(new Image(document.querySelector('#games .card-img.e0'),'./img/game1-2.gif','./img/game1.png'));
arr.push(new Image(document.querySelector('#games .card-img.e1'),'./img/app1.png','./img/app1-2.png'));
arr.push(new Image(document.querySelector('#games .card-img.e2'),'./img/app2-2.gif','./img/app2.png'));

arr.forEach(item=>{
    item.element.onmouseover = function() {changeImage(item.element,item.base)};
    item.element.onmouseout = function() {changeImage(item.element,item.hover)};
})

function changeImage(element,  src){
    element.setAttribute('src',src);
}

