const ban = document.getElementById("bandages");
const chug = document.getElementById("chugJug");
const med = document.getElementById("medKits");
const sheild = document.getElementById("shieldPotion");
const slurp = document.getElementById("slurpJuice");
const inv = document.getElementById("restock")

window.onload = function () {

	ban.addEventListener('click', function () {
		alert("bandages, hide and apply")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'bandages',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});
	chug.addEventListener('click', function () {
		alert("Chug Jug, drink it all now!!")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'chugJug',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});

	med.addEventListener('click', function () {
		alert("Med Kit, get your health up")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'medKits',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});
	sheild.addEventListener('click', function () {
		alert("Sheild Potion Good Choice!!")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'shieldPotion',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});

	slurp.addEventListener('click', function () {
		alert("ssssssluuurrrp JUICE!!!")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'slurpJuice',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});

	inv.addEventListener('click', function(){
		
	})
}
