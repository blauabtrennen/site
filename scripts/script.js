		const siteHeader = document.querySelector(".site-header");
		let previousScrollY = window.scrollY;

		window.addEventListener("scroll", () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY === 0 || currentScrollY < previousScrollY) {
				siteHeader.classList.remove("site-header--hidden");
			} else if (currentScrollY > previousScrollY) {
				siteHeader.classList.add("site-header--hidden");
			}

			previousScrollY = currentScrollY;
		}, { passive: true });