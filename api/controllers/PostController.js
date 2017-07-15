/**
 * PropertyController
 *
 * @description :: Server-side logic for managing Properties
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var async = require('async');

module.exports = {
	list: (req, res) => {
        try{
            Post.find()
            .then((data) => {
                return res.json(200, data);
            })
        } catch (err) {
            return res.json(500, err);
        }
    }
};

