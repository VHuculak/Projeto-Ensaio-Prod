const dadosCongregacoes = [
    {
        id: "culto-vila-santo-antonio",
        nome: "Vila Santo Antônio",
        endereco: "Rua Aristides Lobo, 776 - Maringá - PR - 87030-240",
        anciao: "Luiz dos Santos Mendes\nLaerte de Oliveira Tolentino\nSalatiel Farias Dias",
        cooperador: "",
        diacono: "Geraldo Sales da Silva\nEnéias Bahia de Oliveira",
        jovens: "Josué Vitorino Serra"
    },
    {
        id: "culto-jardim-vitoria",
        nome: "Jardim Vitória",
        endereco: "Rua Professora Letícia de Paula Andrade Molinari, 883 - Maringá - PR - 87023-623",
        anciao: "",
        cooperador: "",
        diacono: "Álvaro Zetoles\nPaulo Sergio Ribeiro Sampaio",
        jovens: "Jean Carlos Santos da Silva"
    },
    {
        id: "culto-jardim-veronica",
        nome: "Jardim Verônica",
        endereco: "Rua Pioneiro José Demori, 2211 - Jardim Verônica, Maringá - PR - 87060-150",
        anciao: "",
        cooperador: "Valentin Dias Canhamero\nMarcos Antonio Muniz de Oliveira",
        diacono: "Francisco Roberto da Silva",
        jovens: "Ricardo Belucci"
    },
    {
        id: "culto-jardim-alvorada-ebenezer",
        nome: "Jardim Alvorada III - Ebenezer",
        endereco: "Rua Pioneiro Porphirio de Moraes, 750 - Maringá - PR - 87035-375",
        anciao: "",
        cooperador: "Marcos de Oliveira Silva",
        diacono: "Sandro Ricardo Grazilio",
        jovens: "Edmilson João da Silva"
    },
    {
        id: "culto-aeroporto-3",
        nome: "Parque Residencial Aeroporto - 3ª Parte",
        endereco: "Rua José Peralta Pardial, 181 - Jardim Bertioga, Maringá - PR - 87055-180",
        anciao: "Izaías Valério",
        cooperador: "Elias Da Silva Felipe",
        diacono: "Darcy Ribeiro de Melo",
        jovens: "Joelton dos Santos Taraciuk"
    },
    {
        id: "culto-parque-das-laranjeiras",
        nome: "Parque das Laranjeiras",
        endereco: "Rua Pioneiro Lívio Olívio, 169 - Maringá - PR - 87083-100",
        anciao: "Marcio Roberto Valério",
        cooperador: "Closneir Regilio de Souza",
        diacono: "Samuel Alves da Silva\nRinaldo Gonçalves de Barros",
        jovens: "Pedro Henrique Lanjoni Barros"
    },
    {
        id: "culto-jardim-piata",
        nome: "Jardim Piatã",
        endereco: "Rua Pioneiro Gregório Moreira, 700 - Maringá - PR - 87043-575",
        anciao: "",
        cooperador: "Hélio dos Santos Reis",
        diacono: "José Edson dos Santos",
        jovens: "Fabiano Pereira da Silva"
    },
    {
        id: "culto-jardim-olimpico",
        nome: "Jardim Olímpico",
        endereco: "Avenida Naihma Name, 474 - Maringá - PR - 87070-410",
        anciao: "",
        cooperador: "Jonathan Hoffmann Gomes",
        diacono: "",
        jovens: "Josué Cândido"
    },
    {
        id: "culto-parque-taruma",
        nome: "Parque Tarumã",
        endereco: "Rua Pioneiro João Custódio Pereira, 1055 - Maringá - PR - 87053-590",
        anciao: "",
        cooperador: "Josué dos Santos Rocha",
        diacono: "",
        jovens: "George Adriano Cruz Barros"
    },
    {
        id: "culto-jardim-indaia",
        nome: "Jardim Indaiá",
        endereco: "Avenida Pioneiro João Pereira, 902 - Maringá - PR - 87070-660",
        anciao: "",
        cooperador: "Sidney Medeiros",
        diacono: "",
        jovens: "Cidnei Real Peres"
    },
    {
        id: "culto-centro-central",
        nome: "Centro - Central",
        endereco: "Rua Arthur Thomas, 903 - Maringá - PR - 87013-250",
        anciao: "Geter Valério\nGustavo Pereira Corral Fernandes",
        cooperador: "Mário Cesar Valério",
        diacono: "Benedito José dos Santos\nJonas Lemos\nEliasor Valério\nDavid Santos Pinto\nHelio dos Santos\nClosnivaldo Regilio de Souza",
        jovens: "Vinicius Segantine Busatto Pereira"
    },
    {
        id: "culto-vila-operaria",
        nome: "Vila Operária",
        endereco: "Rua Santos Dumont, 141 - Maringá - PR - 87050-100",
        anciao: "",
        cooperador: "Antônio Silva Cardoso",
        diacono: "Fernando Garcia Gonçalves",
        jovens: "Jhonatas Macário Guandaline"
    },
    {
        id: "culto-jardim-alvorada",
        nome: "Jardim Alvorada",
        endereco: "Rua Mato Grosso, 1182 - Maringá - PR - 87033-110",
        anciao: "Nelson Pereira",
        cooperador: "Valdir Gaspar\nErly Silva Fabiano",
        diacono: "Elias do Nascimento Oliveira",
        jovens: "Luiz Henrique Perazolo"
    },
    {
        id: "culto-vila-santa-izabel",
        nome: "Vila Santa Izabel",
        endereco: "Rua João de Matos Alberto, 148 - Vila Santa Izabel, Maringá - PR - 87080-460",
        anciao: "Melchior José Alves\nJoão Marinho",
        cooperador: "Lavio de Oliveira Tolentino",
        diacono: "João de Oliveira Rodrigues\nValtoir da Silva Fernandes",
        jovens: "Alair Jovino de Carvalho"
    },
    {
        id: "culto-floriano",
        nome: "Distrito de Floriano",
        endereco: "R. Patu, 504 - Centro, Maringá - PR, 87105-046",
        anciao: "",
        cooperador: "Vitor Moisés Honorato",
        diacono: "",
        jovens: "Osvaldo Fernandes de Oliveira"
    },
    {
        id: "culto-conjunto-requiao",
        nome: "Conjunto Requião",
        endereco: "Rua Major Abelardo José Cruz, 2435 - Maringá - PR - 87047-426",
        anciao: "",
        cooperador: "Luiz Fernandes Cubero",
        diacono: "",
        jovens: "Sidney Dias"
    },
    {
        id: "culto-jardim-universo",
        nome: "Jardim Universo",
        endereco: "Rua Universo, 1095 - Maringá - PR - 87060-420",
        anciao: "",
        cooperador: "Eber Luiz Moro",
        diacono: "Abner Meneghetti",
        jovens: "Osvanil Ruiz Molina"
    },
    {
        id: "culto-parque-avenida",
        nome: "Parque Avenida",
        endereco: "Rua Allan Kardec, 1827 - Maringá - PR - 87025-410",
        anciao: "",
        cooperador: "Samuel do Carmo da Silva",
        diacono: "José de Oliveira Santos",
        jovens: "Clayton da Costa"
    },
    {
        id: "culto-jardim-oriental-diamante",
        nome: "Jardim Oriental - Diamante",
        endereco: "Avenida São Judas Tadeu, 2911 - Maringá - PR - 87024-213",
        anciao: "",
        cooperador: "Fredmann Luiz Favaro",
        diacono: "Luis Alberto de Lima",
        jovens: "Moisés Rodrigues Zetoles"
    },
    {
        id: "culto-jardim-espanha",
        nome: "Jardim Espanha",
        endereco: "Avenida José Marchi, 164 - Maringá - PR - 87060-690",
        anciao: "",
        cooperador: "José Carlos Donizeti de Souza",
        diacono: "",
        jovens: ""
    },
    {
        id: "culto-iguatemi",
        nome: "Distrito de Iguatemi",
        endereco: "Rua Pioneiro Anselmo Cantagalli, 140 - Maringá - PR - 87103-080",
        anciao: "José Antônio dos Reis",
        cooperador: "Clemente Alves de Araújo",
        diacono: "Anderson José Alves",
        jovens: "José Francisco Ferreira"
    },
    {
        id: "culto-vila-morangueira",
        nome: "Vila Morangueira",
        endereco: "Rua Nivaldo Aparecido Lopes, 805 - Maringá - PR - 87040-095",
        anciao: "Clóvis Maciel de Oliveira",
        cooperador: "Alexandro Rissi Petta",
        diacono: "Oswaldo Campano",
        jovens: "Daniel Lial Ricardo"
    },
    {
        id: "culto-parque-tuiuti",
        nome: "Parque Residencial Tuiuti",
        endereco: "Rua Rio Ligeiro, 1003 - Maringá - PR - 87043-200",
        anciao: "",
        cooperador: "Natanael Silva dos Santos",
        diacono: "Rodrigo Camargo Amoroso",
        jovens: "Jean Ricardo Costa"
    },
    {
        id: "culto-jardim-liberdade",
        nome: "Jardim Liberdade",
        endereco: "Rua Gilson Ricardo Gomes de Castro, 335 - Maringá - PR - 87047-270",
        anciao: "Aldemar Meneghetti",
        cooperador: "João Mendes Fonseca",
        diacono: "Eronides Soares",
        jovens: "Richarlles Celso Rodrigues Pereira"
    },
    {
        id: "culto-parque-itaipu",
        nome: "Parque Itaipu",
        endereco: "Rua Pioneiro José dos Santos, 313 - Maringá - PR - 87065-440",
        anciao: "",
        cooperador: "Dilson Miliorini\nJoab dos Santos",
        diacono: "Amadeu Campos dos Santos\nJoel Martins",
        jovens: "Edson Barboza"
    },
    {
        id: "culto-parque-hortencia-1",
        nome: "Parque Hortência - 1ª Parte",
        endereco: "Rua Pintagol, 701 - Maringá - PR - 87075-300",
        anciao: "Valter Luis de Araújo",
        cooperador: "Leandro Fertonani Lemos",
        diacono: "Felipe Rocengholli Valentim",
        jovens: "Osvaldo Rodrigues de Oliveira Júnior"
    },
    {
        id: "culto-jardim-catedral",
        nome: "Jardim Catedral",
        endereco: "Rua Pioneiro Olivar Freitas de Paiva, 104 - Maringá - PR - 87053-375",
        anciao: "",
        cooperador: "José Nogueira da Silva",
        diacono: "",
        jovens: "Israel Alonso de Albuquerque"
    },
    {
        id: "culto-conjunto-guaiapo",
        nome: "Conjunto Residencial Guaiapó",
        endereco: "Avenida Franklin Delano Roosevelt, 5605 - Maringá - PR - 87047-420",
        anciao: "",
        cooperador: "Devanir Batista da Silva",
        diacono: "",
        jovens: "Israel Dias"
    },
    {
        id: "culto-jardim-ouro-cola",
        nome: "Jardim Ouro Cola",
        endereco: "Avenida Virgílio Manília, 22104 - Maringá - PR - 87070-170",
        anciao: "João Marinho",
        cooperador: "José Silva dos Santos",
        diacono: "",
        jovens: "Paulo Cezar Panaro"
    },
    {
        id: "culto-jardim-monte-rei",
        nome: "Jardim Monte Rei",
        endereco: "Rua Pioneiro Olinto Mariani, 1888 - Maringá - PR - 87083-675",
        anciao: "",
        cooperador: "Flávio Candido Mesquita\nClaudio Medina",
        diacono: "Luiz Armando de Lima",
        jovens: "Jayme Manoel Soares Junior"
    },
    {
        id: "culto-maringa-velho",
        nome: "Zona 6 - Maringá Velho",
        endereco: "Rua Raimundo Correia, 708 - Maringá - PR - 87015-400",
        anciao: "",
        cooperador: "Douglas Godoy de Azevedo",
        diacono: "",
        jovens: "Vilmar Lucas Mota Sampaio"
    },
    {
        id: "culto-loteamento-sumare",
        nome: "Loteamento Sumaré",
        endereco: "Rua José Leonidas Nerone, 631 - Maringá - PR - 87035-450",
        anciao: "",
        cooperador: "Eduardo Cesar de Gouvea",
        diacono: "",
        jovens: "Ailton de Souza Silva"
    },
    {
        id: "culto-pdu-central",
        nome: "Paiçandu Central",
        endereco: "Rua Carlos Roberto Seghezzi, 195 - Paiçandu - PR - 87140-000",
        anciao: "",
        cooperador: "José Todon\nElionidas Noronha",
        diacono: "Eliel Bruschi",
        jovens: "Lincon Garcia Luiz"
    },
    {
        id: "culto-pdu-agua-boa",
        nome: "Água Boa",
        endereco: "Rua São Jorge, 243 - Água Boa, Paiçandu - PR, 87140-000",
        anciao: "",
        cooperador: "Paulo Andreassa",
        diacono: "Sergio Aparecido Possani",
        jovens: "Vilson Marcos de Oliveira"
    },
    {
        id: "culto-pdu-jardim-bela-vista",
        nome: "Paiçandu Jardim Bela Vista",
        endereco: "Rua Sebastião Antonio Neto, 116 - Paiçandu - PR - 87140-000",
        anciao: "Hildebrando Gomes",
        cooperador: "Edgar Rodrigues de Lima",
        diacono: "Assunção da Silva",
        jovens: "Matheus Henrique Amaral Massarenti"
    },
    {
       id: "culto-pdu-jardim-monte-carmelo",
       nome: "Paiçandu Jardim Monte Carmelo",
       endereco: "Rua Alameda Canafistula, 110 - Paiçandu - PR - 87140-000",
       anciao: "",
       cooperador: "Antônio Marcos da Silva",
       diacono: "Pedro Antônio Belmonte",
       jovens: "Anderson Alves de Souza"
    },
    {
        id: "culto-pdu-jardim-pioneiro",
        nome: "Paiçandu Jardim Pioneiro",
        endereco: "Rua Arthur Zirondi, 172 - Paiçandu - PR - 87140-000",
        anciao: "Marcos Moreira",
        cooperador: "Patterson José Cruz",
        diacono: "José Pedro da Rocha",
        jovens: "Edwilson Pereira"
    },
    {
        id: "culto-sdi-central",
        nome: "Sarandi Central",
        endereco: "Rua Taí, 900 - Centro, Sarandi - PR, 87111-130",
        anciao: "Eliseu Leles\nAdriano de Souza",
        cooperador:"Elias Alves de Lima",
        diacono: "Nivaldo Aparecido Malagutti\nManoel Ernesto Amieiro Junior",
        jovens: "Adilson Alves de Moraes Junior"
    },
    {
        id: "culto-sdi-conj-residencial-floresta",
        nome: "Sarandi Conjunto Residencial Floresta",
        endereco: "Av. João-de-barro, 1078 - Jardim Triangulo, Sarandi - PR, 87112-690",
        anciao: "Carlos Eduardo da Silva Gomes",
        cooperador: "Guilherme Ribeiro dos Passos",
        diacono: "",
        jovens: "Jean Mendes Silveira"
    },
    {
        id: "culto-sdi-conj-vale-azul",
        nome: "Sarandi Conjunto Vale Azul",
        endereco: "Sarandi - PR, 87115-035",
        anciao: "",
        cooperador: "Wilson Fagundes",
        diacono: "",
        jovens: "Tiago Francisco Amorim"
    },
    {
        id: "culto-sdi-jd-das-torres",
        nome: "Sarandi Jardim das Torres",
        endereco: "R. Nossa Sra. Aparecida, 1999 - Jardim das Torres, Sarandi - PR",
        anciao: "",
        cooperador: "Adair Theodoro da Silva",
        diacono: "Adão Mariano da Silva",
        jovens: "Edemilson de Souza Correia",
    },
    {
        id: "culto-sdi-jd-esperanca-2",
        nome: "Sarandi Jardim Esperança - 2ª Parte",
        endereco: "R. Navirai, 1577 - Jardim Gralha Azul, Sarandi - PR, 87112-048",
        anciao: "",
        cooperador: "Jose Rodrigues de Oliveira",
        diacono: "Liu Eber Botelho Martins",
        jovens: "Edivaldo José Deuslirio",
    },
    {
        id: "culto-sdi-jd-independencia-3",
        nome: "Sarandi Jardim Independência - 3ª Parte",
        endereco: "R. Dom João VI, 435 - Jardim Panorama, Sarandi - PR, 87113-050",
        anciao: "",
        cooperador: "Genesio José de Oliveira Neto",
        diacono: "Cevero Estevão da Costa",
        jovens: "Fernandes Carneloz"
    },
    {
        id: "culto-sdi-jd-nova-alianca",
        nome: "Sarandi Jardim Nova Aliança",
        endereco: "Rua Martim Afonso, 275 - Parque Res. Nova Alianca, Sarandi - PR, 87111-710",
        anciao: "",
        cooperador: "Kelvin Martimiano Pereira",
        diacono: "",
        jovens: "Sandro Izidoro Basan"
    },
    {
        id: "culto-sdi-jd-nova-independencia",
        nome: "Sarandi Jardim Nova Independência",
        endereco: "R. Ignácio Pelchibeski, 789 - Jardim Nova Independencia I, Sarandi - PR, 87114-665",
        anciao: "",
        cooperador: "Alicio Barbosa da Silva",
        diacono: "Adhemar Marques de Jesus",
        jovens: "Devanir Mendes Pereira"
    },
    {
        id: "culto-sdi-jd-ouro-verde-ii",
        nome: "Sarandi Jardim Ouro Verde - II",
        endereco: "Av. Atlântica, 1111 - Jardim Ouro Verde II, Sarandi - PR, 87114-170",
        anciao: "",
        cooperador: "Geraldo Alves Pereira",
        diacono: "Estevam Sales da Costa",
        jovens: "Lindomar Machado"
    },
    {
        id: "culto-sdi-jd-panorama",
        nome: "Sarandi Jardim Paronorama",
        endereco: "R. Carlos Gomes, 543 - Jardim Panorama, Sarandi - PR, 87113-100",
        anciao: "",
        cooperador: "José Gabriel Neto",
        diacono: "Gonçalo Carlos da Silva",
        jovens: "Jean Michael Dias"
    },
    {
        id: "culto-sdi-pq-alvamar",
        nome: "Sarandi Parque Alvamar",
        endereco: "Rua Conceição Aparecida de Magalhães, 442 - Parque Alvamar II, Sarandi - PR, 87113-520",
        anciao: "Elias Rodrigues Fermino",
        cooperador: "Rubens Clemente Pereira",
        diacono: "Ozair Soares\nAntônio Carlos Aparecido Faustino",
        jovens: "Lucas Rodrigues Faustino"
    },
    {
        id: "culto-sdi-resid-sao-jose",
        nome: "Sarandi Residencial São José",
        endereco: "Av. Anchieta, 1525 - Res. Sao Jose, Sarandi - PR, 87114-595",
        anciao: "",
        cooperador: "Argemiro Nunes",
        diacono: "",
        jovens: "Moacir Antônio da Silva"
    },

];
