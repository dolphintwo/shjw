$(function(){

	/*首页搜索下拉*/
	$(".drop_down").click(function(event) {
		if (event.stopPropagation) {
			//阻止时间冒泡
			event.stopPropagation(); 
			$(".dd_list").slideToggle(200)
		}else{
			event.cancelBubble = true;
			$(".dd_list").slideToggle(200)
		};
	});

	$(".dd_list span").click(function(event) {
		var val = $(this).html();

		$(".dd_list").slideUp(200);
		$(this).addClass('current_dd_span').siblings().removeClass('current_dd_span');
		$(".drop_down").html(val);

	});

	//点击空白处收起
	$("body").click(function(event) {
		$(".dd_list").slideUp(200);
	});

	/*导航下拉*/
	$(".nav ul li").hover(function() {
		$(this).find('.nav_dd').stop().slideToggle(200);
	});

	
	/*案例遮罩*/
	$(".anli_content ul li").hover(function() {
		$(this).find('.anli_zz').stop().animate({top:0,opacity:'1'}, 300)
	},function(){
		$(this).find('.anli_zz').stop().animate({top:'100%',opacity:0}, 300)
	});

	/*右侧定位导航*/
	$(".tel,.QQ,.back_top").hover(function() {
		$(this).find('a').stop().animate({'width':'140px','left':'-80px'}, 300)
	},function(){
		$(this).find('a').stop().animate({'width':'60px','left':0}, 300)
	});

	$(".side_nav ul li").eq(1).addClass('side_nav_3')//控制二维码
	$(".side_nav ul li").eq(1).hover(function() {
		$(this).find('span').stop().toggle(300)
	});
     //返顶
	 $('.back_top').click(function(){
        $('body,html').animate({scrollTop:0},500)
    });
	$('.linktop').click(function(){
        $('body,html').animate({scrollTop:0},500)
    });
	//产品分类
		$('#left').bind('click',leftbut);
        $('#right').bind('click',rightbut);
		var p=1;
		var banner=$('#ipro2 ul');
		var w=$('#ipro2 li').width()+10;
		var bannernum=$('#ipro2 li').length;
		banner.width(bannernum*w+5);
				function leftbut(){
					if( !banner.is(":animated") ){
						if(p==1){
							$('.slider span:first').addClass('end');
						}else{
							$('.slider span:last').removeClass('end');
							banner.animate({ 'margin-left' : '+='+w }, "slow");
							p--;
						}
					}
				}
				function rightbut(){
					if( !banner.is(":animated") ){
						if(p == bannernum-2){
							$('.slider span:last').addClass('end');
						}else{
							$('.slider span:first').removeClass('end');
							banner.animate({ 'margin-left' : '-='+w }, "slow");
							p++;
						}
					}
				}

    
	//子页导航动画按钮
	

	aaa(33)
	function aaa(hh){

		var h = hh;

		var ul = $("#left-type"); //
		var index_i = 0; //计数器
		var allH = $(".con1_class").height(); //容器高
		var oneN = parseInt(allH/h)-1; //容器内的个数

		$(".class_down").click(function(event) {
			var length = parseInt($("#left-type").height()/h);

			index_i++;

			if(index_i>=length-oneN){
				index_i = 0;
			}
			ul.stop().animate({top:-(index_i*h)}, 200)
		});

		$(".class_up").click(function(event) {
			var length = $("#left-type li").length;
			index_i--;
			if(index_i == -1){
				index_i = 0;
			}
			ul.stop().animate({top:-(index_i*h)}, 200)
		});
	}

})