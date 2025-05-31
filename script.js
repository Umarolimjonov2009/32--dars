const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Yamal', 'Mbappe', 'Vini Jr', 'Haaland', 'Rodrygo', 'Bellingham'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
const ctx2 = document.getElementById('myChart');

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Yamal', 'Mbappe', 'Vini Jr', 'Haaland', 'Rodrygo', 'Bellingham'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });