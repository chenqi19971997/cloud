"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}require(["./config"],function(){require(["template","swiper","header","footer"],function(i,t){new(function(){function e(){_classCallCheck(this,e),this.getMyImages(),this.getVideo(),this.banner(),this.getGiftList3()}return _createClass(e,[{key:"banner",value:function(){new t(".swiper-container",{direction:"horizontal",loop:!0,autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new t(".swiper-container2",{direction:"horizontal",loop:!0,slidesPerview:6,slidesPerGroup:6,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}},{key:"getVideo",value:function(){$.get("/libs/json/video.json",function(e){var t=JSON.stringify(e[0].src);t=(t=t.slice(1)).slice(0,t.length-1),$(".top18 .main .left video").attr("src",t)})}},{key:"getMyImages",value:function(){$.get("http://rap2api.taobao.org/app/mock/268738/api/index/list",function(e){if(200===e.code){var t=e.body.list;t[0].src;$(".top6 .main .left").css("background-image","url("+t[0].src+")"),$(".top8 .main .left").css("background-image","url("+t[1].src+")"),$(".top10 .main .left").css("background-image","url("+t[2].src+")"),$(".top12 .main .left").css("background-image","url("+t[3].src+")"),$(".top14 .main .left").css("background-image","url("+t[4].src+")"),$(".top16 .main .left").css("background-image","url("+t[5].src+")")}})}},{key:"getGiftList2",value:function(){$.get("/api/gindex/subject/limited/goods",{subject_id:30374,page:1,size:50},function(e){if(console.log(e),e.result){var t=e.data;$("#giftList2").html(i("giftList2Template",{list:t.slice(0,12)}))}})}},{key:"getGiftList3",value:function(){$.get("http://www.xiongmaoyouxuan.com/api/tab/".concat(3),{start:0,sort:1},function(e){if(200==e.code){console.log(e);var t=e.data.items.list;console.log(t),$("#giftList3").html(i("giftList3Template",{list:t}))}})}}]),e}())})});