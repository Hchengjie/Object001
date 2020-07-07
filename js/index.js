$(function(){
    //模板轮播图
    var width = $(".bannerList li").innerWidth();
    
    
    var bannerIndex = 0;
    
    var bannerTimer = setInterval(changImg,2000);
    
    function changImg(){
        bannerIndex++;
        //限定index的范围
        if(bannerIndex > $(".bannerList li").length - 4){
            bannerIndex = 0;
        }
        $(".bannerList").animate({ marginLeft: -bannerIndex * width}, 500)
    }
    
    //左边按钮点击事件
    $(".prevBtn").click(function(){
        bannerIndex--;
        if(bannerIndex < 0){
            bannerIndex = $(".bannerList li").length - 4;
        }
        $(".bannerList").animate({ marginLeft: -bannerIndex * width}, 500)
    })
    
    //右边
    $(".nextBtn").click(function(){
        changImg()
    })

    
    //鼠标移入事件
    $(".bannerBox").mouseover(function(){
        clearInterval(bannerTimer);
    })

    //鼠标移出事件
    $(".bannerBox").mouseout(function(){
        bannerTimer = setInterval(changImg, 2000)
    })
})