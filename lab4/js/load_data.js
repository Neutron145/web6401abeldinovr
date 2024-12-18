document.getElementById("load_table_button").addEventListener("click", async (event) => {
    try {
        let responce = await fetch("http://localhost:8000/data_table", {
            method: "GET"
        });
        if (!responce.ok) {
            throw new Error(`Ошибка: ${responce.status}`);
        }
        let data = await responce.json();
        fillTable(data["data"]);
    } catch(err) {
        alert(err);
    }
});

function fillTable(data) {
    let table = document.getElementById("main_table");
    let tra = table.children;
    let rows = tra[1].children;
    for (let i = 0; i < rows.length; i++) {
        let ceils = rows[i].children;
        ceils[0].textContent = data[i]["Тип"];
        ceils[1].textContent = data[i]["Название"];
    }
}
