function validaCPF(cpf){
    if(cpf.length !== 11){
        return {valido:false, texto:"O CPF precisa ser composto por 11 digitos"}
    }else{
        return {valido:true, texto:""}
    }
}

function validaSenha(senha){
    if(senha.length < 4 || senha.length > 72){
        return {valido:false, texto:"A senha deve possuir ao menos 4 caracteres, e 72 digitos no máximo"}
    }else{
        return {valido:true, texto:""}
    }
}

function validaNome(nome){
    if(nome.length < 3 || nome.length > 72){
        return {valido:false, texto:"O nome deve possuir ao menos 3 caracteres, e 72 digitos no máximo"}
    }else{
        return {valido:true, texto:""}
    }
}


export {validaCPF, validaSenha, validaNome}