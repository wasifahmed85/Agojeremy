
        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.getElementById('menu-toggle');
            const mainMenu = document.getElementById('main-menu');
            const findOutMore = document.querySelector('.mt-4.md\\:mt-0');
            const menuIcon = document.getElementById('menu-icon');

            menuToggle.addEventListener('click', function () {
                const isMenuOpen = mainMenu.classList.toggle('hidden');
                findOutMore.classList.toggle('hidden', isMenuOpen);

                // Toggle the hamburger and close icon paths
                if (isMenuOpen) {
                    menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); // Hamburger icon
                } else {
                    menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Close icon
                }
            });
        });
