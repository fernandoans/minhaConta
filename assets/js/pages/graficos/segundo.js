function criarGrafico2(meses, valores) {
    $('#grafico2').highcharts({
        chart: { type: 'bar' },
        title: { text: 'Movimento Mensal da Conta' },
        subtitle: { text: 'Ano 2020' },
        xAxis: {
            categories: meses,
            title: { text: null }
        },
        yAxis: {
            min: 0,
            title: { text: 'Valor (R$)', align: 'high' },
            labels: { overflow: 'justify' }
        },
        tooltip: {
            valuePrefix: 'R$'
        },
        plotOptions: {
            bar: {
                dataLabels: { enabled: false }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Vale',
            data: valores
        }]
    });
}

$.ajax({
    type: 'GET',
    url: './graphBaseCt2',
    data: JSON.stringify({
        mes: 'mes',
        valor: 'valor'
    }),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    async: true,
    success: function (data) {
        criarGrafico2(data.mes, data.valor);
    },
    failure: function (response) {
        var r = jQuery.parseJSON(response.responseText);
        alert('Mensagem: ' + r.Message);
        alert('StackTrace: ' + r.StackTrace);
        alert('Tipo: ' + r.ExceptionType);
    }
});
