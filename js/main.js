$(document).ready(function () {

    //---------fixed header on scrol----------//
    let top_line = $('#top_line'),
    header_image = $('#header_img').innerHeight(),
    scroll = $(window).scrollTop();

    checkScroll(scroll);


    $(window).on('scroll', function() {
        scroll = $(this).scrollTop();

        checkScroll(scroll);
    });

    function checkScroll(scroll) {
        if(scroll >= header_image) {
            top_line.addClass('fixed')
        } else {
            top_line.removeClass('fixed')
        };
    };


    //---------blog-nav---------//

    $('.blog_nav').slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        swipeToSlide: true,
        waitForAnimate: true,
        speed: 200,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    variableWidth: true
                }
            },
            {
                breakpoint: 986,
                settings: {
                    slidesToShow: 5,
                    variableWidth: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    variableWidth: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    variableWidth: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
    });

    // lunch_hover error

    $('#compare').hover(function() {
        $('#error_compare').addClass('visible');
    }, function() {
        $('#error_compare').removeClass('visible');
    })

    // new referals toggle

    $('#referal_toggle').on('click', function() {
        $(this).toggleClass('active');
        $('#referal_types_box').toggleClass('active');
    })


//sliders********
//sliders********
//sliders********

    $('.order_lunch_row_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    slidesToScroll: 1
                }
            }
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            // instead of a settings object
        ]
    });
    $('.slider_wok').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrow: false,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true,
                    slidesToScroll: 1
                }
            }
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            // instead of a settings object
        ]
    });
    $('.slider_wok_2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true,
                    slidesToScroll: 1
                }
            }
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            // instead of a settings object
        ]
    });
    
//sliders********
//sliders********
//sliders********

//range *********
//range *********
//range *********
    var min_amount_range = $('#min_amount_range');
    $('#min_amount_range').on('input', function(){
        var value = min_amount_range.val()
        
        $('#display_range_value').html(value);
    })
    var min_amount_range_2 = $('#min_amount_range_2');
    $('#min_amount_range_2').on('input', function(){
        var value = min_amount_range_2.val()
        
        $('#display_range_value_2').html(value);
    })
//range *********
//range *********
//range *********

//burger*********
//burger*********
//burger*********
    $('.burger').on('click', function(){
        $('.burger.main_burger').addClass('active');
        $('.burger.menu').addClass('bur_active');
        $('.header_menu').addClass('active');
    });

    $('.burger.menu').on('click', function(){
        $('.burger.main_burger').removeClass('active');
        $('.burger.menu').removeClass('bur_active');
        $('.header_menu').removeClass('active');
    });


    
//----------checkbbox--toggle-----------//

    $('#filter').on('click', function(){
        $('.filter_box').toggleClass('active');
        $('.choice_toggle').toggleClass('active');
    })

//----------checkbbox--toggle-----------//

    $('#lunch_toggle').on('click', function(){
        $('#order_crytery_inner').toggleClass('active');
        $('.choice_toggle').toggleClass('active');
    })

//----------checkbbox--toggle-----------//

$('#restaurant_toggle').on('click', function(){
    $('#restaurant_crytery_inner').toggleClass('active');
    $('.choice_toggle').toggleClass('active');
})

$('#restaurant_extra_form_toggle').on('click', function(){
    $('#restaurant_extra_form_toggle').toggleClass('active');
    $('#extra_form_toggle_box').toggleClass('active');
    $('.extra_info_box').toggleClass('active');
})



    /* pop-up_compare */

    $('.pop_up_compare_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrow: false,
                    dots: true
                }
            }
          
        ]
        
    });

    /* pop-up healthy */

    $('.pop_up_healthy_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 470,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    swipeToSlide: true,
                    variableWidth: true,
                    slidesToScroll: 1
                }
            }
          
        ]
        
    });

   

        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    
    // table-collapse
    $('.collapse_btn').on('click', function() {
        $(this).toggleClass('active');
        $('.collapse_table').toggleClass('active');
    })

    // gifts-checkboxes

    $('.selectall').click(function() {
        if ($(this).is(':checked')) {
            $('input:checkbox').prop('checked', true);
        } else {
            $('input:checkbox').prop('checked', false);
        }
    });

    $("input[type='checkbox'].auto, input[type='checkbox'].sport, input[type='checkbox'].other").change(function(){
        var a = $("input[type='checkbox'].auto, input[type='checkbox'].sport, input[type='checkbox'].other");
        if(a.length == a.filter(":checked").length){
            $('.selectall').prop('checked', true);
        }
        else {
            $('.selectall').prop('checked', false);
        }
    });


});

// Custom dropdown list

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select_trigger span').textContent = this.textContent;
        }
    })
}

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}


window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});







