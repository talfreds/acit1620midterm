
document.getElementById('menu').style.top = '-80px';

document.getElementById("downimg").addEventListener("click", function(){
    

    menuloc = parseInt(document.getElementById('menu').style.top, 10);
    
    if (menuloc == -80)
        {
    document.getElementById("menu").style.top = 
                "0px";
        }
    else {
        document.getElementById("menu").style.top = 
                "-80px";
    }
});
