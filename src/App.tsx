import React, { useEffect, useState } from 'react';
import TodosAPI from './api/todosAPI';
import './App.css';
import Header from './component/Header';
import Modal from './component/Modal';
import TodoList from './component/Todo';
import { TypeTodo } from './component/typeTodo';
function App() {

  const [todos, setTodos] = useState<TypeTodo[]>([]);
  const [openModal, setShowModal] = useState(false);

  const checkOn = todos.filter((item) => {
    return item.complete === false;
  });
  const checkOff = todos.filter((item) => {
    return item.complete === true;
  });
  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data: todos } = await TodosAPI.getAll();
        setTodos(todos)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos()
  }, []);

  const onHandleAdd = async (todo: any) => {
    try {
      await TodosAPI.add(todo)
      setTodos([
        ...todos,
        todo
      ])
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleDelete = async (id: number) => {
    try {
      await TodosAPI.remote(id);
      const NewTodo = todos.filter(todo => todo.id !== id);
      setTodos(NewTodo);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="main">
        <div className="grid">
          <Header checkOn={checkOn} checkOff={checkOff} />
          <TodoList todoList={todos}
            setTodos={setTodos}
            onAdd={onHandleAdd}
            onDelete={onHandleDelete}
            checkOn={checkOn}
            checkOff={checkOff}
          />
        </div>
      </div>
      <div className="btn-show-modal">
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/251291240_5117816144914365_499214378354785186_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=xCOj6BKlG3QAX-hj_2r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=a3217a02415d0eb62ef2baa6ebc472a2&oe=61AAB145"
          width="40px"
          alt=""
          onClick={() => {
            setShowModal(true);
          }}
        />
        {openModal && <Modal closeModal={setShowModal} onAdd={onHandleAdd} />}
      </div>
    </>

  );
}

export default App;
