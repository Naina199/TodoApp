import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput !== "") {
      const userInputObject = {
        id: Math.random(),
        value: userInput,
      };

      setList([...list, userInputObject]);
      setUserInput("");
    }
  };

  const deleteItem = (key) => {
    const updateList = list.filter((item) => item.id !== key);
    setList(updateList);
  };

  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...list];
      updatedTodos[index].value = editedTodo;
      setList(updatedTodos);
    }
  };

  return (
    <Container className="container">
      <Row className="title-row">
        TODO LIST
      </Row>

      <hr />
      <Row className="input-row">
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="input-group mb-3">
            <FormControl
              placeholder="add item . . . "
              size="lg"
              value={userInput}
              onChange={(item) => updateInput(item.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <Button variant="dark" className="mt-2" onClick={addItem}>
              ADD
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {list.map((item, index) => (
              <div key={index}>
                <ListGroup.Item
                  className="list-item"
                >
                  {item.value}
                  <span>
                    <Button
                      className="btn-delete"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </Button>
                    <Button className="btn-edit" onClick={() => editItem(index)}>
                      Edit
                    </Button>
                  </span>
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
