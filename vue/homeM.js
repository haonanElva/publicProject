
$(function() {
	
    FastClick.attach(document.body);
	
	var vm = new Vue({
	    el: '#home_container',
	    data: {
	        todos: [],
	        infors: [],
	        products: []
	    },
	    created: function () {
		    // `this` points to the vm instance、
		},
	    methods:{
	    		homeFun: function(){
	    			//tap切换
	    			$('.tap_choose').children("div").click(function(){
					$(this).addClass("active").siblings("div").removeClass("active");
					var index = $(this).index();
					if(index == 0){
						$('.featured').show();
						$('.accessories').hide();
					}else{
						$('.featured').hide();
						$('.accessories').show();
					};
				});
				//底部tab切换
				$('.weui_tabbar').children("a").click(function(){
					$(this).addClass("active").siblings("a").removeClass("active");
				});
	    		},
	        getData: function(){
	            $.ajax({
	            		type:"POST",
					url:"/zixiu/homeLoop",
	                success: function(result) {
	                		var datas = result.data;
	                		for(var i = 0;i<datas.length;i++){
	                			var obj = {src : datas[i].imgPath};
	                			vm.todos.push(obj);
	                		}
	                		
	                },
					dataType:"json",
					async:false,
					error:function(){
						alert("失败")
					}
	            });
	        },
	        getFetured: function(){
	            $.ajax({
	            		type:"POST",
					url:"/zixiu/homePageData",
	                success: function(result) {
		                	if(result.code == 0){
		                		var datas = result.videoList,
		                			products = result.productList;
		                		//视频教程
		                		for(var i = 0;i<datas.length;i++){
		                			var obj = {
		                				name : datas[i].name,
		                				playCount : datas[i].playCount,
		                				src : datas[i].img,
		                				id : "vedioDetail.html?id="+datas[i].id
		                			};
		                			vm.infors.push(obj);
		                		}
		                		//维修配件
		                		for(var i = 0;i<products.length;i++){
		                			var objProduct = {
		                				name : products[i].name,
		                				price : products[i].price,
		                				src : products[i].coverImage,
		                				id : products[i].id
		                			};
		                			vm.products.push(objProduct);
		                		}
		                		console.log(objProduct)
		                	}
	                		
	                },
					dataType:"json",
					async:false,
					error:function(){
						alert("失败")
					}
	            });
	        }
	    }
	});
	vm.homeFun();
	vm.getData();
	vm.getFetured();
	
	setTimeout(function(){
		 var mySwiper = new Swiper('#home_banner', {
			 autoplay: 2000,//可选选项，自动滑动
			 pagination : '.swiper-pagination',
			 speed:800,
			 loop : true
		 });
	},1000);
	
	//精选教程
//	function loadGrageOne(){
//		$.ajax({
//			type:"POST",
//			url:"/zixiu/homePageData",
//			success:function(result){
//				var dataOne = result.videoList,
//					dataTwo = result.productList,
//					htmlOne = "",
//					htmlTwo = "";
//				if (result.code == 0){
//					//精选教程
//					for(var i=0;i<dataOne.length;i++){
//						var imgSrc = dataOne[i].img,
//							name = dataOne[i].name,
//							idOne = dataOne[i].id,
//							playCount = dataOne[i].playCount;
//						htmlOne+='<div class="weui-col-50 hot_list_shop">'
//								 +    '<a href="vedioDetail.html?id='+idOne+'">'
//								 +        '<dl class="video_list">'
//								 +            '<dt>'
//								 +                '<img src="'+imgSrc+'">'
//								 +                '<h3 class="veduo_logo"></h3>'
//								 +            '</dt>'
//								 +            '<dd>'
//								 +                '<h3 class="shop_name le_ellipsis">'+name+'</h3>'
//								 +                '<h3 class="shop_description">'+playCount+'次</h3>'
//								 +            '</dd>'
//								 +        '</dl>'
//								 +    '</a>'
//								 +'</div>';
//					};
//	                //维修配件
//	                for(var i=0;i<dataTwo.length;i++){
//	                		var imgSrc = dataTwo[i].coverImage,
//							name = dataTwo[i].name,
//							idTwo = dataTwo[i].id,
//							price = dataTwo[i].price;
//						htmlTwo+='<div class="weui-col-50 hot_list_shop">'
//								 +    '<a href="/product/detail/'+dataTwo[i].sku+'">'
//								 +        '<dl class="shop_show_box">'
//								 +            '<dt>'
//								 +                '<h3><img src="'+imgSrc+'"></h3>'
//								 +            '</dt>'
//								 +            '<dd>'
//								 +                '<h3 class="shop_name le_ellipsis">'+name+'</h3>'
//								 +                '<div class="bottom_det">'
//								 +                    '<h3 class="shop_price">'
//								 +                        '<span class="small_price">￥</span>'
//								 +                        '<span>'+price+'</span>'
//								 +                    '</h3>'
//								 +                '</div>'
//								 +            '</dd>'
//								 +        '</dl>'
//								 +    '</a>'
//								 +'</div>';
//					};
//					setTimeout(function(){
//						$('.featured').children(".one").append(htmlOne);
//						$('.accessories').children(".two").append(htmlTwo);
//	                },800);
//					
//				}else{
//					$.toast("系统错误", "forbidden");
//				}
//			},
//			dataType:"json",
//			async:false,
//			error:function(){
//				alert("失败")
//			}
//		});
//	};
});