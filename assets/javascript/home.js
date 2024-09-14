
// Formulário Quero fluxo
document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('local_divulgado');
    const outrosDiv = document.getElementById('campo_extra_outros');

    selectElement.addEventListener('change', function () {
        if (selectElement.value === 'Outros') {
            outrosDiv.style.display = 'inline-block';
        } else {
            outrosDiv.style.display = 'none';
        }
    });
});

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"+$1 $2")
    value = value.replace(/(\d{3})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

const handleCPF = (event) => {
    let input = event.target
    input.value = cpfMask(input.value)
}
const cpfMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{3})(\d)/,"$1.$2")
    value = value.replace(/(\d{3})(\d)/,"$1.$2")
    value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

    return value
}
