function GerarQRCode(){
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=';
    var conteudoQRCode = GoogleChartAPI + inputUsuario;
    document.querySelector('#QRCodeImage').src = conteudoQRCode;
}