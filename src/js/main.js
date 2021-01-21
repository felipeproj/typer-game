const totalCaracteres = 10;
var interval;

(function() {
    configurarCaracteres();
    document.getElementById('phrase-chars').innerText = `/${totalCaracteres}`;
    document.getElementById('typer-input').disabled = true;
    document.getElementById('timer').textContent = "00:15";
})();

function setup() {
    if (typeof interval !== 'undefined') clearInterval(interval);
    document.getElementById('timer').textContent = "00:15";
    
    resetAlert();
    textoAleatorio();
    configurarInput();
    configurarCaracteres();
    iniciarContagem();
}

function textoAleatorio() {
    // const letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz_-';
    // const letras = 'abcdefghiklmnopqrstuvwxyz';
    const letras = 'abcde'
    let aleatorio = '';
    for (let i = 0; i < totalCaracteres; i++) {
        aleatorio += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    alterarFrase(aleatorio);
}

function alterarFrase(texto) {
    document.getElementById('typer-title').innerText = texto;
}

function configurarInput() {
    document.getElementById('typer-input').value = "";
    document.getElementById('typer-input').disabled = false;
    document.getElementById('typer-input').focus();
}

function configurarCaracteres(typed = 0) {
    document.getElementById('typed-chars').innerText = typed;

    if (typed !== 0) {
        const frase = document.getElementById('typer-title').innerText;
        if (frase.substr(0, typed) === document.getElementById('typer-input').value) {
            document.getElementById('typer-span').classList.add('text-success');
            document.getElementById('typer-span').classList.remove('text-danger');

            document.getElementById('typer-input').classList.add('border-success');
            document.getElementById('typer-input').classList.remove('border-danger');

            if (typed === totalCaracteres) setAlertSuccess();
        } else {
            document.getElementById('typer-span').classList.remove('text-success');
            document.getElementById('typer-span').classList.add('text-danger');

            document.getElementById('typer-input').classList.remove('border-success');
            document.getElementById('typer-input').classList.add('border-danger');
        }
    }
}

function alterarCaracteresInseridos() {
    const texto = document.getElementById('typer-input').value;
    configurarCaracteres(texto.length)
}

function setAlertSuccess() {
    clearInterval(interval);
    document.getElementById('typer-input').disabled = true;

    document.getElementById('typer-alert').innerText = "Parabéns!\nVocê conseguiu concluir o desafio!";
    document.getElementById('typer-alert').classList.add('alert-success');
    document.getElementById('typer-alert').classList.remove('alert-danger');

}
function setAlertDanger() {
    clearInterval(interval);
    document.getElementById('typer-input').disabled = true;

    document.getElementById('typer-alert').innerText = "Ops, não foi dessa vez mas não desista!\nClique em 'INICIAR' para iniciar o jogo novamente.";
    document.getElementById('typer-alert').classList.remove('alert-success');
    document.getElementById('typer-alert').classList.add('alert-danger');

}

function resetAlert() {
    document.getElementById('typer-alert').classList.remove('alert-success');
    document.getElementById('typer-alert').classList.remove('alert-danger');

    document.getElementById('typer-alert').textContent = "";
}

function iniciarContagem() {
    seconds = 14;
    interval = setInterval(function () {
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timer').textContent = "00:" + seconds;

        seconds--;
        if (seconds < 0) setAlertDanger();
    }, 1000);
}