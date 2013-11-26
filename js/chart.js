      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'GIT', 'SVN'],
          ['2009',  2.4,      57.5],
          ['2010',  6.8,      58.3],
          ['2011',  12.8,      51.3],
          ['2012',  27.6,      46.0],
          ['2013',  36.3,      37.8]
        ]);

        var options = {
          title: 'Qual gerenciador de código utiliza? %',
          backgroundColor:'#FFF',
          enableInteractivity:true,
          colors:['orangered','purple'],
          areaOpacity:.0,
          tooltip:{trigger:'focus'},
          pointSize:8,
          focusTarget:'category',
          height:500
        };


        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }