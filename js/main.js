$(document).ready(function() {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.main_slider', {
      // Optional parameters
        // 슬라이드 방향
        // direction: 'vertical',  적지 않아서 기본값으로 좌우
        loop: true,    //반복ㄱㅣ능 쓰지않으면 반복하지않는다
        
        autoplay: {
            delay: 3000,  //슬라이드 지연시간
            disableOnInteraction:false, // 슬라이드 안쪽 요소 클릭시 멈춤기능
        },
        // 좌우화살표
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    
    var headerEl = $('#header .gnb');
    // *헤더 on클래스 gnb
    
    headerEl.on('mouseenter',function() {
        $('#header').addClass('on'); 
       // $('#header .depth2').addClass('on');
    });  
    
    headerEl.on('mouseleave', function() {
        $('#header').removeClass('on'); 
        //$('#header .depth2').removeClass('on'); 
    });
   
    /* 마우스 스크롤 시 이동거리 계산해 우측에 탑버튼 생성*/
    /*btn_top버튼*/
    $(window).scroll(function() {
        var _top = $(this).scrollTop(); 
        var btnTop = $('#main .btn_top');
        
        if(_top >= 500) {
            btnTop.fadeIn();
        } else {
            btnTop.fadeOut();  
        }
        btnTop.on('click',function(e) {
            e.preventDefault();
            $('html, body').stop().animate({scrollTop:0});
        });
    });
    
    /*family_list 슬라이드*/
    var submenuEl = $('#footer .footer_inner .sub_side');
    
    $('#footer .footer_inner .btn_more').on('click',function() {
        submenuEl.stop().slideToggle(200);
        $('#footer .footer_inner .btn_more').toggleClass('on');
    });
    /*슬라이드 마우스 오버 시 멈추기 뗴면 다시 작동*/
    $('.main_slider').hover(function() {
        mySwiper.autoplay.stop();
    }, function() {
        mySwiper.autoplay.start();  
    });
    
    
    
    
    /*등록 버튼 시 발생*/
    $('#container.inquiry_page .inquiry_wrap .enroll').on('click',function() {
        if (confirm('등록하시겠습니까?')) {
            location.href="index.html";
        }
    });
     $('#container.inquiry_page .inquiry_wrap .cancel').on('click',function() {
        if (confirm('취소하시겠습니까?')) {
            location.href="index.html";
        }
    });
    
    /*$('#container.inquiry_page .inquiry_wrap button').on('click',function() {
        if ($(this).hasClass('enroll')) {
            if (confirm('등록하시겠습니까?')) {
                location.href="index.html";
            }
        }else {
            if (confirm('취소하시겠습니까?')) {
                location.href="index.html";
            }
        }
    });*/
    
    /* 라디오 버튼 ㅂㅣ활성화 해제*/
    $('input[name="human"]').attr('disabled',false);
    /* 데이터를 받아올 수 없으므로 임시방편으로 alert띄워 사용*/
    // 버튼 기본이벤트 삭제 버튼 클릭시 알림창
    $('#container.sign_page3 .tbl_signup .dbl_chk').on('click', function(a) {
        a.preventDefault();
        alert('사용 가능한 아이디입니다');
        
    })
    /* 데이터를 받아올 수 없으므로 임시방편으로 alert띄워 사용*/
     $('#container.sign_page3 .tbl_signup .btn_confirm').on('click', function(b) {
        b.preventDefault();
        alert('인증번호가 발송되었습니다.');
        
    })
    
    
});//ready 종료















