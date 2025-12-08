// --- Elementos da Página ---
const paginaCultos = document.getElementById('pagina-cultos');
const paginaEnsaios = document.getElementById('pagina-ensaios');
const paginaEventos = document.getElementById('pagina-serviços');

// --- Esconder abas para navegação ---

function mostrarCultos() {
    paginaEventos.classList.add('hidden');
    paginaEnsaios.classList.add('hidden');
    paginaCultos.classList.remove('hidden');
}

function mostrarEnsaios() {
    paginaCultos.classList.add('hidden');
    paginaEventos.classList.add('hidden');
    paginaEnsaios.classList.remove('hidden');
}

function mostrarServiços() {
    paginaEnsaios.classList.add('hidden');
    paginaCultos.classList.add('hidden');
    paginaEventos.classList.remove('hidden');
}

 /* Remove acentos para facilitar a busca */
function removerAcentos(texto) {
    if (!texto) return "";
    // NFD separa o acento da letra, e o Regex substitui o acento por vazio
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function configurarBusca(idInput, idLista) {
    const input = document.getElementById(idInput);
    
    // Segurança: se o input não existir na página, para a execução
    if (!input) return; 

    const listaItens = document.getElementById(idLista).getElementsByTagName('li');

    input.addEventListener('input', function() {
        const termoBuscado = input.value.toLowerCase();
        const termoSemAcento = removerAcentos(termoBuscado);
        
        // Separa o que foi digitado por espaço para buscar palavras fora de ordem
        const palavrasBuscadas = termoSemAcento.split(' ');

        for (let i = 0; i < listaItens.length; i++) {
            const item = listaItens[i];
            const textoItem = item.textContent.toLowerCase();
            const textoItemSemAcento = removerAcentos(textoItem);

            let ehUmResultadoValido = true;

            // Lógica "E": O item precisa conter TODAS as palavras digitadas
            for (const palavra of palavrasBuscadas) {
                if (!textoItemSemAcento.includes(palavra)) {
                    ehUmResultadoValido = false;
                    break;
                }
            }

            if (ehUmResultadoValido) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        }
    });
}

// --- Inicialização das Buscas ---
configurarBusca('busca-cultos', 'lista-cultos');
configurarBusca('busca-ensaio', 'lista-ensaios');
configurarBusca('busca-serviços', 'lista-serviços');