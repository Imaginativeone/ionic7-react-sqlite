import{h as o,g as s,H as i,r as n}from"./index-42ff8bfe.js";var a=':host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity 300ms;transition:opacity 300ms;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;background-color:#eee;color:black;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20)}',r=function(){function e(t){n(this,t),this.message=void 0,this.duration=2e3,this.closing=null}return e.prototype.hostData=function(){var t={out:!!this.closing};return this.closing!==null&&(t.in=!this.closing),{class:t}},e.prototype.componentDidLoad=function(){var t=this;setTimeout(function(){t.closing=!1}),setTimeout(function(){t.close()},this.duration)},e.prototype.close=function(){var t=this;this.closing=!0,setTimeout(function(){t.el.parentNode.removeChild(t.el)},1e3)},e.prototype.__stencil_render=function(){return o("div",{class:"wrapper"},o("div",{class:"toast"},this.message))},Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:!1,configurable:!0}),e.prototype.render=function(){return o(i,this.hostData(),this.__stencil_render())},e}();r.style=a;export{r as pwa_toast};
