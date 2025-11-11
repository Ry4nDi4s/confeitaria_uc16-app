export function validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) return false;
    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito > 9) primeiroDigito = 0;
    if (parseInt(cpf.charAt(9)) !== primeiroDigito) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito > 9) segundoDigito = 0;
    if (parseInt(cpf.charAt(10)) !== segundoDigito) return false;

    return true;
}

export function validarEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function validarSenha(senha: string) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
}

export function validarTelefone(telefone: string) {
    const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return regex.test(telefone);
}
