export function formatDateToRu(date) {
    const dateNow = new Date(date);
    const dateNumber = String(dateNow.getDate()).padStart(2, "0");
    const dateMonth = String(dateNow.getMonth() + 1).padStart(2, "0");
    const dateYear = dateNow.getFullYear();
    const dateHours = String(dateNow.getHours()).padStart(2, "0");
    const dateMinutes = String(dateNow.getMinutes()).padStart(2, "0");
  
    return (
      dateNumber +
      "/" +
      dateMonth +
      "/" +
      dateYear +
      " " +
      dateHours +
      ":" +
      dateMinutes
    );
  }
  
  export function formatDateToUs(date) {
    const dateNow = new Date(date);
    const dateNumber = String(dateNow.getDate()).padStart(2, "0");
    const dateMonth = String(dateNow.getMonth() + 1).padStart(2, "0");
    const dateYear = dateNow.getFullYear();
    const dateHours = String(dateNow.getHours()).padStart(2, "0");
    const dateMinutes = String(dateNow.getMinutes()).padStart(2, "0");
  
    return (
      dateMonth +
      "-" +
      dateNumber +
      "-" +
      dateYear +
      " " +
      dateHours +
      ":" +
      dateMinutes
    );
  }