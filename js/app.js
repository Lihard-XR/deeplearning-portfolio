const navLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll(".page-section");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const targetPage = link.dataset.page;

        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");

        pageSections.forEach(section => {
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