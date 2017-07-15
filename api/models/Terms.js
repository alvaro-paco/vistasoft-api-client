/**
 * Terms.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      columnName: 'term_id',
      type: 'integer',
      autoIncrement:true,
      primaryKey: true,
      required: true
    },
    name: {
      columnName: 'name',
      type: 'string',
    },
    slug: {
      columnName: 'slug',
      type: 'string',
    },
    group: {
      columnName: 'term_group',
      type: 'string',
    }
  }
};

