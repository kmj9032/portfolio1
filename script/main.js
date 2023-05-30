// 최상단스크롤
$("#udbtn").hide();
$(window).scroll(function(){
    if($(this).scrollTop() != 0){
        $("#udbtn").fadeIn();
    } else{
        $("#udbtn").fadeOut();
    }
});
$("#top").on('click', function() {
    $("html, body").animate({ scrollTop: 0 })
})
$("#bottom").on('click', function() {
    $("html, body").animate({ scrollTop: $('html').height() })
});

//안움직이게
$('.noMove').on('click', function(e) {
    e.preventDefault();
});

//메뉴
$(".hwrap .menu").click(function(){
    $(".menubg").slideDown();
    $(".hwrap .menu").css({display:'none'});
    $(".hwrap .close").css({display:'flex'})
});
$(".hwrap .close").click(function(){
    $(".menubg").slideUp();
    $(".hwrap .close").css({display:'none'});
    $(".hwrap .menu").css({display:'flex'})
});

//정렬순
const align = document.querySelectorAll("#align li .align");

  function click(){
    
    for(let i = 0; i<align.length; i++){
      align[i].style.color="#B9B9B9";
    }
    this.style.color="#DD5650";
  }
  for(let j = 0; j<align.length; j++){
    align[j].addEventListener("click",click);
  }
	
