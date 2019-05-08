function QueueLoader(e)
{
	this.check=e,this.queue=[],this.id=!1,this.ready=!1;
	var t=this;
	this.id=setInterval(function(){
		t.tick()
	},50)
}
QueueLoader.prototype.processQueue=function(){
	var e;
	if(0<this.queue.length)
		for(e=0;e<this.queue.length;e++)
			this.queue[e]()
},QueueLoader.prototype.tick=function(){
	this.check()&&(clearInterval(this.id),this.ready=!0,this.processQueue())
},QueueLoader.prototype.add=function(e){
	this.ready?e():this.queue.push(e)
};
		