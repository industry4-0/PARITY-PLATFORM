var smpData = [
  ["2017 Jan", "74.6"],
  ["2017 Feb", "56.22"],
  ["2017 Mar", "46.22"],
  ["2017 Apr", "44.57"],
  ["2017 May", "45.73"],
  ["2017 Jun", "51.32"],
  ["2017 Jul", "52.54"],
  ["2017 Aug", "50.57"],
  ["2017 Sep", "53.06"],
  ["2017 Oct", "54.89"],
  ["2017 Nov", "70.45"],
  ["2017 Dec", "56.19"],
  ["2018 Jan", "53.5"],
  ["2018 Feb", "51.63"],
  ["2018 Mar", "44.28"],
  ["2018 Apr", "50.35"],
  ["2018 May", "56.32"],
  ["2018 Jun", "60.69"],
  ["2018 Jul", "64.42"],
  ["2018 Aug", "63.83"],
  ["2018 Sep", "67.06"],
  ["2018 Oct", "71.4"],
  ["2018 Nov", "69.3"],
  ["2018 Dec", "71.25"],
  ["2019 Jan", "75.28"],
  ["2019 Feb", "69.01"],
  ["2019 Mar", "59.87"],
  ["2019 Apr", "62.4"],
  ["2019 May", "65.91"],
  ["2019 Jun", "68.14"],
  ["2019 Jul", "62.14"],
  ["2019 Aug", "64.02"],
  ["2019 Sep", "60.91"],
  ["2019 Oct", "63.32"],
]

var fixedPrices = [
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
  "48.997742",
]

var labels = [];
var smpValues = []
for (let i = 0; i < smpData.length; i++) {
  const element = smpData[i];
  labels.push(element[0]);
  smpValues.push(element[1]);

}

export const smpChartData = {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      { // one line graph
        label: 'SMP (€/MWh)',
        data: smpValues,
        backgroundColor: [
          'rgba(241,141,15,0.5)', // Orange
        ],
        borderColor: [
          'rgb(245,141,15)',
        ],
        borderWidth: 3,
        fill: true
      },
      { // one line graph
        label: 'Fixed Price (€)',
        data: fixedPrices,
        backgroundColor: [
          'rgb(54,73,93)', // Blue
        ],
        borderColor: [
          '#36495d',
        ],
        borderWidth: 3,
        fill: true
      },
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
}

export default smpChartData;