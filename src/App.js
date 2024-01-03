import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://assets.alippo.com/catalog/static/data.json"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Function to handle edit
  const handleEdit = (index) => {
    setModalTitle("Edit your name");
    setModalContent(data[index].name);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  // Function to handle delete
  const handleDelete = (index) => {
    setModalTitle("Confirm Delete");
    setModalContent("Are you sure you want to delete this item?");
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const resetModalContent = () => {
    setModalContent("");
  };

  //resetModalContent
  const closeModal = () => {
    setModalOpen(false);
    resetModalContent();
  };

  //submitModal and closeModal functions
  const submitModal = (newValue) => {
    if (modalTitle === "Edit your item") {
      const newData = [...data];
      newData[currentIndex].name = newValue;
      setData(newData);
    } else {
      const newData = data.filter((_, i) => i !== currentIndex);
      setData(newData);
    }
    closeModal();
    resetModalContent();
  };

  return (
    <div className="app-container">
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>SL. No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name || "-"}</td>
              <td>{item.age || "-"}</td>
              <td>{item.city || "-"}</td>
              <td>{item.pinCode || "-"}</td>

              <td>
                <button className="edit-btn" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        showModal={isModalOpen}
        title={modalTitle}
        content={modalContent}
        onSubmit={submitModal}
        onCancel={closeModal}
      />
    </div>
  );
};

export default App;
