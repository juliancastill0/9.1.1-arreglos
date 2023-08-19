// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {

  let newArray = [];

  newArray = strangeArray.filter((element) => (typeof element === "string"));

  // Practicando hacerlo con fors:

    // FORMA 1
    // for (let i = 0; i < strangeArray.length; i++){
    //   if (typeof strangeArray[i] === "string"){
    //     newArray.push(strangeArray[i]);
    //   };
    // };

    // FORMA 2
    // strangeArray.forEach((element) => {
    //   if (typeof element ==="string"){
    //     newArray.push(element);
    //   };
    // });

    // FORMA 3
    // for (let element of strangeArray){
    //   if (typeof element === "string"){
    //     newArray.push(element);
    //   };
    // };

    // FORMA 4
    // for (let element in strangeArray){
    //   if (typeof strangeArray[element] === "string"){
    //     newArray.push(strangeArray[element]);
    //   };
    // };

  newArray.sort((a,b) => a.localeCompare(b));
  showList(newArray);
});
