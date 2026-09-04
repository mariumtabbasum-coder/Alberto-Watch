const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");

    const nextButton = document.getElementById("nextSlide");
    const prevButton = document.getElementById("prevSlide");

    const heroSlider = document.getElementById("heroSlider");

    let currentSlide = 0;

    let autoSlide;


    /* =====================================================
                        SHOW SLIDE
    ===================================================== */

    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        }

        else if (index < 0) {
            currentSlide = slides.length - 1;
        }

        else {
            currentSlide = index;
        }


        /* REMOVE ACTIVE */

        slides.forEach(function(slide) {

            slide.classList.remove("active-slide");

        });


        dots.forEach(function(dot) {

            dot.classList.remove("active-dot");

        });


        /* ADD ACTIVE */

        slides[currentSlide].classList.add("active-slide");

        dots[currentSlide].classList.add("active-dot");

    }


    /* =====================================================
                        NEXT SLIDE
    ===================================================== */

    function nextSlide() {

        showSlide(currentSlide + 1);

    }


    /* =====================================================
                        PREVIOUS SLIDE
    ===================================================== */

    function previousSlide() {

        showSlide(currentSlide - 1);

    }


    /* =====================================================
                        ARROW BUTTONS
    ===================================================== */

    nextButton.addEventListener("click", function() {

        nextSlide();

        restartAutoSlide();

    });


    prevButton.addEventListener("click", function() {

        previousSlide();

        restartAutoSlide();

    });


    /* =====================================================
                          DOTS
    ===================================================== */

    dots.forEach(function(dot, index) {

        dot.addEventListener("click", function() {

            showSlide(index);

            restartAutoSlide();

        });

    });


    /* =====================================================
                    AUTOMATIC SLIDER
    ===================================================== */

    function startAutoSlide() {

        autoSlide = setInterval(function() {

            nextSlide();

        }, 5000);

    }


    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    /* =====================================================
                    TOUCH / SWIPE SUPPORT
    ===================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    heroSlider.addEventListener("touchstart", function(event) {

        touchStartX = event.changedTouches[0].screenX;

    });


    heroSlider.addEventListener("touchend", function(event) {

        touchEndX = event.changedTouches[0].screenX;

        handleSwipe();

    });


    function handleSwipe() {

        const swipeDistance = touchEndX - touchStartX;


        /* SWIPE LEFT */

        if (swipeDistance < -50) {

            nextSlide();

            restartAutoSlide();

        }


        /* SWIPE RIGHT */

        if (swipeDistance > 50) {

            previousSlide();

            restartAutoSlide();

        }

    }


    /* =====================================================
                    START SLIDER
    ===================================================== */

    showSlide(0);

    startAutoSlide();
