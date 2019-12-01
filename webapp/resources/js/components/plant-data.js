var plantData = [
	["2018 Jan", "7200"],
	["2018 Feb", "6800"],
	["2018 Mar", "6905"],
	["2018 Apr", "6985"],
	["2018 May", "7100"],
	["2018 Jun", "7000"],
	["2018 Jul", "6799"],
	["2018 Aug", "7150"],
	["2018 Sep", "7050"],
	["2018 Oct", "7205"],
	["2018 Nov", "7105"],
	["2018 Dec", "7150"],
	["2019 Jan", "7200"],
	["2019 Feb", "6800"],
	["2019 Mar", "6905"],
	["2019 Apr", "6985"],
	["2019 May", "7100"],
	["2019 Jun", "7000"],
	["2019 Jul", "6799"],
	["2019 Aug", "7150"],
	["2019 Sep", "7050"],
	["2019 Oct", "7205"],
	["2019 Nov", "7105"],
	["2019 Dec", "7150"],
]
  
var labels = [];
var plantValues = []
for (let i = 0; i < plantData.length; i++) {
	const element = plantData[i];
	labels.push(element[0]);
	plantValues.push(element[1]);

}

export const consumptionChartData = {
	type: 'line',
	data: {
		labels: labels,
		datasets: [
			{ // one line graph
				label: 'Energy Consumption (MWh)',
				data: plantValues,
				backgroundColor: [
					'rgba(241,141,15,0.5)', // Orange
				],
				borderColor: [
					'rgb(245,141,15)',
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

export default consumptionChartData;