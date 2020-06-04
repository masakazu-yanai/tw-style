{
	// Set Css
	const setCss = (sel, css) => {
		document.querySelectorAll(sel).forEach(ele => {
			if (ele.style.cssText !== '') { return }	
			ele.style.cssText = css;
		});
	};

	// Check is CtrlKey
	let isCtrlKey = false;

	// Loop
	setInterval(() => {
		const url = '' + location.href;

		if (url.match(RegExp('^https://twitter.com/notifications'))) {
			// Change View
			setCss(
				'.css-1dbjc4n.r-my5ep6.r-qklmqi.r-1adg3ll .r-qvutc0',
				'color: #000 !important'
			);
			setCss(
				'.css-1dbjc4n.r-my5ep6.r-qklmqi.r-1adg3ll div[dir=ltr] ~ .css-1dbjc4n.r-1s2bzr4',
				'border: solid 1px #ccc !important;' +
				'border-radius: 0.5em !important;' +
				'padding: 0.75em 1em !important;'
			);

			// Ctrl a clicking with CtrlKey
			document.querySelectorAll('section[role=region] article')
			.forEach((ele, i) => {
				// Once
				if (ele.isExClck) { return }
				ele.isExClck = true;

				// If Ctrl + Click -> Click
				let lock = false;
				ele.addEventListener('click', e => {
					//console.log(i, e)
					if (e.ctrlKey && !e.fromATag) {
						if (!lock) {
							e.preventDefault();
							isCtrlKey = true;
							lock = true;
							let e2 = document.createEvent('Events');
							e2.initEvent('click', true, false);
							ele.dispatchEvent(e2);
						}
						return false;
					}
					lock = false;
				})
			});

			// Prevent From Atag (for: Ctrl a clicking with CtrlKey)
			document.querySelectorAll('section[role=region] article a')
			.forEach((ele, i) => {
				// Once
				if (ele.isExClck) { return }
				ele.isExClck = true;

				ele.parentNode.addEventListener('click', e => {
					e.fromATag = true;
				});
			});

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
				if (isCtrlKey) {
					// Not Active (Background) - Click + Alt Key
					const a = document.createElement('a');
					a.setAttribute('href', url);
					a.dispatchEvent(new MouseEvent('click', {ctrlKey: true}));
				} else {
					// Active - Click
					window.open(url, '_blank');
				}
				isCtrlKey = false;
			}, 200);
		}
	}, 200);
}


