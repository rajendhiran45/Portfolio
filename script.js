var swt=document.getElementById("check")
var pht=document.getElementById("python")
swt.addEventListener("change",function(event)
{
    event.preventDefault()
    if(this.checked){
        document.body.classList.add("light-theme");
    }  
    else{
        document.body.classList.remove("light-theme");
    }

});