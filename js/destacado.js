window.onload=inicio;
			
			function inicio(){
				
				
				$.ajax({
     			  type: "GET",
				  //url: "data.xml",
				  url: "http://especiales.lanacion.com.ar/multimedia/proyectos/12/10/home_data/data.xml",
				  dataType: "xml",
				  success: function(xml) {
				  		
				  		var blog = '';
				  		var count= 0;
						

				  		
 						$(xml).find('item').each(function(){
 							
							
 							var titulo = $(this).find('title').text();
							var urls = $(this).find('link').text();
							var desc = $(this).find('description').text();
							var imgs = $(this).find('content\\:encoded').text();
							var imgs2 = $(this).find('encoded').text();
							
							
							
							//busco la imagen en el string de "src"
							var srcs=(imgs.indexOf('<img'));
							var srcs2=(imgs.indexOf('/>'));
							var imagen = imgs.substring(srcs,srcs2);
							
							//busco la imagen en el string de "src" para chrome	
							var srcs3=(imgs2.indexOf('<img')+ 5);
							var srcs4=(imgs2.indexOf('/>') - 2);
							var imagen2 = imgs2.substring(srcs3,srcs4);
							
							//alert(imagen)
							// valido si hay o no imagen
							if(imagen.length >= 30){ 
								//alert("detecta firefox" + imagen)
								
								var im=(imagen.indexOf('src')+5);
								var im2=(imagen.indexOf('alt')-2);
								var img = imagen.substring(im,im2);
								
								//alert(img)
								if(img.length >= 30){
									
										blog += '<div class="caja"><a href="'+urls+'" target="_blank">'
										blog += '<div class="foto"><img src="'+img+'" width="200" height="150"/></div>'
										blog += '<div class="texto">'
										if(titulo.length >= 70){ // max length para titulo
											var str = titulo.substring(0,70);
											blog += str + '...';
										}else{
											blog += titulo;
										}
										blog += '</div>'
										blog += '<div class="linea"></div></a></div>'
								}else{
									 
									 	blog += '<div class="caja"><a href="'+urls+'" target="_blank">'
										blog += '<div class="texto">'
										
										if(titulo.length >= 70){ // max length para titulo
											var str = titulo.substring(0,70);
											blog += str + '...';
										}else{
											blog += titulo;
										}
									
										blog += '</div>'
										blog += '<div class="linea"></div>'
										blog += '<div class="desc">'
										
										if(desc.length >= 200){ // max length para descripcion
											var str2 = desc.substring(0,200);
											blog += str2 + '...';
										}else{
											blog += desc;
										}
										
										blog += '</div></a></div>' 
								}
						
							}else{
							   
							    //alert("detecta chrome " +imagen2)
							   
							 	var im3=(imagen2.indexOf('src')+5);
								var im4=(imagen2.indexOf('alt')-2);
								var img2 = imagen2.substring(im3,im4);
								
								//alert(img2)
								
								if(img2.length >= 30){
									
										blog += '<div class="caja"><a href="'+urls+'" target="_blank">'
										blog += '<div class="foto"><img src="'+img2+'" width="200" height="150"/></div>'
										blog += '<div class="texto">'
										if(titulo.length >= 70){ // max length para titulo
											var str = titulo.substring(0,70);
											blog += str + '...';
										}else{
											blog += titulo;
										}
										blog += '</div>'
										blog += '<div class="linea"></div></a></div>'
							  	
							  	}else{
									 
									 	blog += '<div class="caja"><a href="'+urls+'" target="_blank">'
										blog += '<div class="texto">'
										
										if(titulo.length >= 70){ // max length para titulo
											var str = titulo.substring(0,70);
											blog += str + '...';
										}else{
											blog += titulo;
										}
									
										blog += '</div>'
										blog += '<div class="linea"></div>'
										blog += '<div class="desc">'
										
										if(desc.length >= 200){ // max length para descripcion
											var str2 = desc.substring(0,200);
											blog += str2 + '...';
										}else{
											blog += desc;
										}
										
										blog += '</div></a></div>' 
								}
							}
							
							
							//alert(count);
							
							count ++;
							
							if(count > 3){
								
								return false;
								
							}
						
							$('.contenidos').html(blog);
						
						})
					
					}
					
				});


				
				
				//////////// DESTACADO //////////////////////////////////////
				
				
				$.ajax({
						url:'destacado/destacado.txt?'+ parseInt(Math.random() * 100),
						dataType:'json',
						success: function(data){
						
						//alert(this.url)
						
						var destacado='';					
						var tit='';
						var ori='';
						var img='';
						var urls='';
						
						for(var i=0; i < data.length; i++){
												
							tit = data[i].titulo;
							ori = data[i].origen;							
							img = data[i].imagen;
							urls = data[i].link;
							
							destacado += '<div class="caja"><a href="'+urls+'" target="_blank">'
							destacado += '<div class="foto"><img src="destacado/'+img+'" width="120" height="100"/></div>'
							destacado += '<div class="tit_nota">'+tit+'</div>'
							destacado += '<div class="seccion">'+ori+'</div>'
							//destacado += '<div class="linea"></div>'
							destacado += '</a></div>'
							
							}
							
							
							$('.elementos').html(destacado);

						}
						
					});
					
					
					
					
					carga();
					btns();
					
					cata1();
					cata2();
					//cata3();
					
					}
					
					function btns(){
						
						
						
					}
					
					
					//////////// CATALOGO //////////////////////////////////////
					
					
					function carga(){
					
					$(".btn1").css({
						color: "#FFF",
						background: "#787878",
						pointer: "default"
					});
					
					
					$(".btn1").click(function(){

						TweenLite.to($(".secciones"), 0.5, {css:{left:"0px"}, ease:Cubic.easeInOut});
						$(this).css({
							color: "#FFF",
							background: "#787878",
							pointer: "default"
						});
						
						$(".btn2, .btn3").css({
							color: "#383838",
							background: "#f1f0f0",
							pointer: "pointer"
						});
					 	
					});	
					
					$(".btn2").click(function(){ 
						TweenLite.to($(".secciones"), 0.5, {css:{left:"-280px"}, ease:Cubic.easeInOut});
						$(this).css({
							color: "#FFF",
							background: "#787878",
							pointer: "default"
						});
						
						$(".btn1, .btn3").css({
							color: "#383838",
							background: "#f1f0f0",
							pointer: "pointer"
						});
					 	
					});	
					
						
					$(".c1").click(function(){ 
							TweenLite.to($(".elementos"), 0.5, {css:{left:"0px"}, ease:Cubic.easeInOut});
							TweenLite.to($(".c1"), 0.5, {css:{backgroundColor:"#32a9d3"}, ease:Cubic.easeInOut});
							TweenLite.to($(".c2"), 0.5, {css:{backgroundColor:"#ccc"}, ease:Cubic.easeInOut});
							TweenLite.to($(".c3"), 0.5, {css:{backgroundColor:"#ccc"}, ease:Cubic.easeInOut});
					});
					
					$(".c2").click(function(){ 
							TweenLite.to($(".elementos"), 0.5, {css:{left:"-280px"}, ease:Cubic.easeInOut});
							TweenLite.to($(".c2"), 0.5, {css:{backgroundColor:"#32a9d3"}, ease:Cubic.easeInOut});
							TweenLite.to($(".c1"), 0.5, {css:{backgroundColor:"#ccc"}, ease:Cubic.easeInOut});
							TweenLite.to($(".c3"), 0.5, {css:{backgroundColor:"#ccc"}, ease:Cubic.easeInOut});
					});
						
					$(".c3").click(function(){ 
							TweenLite.to($(".elementos"), 0.5, {css:{left:"-560px"}, ease:Cubic.easeInOut});
							TweenLite.to($(".c3"), 0.5, {css:{backgroundColor:"#32a9d3"}, ease:Cubic.easeInOut});
							TweenLite.to($(".c2"), 0.5, {css:{backgroundColor:"#ccc"}, ease:Cubic.easeInOut});
							TweenLite.to($(".c1"), 0.5, {css:{backgroundColor:"#ccc"}, ease:Cubic.easeInOut});
					});
									
					}
					
					/////// CARGAS JUNAR /////////////////////////
					function cata1(){
					$.ajax({
						url:'http://lanacion.cloudapi.junar.com/datastreams/last?auth_key=4ee20da0c25c59f3b32376b14250898684b9c7ba',
						dataType:'jsonp',
						success: function(data){
						
						var ultimos='';					
						var titu1='';
						var url1='';
						
						/*for(var i=0; i < data.length; i++){*/
						for(var i=0; i < data.length; i++){
												
							titu1 = data[i].title;
							url1 = data[i].link;							
							
							ultimos += '<a href="'+url1+'" target="_blank"><div class="item">'
							ultimos += '<div class="numero" style="opacity:'+(1-(i / 10))+';">'+ (i+1) +'</div>'
							ultimos += '<div class="link">'
							if(titu1.length >= 60){ // max length para bajada
								var str=titu1.substring(0,60);
								ultimos += str + '...';
							}else{
								ultimos += titu1;
							}
							ultimos += '</div></div></a>'
														
							}
							
							
							
							$('.sec1').html(ultimos);

						}

					});
					}
					
					function cata2(){
					$.ajax({
						url:'http://lanacion.cloudapi.junar.com/datastreams/top?auth_key=4ee20da0c25c59f3b32376b14250898684b9c7ba',
						dataType:'jsonp',
						success: function(data){
						
						var ultimos='';					
						var titu1='';
						var url1='';
						
						
						for(var i=0; i < data.length; i++){
												
							titu1 = data[i].title;
							url1 = data[i].link;							
							
							ultimos += '<a href="'+url1+'" target="_blank"><div class="item">'
							ultimos += '<div class="numero" style="opacity:'+(1-(i / 10))+';">'+ (i+1) +'</div>'
							ultimos += '<div class="link">'
							if(titu1.length >= 60){ // max length para bajada
								var str=titu1.substring(0,60);
								ultimos += str + '...';
							}else{
								ultimos += titu1;
							}
							ultimos += '</div></div></a>'
							}

							$('.sec2').html(ultimos);

						}

					});
					}
					
				
											
					