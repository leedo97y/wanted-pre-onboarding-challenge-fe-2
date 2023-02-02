/**
 * @constructor
 * @param {number} id - 아이디 (required)
 * @param {string} content -  내용 (required)
 * @param {boolean} isFinish - 완료여부 (required)
 * @param {string} category - 카테고리 (required)
 * @param {string[]} [tags] - 태그들 (optional)
 */
function Todo(id, content, isFinish, category, tags) {}

/**
 * read all todo
 * @func readAllTodo
 */
function readAllTodo() {}

/**
 * read todo by id
 * @func readTodoById
 * @param {number} id - 아이디
 */
function readTodoById(id) {}

/**
 * create todo
 * @func createTodo
 * @param {number} id - 아이디
 * @param {string} content -  내용
 * @param {boolean} isFinish - 완료여부
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 */
function createTodo(id, content, isFinish, category, tags) {}

/**
 * update todo
 * @func updateTodoContent
 * @param {number} id - 아이디
 * @param {string} content -  내용
 * @param {boolean} isFinish - 완료여부
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 */
function updateTodoContent(id, content, isFinish, category, tags) {}

/**
 * delete all todos
 * @func deleteAllTodo
 */
function deleteAllTodo() {}

/**
 * delete todo by id
 * @func deleteTodoById
 * @param {number} id - 아이디
 */
function deleteTodoById(id) {}

/**
 * delete all tags
 * @func deleteTodoTags
 * @param {number} id - 아이디
 * @param {string[]} [tags] - 태그들
 */
function deleteTodoTags(id, tags) {}
