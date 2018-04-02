(function(){


var gameid;

//获取当前js文件的文件名
var scripts = document.getElementsByTagName('script');
// 获取现在已经加载的所有script
var lastScript = scripts[scripts.length-1];
// 获取最近一个加载的script，即这个js本身
var scriptName = lastScript.src;
// 获取此js的路径
var start=scriptName.lastIndexOf("/")+1;
var end=scriptName.lastIndexOf(".");
var animName=scriptName.slice(start,end);

for(var i=0;i<animateControlInfo.length;i++){
	if(animateControlInfo[i].ctrlBar==animName){
		gameid=i;
		break;
	}
}

console.log(gameid);

var close=true;
for(var j=0;j<animateControlInfo.length;j++){
	$(animateControlInfo[gameid].btn).click(function(){
		if(close){
			updateHandler();
		}
		close=!close;
	})
}

var canvas, stage, root;
var posArr=[];

init();
function init() {
	canvas = document.getElementById(animateControlInfo[gameid].canvasId);
	var donghua="new lib."+animateControlInfo[gameid].name+"()"
	root = eval(donghua);

	stage = new createjs.Stage(canvas);
	stage.addChild(root);
	stage.update();
	
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);	
	gameInit();
}

function updateHandler(){
	for(var i=1;i<=4;i++){
		root["mc"+i].x=posArr[i-1].x;
		root["mc"+i].y=posArr[i-1].y;
	}
}

function gameInit(){

	for(var i=1;i<=4;i++){
		root["mc"+i].id=i;
		posArr.push({x:root["mc"+i].x,y:root["mc"+i].y});
		root["mc"+i].mouseupHandler=function(){
			for(var i=1;i<=4;i++){
				if(this.id==i){
					continue
				}
				if(createjsExtend.getDistance(this,root["mc"+i])<30){
					this.x=root["mc"+i].x;
					this.y=root["mc"+i].y;
				}
				
				if(Math.abs(this.y-root["mc"+i].y)<30){
					this.y=root["mc"+i].y;
				}
			}
		}
		root["mc"+i].addDragAction(new createjs.Rectangle(0,0,724,543),stage);	
	}
	
	root.updateBtn.addEventListener("click",function(){
		updateHandler();
	})
}


})()
