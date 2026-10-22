/* =========================================================
   ZIN LUXURY PORTFOLIO — FINAL APP.JS
   FULL JS / LIGHT + DARK / NAVIGATION / UX
   ========================================================= */

(() => {
    "use strict";

    /* =========================================================
       HELPERS
       ========================================================= */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];

    const STORAGE_KEY = "zinluxury-theme";

    const storageGet = (key) => {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    };

    const storageSet = (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch {
            // localStorage may be disabled
        }
    };

    const prefersReducedMotion = () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isMobile = () =>
        window.matchMedia("(max-width: 768px)").matches;


    /* =========================================================
       THEME
       ========================================================= */

    function getTheme() {
        return document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
    }


    function updateThemeUI(animate = false) {
        const body = document.body;

        const button = document.getElementById("themeToggle");

        const icon = document.getElementById("themeIcon");

        const isLight = body.classList.contains("light-theme");


        /* ICON */
        if (icon) {
            icon.textContent = isLight ? "☀" : "☾";
        } else if (button) {
            button.textContent = isLight ? "☀" : "☾";
        }


        /* ACCESSIBILITY */
        if (button) {
            button.setAttribute(
                "aria-label",
                isLight
                    ? "Chuyển sang giao diện tối"
                    : "Chuyển sang giao diện sáng"
            );

            button.setAttribute(
                "title",
                isLight
                    ? "Dark mode"
                    : "Light mode"
            );

            button.setAttribute(
                "aria-pressed",
                String(!isLight)
            );


            /* ANIMATION */
            if (animate) {
                button.classList.remove("theme-changing");

                void button.offsetWidth;

                button.classList.add("theme-changing");
            }
        }


        /* BROWSER THEME COLOR */
        const meta = document.querySelector(
            'meta[name="theme-color"]'
        );

        if (meta) {
            meta.setAttribute(
                "content",
                isLight
                    ? "#edf7fb"
                    : "#0d1115"
            );
        }


        /* HTML DATA THEME */
        document.documentElement.dataset.theme =
            isLight
                ? "light"
                : "dark";
    }


    function applyTheme(theme, animate = false) {
        const body = document.body;

        const next =
            theme === "dark"
                ? "dark"
                : "light";

        body.classList.toggle(
            "light-theme",
            next === "light"
        );

        storageSet(
            STORAGE_KEY,
            next
        );

        updateThemeUI(animate);
    }


    /* =========================================================
       GLOBAL THEME FUNCTION
       HTML có thể gọi:
       onclick="window.toggleZinTheme(event)"
       ========================================================= */

    window.toggleZinTheme = function toggleZinTheme(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        applyTheme(
            getTheme() === "light"
                ? "dark"
                : "light",
            true
        );
    };


    /* =========================================================
       INITIAL THEME
       ========================================================= */

    const initialSavedTheme =
        storageGet(STORAGE_KEY);

    if (initialSavedTheme === "dark") {
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
    }


    /* =========================================================
       DOM READY
       ========================================================= */

    document.addEventListener(
        "DOMContentLoaded",
        () => {

            const body = document.body;

            const navbar = $(".navbar");

            const mainNav = $("#mainNav");

            const navMenu =
                $("#mainNav .nav") ||
                $(".nav-menu") ||
                $(".nav");

            const menuToggle =
                $("#menuToggle") ||
                $(".menu-toggle") ||
                $(".mobile-menu-toggle");

            const themeButton =
                $("#themeToggle");


            /* =====================================================
               THEME UI
               ===================================================== */

            updateThemeUI(false);


            /* =====================================================
               MOBILE MENU
               ===================================================== */

            function setMenuState(open) {

                if (navMenu) {
                    navMenu.classList.toggle(
                        "active",
                        open
                    );
                }

                if (mainNav) {
                    mainNav.classList.toggle(
                        "open",
                        open
                    );
                }

                if (menuToggle) {

                    menuToggle.classList.toggle(
                        "active",
                        open
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        String(open)
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        open
                            ? "Đóng menu"
                            : "Mở menu"
                    );
                }

                body.classList.toggle(
                    "menu-open",
                    open
                );
            }


            if (menuToggle) {

                menuToggle.addEventListener(
                    "click",
                    (event) => {

                        event.preventDefault();

                        const isOpen =
                            navMenu?.classList.contains("active") ||
                            mainNav?.classList.contains("open");

                        setMenuState(!isOpen);
                    }
                );
            }


            /* CLOSE MENU WHEN CLICK NAV */
            $$(".nav a, .nav-menu a").forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        () => {
                            setMenuState(false);
                        }
                    );

                }
            );


            /* =====================================================
               SMOOTH SCROLL
               ===================================================== */

            $$('a[href^="#"]').forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        (event) => {

                            const targetId =
                                link.getAttribute("href");

                            if (
                                !targetId ||
                                targetId === "#"
                            ) {
                                return;
                            }

                            let target = null;

                            try {
                                target =
                                    document.querySelector(
                                        targetId
                                    );
                            } catch {
                                return;
                            }

                            if (!target) {
                                return;
                            }

                            event.preventDefault();

                            const navbarHeight =
                                navbar?.offsetHeight || 0;

                            const top =
                                target.getBoundingClientRect().top +
                                window.scrollY -
                                navbarHeight -
                                10;

                            window.scrollTo({
                                top: Math.max(top, 0),
                                behavior:
                                    prefersReducedMotion()
                                        ? "auto"
                                        : "smooth"
                            });

                        }
                    );

                }
            );


            /* =====================================================
               NAVBAR SCROLL
               ===================================================== */

            function updateNavbar() {

                if (!navbar) {
                    return;
                }

                navbar.classList.toggle(
                    "scrolled",
                    window.scrollY > 40
                );
            }


            window.addEventListener(
                "scroll",
                updateNavbar,
                {
                    passive: true
                }
            );

            updateNavbar();


            /* =====================================================
               SCROLL PROGRESS
               ===================================================== */

            let progressBar =
                $("#scrollProgress");

            if (!progressBar) {

                progressBar =
                    document.createElement("div");

                progressBar.id =
                    "scrollProgress";

                document.body.appendChild(
                    progressBar
                );
            }


            function updateScrollProgress() {

                const maxScroll =
                    document.documentElement.scrollHeight -
                    window.innerHeight;

                const percent =
                    maxScroll > 0
                        ? (window.scrollY / maxScroll) * 100
                        : 0;

                progressBar.style.width =
                    `${Math.min(
                        Math.max(percent, 0),
                        100
                    )}%`;
            }


            window.addEventListener(
                "scroll",
                updateScrollProgress,
                {
                    passive: true
                }
            );

            window.addEventListener(
                "resize",
                updateScrollProgress,
                {
                    passive: true
                }
            );

            updateScrollProgress();


            /* =====================================================
               ACTIVE SECTION
               ===================================================== */

            const sections =
                $$("main section[id]");

            const navLinks =
                $$(".nav a[href^='#'], .nav-menu a[href^='#']");


            if (
                "IntersectionObserver" in window &&
                sections.length &&
                navLinks.length
            ) {

                const observer =
                    new IntersectionObserver(
                        (entries) => {

                            entries.forEach(
                                (entry) => {

                                    if (
                                        !entry.isIntersecting
                                    ) {
                                        return;
                                    }

                                    const id =
                                        entry.target.id;

                                    navLinks.forEach(
                                        (link) => {

                                            link.classList.toggle(
                                                "active",
                                                link.getAttribute(
                                                    "href"
                                                ) === `#${id}`
                                            );

                                        }
                                    );

                                }
                            );

                        },
                        {
                            rootMargin:
                                "-35% 0px -55% 0px"
                        }
                    );


                sections.forEach(
                    (section) => {
                        observer.observe(section);
                    }
                );
            }


            /* =====================================================
               REVEAL ANIMATION
               ===================================================== */

            const revealElements =
                $$(".reveal, .fade-up, [data-reveal]");


            if (
                "IntersectionObserver" in window &&
                revealElements.length &&
                !prefersReducedMotion()
            ) {

                const revealObserver =
                    new IntersectionObserver(
                        (entries) => {

                            entries.forEach(
                                (entry) => {

                                    if (
                                        !entry.isIntersecting
                                    ) {
                                        return;
                                    }

                                    entry.target.classList.add(
                                        "revealed"
                                    );

                                    revealObserver.unobserve(
                                        entry.target
                                    );

                                }
                            );

                        },
                        {
                            threshold: 0.08
                        }
                    );


                revealElements.forEach(
                    (element) => {
                        revealObserver.observe(element);
                    }
                );

            } else {

                revealElements.forEach(
                    (element) => {
                        element.classList.add("revealed");
                    }
                );
            }


            /* =====================================================
               COUNTERS
               ===================================================== */

            const counters =
                $$("[data-count]");


            function animateCounter(element) {

                if (element.dataset.counted === "true") {
                    return;
                }

                element.dataset.counted = "true";

                const target =
                    Number(element.dataset.count);


                if (!Number.isFinite(target)) {
                    return;
                }


                if (prefersReducedMotion()) {

                    element.textContent =
                        target.toLocaleString("vi-VN");

                    return;
                }


                const duration = 1200;

                const start = performance.now();


                function tick(now) {

                    const progress =
                        Math.min(
                            (now - start) / duration,
                            1
                        );

                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );

                    const value =
                        Math.floor(
                            target * eased
                        );

                    element.textContent =
                        value.toLocaleString("vi-VN");


                    if (progress < 1) {

                        requestAnimationFrame(
                            tick
                        );

                    } else {

                        element.textContent =
                            target.toLocaleString("vi-VN");
                    }
                }


                requestAnimationFrame(tick);
            }


            if (
                "IntersectionObserver" in window &&
                counters.length
            ) {

                const counterObserver =
                    new IntersectionObserver(
                        (entries) => {

                            entries.forEach(
                                (entry) => {

                                    if (
                                        !entry.isIntersecting
                                    ) {
                                        return;
                                    }

                                    animateCounter(
                                        entry.target
                                    );

                                    counterObserver.unobserve(
                                        entry.target
                                    );

                                }
                            );

                        },
                        {
                            threshold: 0.5
                        }
                    );


                counters.forEach(
                    (counter) => {
                        counterObserver.observe(counter);
                    }
                );

            } else {

                counters.forEach(
                    (counter) => {
                        animateCounter(counter);
                    }
                );
            }


            /* =====================================================
               PROJECT MODAL
               ===================================================== */

            const projectModal =
                $("#projectModal");

            const modalClose =
                $("#modalClose") ||
                $(".modal-close");


            function closeProjectModal() {

                if (!projectModal) {
                    return;
                }

                projectModal.classList.remove(
                    "active",
                    "show"
                );

                body.classList.remove(
                    "modal-open"
                );
            }


            function openProjectModal(data = {}) {

                if (!projectModal) {
                    return;
                }


                const title =
                    $("#modalTitle");

                const description =
                    $("#modalDescription");

                const image =
                    $("#modalImage");

                const tech =
                    $("#modalTech");


                if (
                    title &&
                    data.title
                ) {
                    title.textContent =
                        data.title;
                }


                if (
                    description &&
                    data.description
                ) {
                    description.textContent =
                        data.description;
                }


                if (
                    image &&
                    data.image
                ) {

                    image.src =
                        data.image;

                    image.alt =
                        data.title ||
                        "Project";
                }


                if (
                    tech &&
                    data.tech
                ) {

                    tech.innerHTML = "";

                    const technologies =
                        Array.isArray(data.tech)
                            ? data.tech
                            : String(data.tech)
                                .split(",");


                    technologies
                        .map(
                            (item) =>
                                String(item).trim()
                        )
                        .filter(Boolean)
                        .forEach(
                            (item) => {

                                const span =
                                    document.createElement(
                                        "span"
                                    );

                                span.className =
                                    "project-tech-item";

                                span.textContent =
                                    item;

                                tech.appendChild(
                                    span
                                );
                            }
                        );
                }


                projectModal.classList.add(
                    "active",
                    "show"
                );

                body.classList.add(
                    "modal-open"
                );
            }


            $$(".project-card, [data-project]").forEach(
                (card) => {

                    const detailsButton =
                        card.querySelector(
                            ".project-details, [data-project-details]"
                        );


                    if (!detailsButton) {
                        return;
                    }


                    detailsButton.addEventListener(
                        "click",
                        (event) => {

                            event.preventDefault();

                            event.stopPropagation();


                            let data = {};


                            try {

                                data =
                                    JSON.parse(
                                        card.dataset.project ||
                                        "{}"
                                    );

                            } catch {

                                data = {

                                    title:
                                        card.dataset.title ||
                                        card.querySelector(
                                            "h3, h2"
                                        )?.textContent ||
                                        "Dự án",

                                    description:
                                        card.dataset.description ||
                                        "",

                                    image:
                                        card.dataset.image ||
                                        "",

                                    tech:
                                        card.dataset.tech ||
                                        ""
                                };
                            }


                            openProjectModal(data);
                        }
                    );
                }
            );


            modalClose?.addEventListener(
                "click",
                closeProjectModal
            );


            projectModal?.addEventListener(
                "click",
                (event) => {

                    if (
                        event.target === projectModal
                    ) {
                        closeProjectModal();
                    }

                }
            );


            /* =====================================================
               BACK TO TOP
               ===================================================== */

            const backTop =
                $("#backTop") ||
                $(".back-top") ||
                $(".back-to-top");


            function updateBackTop() {

                if (!backTop) {
                    return;
                }

                const visible =
                    window.scrollY > 500;

                backTop.classList.toggle(
                    "show",
                    visible
                );

                backTop.classList.toggle(
                    "visible",
                    visible
                );
            }


            if (backTop) {

                window.addEventListener(
                    "scroll",
                    updateBackTop,
                    {
                        passive: true
                    }
                );

                updateBackTop();


                backTop.addEventListener(
                    "click",
                    (event) => {

                        event.preventDefault();

                        window.scrollTo({
                            top: 0,
                            behavior:
                                prefersReducedMotion()
                                    ? "auto"
                                    : "smooth"
                        });
                    }
                );
            }


            /* =====================================================
               QUICK ACTION DOCK
               ===================================================== */

            if (!$(".zin-quick-dock")) {

                const dock =
                    document.createElement("div");

                dock.className =
                    "zin-quick-dock";


                dock.innerHTML = `
                    <button
                        type="button"
                        class="zin-quick-btn"
                        data-action="top"
                        aria-label="Lên đầu trang"
                        title="Lên đầu trang"
                    >
                        ↑
                    </button>

                    <button
                        type="button"
                        class="zin-quick-btn"
                        data-action="focus"
                        aria-label="Focus mode"
                        title="Focus mode"
                        aria-pressed="false"
                    >
                        ◉
                    </button>

                    <button
                        type="button"
                        class="zin-quick-btn"
                        data-action="print"
                        aria-label="In trang"
                        title="In trang"
                    >
                        ⌁
                    </button>
                `;


                document.body.appendChild(dock);


                dock.addEventListener(
                    "click",
                    (event) => {

                        const button =
                            event.target.closest(
                                ".zin-quick-btn"
                            );

                        if (!button) {
                            return;
                        }


                        const action =
                            button.dataset.action;


                        /* TOP */

                        if (action === "top") {

                            window.scrollTo({
                                top: 0,
                                behavior:
                                    prefersReducedMotion()
                                        ? "auto"
                                        : "smooth"
                            });
                        }


                        /* FOCUS */

                        if (action === "focus") {

                            const enabled =
                                body.classList.toggle(
                                    "focus-mode"
                                );

                            button.setAttribute(
                                "aria-pressed",
                                String(enabled)
                            );
                        }


                        /* PRINT */

                        if (action === "print") {
                            window.print();
                        }

                    }
                );
            }


            /* =====================================================
               KEYBOARD SHORTCUTS
               ===================================================== */

            document.addEventListener(
                "keydown",
                (event) => {

                    const key =
                        event.key.toLowerCase();

                    const activeTag =
                        document.activeElement?.tagName;

                    const typing =
                        [
                            "INPUT",
                            "TEXTAREA",
                            "SELECT"
                        ].includes(activeTag);


                    /* T = THEME */

                    if (
                        key === "t" &&
                        !event.ctrlKey &&
                        !event.metaKey &&
                        !event.altKey &&
                        !typing
                    ) {

                        window.toggleZinTheme();
                    }


                    /* HOME */

                    if (
                        key === "home" &&
                        !event.ctrlKey &&
                        !event.metaKey &&
                        !event.altKey &&
                        !typing
                    ) {

                        event.preventDefault();

                        window.scrollTo({
                            top: 0,
                            behavior:
                                prefersReducedMotion()
                                    ? "auto"
                                    : "smooth"
                        });
                    }


                    /* END */

                    if (
                        key === "end" &&
                        !event.ctrlKey &&
                        !event.metaKey &&
                        !event.altKey &&
                        !typing
                    ) {

                        event.preventDefault();

                        window.scrollTo({
                            top:
                                document.documentElement.scrollHeight -
                                window.innerHeight,
                            behavior:
                                prefersReducedMotion()
                                    ? "auto"
                                    : "smooth"
                        });
                    }


                    /* ESCAPE */

                    if (key === "escape") {

                        closeProjectModal();

                        setMenuState(false);
                    }

                }
            );


            /* =====================================================
               EMAIL COPY
               ===================================================== */

            $$(
                'a[href^="mailto:"]'
            ).forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        async () => {

                            const email =
                                link
                                    .getAttribute("href")
                                    ?.replace(
                                        /^mailto:/i,
                                        ""
                                    )
                                    .split("?")[0];


                            if (
                                !email ||
                                !navigator.clipboard
                            ) {
                                return;
                            }


                            try {

                                await navigator.clipboard.writeText(
                                    email
                                );

                                showToast(
                                    "Đã sao chép email!"
                                );

                            } catch {
                                // Clipboard unavailable
                            }

                        }
                    );

                }
            );


            /* =====================================================
               TOAST
               ===================================================== */

            function showToast(message) {

                let container =
                    $("#toast-container");


                if (!container) {

                    container =
                        document.createElement("div");

                    container.id =
                        "toast-container";

                    document.body.appendChild(
                        container
                    );
                }


                const toast =
                    document.createElement("div");

                toast.className =
                    "toast";

                toast.textContent =
                    message;


                container.appendChild(
                    toast
                );


                requestAnimationFrame(
                    () => {

                        toast.classList.add(
                            "show"
                        );
                    }
                );


                window.setTimeout(
                    () => {

                        toast.classList.remove(
                            "show"
                        );

                        window.setTimeout(
                            () => {
                                toast.remove();
                            },
                            300
                        );

                    },
                    2500
                );
            }


            /* =====================================================
               IMAGE OPTIMIZATION
               ===================================================== */

            $$("img").forEach(
                (image) => {

                    if (
                        !image.hasAttribute("decoding")
                    ) {
                        image.decoding = "async";
                    }


                    if (
                        !image.hasAttribute("loading") &&
                        !image.closest(".hero-section")
                    ) {
                        image.loading = "lazy";
                    }

                }
            );


            /* =====================================================
               EXTERNAL LINK SAFETY
               ===================================================== */

            $$('a[target="_blank"]').forEach(
                (link) => {

                    const rel =
                        link.getAttribute("rel") || "";


                    if (
                        !rel.includes("noopener")
                    ) {

                        link.setAttribute(
                            "rel",
                            `${rel} noopener noreferrer`.trim()
                        );
                    }

                }
            );


            /* =====================================================
               MOBILE PERFORMANCE
               ===================================================== */

            if (isMobile()) {

                body.classList.add(
                    "is-mobile"
                );


                $$(".cursor-glow, #cursorGlow").forEach(
                    (element) => {
                        element.remove();
                    }
                );
            }


            /* =====================================================
               REDUCED MOTION
               ===================================================== */

            if (
                prefersReducedMotion()
            ) {

                document.documentElement.style.setProperty(
                    "scroll-behavior",
                    "auto"
                );
            }


            /* =====================================================
               FOOTER YEAR
               ===================================================== */

            const year =
                String(
                    new Date().getFullYear()
                );


            $$("[data-current-year]").forEach(
                (element) => {

                    element.textContent =
                        year;
                }
            );


            const footerYear =
                $("#footerYear");


            if (footerYear) {
                footerYear.textContent =
                    year;
            }


            /* =====================================================
               THEME BUTTON ANIMATION CLEANUP
               ===================================================== */

            if (themeButton) {

                themeButton.addEventListener(
                    "animationend",
                    () => {

                        themeButton.classList.remove(
                            "theme-changing"
                        );
                    }
                );
            }


            /* =====================================================
               FINAL THEME SYNC
               ===================================================== */

            updateThemeUI(false);

        }
    );

})();