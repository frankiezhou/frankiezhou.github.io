$(function(){	 
	var viewport = $(window).width();
	
	$('#fullpage').fullpage({
		scrollingSpeed: 300,
		css3: true,
		resize: true,
		anchors: ['page1','page2','page3','page4','page5'],
		verticalCentered: false,
		afterRender: function(){	
			if(viewport<=960){
				$.fn.fullpage.setMouseWheelScrolling(false);
    			$.fn.fullpage.setAllowScrolling(false);
    			$('#preload').attr('src', 'img/page1.jpg').load(function() {
				   $(this).remove();
				   $('#home').css('background-image', 'url(img/page1.jpg)');
					$('#mask').delay(1000).animate({opacity:0},30,function(){
						$('#mask').hide(function(){
							$.fn.fullpage.setMouseWheelScrolling(true);
		    				$.fn.fullpage.setAllowScrolling(true);			
						});		
						$('#nav').show();		
						$('#home').animate({opacity:1},1500);
						$('#intro').animate({marginTop:'10rem',opacity:1},2000,'easeOutCirc');
						$('#desk').animate({marginLeft:($(window).width()-300)/2+'px',opacity:1},2000,'easeOutCirc',function(){
							$('#desk').animate({width:'300px'},1000,function(){
								$('#writeword').animate({opacity:1},1000,'easeOutCirc',function(){
									$('.toggle img').animate({opacity:1});
								});
							});
						});
					});	
				});	
				$('#nav li:first').addClass('active').siblings().removeClass('active');
				$('.skills:gt(0)').css({display:'none'});
				$('.skills').eq(0).css({marginLeft:($(window).width()-310)/2+"px"});
			}else if(viewport>960){
				$.fn.fullpage.setMouseWheelScrolling(false);
    			$.fn.fullpage.setAllowScrolling(false);
				$('#writeword').html('');
				$('#preload').attr('src', 'img/page1.jpg').load(function() {
				   $(this).remove();
				   $('#home').css('background-image', 'url(img/page1.jpg)');
				   $('#mask').delay(1000).animate({opacity:0},30,function(){
						$('#mask').hide(function(){
							$.fn.fullpage.setMouseWheelScrolling(true);
		    				$.fn.fullpage.setAllowScrolling(true);			
						});	
						$('#home').animate({opacity:1},1500);
						$('#nav,#logo').animate({opacity:1,zIndex:99},500);
						$('#home').addClass('home_zoom');
						$('#intro').animate({marginTop:'200px',opacity:1},2000,'easeOutCirc');
						$('#desk').animate({marginTop:'230px',opacity:1},2000,'easeOutCirc',function(){
							$('#desk').animate({width:'800px'},1000,function(){
								var word = '"Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself. Remember all things are possible for those who believe."';
								for(var i = 0;i < word.length; i++){
									var oSpan = $('<span></span>');
									oSpan.html(word.charAt(i));
									$('#writeword').append(oSpan);
								}
								var i=0;
								var aSpan = $('#writeword span');						
								var timer = setInterval(function(){
									move(aSpan[i],{opacity:1});
									i++;
									if(i == aSpan.length){
										clearInterval(timer);
										$('.toggle img').animate({opacity:1});
									}
								},20)		
							});
						});
					});
				});				
				
				$('#bg').hide();
				$('#subnav ul li').eq(0).addClass('cur').siblings().removeClass('cur');
	    		$('#subnav').css({'marginTop':-$('#subnav ul li').eq(0).height()*$('#subnav ul li').length/2});
	    		$('#subnav').css({right:'-10px'});
	    		$('#home_content,#skill_content,#exp_content,#demo_content,#contact_content').css({height:$(window).height()+'px'});
    		}
		},
		afterLoad: function(anchorLink,index){
			if(index==1){
				if(viewport>960){
					$('#bg').hide();
					$('#bg').animate({'left':$('#nav ul li').eq(index-1).position().left},1);				
					$('.nav ul li.first span').show('slow')
					$('#subnav ul li').eq(0).addClass('cur').siblings().removeClass('cur');
					$('#subnav').animate({right:'-10px'},1000,'easeOutSine');
					$('#nav .bar').animate({opacity:0},800);
	    			$('#nav').animate({top:'40px'},300,'easeOutSine');
	    			$('#nav,#logo,.toggle').show();
    			}else if(viewport<=960){
    				$('#nav li:first').addClass('active').siblings().removeClass('active');
    				$('#nav').show();
    			}
			}
			if(index==2){
				if(viewport>960){
					
					$('.nav ul li.first span').hide('slow');
					$('.skills').eq(0).animate({'margin-top':'140px'},800);
					$('.skills').eq(1).delay(500).animate({'margin-top':'140px'},800);
					$('.skills').eq(2).delay(1000).animate({'margin-top':'140px'},800,function(){
						$('.skills .title i').addClass('animated flipped-horizontal-right');
				      	$('.skills .title i').on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
					        $(this).removeClass('animated flipped-horizontal-right');
					    });
					    $('#skill .title .line').animate({width:'260px'},1300);
					    if(bRoll!=true){
							$('#circle1').circleProgress({
						        value: .85,
							    size: 150,
						        startAngle:-1.6,
						        thickness:15,
						        fill: {
						           gradient: ["#777", "#888"]
						        },
						        duration:{animation:'linear',easing:1000}
						    }).on('circle-animation-progress', function(event, progress) {
							    $(this).find('strong').html(parseInt(85 * progress) + '<span>%</span>');	    
							});
							
							$('#circle2').circleProgress({
						        value: .85,
						        size: 150,
						        startAngle:-1.6,
						        thickness:15,
						        fill: {
						            gradient: ["#777", "#888"]
						        },
						        duration:{animation:'linear',easing:1000}
						    }).on('circle-animation-progress', function(event, progress) {
							    $(this).find('strong').html(parseInt(85 * progress) + '<span>%</span>');
							});
							
							$('#circle3').circleProgress({
						        value: .80,
						        size: 150,
						        startAngle:-1.6,
						        thickness:15,
						        fill: {
						            gradient: ["#777", "#888"]
						        },
						        duration:{animation:'linear',easing:1000}
						    }).on('circle-animation-progress', function(event, progress) {
							    $(this).find('strong').html(parseInt(80 * progress) + '<span>%</span>');
							    bRoll = true;
							});
					    }	    

						$('.desc1 li').eq(0).delay(1500).animate({opacity:1},1000,function(){
							$(this).next().animate({opacity:1},1000,function(){
								// $(this).next().animate({opacity:1},1000,function(){
									$('.desc2 li').eq(0).animate({opacity:1},1000,function(){
										$(this).next().animate({opacity:1},1000,function(){
											$(this).next().animate({opacity:1},1000,function(){
												$(this).next().animate({opacity:1},1000,function(){
													$('.desc3 li').eq(0).animate({opacity:1},1000,function(){
														$(this).next().animate({opacity:1},1000,function(){
															$(this).next().animate({opacity:1},1000,function(){
																$(this).next().animate({opacity:1},1000,function(){
																});
															});
														});
													});	
												});
											});
										});
									});	
								});
							// });
						});
					})			
					
					$('#bg').animate({'left':$('#nav ul li').eq(index-1).position().left},1000,'easeOutBounce');
					$('#bg').show();
					$('#subnav ul li').eq(1).addClass('cur').siblings().removeClass('cur');

					$('#subnav').animate({right:'15px'},1000,'easeOutSine');
					$('#nav .bar').animate({opacity:1},800);
	    			$('#nav').animate({top:0},500,'easeOutSine');
	    			$('.toggle').hide();
    			}else if(viewport<=960){
    				$('#skill_content').css({width:$(window).width()+'px'});
    				$('#nav li').eq(1).addClass('active').siblings().removeClass('active');
    				$('#skill .title').animate({marginTop:'-40px'},800,function(){
						$(this).find('i').addClass('animated flipped-horizontal-right');
				      	$(this).find('i').on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
					        $(this).removeClass('animated flipped-horizontal-right');
					    });
						$('#skill .title .line').animate({width:'260px'},1000);
					});
    				if(bRoll!=true){
						$('#circle1').circleProgress({
					        value: .95,
						    size: 150,
					        startAngle:-1.6,
					        thickness:15,

					        fill: {
					           gradient: ["#777", "#777"]
					        },
					        duration:{animation:'linear',easing:1000}
					    }).on('circle-animation-progress', function(event, progress) {
						    $(this).find('strong').html(parseInt(95 * progress) + '<span>%</span>');	    
						});
						$('#circle2').circleProgress({
					        value: .9,
					        size: 150,
					        startAngle:-1.6,
					        thickness:15,

					        fill: {
					            gradient: ["#777", "#777"]
					        },
					        duration:{animation:'linear',easing:1000}
					    }).on('circle-animation-progress', function(event, progress) {
						    $(this).find('strong').html(parseInt(90 * progress) + '<span>%</span>');
						});
						
						$('#circle3').circleProgress({
					        value: .85,
					        size: 150,
					        startAngle:-1.6,
					        thickness:15,

					        fill: {
					            gradient: ["#777", "#777"]
					        },
					        duration:{animation:'linear',easing:1000}
					    }).on('circle-animation-progress', function(event, progress) {
						    $(this).find('strong').html(parseInt(85 * progress) + '<span>%</span>');
						});
					}
					$('#nav').show();
    			}
			}
			if(index==3){
				if(viewport>960){
					
					$('.nav ul li.first span').hide('slow');
					$('#exp .title').animate({right:0},800,function(){
						$(this).find('i').addClass('animated flipped-horizontal-right');
				      	$(this).find('i').on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
					        $(this).removeClass('animated flipped-horizontal-right');
					    });
						$('#exp .title .line').animate({width:'260px'},1000);
					});
					$('#focus_Box').animate({left:0},1000);
					$('#bg').animate({'left':$('#nav ul li').eq(index-1).position().left},1000,'easeOutBounce');
					$('#bg').show();
					$('#subnav ul li').eq(2).addClass('cur').siblings().removeClass('cur');
					$('#subnav').css({right:'15px'});
	    			$('#nav').css({top:0});
	    			$('#nav .bar').css({opacity:1});	
	    			$('#nav,#logo').show();	
	    			$('.toggle').hide();	
    			}else if(viewport<=960){
    				$('#exp_content').css({width:$(window).width()+'px'});
    				$('#nav li').eq(2).addClass('active').siblings().removeClass('active');
    				$('#exp .title').animate({marginTop:'7rem'},800,function(){
						$(this).find('i').addClass('animated flipped-horizontal-right');
				      	$(this).find('i').on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
					        $(this).removeClass('animated flipped-horizontal-right');
					    });
						$('#exp .title .line').animate({width:'260px'},1000);
					});
					$('#nav').show();
    			}	
			}
			if(index==4){
				if(viewport>960){
					
					$('.nav ul li.first span').hide('slow');
					$('#demo .title').animate({top:0,right:0},800,function(){
						$(this).find('i').addClass('animated flipped-horizontal-right');
				      	$(this).find('i').on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
					        $(this).removeClass('animated flipped-horizontal-right');
					    });
					    if(bView!=true){
		    				(function(){
								var oUl = document.getElementById("d_list");
								var aLi = oUl.children;
								var len = aLi.length;
								var aPos = [];
								for(var i = 0; i < len; i++){
									aPos[i] = {left:aLi[i].offsetLeft,top:aLi[i].offsetTop};
									aLi[i].style.left = aPos[i].left +　"px";
									aLi[i].style.top  = aPos[i].top  +　"px";
								}
								
								for(var i = 0; i < len; i++){
									aLi[i].style.position  =  "absolute";
									aLi[i].style.margin  =  "0";
								}
								(function(){
									var timer = null;
									var i = 0;
									clearInterval(timer);
									timer = setInterval(function(){
										(function(index){
											move(aLi[i],{left:500,top:0,width:0,height:0},{									
												complete:function(){
													if(index == len - 1){
														var i = index;
														clearInterval(timer);
														timer = setInterval(function(){
															oUl.style.opacity = 1;
															move(aLi[i],{left:aPos[i].left,top:aPos[i].top,width:220, height:150});	
															i--;
															if(i == -1){
																clearInterval(timer);
																bView = true;
															}
														},150);
													}
												}					
											});
										})(i);
										i++;									
										if(i == len){
											clearInterval(timer);
										}
									},0);
								})();
							})();	
		    			}
						$('#demo .title .line').animate({width:'260px'},800);
					});
					$('#bg').animate({'left':$('#nav ul li').eq(index-1).position().left},1000,'easeOutBounce');
					$('#bg').show();
					$('#subnav ul li').eq(3).addClass('cur').siblings().removeClass('cur');
					$('#subnav').css({right:'15px'});
	    			$('#nav').css({top:0});
	    			$('#nav .bar').css({opacity:1});
	    			$('#nav,#logo').show();
	    			$('.toggle').hide();
    			}else if(viewport<=960){
    				$('#d_list .item div').html('');
    				$('#demo_content').css({width:$(window).width()+'px'});
    				$('#nav li').eq(3).addClass('active').siblings().removeClass('active');
    				$('#demo .title').animate({marginTop:'7rem'},800,function(){
						$(this).find('i').addClass('animated flipped-horizontal-right');
				      	$(this).find('i').on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
					        $(this).removeClass('animated flipped-horizontal-right');
					    });
					    $('#demo .title .line').animate({width:'260px'},800);
					});
    				$('#nav').show();
    			}
			}
			if(index==5){
				if(viewport>960){			
					$('.nav ul li.first span').hide('slow');
					$('#contact .title').animate({top:0},800,function(){
						$('#contact .title i').addClass('animated flipped-horizontal-right');
				      	$('#contact .title i').on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
					        $(this).removeClass('animated flipped-horizontal-right');
					    });
					    $('#contact .title .line').animate({width:'260px'},1000,function(){
					    	$('#me').animate({opacity:1});
					    	$("#me .p1").animate({opacity:1},800);
							$("#me").animate({width:'810px'},2000,'easeOutElastic');
							$('#me .p1 ul li em:eq(0)').delay(1100).animate({left:'0px',opacity:1,fontSize:'14px',bottom:'5px'},500,function(){
					    		$('#me .p1 ul li em:eq(1)').animate({left:'0px',opacity:1,fontSize:'14px',bottom:'5px'},500,function(){
					    			$('#me .p1 ul li em:eq(2)').animate({left:'0px',opacity:1,fontSize:'14px',bottom:'5px'},500);
					    		});
					    	});
							$('#me .p1 ul li span:eq(0)').delay(1100).animate({left:'-22px',opacity:1,width:'16px'},500,function(){
					    		$('#me .p1 ul li span:eq(1)').animate({left:'-22px',opacity:1,width:'16px'},500,function(){
					    			$('#me .p1 ul li span:eq(2)').animate({left:'-22px',opacity:1,width:'16px'},500);
					    		});
					    	});
					    });
					});

					$('#bg').animate({'left':$('#nav ul li').eq(index-1).position().left},1000,'easeOutBounce');
					$('#bg').show();
					$('#subnav ul li').eq(4).addClass('cur').siblings().removeClass('cur');
					$('#subnav').css({right:'15px'});
	    			$('#nav').css({top:0});
	    			$('#nav .bar').css({opacity:1});
	    			$('#nav,#logo').show();
	    			$('.toggle').hide();
	    		}else if(viewport<=960){
	    			$('#contact .title').animate({marginTop:'7rem'},800,function(){
						$('#contact .title i').addClass('animated flipped-horizontal-right');
					      	$('#contact .title i').on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
						        $(this).removeClass('animated flipped-horizontal-right');
						    });
						    $('#contact .title .line').animate({width:'260px'},1000);
						    $('#me').animate({opacity:1});
						    $("#me").animate({width:($(window).width()-30)+'px'},400,'easeOutElastic',function(){
						    	$("#me .p1").animate({opacity:1},1000);	
						    });
						    				
					});					
	    			$('#contact_content').css({width:$(window).width()+'px'});
    				$('#nav li').eq(4).addClass('active').siblings().removeClass('active');
    				$('#nav').show();
    			}
			}
		},
		onLeave:function(index , nextIndex, direction){
			if(index==2||index==3||index==4||index==5){
				if(viewport>960){
					$('#skill .title .line').css({width:0});
					$('#exp .title .line').css({width:0});
					$('#demo .title .line').css({width:0});
					$('#contact .title .line').css({width:0});
				}
			}
		}
	});
	
	var bView = false;
	var bRoll = false;
	var j = 0;
	$('#next').click(function(){				
		j++;
		if(j==3){
			j=0;
		}
		$('.skills').eq(j).css({display:'block'});
		$('.skills').eq(j).siblings().not('a').css({display:'none'});
		$('.skills').eq(j).css({marginLeft:($(window).width()-310)/2+"px"});
	})
	$('#prev').click(function(){				
		j--;
		if(j==-1){
			j=2;
		}
		$('.skills').eq(j).css({display:'block'});
		$('.skills').eq(j).siblings().not('a').css({display:'none'});
		$('.skills').eq(j).css({marginLeft:($(window).width()-310)/2+"px"});
	})
	
	$('#photo').mouseenter(function(){
		var rotation = ['flipped-vertical-bottom', 'flipped-vertical-top', 'flipped-horizontal-left', 'flipped-horizontal-right'];
		var random = Math.floor( Math.random() * ( 3 - 0 + 1 ) );
      	var animation = rotation[random];     	
      	$(this).addClass('animated ' + animation);
      	$(this).on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
	        $(this).removeClass();
	    });
	})

	$('#focus_Box').rotateRollingBanner({moveSpeed:500,autoRollingTime:3500});

	if(viewport>960){
		$('.skills .title,#exp .title,#demo .title,#contact .title').mouseenter(function(){
			$(this).find('.line').animate({width:0},function(){
				$(this).animate({width:'260px'});
			});
		});

		$('.skills .title,#exp .title,#demo .title,#contact .title').mouseenter(function(){	
	      	$(this).find('i').addClass('animated flipped-horizontal-right');
	      	$(this).find('i').on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
		        $(this).removeClass('animated flipped-horizontal-right');
		    });
		});

		(function(){
			var i = 0;
			setInterval(function(){
				i++;
				$('.toggle img').css({top:i%25+'px'});
			},30);
		})();

		$('#focus_Box li').hover(function(){
			$(this).find('.cont').animate({bottom:0},700);
		},function(){
			$(this).find('.cont').animate({bottom:'-80px'},700);
		});

		$('#d_list .item').hover(function(){
			$(this).find('div').animate({left:0},300);
		},function(){
			$(this).find('div').animate({top:'-150px'},500,function(){
				$(this).css({left:'-220px',top:0});
			});

		});	
	}else if(viewport<=960){
		$('#intro').css({width:$(window).width()});
		(function(){
			var i = 0;
			setInterval(function(){
				i++;
				$('.toggle img').css({top:i%25+'px'});
			},30);
		})();
		$('#d_list .item').hover(function(){
			$(this).find('div').animate({left:0},300);
		},function(){
			$(this).find('div').animate({top:'-80px'},500,function(){
				$(this).css({left:'-180px',top:0});
			});

		});	
	}
});



function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,null))[name];
}

function move(obj,json,options){
	options = options || {};
	options.duration = options.duration || 700;
	options.easing = options.easing || "ease-out";
	
	var start = {};
	var dis = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];
	}
	
	var count = Math.round(options.duration/30);
	var n = 0;
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		
		for(var name in json){
			
			switch(options.easing){
				case "linear":
					var a = n/count;
					var cur = start[name] + dis[name]*a;
					break;
				case "ease-in":
					var a = n/count;
					var cur = start[name] + dis[name]*Math.pow(a,3);
					break;
				case "ease-out":
					var a = 1 - n/count;
					var cur = start[name] + dis[name]*(1-Math.pow(a,3));
					break;
			}
			
			if(name == "opacity"){
				obj.style.opacity = cur;
				obj.style.filter = "alpha(opacity:"+cur*100+")";
			} else {
				obj.style[name] = cur + "px";
			}
			
		}
		if(n == count){
			clearInterval(obj.timer);
			options.complete && options.complete();
		}
	},30);
}