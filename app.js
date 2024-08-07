document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const copyButton = document.getElementById('copy-button');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const messageStatus = document.querySelector('.message'); // Selecciona el div con la clase 'message'

    const encryptionKeys = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    function encrypt(text) {
        let encryptedText = '';
        for (let char of text) {
            if (char === 'e') {
                encryptedText += 'enter';
            } else if (char === 'i') {
                encryptedText += 'imes';
            } else if (char === 'a') {
                encryptedText += 'ai';
            } else if (char === 'o') {
                encryptedText += 'ober';
            } else if (char === 'u') {
                encryptedText += 'ufat';
            } else {
                encryptedText += char;
            }
        }
        return encryptedText;
    }

    function decrypt(text) {
        let decryptedText = '';
        let i = 0;
        while (i < text.length) {
            if (text.slice(i, i + 5) === 'enter') {
                decryptedText += 'e';
                i += 5;
            } else if (text.slice(i, i + 4) === 'imes') {
                decryptedText += 'i';
                i += 4;
            } else if (text.slice(i, i + 2) === 'ai') {
                decryptedText += 'a';
                i += 2;
            } else if (text.slice(i, i + 4) === 'ober') {
                decryptedText += 'o';
                i += 4;
            } else if (text.slice(i, i + 4) === 'ufat') {
                decryptedText += 'u';
                i += 4;
            } else {
                decryptedText += text[i];
                i += 1;
            }
        }
        return decryptedText;
    }

    encryptButton.addEventListener('click', () => {
        const text = inputText.value;
        if (text.match(/[^a-z\s]/)) {
            alert('Solo se permiten letras minúsculas y sin acentos.');
        } else {
            outputText.value = encrypt(text);
            messageStatus.textContent = "Tu mensaje fue encriptado con éxito"; // Actualiza el mensaje de estado
        }
    });

    decryptButton.addEventListener('click', () => {
        const text = inputText.value;
        if (text.match(/[^a-z\s]/)) {
            alert('Solo se permiten letras minúsculas y sin acentos.');
        } else {
            outputText.value = decrypt(text);
            messageStatus.textContent = "Tu mensaje fue desencriptado con éxito"; // Actualiza el mensaje de estado
        }
    });

    copyButton.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});
