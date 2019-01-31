(function() {
  window.utils = {};

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

  const prettify = element => {
    const result = {};
    result.id = element.id;
    result.name = element.name;
    result.date = prettifyDate(element.date);
    result.count = element.count;
    return result;
  };

  const deleteRows = () => {
    const rows = document.querySelectorAll(".table__row");
    rows.forEach(row => row.remove());
  };

  // возвращает объект с датами в едином формате
  // из '12 марта 2017' и '12/03/2017' в '12.03.2017'
  window.utils.prettify = prettify;

  // удаляет все строки в таблице
  window.utils.deleteRows = deleteRows;
})();
