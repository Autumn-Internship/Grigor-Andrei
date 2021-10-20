let image= document.getElementById('main-image');
let images = ['./IMG/Ph1.jpg','./IMG/Ph2.jpg','./IMG/Ph3.jpg','./IMG/Ph4.jpeg']

function change(){
    if(image.getAttribute('src')==images[0]){
        image.setAttribute('src',images[1]);
    }
    else if(image.getAttribute('src')==images[1]){
        image.setAttribute('src',images[2]);
    }
    else if(image.getAttribute('src')==images[2]){
        image.setAttribute('src',images[3]);
    }
    else if(image.getAttribute('src')==images[3]){
        image.setAttribute('src',images[0]);
    }
    
}