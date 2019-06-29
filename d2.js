//当前图片下标
var now = 0;
//下一张即将显示的图片
var next = 0;

//计时器
var timer;

//封装函数,实现淡入淡出的动画效果
function scrollPlay(){
	
	//小圆点变色
	//addClass()方法:添加class名。removeClass()方法:清除class名。
	//siblings()方法：返回被选元素的所有同级元素
	$(".list li").eq(next).addClass("bg").siblings().removeClass("bg");
	
	
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

//鼠标覆盖事件
//hover()方法：第一个函数：鼠标覆盖发生的动作。第二个函数：鼠标移出发生的动作。
//hover(函数，函数)
$(".d2 .container").hover(function(){
	// 清除计时器，动画停止
	clearInterval(timer);
},function(){
	//鼠标移出，动画继续执行
	startPlay();
})

//点击左右按钮
//点左边
// .click()方法:点击的时候发生。
$(".btn_left").click(function(){
	next--;
	if(next < 0){
		next = 4;
	}
	scrollPlay();
	now = next;
})
//点右边
// .click()方法:点击的时候发生。
$(".btn_right").click(function(){
	next++;
	if(next > 4){
		next = 0;
	}
	scrollPlay();
	now = next;
})

/*点击小圆点
$(".list li").click(function(){
	//获取下标
	next = $(this).index();
	scrollPlay();
	now = next;
})
*/
//鼠标经过小圆点
$(".list li").mouseover(function(){
	//获取下标
	next = $(this).index();
	scrollPlay();
	now = next;
})