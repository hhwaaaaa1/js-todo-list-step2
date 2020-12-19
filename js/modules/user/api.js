import { getData, setData, deleteData, updateData } from "../fetch.js";

/**
 * User list 불러오기
 */
export const getUsers = async () => {
  const users = await getData("/users");
  return users;
};

/**
 * User 추가하기
 * @param {string} payload.name
 */
export const setUser = async ({ name }) => {
  const user = await setData("/users", { name });
  return user;
};

/**
 * User 불러오기
 * @param {string} payload.userId
 */
export const getUser = async ({ userId }) => {
  const user = await getData(`/users/${userId}`);
  return user;
};

/**
 * User 삭제하기
 * @param {string} payload.userId
 */
export const deleteUser = async ({ userId }) => {
  await deleteData(`/users/${userId}`);
};

/**
 * User의 Toodo List 불러오기
 * @param {string} payload.userId
 */
export const getUserTodoList = async ({ userId }) => {
  const { todoList } = await getData(`/users/${userId}/items`);
  return todoList;
};

/**
 * User의 Todo Item 추가하기
 * @param {string} payload.userId
 * @param {string} payload.contents
 */
export const setUserTodo = async ({ userId, contents }) => {
  const { todoList } = await setData(`/users/${userId}/items`, { contents });
  return todoList;
};

/**
 * User의 Todo List 삭제하기
 * @param {string} payload.userId
 */
export const deleteUserTodoList = async ({ userId }) => {
  await deleteData(`/users/${userId}/items`);
};

/**
 * User의 Todo Item 삭제하기
 * @param {string} payload.userId
 * @param {string} payload.itemId
 */
export const deleteUserTodo = async ({ userId, itemId }) => {
  await deleteData(`/users/${userId}/items/${itemId}`);
};

/**
 * User의 Todo Item 내용 수정하기
 * @param {string} payload.userId
 * @param {string} payload.itemId
 * @param {string} payload.contents
 */
export const updateUserTodo = async ({ userId, itemId, contents }) => {
  const todo = await updateData(`/users/${userId}/items/${itemId}`, {
    contents,
  });
  return todo;
};

/**
 * User의 Todo Item 우선순위 수정하기
 * @param {string} payload.userId
 * @param {string} payload.itemId
 * @param {string} payload.priority
 */
export const updateUserTodoPriority = async ({ userId, itemId, priority }) => {
  const todo = await updateData(`/user/${userId}/items/${itemId}/priority`, {
    priority,
  });
  return todo;
};

/**
 * User의 Todo Item 완료상태 토글하기
 * @param {string} payload.userId
 * @param {string} payload.itemId
 */
export const toggleUserTodo = async ({ userId, itemId }) => {
  const todo = await updateData(`/user/${userId}/items/${itemId}/toggle`);
  return todo;
};
