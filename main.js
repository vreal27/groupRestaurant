$(document).ready(function(){

	$("#tab2, #tab3, #tab4").hide();
	$("#first").addClass("active")
	$('.information').on('click','a', function(e){
		e.preventDefault();
		$('.information a').removeClass('active');
		$(this).addClass('active');
		$(this.hash).show().siblings().hide();
	})

	const container1 = document.querySelector("#apps")

	var appTemplate = ""

	menu.appetizers.forEach(function(item){

		appTemplate += `
						<ul>
							<li>${item.name}........${item.price}</li>
							<li>${item.description}</li>
							<li>${item.extra} </li>
						</ul>`
	})

	container1.innerHTML = appTemplate

	const container2 = document.querySelector("#entrees")

	var entreeTemplate = ""

	menu.entrees.forEach(function(item){

		entreeTemplate += `
						<ul>
							<li>${item.name}........${item.price}</li>
							<li>${item.description}</li>
							<li>${item.extra} </li>
						</ul>`
	})

	container2.innerHTML = entreeTemplate


	const container3 = document.querySelector("#desserts")

	var dessertTemplate = ""

	menu.desserts.forEach(function(item){

		dessertTemplate += `
						<ul>
							<li>${item.name}........${item.price}</li>
							<li>${item.description}</li>
							<li>${item.extra} </li>
						</ul>`
	})

	container3.innerHTML = dessertTemplate
})