"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}require(["./config"],function(){require(["template","header","footer","fly"],function(n,a){new(function(){function e(){var t=this;_classCallCheck(this,e),this.getList().then(function(){t.addToCart()})}return _createClass(e,[{key:"getList",value:function(){var o=this;return new Promise(function(i){$.get("http://www.xiongmaoyouxuan.com/api/tab/".concat(2),{start:0,sort:1},function(t){if(console.log(t,"1111"),200===t.code){var e=t.data.items.list;console.log(e),o.detail={list:e},$("#list").html(n("listTemplate",{list:e.slice(0,16)})),i()}})})}},{key:"addToCart",value:function(){var a=this;$(".add").on("click",function(t){var e=$(this).parents(".good").find(".select").val()-0;console.log("plusNum:",e);var i,o=$(this).parents(".good").data("id");console.log("id:",o),a.fly(t,o,a.detail.list),a.detail.list.map(function(t){t.id===o&&(i=t)}),console.log(i);var n=localStorage.getItem("cart");n?(n=JSON.parse(n),console.log("cart:",n),n.some(function(t){return t.id===o})?n=n.map(function(t){return t.id===o&&(t.count+=e),t}):n.push({id:i.id,image:i.image,title:i.title,price:i.price,count:e}),localStorage.setItem("cart",JSON.stringify(n))):localStorage.setItem("cart",JSON.stringify([{id:i.id,image:i.image,title:i.title,price:i.price,count:e}]))})}},{key:"fly",value:function(t,e,i){var o,n=e;i.map(function(t){return t.id===n&&(o=t.image),o}),$('<img class="fly" src=\''.concat(o,"'>")).fly({start:{left:t.clientX,top:t.clientY},end:{left:$("#cart").offset().left-$(window).scrollLeft(),top:$("#cart").offset().top-$(window).scrollTop()},speed:.7,onEnd:function(){this.destroy(),a.calcCartCount()}})}}]),e}())})});