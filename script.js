let rec;

function iniciar(event) {
    for (i = event.resultIndex; i < event.results.length; i++) {
        document.getElementById('texto').innerHTML = event.results[i][0].transcript;
        if (event.results[i][0].transcript.trim() === 'parar') rec.stop();
    }
}

document.getElementById('iniciar').addEventListener('click', () => {
    if (!("webkitSpeechRecognition" in window)) {
        alert('Reconocimiento de voz incopatible con su navegador');
    } else {
        rec = new webkitSpeechRecognition();
        rec.lang = "es-HN";
        rec.continuous = true;
        rec.iterim = true;
        rec.addEventListener('result', iniciar);
        rec.start();
    }

});
document.getElementById('parar').addEventListener('click', () => {
    rec.stop();
});