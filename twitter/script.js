{
	const fncCss = (sel, css) => {
		document.querySelectorAll(sel).forEach(ele => {
			if (ele.style.cssText !== '') { return }	
			ele.style.cssText = css;
		});
	};

	setInterval(() => {
		const url = '' + location.href;

		if (url.match(RegExp('^https://twitter.com/notifications'))) {
			fncCss(
				'.css-1dbjc4n.r-my5ep6.r-qklmqi.r-1adg3ll .r-qvutc0',
				'color: #000 !important'
			);
			fncCss(
				'.css-1dbjc4n.r-my5ep6.r-qklmqi.r-1adg3ll .r-1s2bzr4',
				'border: solid 1px #ccc !important;' +
				'border-radius: 0.5em !important;' +
				'padding: 0.75em 1em !important;'
			);
		}
	}, 500);
}


