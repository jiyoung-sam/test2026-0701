$(document).ready(function(){

    // 팝업 열기
    $("#btn_open").click(function(){
        $(".popup").addClass("on")
    })
    // 팝업 닫기
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    // 탭메뉴
    $(".tabs>a").click(function(){
        // 활성화 기능
        $(".tabs>a").removeClass("on")
        $(this).addClass("on")
        $(".tab_contents>ul").removeClass("on")
        let idx = $(this).index()
        $(".tab_contents>ul").eq(idx).addClass("on")
    })

    // 슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0} // 0,1,2,0,1,2...
        $(".train").css("transform",`translateY(${-33.333*count}%)`)
    },2500)

})