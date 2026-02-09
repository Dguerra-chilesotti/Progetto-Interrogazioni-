//variabile temporanea per conteggio giri, in futuro implementata dentro json classe
let giro = 1;
function ColonnaPiu() {
  let Tabella = document.getElementById("griglia");
  for (let i = 0; i < Tabella.rows.length; i++) {
    let cell;

    // If first row → create a header cell
    if (i === 0) {
      cell = document.createElement("th");
      cell.textContent = "giro" + giro;
    } else {
      cell = document.createElement("td");
      cell.textContent = "Data " + i;
      cell.setAttribute("onclick", "openModal(this)");
    }

    Tabella.rows[i].appendChild(cell);
  }
  giro++;
}
const modalDiv = document.getElementById("modal");
const modalContentDiv = document.getElementById("modalContent");
const annullaBtn = document.getElementById("annullaBtn");
let selectedCell = null;
function setColor(color) {
  selectedCell.style = `background-color: ${color}`;
  annullaBtn.style.display = "block";
}
function cancel() {
  selectedCell.style = "background-color: white";
  annullaBtn.style.display = "none";
}
function openModal(cell) {
  modalDiv.style.display = "block";
  selectedCell = cell;
}
function closeModal() {
  modalDiv.style.display = "none";
}
const grigliaTable = document.getElementById("griglia");
leggiClasse();
function leggiClasse() {
  fetch("Classi/5ib.json")
    .then((risposta) => risposta.json())
    .then((classe) => {
      for (let i = 0; i < classe.list.length; i++) {
        let riga = document.createElement("tr");
        riga.innerHTML = `<tr>${classe.list[i].name} ${classe.list[i].surname}</tr><tr></tr>`;
        grigliaTable.appendChild(riga);
      }
    });
}
