import React, { useState } from "react";
import { connect } from "react-redux";
import { addData, deleteData } from "./store"; // store.js fayldan action creator'larni import qilish

const App = ({ data, addData, deleteData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = () => {
    addData(name, age);
    setName("");
    setAge("");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Ismingiz"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Yoshingiz"
            value={age}
            onChange={handleChangeAge}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary mb-2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Ism</th>
            <th scope="col">Yosh</th>
            <th scope="col">Amal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteData(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

// Redux bilan komponentni ulash
const ConnectedApp = connect(mapStateToProps, { addData, deleteData })(App);

export default ConnectedApp;
