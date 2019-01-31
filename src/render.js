(function() {
  window.render = {};
  const rowTemplate = document.querySelector(".row-template").content;

  const createRow = object => {
    const newRow = rowTemplate.cloneNode(true);
    newRow.querySelector(".row__id").textContent = object.id;
    newRow.querySelector(".row__name").textContent = object.name;
    newRow.querySelector(".row__date").textContent = object.date;
    newRow.querySelector(".row__count").textContent = object.count;
    return newRow;
  };

  const renderRows = (objects, destination) => {
    const fragment = document.createDocumentFragment();
    objects.forEach(object => fragment.appendChild(createRow(object)));
    destination.appendChild(fragment);
  };

  window.render.renderRows = renderRows;
})();
