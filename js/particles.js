$(function (){  

	$('.quantity_el').focus();
	$('.enter').on('click',function(){
		var qu_el = $('.quantity_el').val();
		enter_canvas(qu_el);
	});
	$(document).keyup(function(){
	    if(event.keyCode==13){
			var qu_el = $('.quantity_el').val();
			enter_canvas(qu_el);
	    }
	});
	enter_canvas(8);

function enter_canvas(qu_el){
// Motion of charged particles in a magnetic field
// Движение заряженных частиц в магнитном поле
	var canvas = document.getElementById("particles");
	var ctx = canvas.getContext('2d');
	var currentAngle = 0; 
	var radius = 60; 
	var baseX = 220; 
	var baseY = 220; 
	var counterClockwise = false;
	var duration = 10000;
	var current = duration / 960000;
	var startTime = new Date().getTime();
	function run() {
		var time = (new Date().getTime()- startTime)/ duration;
		var startAngle1 = inRad(0);

		var startAngle1_1 = inRad(45);

		var startAngle2 = inRad(90);
		var startAngle2_2 = inRad(135);
		var startAngle3 = inRad(180);
		var startAngle3_3 = inRad(225);
		var startAngle4 = inRad(270);
		var startAngle4_4 = inRad(315);
		var endAngle1 = inRad(360);

		var endAngle1_1 = inRad(405);

		var endAngle2 = inRad(450);
		var endAngle2_2 = inRad(495);
		var endAngle3 = inRad(540);
		var endAngle3_3 = inRad(585);
		var endAngle4 = inRad(630);
		var endAngle4_4 = inRad(675);
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'rgba(204,0,65,1)';

		if(time < 1) {
			requestAnimationFrame(run);
			endAngle1 = startAngle1 + (endAngle1 - startAngle1) * time;
			endAngle1_1 = startAngle1_1 + (endAngle1_1 - startAngle1_1) * time;
			endAngle2_2 = startAngle2_2 + (endAngle2_2 - startAngle2_2) * time;
			endAngle3_3 = startAngle3_3 + (endAngle3_3 - startAngle3_3) * time;
			endAngle4_4 = startAngle4_4 + (endAngle4_4 - startAngle4_4) * time;
			endAngle2 = startAngle2 + (endAngle2 - startAngle2) * time;
			endAngle3 = startAngle3 + (endAngle3 - startAngle3) * time;
			endAngle4 = startAngle4 + (endAngle4 - startAngle4) * time;
		
			currentAngle += current;
		}

		ctx.clearRect(0, 0, 600, 600);
		//Orbit	
		
	   //addCircles();

	   // 30 30 - 0.5711415369
	   // 60 60 - 0.6286118005

	   // 30 60 - 0.970222302
	   // 60 30 - 0.2295310354

	   // 15 75 - 0.7860195549
	   // 75 15 - 0.573734774

	   // 30 75 - 0.9548914468
	   // 75 30 - 0.2710165426

	   // 15 60 - 0.8013504103
	   // 60 15 - 0.532249267

	    ctx.drawEllipse(baseX - radius, baseY, 0, radius,inRad(0),startAngle1,endAngle1,false);
	    //ctx.drawEllipse(baseX - (radius * 0.952412980), baseY - (radius * 0.304810621), 0, radius,inRad(0),startAngle1_1,endAngle1_1,false);
	    ctx.drawEllipse(baseX - (radius * 0.688112756), baseY - (radius * 0.688112756), 0, radius,inRad(),startAngle1_1,endAngle1_1,false);
	  //  ctx.drawEllipse(baseX - (radius * 0.304810621), baseY - (radius * 0.952412980), 0, radius,inRad(),startAngle1_1 + inRad(30),endAngle1_1 + inRad(30),false);
	    //ctx.drawEllipse(baseX - (radius * 0.573734774), baseY - (radius * 0.7860195549), 0, radius,inRad(),startAngle1_1-inRad(7.5),endAngle1_1-inRad(7.5),false);
	    ctx.drawEllipse(baseX, baseY-radius, 0, radius,inRad(0),startAngle2,endAngle2,false);
	   /* ctx.drawEllipse(baseX + (radius * 0.688112756), baseY + (radius * -0.688112756), 0, radius,inRad(0),startAngle2_2,endAngle2_2,false);
	    ctx.drawEllipse(baseX+radius, baseY, 0, radius,inRad(0),startAngle3,endAngle3,false);
		ctx.drawEllipse(baseX + (radius * 0.688112756), baseY + (radius * 0.688112756), 0, radius,inRad(0),startAngle3_3,endAngle3_3,false);
	    ctx.drawEllipse(baseX, baseY+radius, 0, radius,inRad(0),startAngle4,endAngle4,false);
	    ctx.drawEllipse(baseX + (radius * -0.688112756), baseY + (radius * 0.688112756), 0, radius,inRad(0),startAngle4_4,endAngle4_4,false);*/
	    






	   // ctx.drawEllipse(baseX - radius, baseY, 0, radius,inRad(0),startAngle1,endAngle1,false);
	    //ctx.drawEllipse((baseX - radius) + 2, (baseY - radius) + 35,  0, radius,inRad(0),startAngle1_1,endAngle1_1,false);
	    //ctx.drawEllipse(baseX - (radius * 0.688112756), baseY - (radius * 0.688112756), 0, radius,inRad(0),startAngle1_1,endAngle1_1,false);
	   // ctx.drawEllipse(baseX - (radius * 0.4646564585), baseY - (radius * 0.8550395945), 0, radius,inRad(0),startAngle1_1,endAngle1_1,false);
	   // ctx.drawEllipse(baseX, baseY-radius, 0, radius,inRad(0),startAngle2,endAngle2,false);
	    //ctx.drawEllipse(baseX + (radius *  0.714015812), baseY + (radius * -0.69620649), 0, radius,inRad(0),startAngle2_2,endAngle2_2,false);
	    //ctx.drawEllipse(baseX + (radius * 0.688112756), baseY + (radius * -0.688112756), 0, radius,inRad(0),startAngle2_2,endAngle2_2,false);
	   // ctx.drawEllipse(baseX+radius, baseY, 0, radius,inRad(0),startAngle3,endAngle3,false);
		//ctx.drawEllipse(baseX + (radius * 0.688112756), baseY + (radius * 0.688112756), 0, radius,inRad(0),startAngle3_3,endAngle3_3,false);
	    //ctx.drawEllipse(baseX, baseY+radius, 0, radius,inRad(0),startAngle4,endAngle4,false);
	    //ctx.drawEllipse(baseX + (radius * -0.688112756), baseY + (radius * 0.688112756), 0, radius,inRad(0),startAngle4_4,endAngle4_4,false);
	    
		//Electrons
		var vx = Math.cos(currentAngle) * radius;
		var vy = Math.sin(currentAngle) * radius;
		addElectrons(vx,vy);
	}


	var gaps_angle = 360/qu_el;

	function addCircles(){
		var add_angle = 0;
		var i = 0;
		var all_el = [];	
		var circle_angle = (Math.sin(gaps_angle) + Math.cos(gaps_angle))/2;
		var circle_angleX = (Math.abs(Math.sin(gaps_angle)) + Math.abs(Math.cos(90 - gaps_angle)))/2;
		var circle_angleY = (Math.abs(Math.sin(90 - gaps_angle)) + Math.abs(Math.cos(gaps_angle)))/2;
		var startAngle = inRad(0);
		var endAngle = inRad(360);
		console.log('circle_angleX - ' + circle_angleX);
		console.log('circle_angleY - ' + circle_angleY);
		while(i < qu_el){
			add_angle += gaps_angle; 
			startAngle += inRad(gaps_angle);
			endAngle += inRad(gaps_angle);
			
			var baseX = 220; 
			var baseY = 220; 
			if (add_angle > 0 && add_angle < 90) {
				if (add_angle < 45) {
					baseX = baseX - (radius * (circle_angleX));
					baseY = baseY - (radius * (circle_angleY));	
				}else{
					baseX = baseX - (radius * (circle_angleY));
					baseY = baseY - (radius * (circle_angleX));	
				}
			}else if(add_angle > 90 && add_angle < 180){
				if (add_angle < 135) {
					baseX = baseX + (radius * (circle_angleX));
					baseY = baseY - (radius * (circle_angleY));	
				}else{
					baseX = baseX + (radius * (circle_angleY));
					baseY = baseY - (radius * (circle_angleX));	
				}
			}else if(add_angle > 180 && add_angle < 270){
				if (add_angle < 225) {
					baseX = baseX + (radius * (circle_angleX));
					baseY = baseY + (radius * (circle_angleY));	
				}else{
					baseX = baseX + (radius * (circle_angleY));
					baseY = baseY + (radius * (circle_angleX));	
				}
			}else if(add_angle > 270 && add_angle < 360){
				if (add_angle < 315) {
					baseX = baseX - (radius * (circle_angleX));
					baseY = baseY + (radius * (circle_angleY));	
				}else{
					baseX = baseX - (radius * (circle_angleY));
					baseY = baseY + (radius * (circle_angleX));	
				}
			}else if(add_angle == 360){
				baseX = baseX - radius;
			}else if(add_angle == 90){
				baseY = baseY - radius;
			}else if(add_angle == 180){
				baseX = baseX + radius;
			}else if(add_angle == 270){
				baseY = baseY + radius;
			}

			all_el.push(ctx.drawEllipse(baseX, baseY, 0, radius,inRad(0),startAngle,endAngle,false) );
			i++;
		}
		return all_el;
	}
	function addElectrons(vx,vy){
		var add_angle = 0;
		var all_el = [];		
		var i = 0;
		while(i < qu_el){
			add_angle += gaps_angle; 	
			all_el.push( ctx.electron(baseX, baseY, 5, 5, inRad(add_angle), baseX - radius + vx, baseY + vy) );
			i++;
		}
		return all_el;	
	}

	CanvasRenderingContext2D.prototype.drawEllipse = function(x, y, a, radius ,rotate, startAngle, endAngle,counterClockwise) {
        this.save();
	    this.beginPath();
	    this.translate(x, y);
        this.rotate(rotate);		
        //this.scale(a / radius, 1);	
        this.arc(0, 0, radius, startAngle, endAngle , counterClockwise);		
	    this.restore();				 
	    this.stroke();
	}
	CanvasRenderingContext2D.prototype.electron = function(x, y, a, b,rotate, x_el, y_el) {
        this.save();
	    this.beginPath();
	    this.translate(x, y);
	    this.rotate(rotate);	
	    this.translate(-x, -y);	
        this.scale(a / b, 1);				
        this.arc(x_el, y_el, b, 0, Math.PI * 2, true);	
	    this.restore();				 
	    this.closePath();
	    this.fillStyle = '#000000';
	    this.save(); 
	    this.fill();
	}
	function getRandomInt(min, max){
	 	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function inRad(num) {
		return num * Math.PI / 180;
	}
//запуск анимации
	run();
}

});