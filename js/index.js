/*
* @Author: Juanerzhang
* @Date:   2017-04-17 20:19:18
* @Last Modified by:   Juanerzhang
* @Last Modified time: 2017-04-23 15:06:56
*/


$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#359cb2', '#5e8c32', '#f3a112', '#f2899f','#e682f5'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		menu: '#menu',
		loopBottom: true
	});

    $(".works .fp-tableCell").css("height","100%");

    //添加编号
    var style=document.createElement("style");
    	$("head").append(style);
    	style.id="oCss";
    	var addCss='';
    	for(var i=1;i<10;i++){
    		addCss+='.containers > dl dd:nth-of-type('+i+'):before{content:"'+i+'、"}';
    	}
    	$("#oCss").html(addCss);

    //项目经验滚动
    var bW=document.documentElement.clientWidth,
        experience_list=document.getElementById("experience_list"),
		exp_li=experience_list.getElementsByTagName("li"),
		exp_a=experience_list.getElementsByTagName("a"),
		page=document.getElementById("page"),
		pageli=page.getElementsByTagName("li"),
		len=exp_li.length;
    	if(bW<420){
    		//导航隐藏
    		$("#menu").hide();
    		//点击点点，旋转轮播
    		for(var i=0;i<len;i++){
    			pageli[i].index=i;
    			pageli[i].onclick=function(){
    				for(var j=0;j<len;j++){
    					pageli[j].className='';
    				}
    				experience_list.style.transform='rotateY('+this.index*-90+'deg)';
    				this.className="active";
    			}
    		}
    	}  
});