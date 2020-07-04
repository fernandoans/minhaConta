/**
 * MovimentoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

nomeMes = ['', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

module.exports = {

  graphBase: function (req, res) {
    var myQuery = "select month(dtEntrada) as mes, sum(valor) as valor from movimento " +
                  "group by month(dtEntrada)";
    var meses = [];
    var valor = [];
    Movimento.getDatastore().sendNativeQuery(myQuery, function (err, movimentos) {
      sails.log('Entrei aqui...');
      if (err) {
        return res.json({"status": 0, "error": err});
      } else {
        // sails.log(movimentos);
        for (var i of movimentos.rows) {
          meses.push(nomeMes[i.mes]);
          valor.push(i.valor);
        }
        return res.json({"mes": meses, "valor": valor});
      }
    });
  }
};
