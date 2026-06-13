document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       Page Navigation
    ========================= */

    const navLinks = document.querySelectorAll(".nav-link");
    const pageSections = document.querySelectorAll(".page-section");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const targetPage = link.dataset.page;

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");

            pageSections.forEach((section) => {
                section.classList.remove("active-section");

                if (section.id === targetPage) {
                    section.classList.add("active-section");
                }
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });


    /* =========================
       Common Image Modal
       - 대표 프롬프트 캡처
       - Colab 실행 결과 캡처
       - 그래프 이미지
    ========================= */

    const imageModal = document.getElementById("imageModal");
    const imageModalImage = document.getElementById("imageModalImage");
    const imageModalTitle = document.getElementById("imageModalTitle");

    const imageOpenButtons = document.querySelectorAll(".image-open");
    const imageModalCloseButtons = document.querySelectorAll("[data-image-modal-close]");

    function openImageModal(imgSrc, title) {
        if (!imageModal || !imageModalImage || !imageModalTitle) {
            return;
        }

        imageModalImage.src = imgSrc;
        imageModalTitle.textContent = title || "이미지 크게 보기";

        imageModal.classList.add("active");
        imageModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeImageModal() {
        if (!imageModal || !imageModalImage) {
            return;
        }

        imageModal.classList.remove("active");
        imageModal.setAttribute("aria-hidden", "true");
        imageModalImage.src = "";
        imageModalTitle.textContent = "이미지 크게 보기";
        document.body.style.overflow = "";
    }

    imageOpenButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const imgSrc = button.dataset.img;
            const title = button.dataset.title;

            if (!imgSrc) {
                return;
            }

            openImageModal(imgSrc, title);
        });
    });

    imageModalCloseButtons.forEach((button) => {
        button.addEventListener("click", closeImageModal);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && imageModal && imageModal.classList.contains("active")) {
            closeImageModal();
        }
    });
});