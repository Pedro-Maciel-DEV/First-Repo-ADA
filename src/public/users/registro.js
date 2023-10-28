function adicionarAtividade() {
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const descricao = document.getElementById("descricao").value;

    if (data && hora && descricao) {
        const atividade = `${data} às ${hora}: ${descricao}`;
        const atividadesList = document.getElementById("atividades-list");
        const li = document.createElement("li");
        li.textContent = atividade;
        atividadesList.appendChild(li);

        // Limpar os campos do formulário
        document.getElementById("data").value = "";
        document.getElementById("hora").value = "";
        document.getElementById("descricao").value = "";
    }
}