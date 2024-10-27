import i from './index.html';
$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    })

    const sections = $('section')
    const navItens = $('nav-item')

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        }
        else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.5)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionbottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) { 
                activeSectionIndex = i;
                return false;
            }
            
        })

        $(navItem[activeSectionIndex]).addClass('active');
    })
})