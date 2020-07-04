/**
 * MovimentoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var nomeMes = ['', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

module.exports = {

  graphBaseCt1: function (req, res) {
    var myQuery = 'select month(dtEntrada) as mes, sum(valor) as valor from movimento ' +
      'where cliente = 1 group by month(dtEntrada) order by month(dtEntrada)';
    var meses = [];
    var valor = [];
    Movimento.getDatastore().sendNativeQuery(myQuery, function (err, movimentos) {
      if (err) {
        return res.json({ 'status': 0, 'error': err });
      } else {
        // sails.log(movimentos);
        for (var i of movimentos.rows) {
          meses.push(nomeMes[i.mes]);
          valor.push(i.valor);
        }
        return res.json({ 'mes': meses, 'valor': valor });
      }
    });
  },
  graphBaseCt2: function (req, res) {
    var myQuery = 'select month(dtEntrada) as mes, sum(valor) as valor from movimento ' +
      'where cliente = 2 group by month(dtEntrada) order by month(dtEntrada)';
    var meses = [];
    var valor = [];
    Movimento.getDatastore().sendNativeQuery(myQuery, function (err, movimentos) {
      if (err) {
        return res.json({ 'status': 0, 'error': err });
      } else {
        // sails.log(movimentos);
        for (var i of movimentos.rows) {
          meses.push(nomeMes[i.mes]);
          valor.push(i.valor);
        }
        return res.json({ 'mes': meses, 'valor': valor });
      }
    });
  }
};
