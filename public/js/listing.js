window.onload = function() {

	$("#send").hide();
	$("#price_box").hide();
	$("#show_price_drop").click(function(event)
	 {
	    $(this).hide();
		$("#send").show();
		$("#price_box").show();
	 });

	$("#send").click(function(event){

		var str = $("#imagelink").attr("src");
	 	var price = $("#price_box").val();

	 	console.log(str.slice(8));    	
	 	console.log(price);

	 	var posting = $.post('/pricedrop/notify', { "max_price":  price , "item_path" : str.slice(8) } );
		
		posting.done(function(data) { 
			if (data[0] == "1")
				$("#result_positive").html(data.slice(1)); 
			else
				$("#result_negative").html(data.slice(1)); 
		});
	});

	$("#go_back").click(function(event){
		window.location.href = '/market/showcase';
	});
}