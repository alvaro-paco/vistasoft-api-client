/**
 * Post.js
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
    author: {
       columnName:'post_author',
       type: 'integer'
    },
    date: {
      columnName: 'post_date',
      type: 'datetime'
    },
    dateGMT: {
      columnName: 'post_date_gmt',
      type: 'datetime'
    },
    content: {
      columnName: 'post_content',
      type: 'text'
    }, 
    title: {
      columnName: 'post_title',
      type: 'string'
    },
    excerpt: {
      columnName: 'post_excerpt',
      type: 'string'
    },
    status: {
      columnName: 'post_status',
      type: 'string'
    },
    commentStatus: {
      columnName: 'comment_status',
      type: 'string'
    },
    pingStatus: {
      columnName: 'ping_status',
      type: 'string'
    },
    password: {
      columnName: 'post_password',
      type: 'text'
    },
    name: {
      columnName: 'post_name',
      type: 'string'
    },
    toPing: {
      columnName: 'to_ping',
      type: 'text'
    },
    pinged: {
      columnName: 'pinged',
      type: 'text'
    },
    modified: {
      columnName: 'post_modified',
      type: 'datetime'
    },
    modifiedGMT: {
      columnName: 'post_modified_gmt',
      type: 'datetime'
    },
    contentFiltered: {
      columnName: 'post_content_filtered',
      type: 'text'
    },
    parent: {
      columnName: 'post_parent',
      type: 'integer'
    },
    guid: {
      columnName: 'guid',
      type: 'string'
    },
    menuOrder: {
      columnName: 'menu_order',
      type: 'integer'
    },
    type: {
      columnName: 'post_type',
      type: 'string'
    },
    mimeType: {
      columnName: 'post_mime_type',
      type: 'string'
    },
    commentCount: {
      columnName: 'comment_count',
      type: 'integer'
    }
  },
  tableName: 'wp_posts',
  autoCreatedAt: false,
  autoUpdatedAt: false,
};