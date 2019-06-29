//鼠标滑过购物车
//mouseenter()鼠标悬浮的时候发生
$(".top_cart").mouseenter(function(){
	//更换背景颜色1111111
	$(this).css("background","#FFFFFF");
	//更换文字颜色
	$(".d0 .top_cart a").css("color","#FC5008");
	//更换图片路径
	//设置被选元素的属性和属性值
	$(".d0 .top_cart a img").attr("src","img/d0/692a6c3b0a93a24f74a29c0f9d68ec71.png");
	//显示购物清单
	//slideDown手风琴效果
	//以滑动的方式显示隐藏的元素(毫秒，运动类型 (linwar匀速，swing开始结束慢，中间快))
	$(".d0 .cart_list ").slideDown(200,"swing");
})
//鼠标离开
//mouseleave鼠标离开时发生
$(".top_cart").mouseleave(function(){
	//更换背景颜色
	$(this).css("background","#424242");
	//更换字体颜色
	$(".d0 .top_cart a").css("color","#B0B0B0");
	//更换背景图片
	$(".d0 .top_cart a img").attr("src","img/d0/d7db56d1d850113f016c95e289e36efa.png");
	$(".d0 .cart_list ").slideUp(200,"swing");
})