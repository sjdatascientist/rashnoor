Array.from(document.getElementsByClassName('view-more-btn')).forEach((btn) => {
	btn.addEventListener('click', function (e) {
		window.location.href = '/photogallery'
	})
})
