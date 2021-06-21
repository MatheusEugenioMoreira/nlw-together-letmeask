

// function showWelcomeMessage(user) {
//     return `Welcome ${user.name}`;
// }

// incluir mensagem de boas-vindas, a cidade e UF do user


type User = {
    name: string;
    address: {
        city: string;
        uf: string;
    }
};

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name} (${user.address.city} - ${user.address.uf})`;
}

showWelcomeMessage({
    name: 'Matheus',
    address: {
        city: 'Belo Horizonte',
        uf: 'MG'
    }
})

// DOM = Document Object Model
// HTML dentro deo Js => JSX (ou TSX no Typescript)
// <=====================================================================>
// COMPONENTES = Pedaços de código que quando juntas, tornam uma aplicação
// PROPS = Pode receber qualquer tipo de info
// STATE = "Dar vida" a aplicacao, é uma info mantida por um component mantida pelo React
