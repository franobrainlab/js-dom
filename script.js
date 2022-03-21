/*  Najbitnije DOM metode:
 *      document.querySelector(); -> Vraća prvi element na kojeg naleti prema CSS selektoru
 *      document.querySelectorAll(); -> Vraća listu svih elemenata prema CSS selektoru
 *      document.getElementById(); -> Vraća element prema 'id' atributu
 *      document.createElement(); -> Kreira i vraća HTML s tagom iz argumenta
 *      element.appendChild(); -> Dodaje element unutar sebe
 *      element.addEventListener(); -> "Slušač" na određeni događaj u DOM-u
 */

const naslovElement = document.querySelector(".hello");

console.log(naslovElement);

function onClick({ target }) {
  console.log("text:", target.innerHTML);
}

const btnElement = document.getElementById("btn");
// btnElement.addEventListener("click", onClick);
btnElement.addEventListener("click", ({ target }) => {
  console.log("ev;", target.innerHTML);
});

// Kreiranje i append-anje
const spanElement = document.createElement("span");
spanElement.innerText = "Alo Marine!";
console.log(spanElement);

const bodyElement = document.querySelector("body");
bodyElement.appendChild(spanElement);

// Zadatak: Prikaži user-e na web stranici

const users = [
  { name: "Marin", age: 27 },
  { name: "Frano", age: 28 },
];

const containerElement = document.getElementById("users");

// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   const liElement = document.createElement("li");
//   liElement.innerHTML = user.name;
//   containerElement.appendChild(liElement);
// }

users.forEach(({ name, age }, i) => {
  const articleElement = document.createElement("article");
  articleElement.id = `kartica-${i + 1}`;
  articleElement.classList.add("card");
  articleElement.innerHTML = `
    <strong>${name}</strong>
    <span>${age}</span>
  `;
  containerElement.appendChild(articleElement);
});
