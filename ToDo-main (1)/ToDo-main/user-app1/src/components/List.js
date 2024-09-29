import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditTaskModal from './EditTaskModal'; // Import if you have it
import DeleteConfirmationModal from './DeleteConfirmationModal'; // Import the new modal
import './List.css';

export default function List() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  const getTasks = () => {
    axios.get('http://localhost:8080/api/tasks')
      .then((response) => {
        setTasks(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };

  const handleDeleteClick = (taskId) => {
    setTaskIdToDelete(taskId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    axios.delete(`http://localhost:8080/api/tasks/${taskIdToDelete}`)
      .then((response) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskIdToDelete));
        setShowDeleteModal(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Error deleting the task.");
      });
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row mt-3 mb-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Comments</th>
                <th>
                     <img src={require('../assets/menu3.png')} alt="" style={{width: '20px', height: '20px'}} />
                 </th>
                </tr>
              </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </td>
                  <td>{task.assignedTo}</td>
                  <td>{task.status}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                  <td>{task.comments}</td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        changes
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item" onClick={() => handleEdit(task)}>
                            Edit
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item " onClick={() => handleDeleteClick(task.id)}>
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render the Edit Modal */}
      {showModal && (
        <EditTaskModal
          show={showModal}
          onClose={() => setShowModal(false)}
          task={taskToEdit}
        />
      )}

      {/* Render the Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteConfirmationModal
          show={showDeleteModal}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
}
