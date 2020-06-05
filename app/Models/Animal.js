'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Animal extends Model {
  usuario () {
    return this.hasOne('App/Models/Cliente', 'cliente_id', 'id');
  }
}

module.exports = Animal