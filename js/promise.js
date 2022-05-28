const todo = [
  { title: "Title 1", description: "desk1" },
  { title: "Title 2", description: "desk2" },
  { title: "Title 3", description: "desk3" },
  { title: "Title 4", description: "desk4" },
];
let todoListEl = document.querySelector("#todoitemscon");

const todoList = () => {
  let todoItems = "";
  setTimeout((item) => {
    todo.forEach((item) => {
      todoItems += `
              <li>
              <b>${item.title}</b>
              <p>${item.description}</p>
              </li>
              `;
    });
    todoListEl.innerHTML = todoItems;
  }, 1000);
};

// Melumati bura kimi cekdik
const newItem = (todoi) => {
    // Promise burada 2 parametr alir biri qebul olunan biri, qebul olunmayan
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todo.push(todoi);
      const e = false;
    //   burada errorun olub omadigini yoxlamaliyiq vacib sekilde
      if (!e) {
        resolve(todoi);
      } else {
        reject("Have err");
      }
    }, 2000);
  });
};

newItem({
  title: "Title5",
  description: "desk5",
})
.then((res) => {
    console.log("New List", res);
  todoList();
})
.catch(e=>{
    console.log(e);
});

todoList();

