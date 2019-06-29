//当前图片下标
var now = 0;
//下一张即将显示的图片
var next = 0;

//计时器
var timer;

//封装函数,实现淡入淡出的动画效果
function scrollPlay(){
	
	
	//判断图片的下标，淡入淡出
	if(now < next){
		//当前图片淡出
		//eq()方法：遍历下标，
		//fadeIn()方法：淡入 fadeOut:淡出 括号里边是时间
		$(".banner_img img").eq(now).fadeOut(1000);
		//下一张图片淡入
		$(".banner_img img").eq(next).fadeIn(1000);
	}else if(now > next){
		//当前图片淡出
		$(".banner_img img").eq(now).fadeOut(1000);
		//下一张图片淡入
		$(".banner_img img").eq(next).fadeIn(1000);
	}
}
//封装开始淡入淡出动画
function startPlay(){
	//设置计时器，每过两秒执行一次
	timer = setInterval(function(){
		next++;
		if(next > 4){
			next = 0;
			now = 4;
		}
		//执行动画
		scrollPlay();
		
		//每执行一次，当前下换成下一张的下标
		now = next;
	},2000)
}
//调用
startPlay();
