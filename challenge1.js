document.querySelector("#subscribe").addEventListener("click", function()
{
    if(this.checked == true){
        document.querySelector("#emailDiv").style.display = "block";
    }
    if(this.checked == false)
    {
        document.querySelector("#emailDiv").style.display = "none";
    }

});