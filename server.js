// Fazendo a importação do APP
import app from './src/app.js'

// criando porta do servidor
const port = process.env.PORT || 3000;


// Escutar a requisição
app.listen(port,()=>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})