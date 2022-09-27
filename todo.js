/* eslint-disable no-unused-vars */
const todoList = () => {
  const all = [];
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((item) => item.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((item) => item.dueDate > today);
  };

  const toDisplayableList = (list) => {
    let res = list
      .map(
        (item) =>
          `${item.completed ? "[x] " : "[ ] "}${item.title} ${
            item.dueDate === today ? " " : item.dueDate
          }`
      )
      .join("\n");
    return res;
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
    today,
    yesterday,
    tomorrow,
  };
};
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #
module.exports = todoList;
