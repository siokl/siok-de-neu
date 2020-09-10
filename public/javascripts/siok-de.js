function toggleMenu(event){
    console.log("target"+event.target.id);
    var menuNodes = document.getElementById(event.target.id).parentElement.parentElement.childNodes;
    for(i=0; i<=menuNodes.length-1; i++){
        menuNodes[i].className = undefined;
    }
    document.getElementById(event.target.id).parentElement.className = "active";
}