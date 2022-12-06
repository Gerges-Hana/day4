var image =document.createElement('img');
image.setAttribute('src','member-2.jpg')
var container=document.getElementById("container");
document.body.appendChild(image);
var add= document.getElementById("add");
var dellet= document.getElementById("dellet");
var container=document.getElementById("container");

var contImg=1;
var images=[];
var addlenthe =add.addEventListener("click",function(){

    image =document.createElement('img');
    image.setAttribute('src','member-2.jpg')
    document.body.appendChild(image); 
    images.push(image);
    contImg++;
    alert("you have a "+contImg);
    // console.log(contImg);
    return contImg;
});
dellet.addEventListener("click",function(){

    // for(var i=0;i>contImg;i++){
        // image.getAttribute('src','member-2.jpg')

    // document.body.removeChild(image); 
    images.pop(image)
    contImg-1;
    alert("you have a "+contImg);

    // }
    // image =document.createElement('img');
    
});