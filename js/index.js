//console.log('indexjs carregado!');
var btnCarregarJson = document.querySelector('#Carregar');
//console.log(btnCarregarJson);
/**
 * Logica de carregar JSON
 */
let objeto_http = new XMLHttpRequest();

btnCarregarJson.addEventListener('click', (event) => {
    //alert('boto clicado!');
    event.preventDefault();
    
    objeto_http.open("GET", "https://jsonplaceholder.typicode.com/users");
    objeto_http.addEventListener('load', () => {
        if (objeto_http.status == 200) {
            btnCarregarJson.classList.add('esconder');
            //console.log('conexao feita');
            ///console.log(objeto_http.responseText);
            //console.log(typeof `Tipo da resposta antes: ${objeto_http.responseText}`);

            //let avisoSucesso = document.querySelector('#avisoS');
            //avisoSucesso.classList.remove('invisivel');
            let usuarios = JSON.parse(objeto_http.responseText);
            let proucuraUsuario = document.querySelector('#email-query');
            //console.log(proucuraUsuario);
            usuarios.forEach(usuario => {
                if (usuario.username == 'Samantha') {
                    console.log(usuario);
                    proucuraUsuario.value = usuario.email;
                }
                adicionarUsuarionaTabela(usuario);
            });
        } else {
            //console.log(objeto_http.status == 400);
            let erroAjax = document.querySelector('#erroAJAX');
            let paiErroAjax = document.querySelector('.invisivel');
            paiErroAjax.classList.remove('invisivel');
            erroAjax.textContent = `Opa, parece que algo deu errado ao tentar carregar os usuarios, tente novamente mais tarde!`;
            

        }
    });
    objeto_http.send();

},false);

/**
 * Funçoes
 */

function adicionarUsuarionaTabela(usuario) {
    //console.log(usuario);
    let usuarioTr = montaTr(usuario);
    let tabela = document.querySelector('#tabela-usuarios');
    //console.log(tabela);
    tabela.appendChild(usuarioTr);
}

function montaTr(usuarios) {
    let usuarioTr = document.createElement("tr");
    usuarioTr.appendChild(montarTd(usuarios.id));
    usuarioTr.appendChild(montarTd(usuarios.website));
    //usuarioTr.appendChild(montarTd(usuarios.name));

    return usuarioTr;
}

function montarTd(dados) {
    let td = document.createElement('td');
    td.textContent = dados;
    return td;
}/*
objeto_http.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View")

    /*
}
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
*/