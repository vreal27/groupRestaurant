$(document).ready(function(){
	$(".panel").hide();
	$('.information').on('click','a', function(e){
		e.preventDefault();
		$('.information a').removeClass('active');
		$(this).addClass('active');
		$(this.hash).show().siblings().hide();
	})

})