import { TypeTodo } from "../component/typeTodo";
import axiosClient from "./axiosClient";
const TodosAPI = {
  getAll() {
    const url = `/todos`;
    return axiosClient.get(url);
  },
  get(id:any) {
    const url = `todos${id}`;
    return axiosClient.get(url);
  },
  add(todo: TypeTodo) {
    const url = `/todos`;
    return axiosClient.post(url, todo);
  },
  remote(id:number){
    const url = `/todos//${id}`;
    return axiosClient.delete(url)
  }
};
export default TodosAPI;
