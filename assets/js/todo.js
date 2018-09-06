//alert("connected"); 

//line through completed task
$("ul").on("click", "li", function(){
	$(this).toggleClass("taskDone");
});

//press "trash can" to fade out completed task
$("ul").on("click", "li span",function(event){
	$(this).parent().fadeOut(500, function(){
		this.remove();
	});
	event.stopPropagation();
});

//Enter text to create new tasks
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newTask = $(this).val();
		$(this).val(""); 
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newTask + "</li>");
	}
})

//"Plus sign" to hide input bar
$(".fas.fa-plus").on("click", function(){
	$("input[type='text']").slideToggle(200);
});