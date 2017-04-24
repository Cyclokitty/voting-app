var ctx = document.getElementById('chart');

var myDonut = new Chart(ctx, {
  type: 'doughnut',
  data: {
  labels: poll.details,
  datasets: [
    {
      data: poll.data,
      backgroundColor: [
        "#b666d2",
        "#6BCAE2",
        "#FF0080",
        "#FFA500"
      ],
      hoverBackgroundColor: [
        "#b666d2",
        "#6BCAE2",
        "#FF0080",
        "#FFA500"
      ]
    }],
  }
});
