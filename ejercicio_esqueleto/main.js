//aquí el código JS
function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text",ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));
}


/*Con addEventListener
const div1 = document.querySelector("div1");
div1.addEventListener('dragover',e=>{
    e.preventDefault();
});
div1.addEventListener('drop',e=>{
    div1,appendChild(images)
});

*/