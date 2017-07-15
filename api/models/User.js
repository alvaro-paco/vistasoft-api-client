/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      columnName: 'ID',
      type: 'integer',
      autoIncrement:true,
      primaryKey: true,
      required: true
    },
    login: {
       columnName:'user_login',
       type: 'string'
    },
    username: {
      columnName: 'user_nicename',
      type: 'string'
    },
    password: {
      columnName: 'user_pass',
      type: 'string'
    },
    email: {
      columnName: 'user_email',
      type: 'string'
    },
    url: {
      columnName: 'user_url',
      type: 'string'
    },
    registered: {
      columnName: 'user_registered',
      type: 'datetime'
    },
    activationKey: {
      columnName: 'user_activation_key',
      type: 'string'
    },
    status: {
      columnName: 'user_status',
      type: 'integer'
    },
    displayName: {
      columnName: 'display_name',
      type: 'string'
    }
  },
  tableName: 'wp_users',
  autoCreatedAt: false,
  autoUpdatedAt: false,
};

