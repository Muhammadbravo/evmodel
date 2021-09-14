const arr = ['BMW', 'Byton', 'CUPRA',
		'Citroen', 'DS', 'Dacia',
		'Fiat', 'Ford', 'Honda',
		'Hyundai', 'JAC', 'Jaguar',
		'Kia', 'Lexus', 'Lightyear',
		'Lucid', 'MG', 'Mazda',
		'Mercedes', 'Mini', 'Nissan',
		'Opel', 'Peugeot', 'Polestar',
		'Porsche', 'Renault', 'SEAT',
		'Seres', 'Skoda', 'Smart',
		'Sono', 'Tesla', 'Toyota',
		'Volkswagen', 'Volvo'
	]

let vehicle = document.getElementById("vehiclename")
var option

arr.forEach((item) => {
	option = document.createElement('option')
	option.value = item 
	vehicle.appendChild(option)
} )