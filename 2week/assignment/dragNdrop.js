// 기능을 구현해주세요.
const boxes = document.querySelectorAll('.empty');
const target = document.querySelector('.fill');

target.addEventListener('dragstart', (e) => {
	e.dataTransfer.setData('target', target.classList);
});

boxes.forEach((box) => {
	box.addEventListener('dragover', (e) => {
		e.preventDefault();
	});
	box.addEventListener('drop', (e) => {
		if (e.dataTransfer.getData('target') === 'fill') {
			box.appendChild(target);
		}
	});
});
