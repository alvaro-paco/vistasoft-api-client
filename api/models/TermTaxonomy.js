/**
 * TermTaxonomy.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      columnName: 'term_taxonomy_id',
      type: 'integer',
      autoIncrement:true,
      primaryKey: true,
      required: true
    },
    termId: {
      type: 'integer',
      columnName: 'term_id'
    },
    taxonomy: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    parent: {
      type: 'integer'
    },
    count: {
      type: 'integer'
    },
  },
  tableName: 'wp_term_taxonomy',
  autoCreatedAt: false,
  autoUpdatedAt: false,
};

