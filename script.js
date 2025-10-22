document.addEventListener('DOMContentLoaded', () => {
    // ---------------- FAQ (Solución de Problemas) Interactiva ----------------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Cierra todos los demás FAQ que estén abiertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Abre o cierra el FAQ clickeado
            item.classList.toggle('active');
        });
    });

    // ---------------- Menú de Navegación Móvil ----------------
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Toggle de la clase para mostrar el menú móvil
            navMenu.classList.toggle('mobile-open');

            // Toggle del icono (opcional, pero buena práctica)
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('mobile-open')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Este código es para cerrar el menú si se hace clic en un enlace (navegación con ancla)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-open');
                menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });
    }

    // Agregar estilos para el menú móvil en CSS (no incluido arriba para mantenerlo limpio, pero necesario):
    // @media (max-width: 767px) {
    //     .nav-menu {
    //         position: absolute;
    //         top: 64px; /* Altura del header */
    //         left: 0;
    //         width: 100%;
    //         background-color: var(--color-header-bg);
    //         flex-direction: column;
    //         padding: 1rem 0;
    //         display: none; /* Oculto por defecto */
    //         box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    //     }
    //     .nav-menu.mobile-open {
    //         display: flex; /* Mostrar cuando la clase mobile-open está activa */
    //     }
    //     .nav-menu a {
    //         padding: 0.75rem 1rem;
    //         width: 100%;
    //         text-align: center;
    //         border-bottom: 1px solid #e0e0e0;
    //     }
    // }
});