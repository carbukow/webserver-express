const http = require('http');
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Baby Yoda',
            edad: 60,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Te escucho!');
        res.end();

    })
    .listen(8080);
console.log('Si payo, te estoy escuchando, no seas pesado');