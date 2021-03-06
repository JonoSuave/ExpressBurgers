var chart;

window.createChart = (count) => {
    var ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: count
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}