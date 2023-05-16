
// 문제 1. 웹문서 로딩시 1초뒤에 로고가 3초에 걸쳐서 서서히 나타나도록
function logo(){
  $("#mainHeader h1").animate({opacity:1},3000)
}
setTimeout(logo,1000);
// 문제 2. 네비게이션이 숨겨져 있도록 설정
$(".navWrap").css({display:"none"});
// 문제 3. #navigation h2 버튼 클릭시 메뉴 펼침, 숨김 구현
$("#navigation h2").click(function(){
  $(".navWrap").slideToggle();
});
// 문제 4. #navigation li 클릭시 해당 섹션으로 슬라이딩되도록
$("#navigation li").on('click', function() {
  let idName = $(this).children("a").attr('href');
  let pos = $(idName).position().top;
  $("html, body").stop().animate({ scrollTop: pos });
});
// 문제 5. .btnList span 클릭시 슬라이더 애니메이션 구현
// .sliderList li span 이펙트
$(".btnList span").on('click',function(){
  num = $(this).index();
  let btnPos = num * (-100) + "%";
  $(".sliderList").animate({ marginLeft: btnPos });
  $(".btnList span").removeClass('on');
  $(this).addClass('on');
  $(".sliderList li span").hide().fadeIn(1000);
})
// 문제 6. 코딩교육프로그램 섹션의 span 태그를 이용해서 아코디언 효과 적용
$(".program span").on('click',function(){
  $(".program").not($(this)).removeClass('pro')
                            .children('span').text(`-`);
  $(this).parent().addClass('pro').css({transition:'0.5s'})
                  .children('span').text(`+`);
});
// 문제 7. .contentWrap1에 도달시 컨텐츠가 나타나기
// 스크롤 올리면 컨텐츠 사라지게
  let state = 0;
  let posTop = $(window).height()+200;
  $(window).on('scroll',function(){
    if($(this).scrollTop() > posTop && state == 1){
      state = 0;
      $(".contentWrap1").delay(0).animate({opacity:1},1000);
    }
    else if($(this).scrollTop() < posTop-200 && state == 0){
      state = 1;
      $(".contentWrap1").css({opacity:0})
    }
  })