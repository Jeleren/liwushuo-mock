function show_ul() {
    var ul_2=$(".content-ul-2");
    var ul_3=$(".content-ul-3");
    console.log(ul_2.css("display"));
    if(ul_2.css("display")==="none"){
        ul_2.css("display","block");
        console.log(ul_2.display);
    }else{
        if(ul_3.css("display")==="none"){
            ul_3.css("display","block");
        }else{
            $(".bottom-div").text("没有更多了~");
        }

    }
}