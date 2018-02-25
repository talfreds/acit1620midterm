var d1 = document.getElementById("d1r");
var d2 = document.getElementById("d2r");
var d3 = document.getElementById("d3r");
var d4 = document.getElementById("d4r");
var img1 = 1;
var img2 = 1;
var img3 = 1;
var img4 = 1;

document.getElementById('next').addEventListener('click',  
                                                 function(){

    if (d1.checked){
  
        img1 = img1 + 1;
        if (img1 > 3)
        {
            img1 = 1;
        }
        
    document.getElementById('d1').src = 'imgs/gears/h'+img1+'.png';
    }
    
    else if (d2.checked){
 
        img2 = img2 + 1;
        if (img2 > 3)
        {
            img2 = 1;
        }
        
    document.getElementById('d2').src = 'imgs/gears/b'+img2+'.png';
        
    }
    
    else if (d3.checked){
        img3 = img3 + 1;
        if (img3 > 3)
        {
            img3 = 1;
        }
        
    document.getElementById('d3').src = 'imgs/gears/l'+img3+'.png';
    }

    else if (d4.checked){
        img4 = img4 + 1;
        if (img4 > 3)
        {
            img4 = 1;
        }
        
    document.getElementById('d4').src = 'imgs/gears/f'+img4+'.png';
    }
    
    else{
        alert('Pick an option!')
    }
});

document.getElementById('prev').addEventListener('click',  
                                                 function(){

    if (d1.checked){
  
        img1 = img1 - 1;
        if (img1 < 1)
        {
            img1 = 3;
        }
        
    document.getElementById('d1').src = 'imgs/gears/h'+img1+'.png';
    }
    
    else if (d2.checked){
 
        img2 = img2 - 1;
        if (img2 < 1)
        {
            img2 = 3;
        }
        
    document.getElementById('d2').src = 'imgs/gears/b'+img2+'.png';
        
    }
    
    else if (d3.checked){
        img3 = img3 - 1;
        if (img3 < 1)
        {
            img3 = 3;
        }
        
    document.getElementById('d3').src = 'imgs/gears/l'+img3+'.png';
    }

    else if (d4.checked){
        img4 = img4 - 1;
        if (img4 < 1)
        {
            img4 = 3;
        }
        
    document.getElementById('d4').src = 'imgs/gears/f'+img4+'.png';
    }
    
    else{
        alert('Pick an option!')
    }
});


document.getElementById('combosIn').addEventListener('keyup', function(ev){
    if (ev.keyCode == 13)
        {
    
    if (combosIn.value == 'combo1')
        {
            document.getElementById('d1').src = 'imgs/gears/h1.png';
            document.getElementById('d2').src = 'imgs/gears/b1.png';
            document.getElementById('d3').src = 'imgs/gears/l1.png';
            document.getElementById('d4').src = 'imgs/gears/f1.png';
            img1 = 1;
            img2 = 1;
            img3 = 1;
            img4 = 1;
        }
    if (combosIn.value == 'combo2')
        {
            document.getElementById('d1').src = 'imgs/gears/h2.png';
            document.getElementById('d2').src = 'imgs/gears/b2.png';
            document.getElementById('d3').src = 'imgs/gears/l2.png';
            document.getElementById('d4').src = 'imgs/gears/f2.png';
            img1 = 2;
            img2 = 2;
            img3 = 2;
            img4 = 2;
        }
    if (combosIn.value == 'combo3')
        {
            document.getElementById('d1').src = 'imgs/gears/h3.png';
            document.getElementById('d2').src = 'imgs/gears/b3.png';
            document.getElementById('d3').src = 'imgs/gears/l3.png';
            document.getElementById('d4').src = 'imgs/gears/f3.png';
            img1 = 3;
            img2 = 3;
            img3 = 3;
            img4 = 3;
        }
    if (combosIn.value == 'random')
        {
            img1 = Math.floor(Math.random() * 2) + 1;
            img2 = Math.floor(Math.random() * 2) + 1;
            img3 = Math.floor(Math.random() * 2) + 1;
            img4 = Math.floor(Math.random() * 2) + 1;
            
            document.getElementById('d1').src = 'imgs/gears/h'+img1+'.png';
            document.getElementById('d2').src = 'imgs/gears/b'+img2+'.png';
            document.getElementById('d3').src = 'imgs/gears/l'+img3+'.png';
            document.getElementById('d4').src = 'imgs/gears/f'+img4+'.png';
 
            }
            
        if ((combosIn.value).includes('head1'))
            {
                document.getElementById('d1').src = 'imgs/gears/h1.png';
                img1 = 1;
            }

        if ((combosIn.value).includes('head2'))
            {
                document.getElementById('d1').src = 'imgs/gears/h2.png';
                img1 = 2;
            }
    
        if ((combosIn.value).includes('head3'))
            {
                document.getElementById('d1').src = 'imgs/gears/h3.png';
                img1 = 3;
            }
            

        if ((combosIn.value).includes('body1'))
            {
                document.getElementById('d2').src = 'imgs/gears/b1.png';
                img2 = 1;
            }
        if ((combosIn.value).includes('body2'))
            {
                document.getElementById('d2').src = 'imgs/gears/b2.png';
                img2 = 2;
            }
        if ((combosIn.value).includes('body3'))
            {
                document.getElementById('d2').src = 'imgs/gears/b3.png';
                img2 = 3;
            }

        if ((combosIn.value).includes('leg1'))
            {
                document.getElementById('d3').src = 'imgs/gears/l1.png';
                img3 = 1;
            }
        if ((combosIn.value).includes('leg2'))
            {
                document.getElementById('d3').src = 'imgs/gears/l2.png';
                img3 = 2;
            }
        if ((combosIn.value).includes('leg3'))
            {
                document.getElementById('d3').src = 'imgs/gears/l3.png';
                img3 = 3;
            }

            
        if ((combosIn.value).includes('foot1'))
            {
                document.getElementById('d4').src = 'imgs/gears/f1.png';
                img4 = 1;
            }
        if ((combosIn.value).includes('foot2'))
            {
                document.getElementById('d4').src = 'imgs/gears/f2.png';
                img4 = 2;
            }
        if ((combosIn.value).includes('foot3'))
            {
                document.getElementById('d4').src = 'imgs/gears/f3.png';
                img4 = 3;
            }
        
            
            }
});