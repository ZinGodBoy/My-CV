(() => {
    "use strict";

    const ready = (callback) => {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback, { once: true });
        } else {
            callback();
        }
    };

    ready(() => {
        const progress = document.getElementById("scrollProgress");
        const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
        const sections = navLinks
            .map((link) => document.querySelector(link.getAttribute("href")))
            .filter(Boolean);
        const status = document.querySelector(".online-status");

        const updateProgress = () => {
            if (!progress) return;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
            progress.style.width = (ratio * 100).toFixed(2) + "%";
        };

        const updateActiveNav = () => {
            if (!sections.length) return;
            const marker = window.scrollY + 140;
            let activeId = sections[0].id;

            sections.forEach((section) => {
                if (section.offsetTop <= marker) activeId = section.id;
            });

            navLinks.forEach((link) => {
                const isActive = link.getAttribute("href") === "#" + activeId;
                link.classList.toggle("active", isActive);
                if (isActive) {
                    link.setAttribute("aria-current", "true");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        };

        const updateConnectionStatus = () => {
            if (!status) return;
            const online = navigator.onLine;
            status.classList.toggle("is-offline", !online);
            const label = status.querySelector("span:nth-child(2)");
            const detail = status.querySelector("small");
            if (label) label.textContent = online ? "ONLINE" : "OFFLINE";
            if (detail) detail.textContent = online ? "Đang hoạt động" : "Đang mất kết nối";
        };

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateProgress();
                updateActiveNav();
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        window.addEventListener("online", updateConnectionStatus);
        window.addEventListener("offline", updateConnectionStatus);

        updateProgress();
        updateActiveNav();
        updateConnectionStatus();

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.forEach((item) => item.removeAttribute("aria-current"));
                link.setAttribute("aria-current", "true");
            });
        });
    });
})();
