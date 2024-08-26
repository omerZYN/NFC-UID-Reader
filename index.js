<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NFC UID Reader</title>
</head>
<body>
    <h1>NFC UID Reader</h1>
    <input type="text" id="nfcInput" placeholder="Kartı okutunuz" readonly>
    <button id="readNfcButton">NFC Kartı Oku</button>

    <script>
        document.getElementById('readNfcButton').addEventListener('click', function() {
            // NFC okuyucu SDK'sı initialize edilmesi
            const nfcReader = new NFCReaderSDK(); // SDK'dan sınıfı başlatma

            // UID okuma işlemi
            nfcReader.readUID()
                .then(uid => {
                    // UID'yi input alanına yazdırma
                    document.getElementById('nfcInput').value = uid;
                })
                .catch(error => {
                    console.error('NFC okuma hatası:', error);
                    alert('NFC kart okunamadı, lütfen tekrar deneyin.');
                });
        });
    </script>
</body>
</html>
