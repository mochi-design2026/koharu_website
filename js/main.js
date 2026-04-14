document.addEventListener("DOMContentLoaded", function () {
/* ここから記述します。 */
let nav = document.querySelector("header");
	let btn = document.querySelector(".header_toggleBtn");
	let mask = document.querySelector(".header_mask");

	// メニューを開閉する
	btn.addEventListener("click", function () {
		if (!nav.classList.contains("open")) {
			nav.classList.add("open");
		} else {
			nav.classList.remove("open");
		}
	});

	if (!mask) {
		return false;
	}

	// マスクをクリックしてメニューを閉じる
	mask.addEventListener("click", function () {
		nav.classList.remove("open");
	});
});
