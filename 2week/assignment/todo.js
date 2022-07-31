// 기능을 구현해주세요.
const todoList = new TodoList();
const todoInput = document.querySelector('#todo-input');

const addTodoItem = (list, text) => {
	const todoItem = new TodoItem(list.getNewItemId(), text);
	list.addListItem(todoItem, todoItem.createTemplate());
};

todoInput.addEventListener('keypress', (e) => {
	let todoText = todoInput.value;
	if (todoText && e.key === 'Enter') {
		addTodoItem(todoList, todoText);
		todoInput.value = '';
	}
});
