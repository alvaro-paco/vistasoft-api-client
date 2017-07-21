"use strict";

/**
 * PropertyController
 *
 * @description :: Server-side logic for managing Properties
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var async = require('async');

module.exports = {
	import: (req, res) => {
        let page = 0;
        let properties = [];
        let escapeKeys = ['paginas', 'quantidade', 'pagina', 'total'];
        var opts = {
            times: 35,
            interval: 50
        };

        async.auto({
            // this function will just be passed a callback
            reading: (callback) => {
                ++page;
            },
            readData:['reading', async.retry(opts, function (callback) {
                VistaService.listarImoveis(page, (err, success) => {
                    if(err) return callback(err, null);
                    _.map(Object.keys(success.data), (key) => {
                        if(!_.contains(escapeKeys, key)) properties.push(success.data[key])
                    })
                    return page === success.data.paginas ? callback(null, success) : callback(++page, null);
                })
            }, (err, success) => {
                // if (success) {
                    properties.forEach(function(property) {
                        VistaService.parseProperty(property);
                    }, this);
                    return res.json(200, null);
                // }
            })]
        });
    }
};

