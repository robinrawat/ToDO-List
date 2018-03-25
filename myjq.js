function appenditem(){
    var t=$('#demo').val();
    if(t !== ""){
        var t1=$('<li></li>').text(t);
        $("ol").append(t1);
    }
    else{
        alert("empty string");
    }
};
    $(document).on('dblclick','li',function(){
        $(this).remove();
    });
    $(document).on('click','li',function(){
        $(this).toggleClass('cross');
    }); 
    $(document).on('click','input',function(){
        $(this).val('');
    });
    $(document).on("dblclick",'#flip',function(){
       $('#pan').slideToggle("slow") ;
    });
    $(document).on('mouseenter','input',function(){
        $(this).css('background-color','#bbb');
        });
    $(document).on('mouseleave','input',function(){
        $(this).css('background-color','azure');
    });
    $(document).on('mouseenter','li',function(){
        $(this).css({'opacity':'1','font-size':'200%'});
    });
    $(document).on('mouseleave','li',function(){
        $(this).css({'opacity':'0.8','font-size':'100%'});
    });
    