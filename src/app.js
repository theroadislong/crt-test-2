(function() {
  const table = document.querySelector(".main__table");
  const searchInput = document.querySelector(".search__input");
  const searchSelect = document.querySelector(".search__select");
  const sortInput = document.querySelector(".sort__input");
  const sortSelect = document.querySelector(".sort__select");

  let selectedSearchSelect = "name";
  let selectedSortSelect = "none";

  const searchSelectHandler = evt => {
    selectedSearchSelect = evt.target.value;
  };

  const sortSelectHandler = evt => {
    selectedSortSelect = evt.target.value;
  };

  // здесь происходит фильтрация по совпадению и больше/меньше
  const searchHandler = () => {
    const searchValue = searchInput.value.toLowerCase();
    const sortValue = sortInput.value || "";
    const filterFunction = object =>
      searchValue === ""
        ? object
        : object[selectedSearchSelect]
            .toString()
            .toLowerCase()
            .indexOf(searchValue) !== -1;

    const sortBig = object =>
      sortValue === "" ? object : object[selectedSearchSelect] > sortValue;

    const sortSmall = object =>
      sortValue === "" ? object : object[selectedSearchSelect] < sortValue;

    const filteredBySearchObjects = window.data.objects
      .map(window.utils.prettify)
      .filter(object => {
        if (selectedSortSelect === "none") {
          return filterFunction(object);
        }
        if (selectedSortSelect === "big") {
          return filterFunction(object) && sortBig(object);
        }
        if (selectedSortSelect === "small") {
          return filterFunction(object) && sortSmall(object);
        }
      });

    // удаляем все строки и рендерим отфильтрованные
    window.utils.deleteRows();
    window.render.renderRows(filteredBySearchObjects, table);
  };

  // рендерим первоначальные данные
  window.render.renderRows(
    window.data.objects.map(window.utils.prettify),
    table
  );

  searchInput.addEventListener("input", event => searchHandler(event));
  searchSelect.addEventListener("change", event => searchSelectHandler(event));
  sortInput.addEventListener("input", event => searchHandler(event));
  sortSelect.addEventListener("change", event => sortSelectHandler(event));
})();
