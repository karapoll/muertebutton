
// $("button").mouseenter(function()
// {
// 	var x = Math.round(Math.random() * 10);
// 	var y = Math.round(Math.random() * 10);

//    $("button").animate({left:"x+'rem'",right:"y+'rem'"},500);
// })

// $("button").mouseout(function()
// {
//    $("button").animate({left:"0",right:"0"},50);
// })


// $("button").mouseover(function()
// {
//    $("button").css({
//    		left:(Math.random() * 50)+"rem",
//    		right:(Math.random() * 50)+"rem",
//    		top:(Math.random() * 50)+"rem",
//    		bottom:(Math.random() * 50)+"rem",
//    	},50);
// })


$("button").mouseover(function()
{
   $("button").animate({
   		left:(Math.random() * 50)+"rem",
   		right:(Math.random() * 50)+"rem",
   		top:(Math.random() * 50)+"rem",
   		bottom:(Math.random() * 50)+"rem",
   	},5);
})


// $("button").mouseenter(function()
// {
//    $("button").animate({
//    		left:(Math.random() * 50) + "rem",
//    		right:(Math.random() * 50) + "rem",
//    		top:(Math.random() * 50) + "rem",
//    		bottom:(Math.random() * 50) + "rem",
//    	},50);
// })

// $("button").mouseout(function()
// {
//    $("button").animate({
//    		left: 32 + "rem",
//    		right: 0 + "rem",
//    		top: 26 + "rem",
//    		bottom: 0 + "rem",
//    	},2000);
// })