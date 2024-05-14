'use strict';
document.addEventListener('DOMContentLoaded', () => {

	function tabList() {
		const tabParent = document.querySelector('.drop-parent-js');

		if (tabParent) {
			const tabBtn = document.querySelectorAll('.drop-click-js');
			const tabList = document.querySelectorAll('.drop-list-js');

			function hideTab() {
				tabBtn.forEach(item => {
					item.classList.remove('active');
				});
				tabList.forEach(item => {
					item.classList.remove('active');
				});
			}

			function showTabs (i = 0){
				tabList[i].classList.add('active');
				tabBtn[i].classList.add('active');
			}

			hideTab();
			showTabs();

			tabParent.addEventListener('click', (event) => {
				const target = event.target;
				event.preventDefault();
				if (target && target.classList.contains('drop-click-js')) {
					tabBtn.forEach((item, i) => {
						if (target == item) {
							hideTab();
							showTabs(i);
						}
					});
				}
			});
		}
	}

	tabList();
});
