// 1. Definir las referencias a los elementos
const taskInput = document.querySelector(".input-text");
const addForm = document.querySelector(".add-form");
const tasksContainer = document.querySelector(".tasks-list");
const deleteAllBtn = document.querySelector(".deleteAll-btn");

// Definir la lista de tareas que vamos a guardar en el localStorage
//
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

// Funcion que guarda tareas en el localStorage
const saveLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(taskList));
};

// Funcion que crea tareas, retorna un HTML con la tarea que se especifico.

const createTask = (task) =>
  `<li>${task.name}<img class="delete-btn" src="./img/delete.svg" alt="boton de borrar" data-id="${task.id}"></li>`;

// Funcion para renderizar (IMPRIMIR) la lista de tareas en el html

const renderTaskList = () => {
  tasksContainer.innerHTML = taskList.map((task) => createTask(task)).join("");
};

// Funcion que se encargara de ocultar el boton de borrar todas las tareas en caso de que no haya tareas.
const toggleDeleteAllButton = () => {
  if (!taskList.length) {
    deleteAllBtn.classList.add("hidden");
    return;
  }
  deleteAllBtn.classList.remove("hidden");
};

// Funcion que convierte el value del taskInput en un string sin espacios y sin multiespacios internos.
const validInputValue = () => {
  return taskInput.value.trim().replace(/\s+/g, " ");
};

// Funcion que verifica que la tarea ingresada es valida (no es vacia y no es repetida)

const isValidTask = (taskName) => {
  let isValid = true;
  if (!taskName.length) {
    alert("Por favor, ingrese una tarea");
    isValid = false;
  } else if (
    taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
  ) {
    alert("Ya existe una tarea con ese nombre.");
    isValid = false;
  }
  return isValid;
};

// Funcion para agregar una tarea en el array de tareas.
const addTask = (e) => {
  e.preventDefault();
  const taskName = validInputValue();
  if (isValidTask(taskName)) {
    taskList = [...taskList, { name: taskName, id: Date.now() }];
    addForm.reset();
    renderTaskList();
    saveLocalStorage();
    toggleDeleteAllButton();
  }
};

// Funcion borrar una tarea del array de tareas
const removeTask = (e) => {
  if (!e.target.classList.contains("delete-btn")) return;

  const filterId = Number(e.target.dataset.id);
  taskList = taskList.filter((task) => task.id !== filterId);
  renderTaskList();
  saveLocalStorage();
  toggleDeleteAllButton();
};

// Funcion de borrar todas las tareas del array de tareas

const removeAll = () => {
  taskList = [];
  renderTaskList();
  saveLocalStorage();
  toggleDeleteAllButton();
};

// Primer funcion y unica que se ejecutara en nuestro programa.
// Esta msima fucnion se encargara de ejecutar los eventos o demas funciones.
const init = () => {
  document.addEventListener("DOMContentLoaded", renderTaskList);
  addForm.addEventListener("submit", addTask);
  tasksContainer.addEventListener("click", removeTask);
  deleteAllBtn.addEventListener("click", removeAll);
  document.addEventListener("DOMContentLoaded", toggleDeleteAllButton);
};

init();
