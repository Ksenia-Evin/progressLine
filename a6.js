function init() {
	$("#btn1").click(addOnePercent);
	$("#btn2").click(addThreePercent);
	$("#btn3").click(addSevenPercent);

}
let width = 0;
function addOnePercent () {
	width++;
	$(".progress-bar").width(width + "%");
}

function addThreePercent () {
	width = width + 3;
	$(".progress-bar").width(width + "%");
}

function addSevenPercent () {
	width = width + 7;
	$(".progress-bar").width(width + "%");
}

$(document).ready(init);