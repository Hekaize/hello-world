//点击输入框，颜色变化
//focusin获取焦点 focusout失去焦点
$(".header_search").focusin(function(){
	//点击边框颜色发生变化
	$(".header_search").css("border-color","#FF5008");
	//Input右边框发生颜色变化
	$(".header_search .search").css("border-right-color","#FF5008");
})
//focusout失去焦点
$(".header_search").focusout(function(){
	//点击边框颜色发生变化
	$(".header_search").css("border-color","#E0E0E0");
	//Input右边框发生颜色变化
	$(".header_search .search").css("border-right-color","#E0E0E0");
})

//搜索框图标区域变化
//鼠标滑过mouseenter	//鼠标移出mouseleave
$(".header_search a").mouseenter(function(){
	//背景颜色发生变化
	$(this).css("background","#FF5008");
	//更换搜索图标
	$(".header_search a img").attr("src","img/d1/fdj02.png");
})
//鼠标移出
$(".header_search a").mouseleave(function(){
	//背景颜色发生变化
	$(this).css("background","#E0E0E0");
	//更换搜索图标
	$(".header_search a img").attr("src","img/d1/fdj01.png");
})