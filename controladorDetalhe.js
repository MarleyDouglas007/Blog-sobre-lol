document.addEventListener("DOMContentLoaded", function() {
    // Função para obter o parâmetro 'id' da URL
    function obterParametroId() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        return urlSearchParams.get('id');
    }

    // Função para buscar as informações do campeão com base no 'id'
    function buscarInformacoesCampeao(id) {
        // Aqui você pode implementar a lógica para buscar as informações do campeão em uma fonte de dados (por exemplo, um objeto, uma API, etc.)
        // Por enquanto, vamos usar um exemplo simples com um objeto estático
        const campeoes = {
            akali: {
                nome: "Akali",
                descricao: "Akali é uma assassina ágil e mortal, conhecida por sua mobilidade e habilidades furtivas. Ela é uma das campeãs mais temidas de League of Legends.",
                imagem: "imagens/Akali.jpg"
            },
            atrox: {
                nome: "Atrox",
                descricao: "Braum é um poderoso suporte, conhecido por sua resistência e habilidades defensivas. Ele protege seus aliados com seu escudo e oferece grande utilidade para sua equipe.",
                imagem: "imagens/Atrox.jpg"
            },
            cassiopeia: {
                nome: "Cassiopeia",
                descricao: "Jinx é uma atiradora explosiva, capaz de causar caos no campo de batalha com sua variedade de armas e habilidades únicas. Ela é conhecida por sua personalidade excêntrica e amor por destruição.",
                imagem: "imagens/Cassiopeia.jpg"
            },
            chogath: {
                nome: "chogath",
                descricao: "Akali é uma assassina ágil e mortal, conhecida por sua mobilidade e habilidades furtivas. Ela é uma das campeãs mais temidas de League of Legends.",
                imagem: "imagens/chogath.jpg"
            },
            braum: {
                nome: "Braum",
                descricao: "Braum é um poderoso suporte, conhecido por sua resistência e habilidades defensivas. Ele protege seus aliados com seu escudo e oferece grande utilidade para sua equipe.",
                imagem: "imagens/braum.lol.jpg"
            },
            garen: {
                nome: "Garen",
                descricao: "Jinx é uma atiradora explosiva, capaz de causar caos no campo de batalha com sua variedade de armas e habilidades únicas. Ela é conhecida por sua personalidade excêntrica e amor por destruição.",
                imagem: "imagens/garen.lol.jpg"
            },
            ivern: {
                nome: "Ivern",
                descricao: "Akali é uma assassina ágil e mortal, conhecida por sua mobilidade e habilidades furtivas. Ela é uma das campeãs mais temidas de League of Legends.",
                imagem: "imagens/ivern.lol.jpg"
            },
            janna: {
                nome: "Janna",
                descricao: "Braum é um poderoso suporte, conhecido por sua resistência e habilidades defensivas. Ele protege seus aliados com seu escudo e oferece grande utilidade para sua equipe.",
                imagem: "imagens/janna.lol.jpg"
            },
            jax: {
                nome: "Jax",
                descricao: "Jinx é uma atiradora explosiva, capaz de causar caos no campo de batalha com sua variedade de armas e habilidades únicas. Ela é conhecida por sua personalidade excêntrica e amor por destruição.",
                imagem: "imagens/jax.lol.jpg"
            },
            jinx: {
                nome: "Jinx",
                descricao: "Akali é uma assassina ágil e mortal, conhecida por sua mobilidade e habilidades furtivas. Ela é uma das campeãs mais temidas de League of Legends.",
                imagem: "imagens/jinx.lol.jpg"
            },
            kayn: {
                nome: "Kayn",
                descricao: "Braum é um poderoso suporte, conhecido por sua resistência e habilidades defensivas. Ele protege seus aliados com seu escudo e oferece grande utilidade para sua equipe.",
                imagem: "imagens/kayn.lol.jpg"
            },
            lulu: {
                nome: "Lulu",
                descricao: "Jinx é uma atiradora explosiva, capaz de causar caos no campo de batalha com sua variedade de armas e habilidades únicas. Ela é conhecida por sua personalidade excêntrica e amor por destruição.",
                imagem: "imagens/lulu.lol.jpg"
            },
        };

        return campeoes[id];
    }

    // Função para atualizar os elementos HTML com as informações do campeão
    function atualizarDetalhesCampeao(campeao) {
        const championImageElement = document.getElementById('champion-image');
        const championNameElement = document.getElementById('champion-name');
        const championDescriptionElement = document.getElementById('champion-description');

        // Define a imagem, o nome e a descrição do campeão nos elementos HTML
        championImageElement.src = campeao.imagem;
        championImageElement.alt = campeao.nome;
        championNameElement.textContent = campeao.nome;
        championDescriptionElement.textContent = campeao.descricao;
    }

    // Obtém o 'id' do campeão da URL
    const campeaoId = obterParametroId();

    // Verifica se o 'id' do campeão é válido
    if (campeaoId) {
        // Busca as informações do campeão com base no 'id'
        const informacoesCampeao = buscarInformacoesCampeao(campeaoId);

        // Verifica se as informações do campeão foram encontradas
        if (informacoesCampeao) {
            // Atualiza os elementos HTML com as informações do campeão
            atualizarDetalhesCampeao(informacoesCampeao);
        } else {
            console.error(`Não foi possível encontrar informações para o campeão com o id '${campeaoId}'.`);
        }
    } else {
        console.error("O parâmetro 'id' não foi encontrado na URL.");
    }
});
