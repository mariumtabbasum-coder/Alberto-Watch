/* =========================================================
                    PRODUCT FILTERING
========================================================= */


const filterButtons = document.querySelectorAll(".filter-btn");

const productItems = document.querySelectorAll(".product-item");

const noResult = document.getElementById("noResult");


filterButtons.forEach(function(button) {


    button.addEventListener("click", function() {


        /* ACTIVE BUTTON */

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active-filter");

        });


        button.classList.add("active-filter");


        /* SELECT CATEGORY */

        const selectedCategory =
            button.getAttribute("data-category");


        let visibleProducts = 0;


        /* FILTER PRODUCTS */

        productItems.forEach(function(product) {


            const productCategories =
                product.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                productCategories.includes(selectedCategory)
            ) {

                product.style.display = "block";

                visibleProducts++;

            }

            else {

                product.style.display = "none";

            }

        });


        /* NO RESULT */

        if (visibleProducts === 0) {

            noResult.style.display = "block";

        }

        else {

            noResult.style.display = "none";

        }

    });

});



/* =========================================================
                    PRODUCT MODAL
========================================================= */


const productModalElement =
    document.getElementById("productModal");


const productModal =
    new bootstrap.Modal(productModalElement);


const viewButtons =
    document.querySelectorAll(".view-details-btn");


const modalImage =
    document.getElementById("modalImage");


const modalName =
    document.getElementById("modalName");


const modalType =
    document.getElementById("modalType");


const modalDescription =
    document.getElementById("modalDescription");


const modalBrand =
    document.getElementById("modalBrand");


const modalCategory =
    document.getElementById("modalCategory");


const modalMovement =
    document.getElementById("modalMovement");


const modalWater =
    document.getElementById("modalWater");


const modalMaterial =
    document.getElementById("modalMaterial");


const modalPrice =
    document.getElementById("modalPrice");



viewButtons.forEach(function(button) {


    button.addEventListener("click", function() {


        /* PRODUCT CARD */

        const product =
            button.closest(".product-item");


        /* PRODUCT INFORMATION */

        const name =
            product.getAttribute("data-name");


        const brand =
            product.getAttribute("data-brand");


        const type =
            product.getAttribute("data-type");


        const movement =
            product.getAttribute("data-movement");


        const water =
            product.getAttribute("data-water");


        const material =
            product.getAttribute("data-material");


        const price =
            product.getAttribute("data-price");


        const image =
            product.getAttribute("data-image");


        const description =
            product.getAttribute("data-description");


        /* CATEGORY */

        let category = "Classic";


        if (
            product.getAttribute("data-category")
            .includes("luxury")
        ) {

            category = "Luxury";

        }

        else if (
            product.getAttribute("data-category")
            .includes("vintage")
        ) {

            category = "Vintage";

        }

        else if (
            product.getAttribute("data-category")
            .includes("smart")
        ) {

            category = "Smart";

        }


        /* PUT DATA IN MODAL */

        modalImage.src = image;

        modalImage.alt = name;

        modalName.textContent = name;

        modalType.textContent = type;

        modalDescription.textContent = description;

        modalBrand.textContent = brand;

        modalCategory.textContent = category;

        modalMovement.textContent = movement;

        modalWater.textContent = water;

        modalMaterial.textContent = material;

        modalPrice.textContent = price;


        /* OPEN MODAL */

        productModal.show();

    });

});



/* =========================================================
                    PRODUCTS HERO SLIDER
========================================================= */


const slides =
    document.querySelectorAll(".products-slide");


const dots =
    document.querySelectorAll(".product-dot");


const nextButton =
    document.getElementById("productsNext");


const previousButton =
    document.getElementById("productsPrev");


let currentSlide = 0;

let autoSlider;



/* SHOW SLIDE */

function showProductSlide(index) {


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

    slides[currentSlide]
        .classList.add("active-slide");


    dots[currentSlide]
        .classList.add("active-dot");

}



/* NEXT */

nextButton.addEventListener("click", function() {

    showProductSlide(currentSlide + 1);

    restartAutoSlider();

});



/* PREVIOUS */

previousButton.addEventListener("click", function() {

    showProductSlide(currentSlide - 1);

    restartAutoSlider();

});



/* DOTS */

dots.forEach(function(dot, index) {


    dot.addEventListener("click", function() {

        showProductSlide(index);

        restartAutoSlider();

    });

});



/* AUTO SLIDER */

function startAutoSlider() {

    autoSlider = setInterval(function() {

        showProductSlide(currentSlide + 1);

    }, 5000);

}



function restartAutoSlider() {

    clearInterval(autoSlider);

    startAutoSlider();

}


/* START */

showProductSlide(0);

startAutoSlider();