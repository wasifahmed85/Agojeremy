    // Initialize Swiper
        const swiper = new Swiper('.testimonial-swiper', {
            spaceBetween: 24,
            slidesPerView: 1,
            loop: true,
            navigation: false, // Disable default navigation
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });

        // Custom navigation buttons
        document.getElementById('prevBtn').addEventListener('click', () => {
            swiper.slidePrev();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            swiper.slideNext();
        });

        // Tab functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        let activeTab = 'personal';

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');

                // Update active tab
                activeTab = tabId;

                // Update button styles
                tabButtons.forEach(btn => {
                    if (btn.getAttribute('data-tab') === tabId) {
                        btn.className = 'tab-button sm:px-6 px-3 py-2 rounded-full text-sm font-normal font-poppins transition-all duration-200 bg-gray-100 text-gray-900 shadow-sm whitespace-nowrap';
                    } else {
                        btn.className = 'tab-button sm:px-6 px-3 py-2 rounded-full text-sm font-normal font-poppins transition-all duration-200 text-gray-600 hover:text-gray-900 whitespace-nowrap';
                    }
                });

                console.log('Active tab:', tabId);
            });
        });

        // Button click handlers
        document.querySelectorAll('button[class*="bg-blue-500"]').forEach(button => {
            button.addEventListener('click', () => {
                console.log(button.textContent + ' clicked');
            });
        });