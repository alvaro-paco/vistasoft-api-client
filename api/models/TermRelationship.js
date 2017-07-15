/**
 * TermRelationships.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      columnName: 'object_id',
      type: 'integer',
      autoIncrement:true,
      primaryKey: true,
      required: true
    },
    termTaxonomy: {
      type: 'integer'
    },
    order: {
      type: 'integer'
    },
  },
  tableName: 'wp_term_relationships',
  autoCreatedAt: false,
  autoUpdatedAt: false,
};

