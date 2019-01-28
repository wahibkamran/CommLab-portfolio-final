var counter = 1;

$('#hovertxt').css('opacity', 0);


$("#container").hover(function(){

    if (counter == 3) {
    	document.getElementById("dispIMG").src = "grad1H.JPG";
    }
    else if (counter ==4) {
    	document.getElementById("dispIMG").src = "grad2H.JPG";    	
    }
    else if (counter == 5) {
    	document.getElementById("dispIMG").src = "grad3H.JPG";
    }
    else if (counter == 6) {
    	document.getElementById("dispIMG").src = "job1H.JPG";
    }
    else if (counter == 7) {
    	document.getElementById("dispIMG").src = "job2H.JPG";
    }
    else if (counter == 8) {
    	document.getElementById("dispIMG").src = "job3H.JPG";
    }
    else if (counter == 9) {
    	document.getElementById("dispIMG").src = "gap1H.JPG";
    }
    else if (counter == 10) {
    	document.getElementById("dispIMG").src = "gap2H.JPG";
    }
    else if (counter == 11) {
    	document.getElementById("dispIMG").src = "gap3H.JPG";
    }
    }, function(){
    if (counter ==3) {
    	document.getElementById("dispIMG").src = "grad1.JPG";
    }
    else if (counter ==4) {
    	document.getElementById("dispIMG").src = "grad2.JPG";
    }
    else if (counter == 5) {
    	document.getElementById("dispIMG").src = "grad3.JPG";
    }
    else if (counter == 6) {
    	document.getElementById("dispIMG").src = "job1.JPG";
    }
    else if (counter == 7) {
    	document.getElementById("dispIMG").src = "job2.JPG";
    }
    else if (counter == 8) {
    	document.getElementById("dispIMG").src = "job3.JPG";
    }
    else if (counter == 9) {
    	document.getElementById("dispIMG").src = "gap1.JPG";
    }
    else if (counter == 10) {
    	document.getElementById("dispIMG").src = "gap2.JPG";
    }
    else if (counter == 11) {
    	document.getElementById("dispIMG").src = "gap3.JPG";
    }
});


$('#submit').on('click', function() {
        if (counter ==1) {
        $('#container').css('opacity', 1);

        document.getElementById("dispIMG").src = counter + ".JPG";
        counter ++;
		 }

        else if (counter ==2){
        $('#container').css('opacity', 0);
        setTimeout(function(){document.getElementById("dispIMG").src = "confusion.JPG"},1000);
        setTimeout(function(){$('#container').css('opacity', 1)},1000);
        setTimeout(function(){$('#container1').css('opacity', 1);}, 3000);
        $('#submit').css('opacity', 0);
        }

        else if (counter ==3){
        	$('#container').css('opacity', 0);
    		setTimeout(function(){document.getElementById("dispIMG").src = "grad2.JPG"},1000);
    		setTimeout(function(){$('#container').css('opacity', 1)},1000);
    		counter++;
        }

        else if (counter ==4){
        	$('#container').css('opacity', 0);
    		setTimeout(function(){document.getElementById("dispIMG").src = "grad3.JPG"},1000);
    		setTimeout(function(){$('#container').css('opacity', 1)},1000);
    		$('#submit').css('opacity', 0);
    		$('#containerSure').css('opacity', 1);
    		$('#container2').css('opacity', 1);
    		counter++;
        }

        else if (counter ==6){
        	$('#container').css('opacity', 0);
    		setTimeout(function(){document.getElementById("dispIMG").src = "job2.JPG"},1000);
    		setTimeout(function(){$('#container').css('opacity', 1)},1000);
    		counter++;
        }

        else if (counter ==7){
        	$('#container').css('opacity', 0);
    		setTimeout(function(){document.getElementById("dispIMG").src = "job3.JPG"},1000);
    		setTimeout(function(){$('#container').css('opacity', 1)},1000);
    		$('#submit').css('opacity', 0);
    		$('#containerSure').css('opacity', 1);
    		$('#container2').css('opacity', 1);
    		counter++;
        }

        else if (counter ==9){
        	$('#container').css('opacity', 0);
    		setTimeout(function(){document.getElementById("dispIMG").src = "gap2.JPG"},1000);
    		setTimeout(function(){$('#container').css('opacity', 1)},1000);
    		counter++;
        }
        
        else if (counter ==10){
        	$('#container').css('opacity', 0);
    		setTimeout(function(){document.getElementById("dispIMG").src = "gap3.JPG"},1000);
    		setTimeout(function(){$('#container').css('opacity', 1)},1000);
    		$('#submit').css('opacity', 0);
    		$('#containerSure').css('opacity', 1);
    		$('#container2').css('opacity', 1);
    		counter++;
        }
});



$("#grad").click(function(){
	$('#container2').css('opacity', 0);
	$('#container1').css('opacity', 0);
	$('#container').css('opacity', 0);
    $('#hovertxt').css('opacity', 1);

	
	$('#container').css('opacity', 0);
    setTimeout(function(){document.getElementById("dispIMG").src = "grad1.JPG"},1000);
    setTimeout(function(){$('#container').css('opacity', 1)},1000);
    $('#submit').css('opacity', 1);
    counter = 3;
	
	$("#yes").click(function(){
		counter=1;
        $('#hovertxt').css('opacity', 0);
		$('#container').css('opacity', 0);
		
		setTimeout(function(){
			$('#container').css('opacity', 1)
			document.getElementById("dispIMG").src = "sure.JPG";
			document.getElementById("dispIMG").width= "800";
		}, 1000);
		setTimeout(function(){$('#container').css('opacity', 0)},3000);
        setTimeout(function(){document.getElementById("dispIMG").src = "gradEnd.JPG"},4000);
        setTimeout(function(){$('#container').css('opacity', 1)},4000);
        setTimeout(function(){$("#submit").css('opacity', 1)}, 4500);


		$('#container1').css('opacity', 0);
		$('#containerSure').css('opacity', 0);
		$('#container2').css('opacity', 0);
	});
	$('#no').click(function(){
		counter = 0;
        $('#hovertxt').css('opacity', 0);
		$('#container').css('opacity', 0);
		setTimeout(function(){$('#container').css('opacity', 1)},1500);
        setTimeout(function(){document.getElementById("dispIMG").src = "unsure.JPG"},1500);
        setTimeout(function(){$('#container1').css('opacity', 1)}, 2500);
        setTimeout(function(){document.getElementById("dispIMG").width= "800"}, 1500);
		$('#container2').css('opacity', 0);
		$('#containerSure').css('opacity', 0);
	});
});

$("#job").click(function(){
	$('#container2').css('opacity', 0);
	$('#container1').css('opacity', 0);
	$('#container').css('opacity', 0);
    $('#hovertxt').css('opacity', 1);


	$('#container').css('opacity', 0);
    setTimeout(function(){document.getElementById("dispIMG").src = "job1.JPG"},1000);
    setTimeout(function(){$('#container').css('opacity', 1)},1000);
    $('#submit').css('opacity', 1);
    counter = 6;
	

$("#yes").click(function(){
		counter = 1;
        $('#hovertxt').css('opacity', 0);
		$('#container').css('opacity', 0);
		
		setTimeout(function(){
			$('#container').css('opacity', 1)
			document.getElementById("dispIMG").src = "sure.JPG";
			document.getElementById("dispIMG").width= "800";
		}, 1000);
		setTimeout(function(){$('#container').css('opacity', 0)},3000);
        setTimeout(function(){document.getElementById("dispIMG").src = "jobEnd.JPG"},4000);
        setTimeout(function(){$('#container').css('opacity', 1)},4000);
        setTimeout(function(){$("#submit").css('opacity', 1)}, 4500);

		$('#container1').css('opacity', 0);
		$('#containerSure').css('opacity', 0);
		$('#container2').css('opacity', 0);
	});

$('#no').click(function(){
		counter = 0;
        $('#hovertxt').css('opacity', 0);
		$('#container').css('opacity', 0);
		setTimeout(function(){$('#container').css('opacity', 1)},1500);
        setTimeout(function(){document.getElementById("dispIMG").src = "unsure.JPG"},1500);
        setTimeout(function(){$('#container1').css('opacity', 1)}, 2500);
        setTimeout(function(){document.getElementById("dispIMG").width= "800"}, 1500);
		$('#container2').css('opacity', 0);
		$('#containerSure').css('opacity', 0);
	});

});

$("#gap").click(function(){
	$('#container2').css('opacity', 0);
	$('#container1').css('opacity', 0);
	$('#container').css('opacity', 0);
    $('#hovertxt').css('opacity', 1);


	$('#container').css('opacity', 0);
    setTimeout(function(){document.getElementById("dispIMG").src = "gap1.JPG"},1000);
    setTimeout(function(){$('#container').css('opacity', 1)},1000);
    $('#submit').css('opacity', 1);
    counter = 9;
	


$("#yes").click(function(){
		counter = 1;
        $('#hovertxt').css('opacity', 0);
		$('#container').css('opacity', 0);
		
		setTimeout(function(){
			$('#container').css('opacity', 1)
			document.getElementById("dispIMG").src = "sure.JPG";
			document.getElementById("dispIMG").width= "800";
		}, 1000);
		setTimeout(function(){$('#container').css('opacity', 0)},3000);
        setTimeout(function(){document.getElementById("dispIMG").src = "gapEnd.JPG"},4000);
        setTimeout(function(){$('#container').css('opacity', 1)},4000);
        setTimeout(function(){$("#submit").css('opacity', 1)}, 4500);

		$('#container1').css('opacity', 0);
		$('#containerSure').css('opacity', 0);
		$('#container2').css('opacity', 0);
	});

$('#no').click(function(){
		counter = 0;
        $('#hovertxt').css('opacity', 0);
		$('#container').css('opacity', 0);
		setTimeout(function(){$('#container').css('opacity', 1)},1500);
        setTimeout(function(){document.getElementById("dispIMG").src = "unsure.JPG"},1500);
        setTimeout(function(){$('#container1').css('opacity', 1)}, 2500);
        setTimeout(function(){document.getElementById("dispIMG").width= "800"}, 1500);
		$('#container2').css('opacity', 0);
		$('#containerSure').css('opacity', 0);

	});
	
});


	



