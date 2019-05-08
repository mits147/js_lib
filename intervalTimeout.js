/*
var blah = new intervalTimeout(function(){ console.log(this); return this; }, 100, 10, function(result){ console.log("finished!"); console.log({"final_state":result}) });
*/

function intervalTimeout(tickFn, intervalMs, loops) {
  this.callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  this.tickFn = tickFn;
  this.intervalMs = intervalMs;
  this.loops = loops;
  var t = this;
  this.id = setInterval(function () {
    t.tick();
  }, intervalMs);
}

intervalTimeout.prototype.destory = function (result) {
  _this = this;
  clearInterval(_this.id);

  if (typeof this.callback == 'function') {
    this.callback(result);
  }
};

intervalTimeout.prototype.tick = function () {
  var result = this.tickFn();
  if (typeof result == 'boolean' && result == false) this.destory(result);
  this.loops--;
  if (this.loops == 0) this.destory(result);
};

