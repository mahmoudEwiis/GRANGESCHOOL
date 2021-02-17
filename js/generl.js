$(document).ready(function(){
    $('.loading_screen').fadeOut(1500)
    $('body').css('overflow','auto')
        if(localStorage.getItem('color') !=null)
        {
            changeColor(localStorage.getItem('color'))
        }

        let btn_bars = document.getElementById('btn-bars')
        btn_bars.addEventListener('click',function(){
           $('#responsive-menu').animate({'left':0},500)
           $('body').css('overflow','hidden')
        })
        $('#responsive-menu .menu_icon').click(function(){
            $('#responsive-menu').animate({'left':'-100%'},500)
           $('body').css('overflow','auto')
        })
        //.controller_icon
        $('.controller_icon').click(function(){
            if($('.general_controller_container').css('left') == '0px')
            {
                $('.general_controller_container').animate({left:'-199px'},500)
            }
            else{
                $('.general_controller_container').animate({left:'0px'},500)
            }
        })
        //change main color of pages
        let colors = Array.from(document.querySelectorAll('.general_controller_container .controller_item span'));
        for(let i=0;i<colors.length;i++)
        {
            colors[i].addEventListener('click',function(){
               let color = colors[i].style.backgroundColor;
               changeColor(color)
               localStorage.setItem('color',color)
            })
        }
        AOS.init({
            duration: 1200,
            easing: 'ease-in-sine'
          });
          let btn_up = document.getElementById('btn_up');
          btn_up.addEventListener('click',function(){
            $('html , body').animate({scrollTop:'0'})
          })
          
        $(window).scroll(function(){

            let wScroll = $(window).scrollTop();
            if( wScroll >= 800)
            {
                btn_up.style.display='block';
            }
            else{
                btn_up.style.display='none';
            }
            
        })

})
/*------change_main_color----- */
function changeColor(color){
    $('.header_data_info_icon i,.contact_info_icon i , .header_data_info .logo h2 small ,#Home .home_text h2 span , #about .about_container .about_title h2 span , .about_feature i , .classes_title h2 span , .price , .teachers .teacher_img_title span , .course_meta_info+span , .post_container .blog-info .read-more ,footer .container .footer-logo h2 small , .about_page_welcome_title h2 span , .about_page_benifit_section_title h2 span , .about_page_benifit_section_item i , .choose_classes_item_title .classes_page_number p span ').css('color',color)
    $('.scroll_down').mouseenter(function(){
        $(this).css('borderColor',color)
        $(this).find('.ball_scroll_down').css('backgroundColor',color)
    })
    $('.scroll_down').mouseleave(function(){
     $(this).css('borderColor',"#fff")
     $(this).find('.ball_scroll_down').css('backgroundColor',"#fff")
     })
     $('.navbar .nav_item ul li a').mouseenter(function(){
         $(this).css('color',color)
     })
     $('.navbar .nav_item ul li a').mouseleave(function(){
         $(this).css('color',"#fff")
     })
     $('.contact-footer li a').mouseenter(function(){
         $(this).css('color',color)
     })
     $('.contact-footer li a').mouseleave(function(){
         $(this).css('color',"#fff")
     })
     $('.icon_teacher_img_box ul li a ').mouseenter(function(){
         $(this).css('color',color)
     })
     $('.icon_teacher_img_box ul li a ').mouseleave(function(){
         $(this).css('color','#fff')
     })
     $('.post_container .blog-info .read-more ').mouseenter(function(){
         $(this).css('color',"#f37335")
     })
     $('.post_container .blog-info .read-more ').mouseleave(function(){
         $(this).css('color',color)
     })
     $('.about_feature ').mouseenter(function(){
         $(this).find('i').css('color',"#f37335")
     })
     $('.about_feature ').mouseleave(function(){
         $('.about_feature i').css('color',color)
     })
     $('.main_text_about_page ul li a').mouseenter(function(){
         $(this).css('color',color)
     })
     $('.main_text_about_page ul li a ').mouseleave(function(){
         $(this).css('color',"#fff")
     })
     $('.classes_page_pagination ul li').mouseenter(function(){
         $(this).css('color',color)
     })
     $('.classes_page_pagination ul li').mouseleave(function(){
         $(this).css('color',"#fff")
     })
     $('#form_container .input_container input').focus(function(){
         $(this).css('borderColor',color)
     })
     $('#form_container .input_container input').blur(function(){
        $(this).css('borderColor',"transparent")
    })
    $('#form_container .input_container .contact_textarea').focus(function(){
        $(this).css('borderColor',color)
    })
    $('#form_container .input_container .contact_textarea').blur(function(){
       $(this).css('borderColor',"transparent")
   })
}