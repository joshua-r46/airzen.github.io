document.addEventListener('DOMContentLoaded', () => {
    // AQI Trends Chart
    const ctxTrend = document.getElementById('aqiTrendChart').getContext('2d');
    const aqiTrendChart = new Chart(ctxTrend, {
        type: 'line',
        data: {
            labels: [
                '12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM', '12 PM',
                '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'
            ],
            datasets: [
                {
                    label: 'Delhi',
                    data: [280, 270, 290, 310, 350, 380, 370, 360, 340, 320, 310, 300],
                    borderColor: '#FF6B6B',
                    backgroundColor: 'rgba(255, 107, 107, 0.4)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Mumbai',
                    data: [120, 130, 110, 140, 160, 170, 180, 185, 170, 165, 160, 155],
                    borderColor: '#4169E1',
                    backgroundColor: 'rgba(65, 105, 225, 0.3)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Bangalore',
                    data: [70, 60, 65, 75, 90, 100, 95, 88, 83, 79, 75, 70],
                    borderColor: '#2E8B57',
                    backgroundColor: 'rgba(46, 139, 87, 0.3)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: { mode: 'index', intersect: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 400,
                    title: { display: true, text: 'AQI Value' }
                },
                x: {
                    title: { display: true, text: 'Time' }
                }
            }
        }
    });

    // Pollutant Composition Chart (Pie)
    const ctxPollutant = document.getElementById('pollutantChart').getContext('2d');
    const pollutantChart = new Chart(ctxPollutant, {
        type: 'doughnut',
        data: {
            labels: ['PM2.5', 'PM10', 'NO2', 'SO2', 'CO', 'O3'],
            datasets: [{
                label: 'Pollutant Concentration (%)',
                data: [40, 25, 15, 8, 7, 5],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ],
                hoverOffset: 30
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'right' },
                tooltip: { enabled: true }
            }
        }
    });

    // Weekly AQI Comparison Chart (Bar)
    const ctxWeekly = document.getElementById('weeklyChart').getContext('2d');
    const weeklyChart = new Chart(ctxWeekly, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Delhi',
                    data: [320, 330, 310, 300, 340, 280, 260],
                    backgroundColor: '#FF6B6B'
                },
                {
                    label: 'Mumbai',
                    data: [155, 165, 160, 150, 170, 140, 130],
                    backgroundColor: '#4169E1'
                },
                {
                    label: 'Bangalore',
                    data: [75, 80, 70, 65, 85, 60, 55],
                    backgroundColor: '#2E8B57'
                }
            ]
        },
        options: {
            responsive: true,
            interaction: { intersect: false, mode: 'nearest' },
            plugins: {
                legend: { position: 'top' },
                tooltip: { enabled: true }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 400,
                    title: { display: true, text: 'AQI Value' }
                }
            }
        }
    });
});
