var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");


document.getElementById("bg1").addEventListener("click", function(){

    document.getElementById("main").style.display = 'block';
    m1.src = "imgs/gears/h1.png"; 
    m2.src = "imgs/gears/h2.png"; 
    m3.src = "imgs/gears/h3.png"; 
    document.getElementById('maintitle').innerText = 'Head Gear';
});

document.getElementById("bg2").addEventListener("click", function(){

    document.getElementById("main").style.display = 'block';
        m1.src = "imgs/gears/b1.png"; 
    m2.src = "imgs/gears/b2.png"; 
    m3.src = "imgs/gears/b3.png";
    document.getElementById('maintitle').innerText = 'Body Gear';
});



document.getElementById("bg3").addEventListener("click", function(){

    document.getElementById("main").style.display = 'block';
        m1.src = "imgs/gears/l1.png"; 
    m2.src = "imgs/gears/l2.png"; 
    m3.src = "imgs/gears/l3.png";
    document.getElementById('maintitle').innerText = 'Leg Gear';
});



document.getElementById("bg4").addEventListener("click", function(){

    document.getElementById("main").style.display = 'block';
        m1.src = "imgs/gears/f1.png"; 
    m2.src = "imgs/gears/f2.png"; 
    m3.src = "imgs/gears/f3.png";
    document.getElementById('maintitle').innerText = 'Foot Gear';
});


