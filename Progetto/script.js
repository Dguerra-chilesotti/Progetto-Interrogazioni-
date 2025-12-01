//variabile temporanea per conteggio giri, in futuro implementata dentro json classe
let giro = 1;
function ColonnaPiu() {



    let Tabella = document.getElementById("griglia");
    for (let i = 0; i < Tabella.rows.length; i++) {
        let cell;

        // If first row → create a header cell
        if (i === 0) {
            cell = document.createElement("th");
            cell.textContent = "giro" + Guru;
        } else {
            cell = document.createElement("td");
            cell.textContent = "Data " + i;
        }

        Tabella.rows[i].appendChild(cell);
    }
    Guru++;
}