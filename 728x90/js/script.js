var loop = 0;
   var intervalo;
   var i=0;
var animacion;
var contandor;
var ancho_frame;
$(document).ready(function(){
   $('#adv').click(function(){
      window.open(window.clickTag);
   }); 
   $('#boton').click(function(){
      window.open(window.clickTag);
   }); 
   $('#boton').mouseover(function(){
    $('#boton span').addClass('changed');
   }); 
   $('#boton').mouseleave(function(){
     $('#boton span').removeClass('changed');
   }); 
    $('#adv').mouseover(function(){
   parar();
   }); 
          $("#back").css("display", "none");
//    $('#adv').mouseleave(function(){
//   reanimar();
//   }); 

 

intervalo= setInterval(function(){
//    
    cambiarFoto(); i++;
    console.log(i);
    if(i>=4){
        clearInterval(intervalo); 
        $('.t1').css({'transform': 'rotateX(90deg)', 'opacity':0});
          setTimeout(function(){
         $('.t2').css({'transform': 'rotateX(0)', 'opacity':1});
   },500);
      
    }
    
    }, 4000);
//    var n=0;
//    contador= setInterval(function(){
////    
//     n++;
//    console.log("estamos en el segundo: "+n);
//    if(n>=20){
//        clearInterval(contador); 
//
//      
//    }
    
//    }, 1000);

});

function initBanner(){


    $('#ad').css({'opacity': 1});
     setTimeout(function(){
         $('#frames').css({'opacity': 1});
   },500);
  
}





/////////////////////////////////////////////////////////////////////
//START -----> Empezamos a mover el content_slider al entrar al documento
var pos_left;
pos_left=0;




function cambiarFoto(){
    //Mov contenedor fotos
    pos_left += -300;
   
    $("#frames").css('right',pos_left);
    
    if(pos_left==0){
        $("#back").css("display", "none");
    }else{
                $("#back").css("display", "block");
    }
    if(pos_left== -1200){
        $("#next").css("display", "none");
    }else{
              $("#next").css("display", "block");  
    }
    
}
//
function pasarFoto(dir){ //dir="next" || dir="prev"
    if(dir==="prev"){
     
             pos_left -= -300;
       
    }
    if(dir==="next"){
        pos_left  +=-300;
          
      
    }
    if(pos_left==0){
        $("#back").css("display", "none");
    }else{
                $("#back").css("display", "block");
    }
    if(pos_left== -1200){
        $("#next").css("display", "none");
    }else{
              $("#next").css("display", "block");  
    }
    console.log("poscion"+pos_left);
   $("#frames").css('right',pos_left);

}
//
//        
/////////////////////////////////////////////////////////
////EVENTOS
//content_slider.onmouseover = parar;

function parar(){
    clearInterval(intervalo);
}


//function reanimar(){
//intervalo= setInterval(function(){
//   
//    cambiarFoto(); 
//    console.log(i);
//    if(i>=4){
//        clearInterval(intervalo); 
//        $('.t1').css({'transform': 'rotateX(90deg)', 'opacity':0});
//          setTimeout(function(){
//         $('.t2').css({'transform': 'rotateX(0)', 'opacity':1});
//   },500);
//      i=0;
//    }
//    
//    i++;
//    }, 4000);
//}





