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
            cell.setAttribute("onclick", "valuta(this)");
        }

        Tabella.rows[i].appendChild(cell);
    }
    giro++;
}
const modalDiv = document.getElementById("modal");
function valuta(cell) {
    modalDiv.style.display = "block";
}
function close(){
    modalDiv.style.display = "none";
}