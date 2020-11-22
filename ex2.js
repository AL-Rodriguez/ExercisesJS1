const codeToCompile = '[jkh(jkh){(hhhhhhhh)jjjjjjjjjj}k]'

const compile = (str) => {
    let accumulator = [];
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {
        //Si el caracter es paréntesis de entrada va al acumulador

        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            accumulator.push(str[i]);

        }else if ((str[i] === ')' || str[i] === '}' || str[i] === ']')){

            // Si es de cierre elimina en el acumulador y pasa a variable para comparar.
            let last = accumulator.pop();
            //lo compara con el objeto correspondiente, si no false.
            if (str[i] !== brackets[last]) { return false };
        }
    }

    //Comprueba si queda alguno.
    if (accumulator.length !== 0) { return false };

    return true;
}

console.log(`¿El código compila? = ${compile(codeToCompile)}`)