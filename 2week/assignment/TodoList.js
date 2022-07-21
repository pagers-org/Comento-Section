class TodoList {
	constructor() {
		this.list = [{ id: 0, value: '테스트', checked: false }];
	}

	addListItem(item, itemTemplate) {
		// 추가
		this.list.push(item);
		document
			.querySelector('#todo-content')
			.insertAdjacentHTML('beforeend', itemTemplate);

		// 삭제 기능
		const itemId = item.getId();
		const itemNode = document.querySelector(`[key="todo-${itemId}"]`);
		itemNode.querySelector('.remove').addEventListener('click', () => {
			this.deleteListItem(itemNode, itemId);
		});

		// 체크 기능
		itemNode.querySelector('.complete').addEventListener('click', (e) => {
			item.updateCheck(e.target);
			this.updateListItem(item);
		});
	}

	deleteListItem(node, id) {
		this.list = this.list.filter((item) => item.id !== id);
		node.remove();
	}

	updateListItem(newItem) {
		this.list = this.list.map((item) => item.id === newItem.id && newItem);
	}

	getNewItemId() {
		return this.list.length;
	}
}
