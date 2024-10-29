$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item'); // Certifique-se de que a classe está correta

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.5)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) { 
                activeSectionIndex = i;
                return false; // Para sair do loop
            }
        });

        navItems.removeClass('active'); // Remove a classe 'active' de todos
        $(navItems[activeSectionIndex]).addClass('active'); // Adiciona a classe 'active' ao item correspondente
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 3000,
        distance: '20%',
    })
    ScrollReveal().reveal('.product', {
        origin: 'left',
        duration: 3000,
        distance: '20%',
    })
    ScrollReveal().reveal('#sobre_content', {
        origin: 'right',
        duration: 3000,
        distance: '20%',
    })
});