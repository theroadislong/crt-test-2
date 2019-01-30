// functions
const prettifyDate = date => {
  if (date.split(".").length === 3) {
    return date;
  }
  if (date.split("/").length === 3) {
    return date.split("/").join(".");
  }
  if (date.split(" ").length === 3) {
    const day = date.split(" ")[0];
    const month = getMonthNumber(date.split(" ")[1]);
    const year = date.split(" ")[2];
    return `${day}.${month}.${year}`;
  }
};

const getMonthNumber = str => {
  switch (true) {
    case str.indexOf("янв") !== -1:
      return "01";
      break;
    case str.indexOf("фев") !== -1:
      return "02";
      break;
    case str.indexOf("мар") !== -1:
      return "03";
      break;
    case str.indexOf("апр") !== -1:
      return "04";
      break;
    case str.indexOf("май") !== -1:
      return "05";
      break;
    case str.indexOf("июн") !== -1:
      return "06";
      break;
    case str.indexOf("июл") !== -1:
      return "07";
      break;
    case str.indexOf("авг") !== -1:
      return "08";
      break;
    case str.indexOf("сен") !== -1:
      return "09";
      break;
    case str.indexOf("окт") !== -1:
      return "10";
      break;
    case str.indexOf("ноя") !== -1:
      return "11";
      break;
    case str.indexOf("дек") !== -1:
      return "12";
      break;
    default:
      return undefined;
  }
};

const deleteRows = () => {
  const rows = document.querySelectorAll(".table__row");
  rows.forEach(row => row.remove());
};

const renderRow = object => {
  const newRow = rowTemplate.cloneNode(true);
  newRow.querySelector(".row__id").textContent = object.id;
  newRow.querySelector(".row__name").textContent = object.name;
  newRow.querySelector(".row__date").textContent = object.date;
  newRow.querySelector(".row__count").textContent = object.count;
  return newRow;
};

const render = (objects, destination) => {
  let fragment = document.createDocumentFragment();
  objects.forEach(object => fragment.appendChild(renderRow(object)));
  destination.appendChild(fragment);
};

// data
const objects = [
  { id: 1, name: "Вася", date: "15.06.2018", count: 11 },
  { id: 2, name: "Петя", date: "23.11.2018", count: 23 },
  { id: 3, name: "Иван", date: "12 марта 2017", count: 3 },
  { id: 4, name: "Александр", date: "20/12/2010", count: 1 },
  { id: 5, name: "Евгений", date: "12.09.2018", count: 112 },
  { id: 6, name: "Мария", date: "1.08.2016", count: 122 },
  { id: 7, name: "Анастасия", date: "20.11.2018", count: 34 },
  { id: 8, name: "Степан", date: "12.11.2019", count: 10 }
];

// logic
const table = document.querySelector(".main__table");
const rowTemplate = document.querySelector(".row-template").content;

render(objects, table);

const search = document.querySelector(".search__input");
const select = document.querySelector(".search__select");

let selectedSelect = "name";

const searchHandler = evt => {
  deleteRows();
  const currentValue = evt.target.value.toLowerCase();
  render(
    objects.filter(object =>
      currentValue === ""
        ? object
        : object[selectedSelect]
            .toString()
            .toLowerCase()
            .indexOf(currentValue) !== -1
    ),
    table
  );
};

const selectHandler = evt => {
  selectedSelect = evt.target.value;
  search.addEventListener("input", event => searchHandler(event));
};

select.addEventListener("change", event => selectHandler(event));
