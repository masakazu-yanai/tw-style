{
	const setCss = (sel, css) => {
		document.querySelectorAll(sel).forEach(ele => {
			if (ele.style.cssText !== '') { return }	
			ele.style.cssText = css;
		});
	};

	setInterval(() => {
		const url = '' + location.href;

		if (url.match(RegExp('^https://twitter.com/notifications'))) {
			// Change View.
			setCss(
				'.css-1dbjc4n.r-my5ep6.r-qklmqi.r-1adg3ll .r-qvutc0',
				'color: #000 !important'
			);
			setCss(
				'.css-1dbjc4n.r-my5ep6.r-qklmqi.r-1adg3ll .r-1s2bzr4',
				'border: solid 1px #ccc !important;' +
				'border-radius: 0.5em !important;' +
				'padding: 0.75em 1em !important;'
			);
		} else
		if (url.match(RegExp('^https://twitter.com/i/timeline'))) {
			// Click TL item. -> Open new tab.
			const ele = document.querySelector('time');
			try {
				ele.parentNode;
			} catch(e) { return }
			const eleP = ele.parentNode;
			const url = 'https://twitter.com' + eleP.getAttribute('href');
			history.back();

			// Window Open
			setTimeout(() => {
				// Not Active (Background)
				//const a = document.createElement('a');
				//a.setAttribute('href', url);
				//a.dispatchEvent(new MouseEvent('click', {ctrlKey: true}));

				// Active
				window.open(url, '_blank');
			}, 500);
		}
	}, 200);
}


