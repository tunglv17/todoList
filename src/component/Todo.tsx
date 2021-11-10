import React, { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import { TypeTodo } from "./typeTodo";

type TodoListProps = {
  todoList: TypeTodo[];
  setTodos: (index: any) => void;
};
const TodoLists = ({ todoList, setTodos, onDelete, checkOn, checkOff }: any) => {
  return (
    <>
      <div className="grid-row">
        <div className="incomplete">
          <h3 className="title">Incomplete</h3>
          <div className="list">
            {checkOn.map((item: any, index: any) => {
              return (
                <div className="list-item" key={index}>
                  <div className="list-item-title">
                    <input
                      type="checkbox"
                      checked={false}
                      onClick={() =>
                        setTodos([...todoList, (item.complete = true)])
                      }
                    />
                    <h5>{item.title}</h5>
                    <button className="btn" onClick={() => onDelete(item.id)}>Delete</button>
                  </div>
                  <div className="list-item-category">{item.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid-row">
        <div className="completed">
          <h3 className="title">Completed</h3>
          <div className="list">
            {checkOff.map((item: any, index: any) => {
              return (
                <div className="list-item" key={index}>
                  <div className="list-item-title">
                    <input
                      type="checkbox"
                      checked={true}
                      defaultChecked
                      onClick={() =>
                        setTodos([...todoList, (item.complete = false)])
                      }
                    />
                    <h5>{item.title}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoLists;
