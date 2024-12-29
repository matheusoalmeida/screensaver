function updateClock() {
    var now = new Date(); // cria a data e hora atuais
    var hours = now.getHours();
    var minutes = now.getMinutes();
    //var seconds = now.getSeconds();

    // Formatação para garantir que sempre mostre 2 dígitos
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    //seconds = (seconds < 10) ? '0' + seconds : seconds;

    var time = hours + ':' + minutes;// + ':' + seconds;
    
    // Formatação da data
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Idioma data
	var date = new Date().toLocaleDateString('pt-BR', options);

    // Remover acentos manualmente
    date = date.replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
               .replace(/ã/g, 'a').replace(/õ/g, 'o').replace(/ç/g, 'c').replace(/Á/g, 'A').replace(/É/g, 'E')
               .replace(/Í/g, 'I').replace(/Ó/g, 'O').replace(/Ú/g, 'U').replace(/Ã/g, 'A').replace(/Õ/g, 'O')
               .replace(/Ç/g, 'C');

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date.charAt(0).toUpperCase() + date.slice(1);
    
}

setInterval(updateClock, 1000);
updateClock();