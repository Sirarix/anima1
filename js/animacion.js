			$(document).ready(function(){

				$('head').append('<link rel="stylesheet" type="text/css" href="css/estilos.css">');

				//cracion de las variables css que se usaran en la animacion
				var fondo1 = 'url(images/fondos/fondo1.jpg)';
				var fondo2 = 'url(images/fondos/fondo2.jpg)';
				var fondo3 = 'url(images/fondos/fondo3.jpg)';
				//variables personaje 1 stan
				var p1cab = 'url(images/1/cabeza.png)';
				var p1cue1 = 'url(images/1/cuerpo.png)';
				var p1cue2 = 'url(images/1/cuerpo2.png)';
				var p1cue3 = 'url(images/1/cuerpo3.png)';
				var p1oj0 = 'url(images/1/ojos.png)';
				var p1oj1 = 'url(images/1/ojos1.png) no-repeat';
				var p1oj2 = 'url(images/1/ojos2.png) no-repeat';
				var p1oj3 = 'url(images/1/ojos3.png) no-repeat';
				var p1bo1 = 'url(images/1/boca1.png) no-repeat ';
				var p1bo2 = 'url(images/1/boca2.png) no-repeat ';
				var p1bo3 = 'url(images/1/boca3.png) no-repeat ';
				var p1bo4 = 'url(images/1/boca4.png) no-repeat ';
				var p1bo5 = 'url(images/1/boca5.png) no-repeat ';
				var p1bo6 = 'url(images/1/boca6.png) no-repeat ';
				var p1bo7 = 'url(images/1/boca7.png) no-repeat ';
				var p1bo5 = 'url(images/1/boca5.png) no-repeat ';
				//fin de declaracion de variables personaje 1

				//variables personaje 2 erick
				var p2cab = 'url(images/2/cabeza.png)';
				var p2cue = 'url(images/2/cuerpo.png)';
				var p2oj0 = 'url(images/2/ojos.png) no-repeat';
				var p2oj1 = 'url(images/2/ojos1.png) no-repeat';
				var p2oj2 = 'url(images/2/ojos2.png) no-repeat';
				var p2oj3 = 'url(images/2/ojos3.png) no-repeat';
				var p2bo1 = 'url(images/2/boca1.png) no-repeat ';
				var p2bo2 = 'url(images/2/boca2.png) no-repeat ';
				var p2bo3 = 'url(images/2/boca3.png) no-repeat ';
				var p2bo4 = 'url(images/2/boca4.png) no-repeat ';
				var p2bo5 = 'url(images/2/boca5.png) no-repeat ';
				var p2bo6 = 'url(images/2/boca6.png) no-repeat ';
				var p2bo7 = 'url(images/2/boca7.png) no-repeat ';
				//fin de declaracion de variables personaje 2
				document.documentElement.style.setProperty('--fondo2', 'url(images/fondos/fondo2.jpg)');
				var sw=0; //swich para voltear al mono
				var swo=0; //switch ojo para saber donde pestañear

				//FUNCIONES STAN
				$('#derecha').click(function() {
					var auto = $('#cuerpo');
    				auto.animate({ 	left : parseInt(auto.css('left'))+40, 	top : parseInt(auto.css('top'))-5  },100);
    				auto.animate({ 	left : parseInt(auto.css('left'))+40, 	top : parseInt(auto.css('top'))  },100);
				});
				$('#izquierda').click(function() {
					var auto = $('#cuerpo');
    				auto.animate({ 	left : parseInt(auto.css('left'))-40, 	top : parseInt(auto.css('top'))-5  },100);
    				auto.animate({ 	left : parseInt(auto.css('left'))-40, 	top : parseInt(auto.css('top'))  },100);    		
    			});
				$('#abajo').click(function() {
					var auto = $('#cuerpo');
    				auto.animate({ 	top : parseInt(auto.css('top'))+40, 	left : parseInt(auto.css('left'))-5  },100);
    				auto.animate({ 	top : parseInt(auto.css('top'))+40, 	left : parseInt(auto.css('left'))  },100);
				});
				$('#arriba').click(function() {
					var auto = $('#cuerpo');
    				auto.animate({ 	top : parseInt(auto.css('top'))-40, 	left : parseInt(auto.css('left'))-5  },100); 
    				auto.animate({ 	top : parseInt(auto.css('top'))-40, 	left : parseInt(auto.css('left'))  },100);    			
				});
				//FIN FUNCIONES STAN
				//FUNCIONES PARA EL ZOOM
				$('#restaurar').click(function() {
    				$('#pantalla').css('transform','scale(1)');
					$('#pantalla').css('transform-origin','0% 0%');
				});	
				$('#zoomcentral').click(function() {
    				$('#pantalla').css('transform','scale(1.5)');
					$('#pantalla').css('transform-origin','50% 50%');
				});				
				$('#zoomizq').click(function() {
    				$('#pantalla').css('transform','scale(1.5)');
					$('#pantalla').css('transform-origin','-50% 50%');
				});				
				$('#zoomder').click(function() {
    				$('#pantalla').css('transform','scale(1.5)');
					$('#pantalla').css('transform-origin','150% 50%');
				});		
				//FUNCIONES PARA CAMBIO DE FONDO
				$('#fondo1').click(function() {
//    				$('#pantalla').css('background','url(images/fondos/fondo1.jpg');
    				$('#pantalla').css('background',fondo1);
    				$('#pantalla').css('background-size','100% 100%');
				});	
				$('#fondo2').click(function() {
    				$('#pantalla').css('background',fondo2);
    				$('#pantalla').css('background-size','100% 100%');
				});	
				$('#fondo3').click(function() {
    				$('#pantalla').css('background',fondo3);
    				$('#pantalla').css('background-size','100% 100%');
				});	

				$("#cuerpotexto").keydown(function(event){
					if(event.altKey){
					switch (event.which){
							case 37 :				
								aizquierdap2();
								break;
							case 38 :						
								aarribap2();
								break;
							case 39 :						
								aderechap2();
								break;													
							case 40 :						
								aabajop2();
								break;
							case 97 :						
								ahablar1p2();
								break;
							case 98 :						
								ahablar2p2();
								break;													
							case 99 :						
								ahablar3p2();
								break;	
							case 100 :
								ojosi2();
								break;					
							case 101 :
								ojosc2();
								break;					
							case 102 :
								ojosdp2();
								break;					
						}

					}
					else{
						switch (event.which){

							case 37 :						
								aizquierda();
								break;
							case 38 :						
								aarriba();
								break;
							case 39 :						
								aderecha();
								break;													
							case 40 :						
								aabajo();
								break;
							case 97 :						
								ahablar1();
								break;
							case 98 :						
								ahablar2();
								break;													
							case 99 :						
								ahablar3();
								break;	
							case 100 :
								ojosi();
								break;					
							case 101 :
								ojosc();
								break;					
							case 102 :
								ojosd();
								break;		
							case 103 :
								cuerpop11();
								break;					
							case 104 :
								cuerpop12();
								break;					
							case 105 :
								cuerpop13();
								break;												
						}
					}
					$("#cuerpotexto").val("");
				}); 
				$("#cuerpotexto2").keydown(function(event){
					alert(event.which);
					$("#cuerpotexto2").val("");
				}); 
				//FUNCIONES STAN
				function aderecha(){
					var auto = $('#cuerpo');
	    				auto.animate({ 	left : parseInt(auto.css('left'))+40, 	top : parseInt(auto.css('top'))-5  },100);
	    				auto.animate({ 	left : parseInt(auto.css('left'))+40, 	top : parseInt(auto.css('top'))  },100);
				}
				function aizquierda(){
					var auto = $('#cuerpo');
	    				auto.animate({ 	left : parseInt(auto.css('left'))-40, 	top : parseInt(auto.css('top'))-5  },100);
	    				auto.animate({ 	left : parseInt(auto.css('left'))-40, 	top : parseInt(auto.css('top'))  },100);
				}
				function aarriba(){
					var auto = $('#cuerpo');
    				auto.animate({ 	top : parseInt(auto.css('top'))-40, 	left : parseInt(auto.css('left'))-5  },100);
    				auto.animate({ 	top : parseInt(auto.css('top'))-40, 	left : parseInt(auto.css('left'))  },100)
    				;
				}
				function aabajo(){
					var auto = $('#cuerpo');
    				auto.animate({ 	top : parseInt(auto.css('top'))+40, 	left : parseInt(auto.css('left'))-5  },100);
    				auto.animate({ 	top : parseInt(auto.css('top'))+40, 	left : parseInt(auto.css('left'))  },100);
				}
				//FUNCIONES CAMBIO DE CUERPO														
				function cuerpop11(){
    				$('#cuerpo').css('background',p1cue1);
				}
				function cuerpop12(){
    				$('#cuerpo').css('background',p1cue2);
				}
				function cuerpop13(){
    				$('#cuerpo').css('background',p1cue3);
				}

				//fin cambio d ecuerpo P1		
				function ahablar1(){
					$('#boca').playKeyframe({
					  name: 'hablar1',
					  duration: "0.2s",
					  timingFunction: 'linear',
					  iterationCount: '1',
					  direction: 'normal',
					  fillMode: 'forwards',
					});
				}	
				function ahablar2(){
					$('#boca').playKeyframe({
					  name: 'hablar2',
					  duration: "0.3s",
					  timingFunction: 'linear',
					  iterationCount: '1',
					  direction: 'normal',
					  fillMode: 'forwards',
					});
				}
				function ahablar3(){
					$('#boca').playKeyframe({
					  name: 'hablar3',
					  duration: "0.4s",
					  timingFunction: 'linear',
					  iterationCount: '1',
					  direction: 'normal',
					  fillMode: 'forwards',
					});
				}	
				function voltear(){
					if(sw==0){
						$('#cuerpo').css('transform','scaleX(-1)')
						sw=1;
					}
					else{
						$('#cuerpo').css('transform','scaleX(1)')
						sw=0;

					}
				}
				function ojosc(){
						$('#ojo').pauseKeyframe();
						$('#ojo').css('background',p1oj1);
						$('#ojo').playKeyframe({
						  name: 'pesta',
						  duration: "4s",
						  timingFunction: 'steps(1)',
						  iterationCount: 'infinite',
						  direction: 'normal',
						  fillMode: 'forwards',
						});						
				}
				function ojosi(){
						$('#ojo').pauseKeyframe();
						$('#ojo').css('background',p1oj3);
						$('#ojo').playKeyframe({
						  name: 'pestai',
						  duration: "4s",
						  timingFunction: 'steps(1)',
						  iterationCount: 'infinite',
						  direction: 'normal',
						  fillMode: 'forwards',
						});
				}								
				function ojosd(){
						$('#ojo').pauseKeyframe();
						$('#ojo').css('background',p1oj2);
						$('#ojo').playKeyframe({
						  name: 'pestad',
						  duration: "4s",
						  timingFunction: 'steps(1)',
						  iterationCount: 'infinite',
						  direction: 'normal',
						  fillMode: 'forwards',
						});

				}
				//FIN FUNCIONES STAN														
				//FUNCIONES ERICK
				function aderechap2(){
					var auto = $('#cuerpop2');
	    				auto.animate({ 	left : parseInt(auto.css('left'))+40, 	top : parseInt(auto.css('top'))-5  },100);
	    				auto.animate({ 	left : parseInt(auto.css('left'))+40, 	top : parseInt(auto.css('top'))  },100);
				}
				function aizquierdap2(){
					var auto = $('#cuerpop2');
	    				auto.animate({ 	left : parseInt(auto.css('left'))-40, 	top : parseInt(auto.css('top'))-5  },100);
	    				auto.animate({ 	left : parseInt(auto.css('left'))-40, 	top : parseInt(auto.css('top'))  },100);
				}
				function aarribap2(){
					var auto = $('#cuerpop2');
    				auto.animate({ 	top : parseInt(auto.css('top'))-40, 	left : parseInt(auto.css('left'))-5  },100);
    				auto.animate({ 	top : parseInt(auto.css('top'))-40, 	left : parseInt(auto.css('left'))  },100)
    				;
				}
				function aabajop2(){
					var auto = $('#cuerpop2');
    				auto.animate({ 	top : parseInt(auto.css('top'))+40, 	left : parseInt(auto.css('left'))-5  },100);
    				auto.animate({ 	top : parseInt(auto.css('top'))+40, 	left : parseInt(auto.css('left'))  },100);
				}		
				function ahablar1p2(){
					$('#bocap2').playKeyframe({
					  name: 'hablar1p2',
					  duration: "0.2s",
					  timingFunction: 'linear',
					  iterationCount: '1',
					  direction: 'normal',
					  fillMode: 'forwards',
					});
				}	
				function ahablar2p2(){
					$('#bocap2').playKeyframe({
					  name: 'hablar2p2',
					  duration: "0.3s",
					  timingFunction: 'linear',
					  iterationCount: '1',
					  direction: 'normal',
					  fillMode: 'forwards',
					});
				}
				function ahablar3p2(){
					$('#bocap2').playKeyframe({
					  name: 'hablar3p2',
					  duration: "0.4s",
					  timingFunction: 'linear',
					  iterationCount: '1',
					  direction: 'normal',
					  fillMode: 'forwards',
					});
				}	
				function voltear2(){
					if(sw==0){
						$('#cuerpop2').css('transform','scaleX(-1)')
						sw=1;
					}
					else{
						$('#cuerpop2').css('transform','scaleX(1)')
						sw=0;

					}
				}
				function ojosc2(){
						$('#ojop2').pauseKeyframe();
						//url('images/1/ojos.png') no-repeat;
						$('#ojop2').css('background', p2oj0 );
						//$('#ojo').css('animation','pesta');
						//$('#ojo').resumeKeyframe();
						$('#ojop2').playKeyframe({
						  name: 'pestap2',
						  duration: "4s",
						  timingFunction: 'steps(1)',
						  iterationCount: 'infinite',
						  direction: 'normal',
						  fillMode: 'forwards',
						  
						});						
				}
				function ojosi2(){
						$('#ojop2').pauseKeyframe();
						$('#ojop2').css('background', p2oj3 );
						$('#ojop2').playKeyframe({
						  name: 'pestaip2',
						  duration: "4s",
						  timingFunction: 'steps(1)',
						  iterationCount: 'infinite',
						  direction: 'normal',
						  fillMode: 'forwards',					  
						});
				}								
				function ojosdp2(){
						$('#ojop2').pauseKeyframe();
						$('#ojop2').css('background', p2oj2 );
						$('#ojop2').playKeyframe({
						  name: 'pestadp2',
						  duration: "4s",
						  timingFunction: 'steps(1)',
						  iterationCount: 'infinite',
						  direction: 'normal',
						  fillMode: 'forwards',						  
						});

				}
				//FIN FUNCIONES ERICK														
				//INICIO STAN-------------------
				$.keyframe.define([{

				  name: 'pesta',
					  
				   '0%': {
				    'background': p1oj0
				  },
				  
				  '50%': {
				    'background': p1oj1
				  },
				  
				  '53%': {
				    'background': p1oj0
				  }

				}]);
				$.keyframe.define([{

				  name: 'pestai',
					  
				   '0%': {
				    'background': p1oj3
				  },
				  
				  '50%': {
				    'background': p1oj1
				  },
				  
				  '53%': {
				    'background': p1oj3
				  }

				}]);
				$.keyframe.define([{

				  name: 'pestad',
					  
				   '0%': {
				    'background': p1oj2
				  },
				  
				  '50%': {
				    'background': p1oj1
				  },
				  
				  '53%': {
				    'background': p1oj2
				  }

				}]);

				$.keyframe.define([{

				  name: 'latir',
					  
				   '0%': {
				    'margin-top': '0px'
				  },
				  
				  '50%': {
				    'margin-top': '-5px'
				  },
				  
				  '53%': {
				    'margin-top': '0px'
				  }

				}]);

				$.keyframe.define([{

				  name: 'latirc',
					  
				   '0%': {
				    'margin-bottom': '0px'
				  },
				  
				  '50%': {
				    'margin-bottom': '-5px'
				  },
				  
				  '53%': {
				    'margin-bottom': '0px'
				  }

				}]);				
				$.keyframe.define([{

				  name: 'hablar',
					  
				   '0%': {
				    'background': p1bo1
				  },
				  
				  '25%': {
				    'background': p1bo2
				  },
				  
				  '50%': {
				    'background': p1bo3
				  }
				  ,
				  '75%': {
				    'background': p1bo5
				  },

				  '100%': {
				    'background': p1bo1
				  }
				   

				   
				}]);
				$.keyframe.define([{

				  name: 'hablar1',
					  

				  
				  '25%': {
				    'background': p1bo2
				  },

				  '75%': {
				    'background': p1bo3
				  },

				  '100%': {
				    'background': p1bo1
				  }
				   

				   
				}]);
				$.keyframe.define([{

				  name: 'hablar2',
					  
				   '0%': {
				    'background': p1bo2
				  },
				  
				  '25%': {
				    'background': p1bo4
				  },
				  
				  '50%': {
				    'background': p1bo3
				  }
				  ,

				  '100%': {
				    'background': p1bo1
				  }
				   

				   
				}]);
				$.keyframe.define([{

				  name: 'hablar3',
					  
				   '0%': {
				    'background': p1bo2
				  },
				  
				  '25%': {
				    'background': p1bo3
				  },
				  
				  '50%': {
				    'background': p1bo4
				  }
				  ,
				  '75%': {
				    'background': p1bo2
				  },

				  '100%': {
				    'background': p1bo1
				  }
				   

				   
				}]);
				//FIN STAN-------------------
				// ERICK-------
				$.keyframe.define([{

				  name: 'pestap2',
					  
				   '0%': {
				    'background':  p2oj0 
				  },
				  
				  '50%': {
				    'background':  p2oj1 
				  },
				  
				  '53%': {
				    'background':  p2oj0 
				  }

				}]);
				$.keyframe.define([{

				  name: 'pestaip2',
					  
				   '0%': {
				    'background':  p2oj3 
				  },
				  
				  '50%': {
				    'background':  p2oj1 
				  },
				  
				  '53%': {
				    'background':  p2oj3 
				  }

				}]);
				$.keyframe.define([{

				  name: 'pestadp2',
					  
				   '0%': {
				    'background':  p2oj2 
				  },
				  
				  '50%': {
				    'background':  p2oj1 
				  },
				  
				  '53%': {
				    'background':  p2oj2 
				  }

				}]);

				$.keyframe.define([{

				  name: 'latirp2',
					  
				   '0%': {
				    'margin-top': '0px'
				  },
				  
				  '50%': {
				    'margin-top': '-5px'
				  },
				  
				  '53%': {
				    'margin-top': '0px'
				  }

				}]);

				$.keyframe.define([{

				  name: 'latircp2',
					  
				   '0%': {
				    'margin-bottom': '0px'
				  },
				  
				  '50%': {
				    'margin-bottom': '-5px'
				  },
				  
				  '53%': {
				    'margin-bottom': '0px'
				  }

				}]);				
				$.keyframe.define([{

				  name: 'hablarp2',
					  
				   '0%': {
				    'background': p2bo1
				  },
				  
				  '25%': {
				    'background': p2bo2
				  },
				  
				  '50%': {
				    'background': p2bo3
				  }
				  ,
				  '75%': {
				    'background': p2bo5
				  },

				  '100%': {
				    'background': p2bo1
				  }
				   

				   
				}]);
				$.keyframe.define([{

				  name: 'hablar1p2',
					  

				  
				  '25%': {
				    'background': p2bo2
				  },

				  '75%': {
				    'background': p2bo3
				  },

				  '100%': {
				    'background': p2bo1
				  }
				   

				   
				}]);
				$.keyframe.define([{

				  name: 'hablar2p2',
					  
				   '0%': {
				    'background': p2bo2
				  },
				  
				  '25%': {
				    'background': p2bo4
				  },
				  
				  '50%': {
				    'background': p2bo3
				  }
				  ,

				  '100%': {
				    'background': p2bo1
				  }
				   

				   
				}]);
				$.keyframe.define([{

				  name: 'hablar3p2',
					  
				   '0%': {
				    'background': p2bo2
				  },
				  
				  '25%': {
				    'background': p2bo3
				  },
				  
				  '50%': {
				    'background': p2bo4
				  }
				  ,
				  '75%': {
				    'background': p2bo2
				  },

				  '100%': {
				    'background': p2bo1
				  }
				   

				   
				}]);

				//FIN ERICK-------	
																						
				// move with easing
				//INICIO KEYFRAME STAN
				$('#ojo').playKeyframe({
				  name: 'pesta',
				  duration: "4s",
				  timingFunction: 'steps(1)',
				  iterationCount: 'infinite',
				  direction: 'normal',
				  fillMode: 'forwards',
				  
				});

				$('#cuerpo').playKeyframe({
				  name: 'latir',
				  duration: "4s",
				  timingFunction: 'steps(1)',
				  iterationCount: 'infinite',
				  direction: 'normal',
				  fillMode: 'forwards',
				  
				});
 				$('#cabeza').playKeyframe({
				  name: 'latirc',
				  duration: "2s",
				  timingFunction: 'steps(1)',
				  iterationCount: 'infinite',
				  direction: 'normal',
				  fillMode: 'forwards',
				  
				});
				//FIN KEYFRAME STAN
				//INICIO KEYFRAME ERICK
				$('#ojop2').playKeyframe({
				  name: 'pestap2',
				  duration: "4.3s",
				  timingFunction: 'steps(1)',
				  iterationCount: 'infinite',
				  direction: 'normal',
				  fillMode: 'forwards',
				  
				});

				$('#cuerpop2').playKeyframe({
				  name: 'latirp2',
				  duration: "4.5s",
				  timingFunction: 'steps(1)',
				  iterationCount: 'infinite',
				  direction: 'normal',
				  fillMode: 'forwards',
				  
				});
 				$('#cabezap2').playKeyframe({
				  name: 'latircp2',
				  duration: "2s",
				  timingFunction: 'steps(1)',
				  iterationCount: 'infinite',
				  direction: 'normal',
				  fillMode: 'forwards',
				  
				});
				//FIN KEYFRAME ERICK


				//$('#cuerpo').playKeyframe('latir 5s linear 0s 3 normal forwards');
				$('#derecha').click(function() {
					$('.dos').playKeyframe({
					  name: 'derecha',
					  duration: "1s",
					  timingFunction: 'ease',
					  iterationCount: '1',
					  direction: 'normal',
					  fillMode: 'forwards',
				  
					});
				});
				$('#sihablar').click(function() {
					$('#boca').playKeyframe({
					  name: 'hablar',
					  duration: "0.4s",
					  timingFunction: 'linear',
					  iterationCount: '1',
					  direction: 'normal',
					  fillMode: 'forwards',
					  
					});
				});

			});	