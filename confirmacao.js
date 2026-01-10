// --- MÁSCARA DE RG ---
const inputRG = document.getElementById("rg");

inputRG.addEventListener("input", (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9xX]/g, "");
    if (value.length > 2) value = value.slice(0, 2) + "." + value.slice(2);
    if (value.length > 6) value = value.slice(0, 6) + "." + value.slice(6);
    if (value.length > 10) value = value.slice(0, 10) + "-" + value.slice(10);
    e.target.value = value.slice(0, 12).toUpperCase();
});

// --- ENVIO PARA O FORMSPREE ---
const form = document.getElementById("formConfirmacao");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const btn = document.getElementById("btnConfirmar");
    btn.disabled = true;
    btn.innerText = "Enviando...";

    const formData = new FormData(this);

    try {
        const response = await fetch("https://formspree.io/f/mnjjalrp", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert("Sua presença foi confirmada com sucesso! Mal podemos esperar por você.");
            form.reset();
        } else {
            alert("Houve um erro ao enviar. Por favor, tente novamente mais tarde.");
        }
    } catch (error) {
        alert("Erro de conexão. Verifique sua internet.");
    } finally {
        btn.disabled = false;
        btn.innerText = "Confirmar Presença";
    }
});