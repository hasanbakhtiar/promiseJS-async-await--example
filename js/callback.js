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
// Yuxaridaki hisseye kimi datani 1saniye icinde ekrana cekirik.

// ==============================================================
// asagidaki hissede ise yeni melumat cekmeye calisiriq.
// amma ansinkron olmadigi ucun melumat duzgun gelmir
// const newItem=(todoi)=>{
//     setTimeout(()=>{
//         todo.push(todoi);
//     },2000);
// }
// ==========================================================
const newItem=(todoi ,callback)=>{
    setTimeout(()=>{
        todo.push(todoi);
        // callback i ise saliriq 
        callback();
    },2000);
}




newItem({
    title: "Title5",
    description: 'desk5'
},todoList)
todoList();
