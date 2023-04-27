	$(()=>{
		$('#scrolling').jScrollPane({
			showArrows: true,
			verticalGutter: 20,

			// 부드럽게 한다.
			hijackInternalinks: true,
			animateScroll: true
		});

		$('body').jScrollPane({
			showArrows: true,
			verticalGutter: 20
		});
	});	