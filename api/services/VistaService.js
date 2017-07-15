"use strict";

var axios = require('axios');

var api ={ 
    key: 'ee16bc608fe3615f542e32c65abe7813',
    endpoint: 'http://gruposou-rest.vistahost.com.br',
    fields: `"fields":[
        "Codigo", 
        "Status",
        "Descricao",
        "Categoria",
        "Bairro",
        "Cidade",
        "ValorVenda",
        "ValorLocacao",
        "Dormitorios",
        "Suites",
        "Vagas",
        "AreaTotal",
        "AreaPrivativa",
        "Caracteristicas",
        "InfraEstrutura"
        ],"order":{"Bairro":"asc"}`,
    limit: '"quantidade":50'
};

const getStatus = string => {
    return (string == 'VENDA' || string == 'ALUGUEL') ? 'publish' : 'pending';
}

module.exports = {
    listarImoveis: (page, cb) => {
        let urlQuery = api.endpoint + '/imoveis/listar?key='+ api.key +'&showtotal=1&pesquisa={' + api.fields + ',"paginacao":{"pagina":' + page + ',' + api.limit + '}}';
        axios.get(urlQuery, { headers: {'Accept': 'application/json'}, data: {} })
        .then((response) => {
            return cb(null, response);
        })
        .catch((err) => {
            return cb(err, null);
        })
    },
    parseProperty: (data) => {
        let property = {
            author: 1,
            title: item.Bairro,
            content: item.Descricao,
            status: getStatus(item.Status)
        };
        try {
            let property = {
                "Codigo": "2468",
                "Categoria": "CHÁCARA",
                "Bairro": "Agua Bonita",
                "Cidade": "Piracicaba",
                "ValorVenda": "480000"
            }
            // Creating Term for a city
            Terms.findOrCreate(
            {name:data.cidade}, 
            {
                name: data.cidade,
                slug: data.cidade.toLowerCase(),
                group: 0
            })
            .then(function (createdOrFoundRecords){
                
            })
        } catch (e) {
            sails.log.error(e)
        }
    }
}