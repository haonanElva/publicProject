$(function(){
    var height = $(window).height();
    $(".wrapper").height(height);
    
    $('.users-down').on('click',function(){//查看评论
       $(this).addClass("hidden").siblings(".hidden-pl").removeClass('hidden').siblings('.users-up').removeClass('hidden');
    });
    
    $('.users-up').on('click',function(){//收起评论
		$(this).addClass("hidden").siblings(".hidden-pl").addClass('hidden').siblings('.users-down').removeClass('hidden');
    });
    
    $('.trash').on('click',function(){//删除个人消息
       $('.main-personal').remove();
    });
    
    $('.like').on('click','.fa-heart-o',function(){//点赞
        $(this).toggleClass('fa-heart');
        var countHeart = parseInt($(this).siblings().text());
        $(this).hasClass('fa-heart') ? $(this).siblings().text(countHeart+1) : $(this).siblings().text(countHeart-1)
    });
    
        var photoLength = $('.user-photo-show').length;//图片显示不同数量
	    for(j =0;j < photoLength;j++){
		    var imgArr1 = ["head2","head3","head4","head5"];
		    var imgArr2 = ["head2"];
		    var imgArr3 = ["head2","head3"];
		    var imgArr4 = ["head2","head3","head4","head5","head6","transform2","transform3"];
		    var imgArr5 = ["head2","head3","head4"];
		    var imgArr0 = ["head2","head3","head4","head5","head6","transform3"];
		    var str = '';
		    var forLength = eval('imgArr'+j).length > 6 ? 6 : eval('imgArr'+j).length;
		    for(i = 0 ; i < forLength;i ++){
		    	var className = '';
		    	if(forLength  ==1){
		    		className = 'class1';
		    	}else if(forLength == 2 || forLength == 4){
		    		className = 'class2';
		    	}else{
		    		className = 'class3';
		    	}
		    	str +='<li><img class="'+className+'" src="image/' + eval('imgArr'+j)[i] + '.jpg"></li> ';
		    }
		    $(".user-photo-show").eq(j).html(str);
	    };
	    
    $('.user-photo-show').on('click','img',function(){//点击预览图片
        var imgArr = ["head2","head3","head4","head5","head6","transform2","transform3","transform4","transform5","transform6","transform7","transform8"];
        var samllImgSrc = $(this).attr('src');
        var html = "";
            $('.showImg').removeClass('hidden');
            for(var i = 0;i < imgArr.length;i ++){
                if(samllImgSrc == "image/"+imgArr[i]+".jpg"){
                   html += '<img src="image/'+imgArr[i]+'.jpg">';
                }
            }
            $('.showInner').append(html);
    });
    
    $('.hideImg').click(function(){//取消预览
        $('.showImg').addClass('hidden');
        $('.showInner img').remove();
    });
});
