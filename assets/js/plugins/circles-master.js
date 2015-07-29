var CirclesMaster = function () {

    return {

        //Circles Master v1
        initCirclesMaster1: function () {
        	//Circles 1
		    Circles.create({
		        id:         'circle-1',
		        percentage: 90,
		        radius:     80,
		        width:      8,
		        number:     90,
		        text:       '%',
		        colors:     ['#d7d7d7', '#ea661b'],
		        duration:   2000
		    })

        	//Circles 2
		    Circles.create({
		        id:         'circle-2',
		        percentage: 80,
		        radius:     80,
		        width:      8,
		        number:     80,
		        text:       '%',
		        colors:     ['#d7d7d7', '#2980b9'],
		        duration:   2000
		    })

        	//Circles 3
		    Circles.create({
		        id:         'circle-3',
		        percentage: 80,
		        radius:     80,
		        width:      8,
		        number:     80,
		        text:       '%',
		        colors:     ['#d7d7d7', '#dee015'],
		        duration:   2000
		    })

		    //Circles 4
		    Circles.create({
		        id:         'circle-4',
		        percentage: 85,
		        radius:     80,
		        width:      8,
		        number:     85,
		        text:       '%',
		        colors:     ['#d7d7d7', '#2cc76a'],
		        duration:   2000
		    })
        },
        
        //Circles Master v2
        initCirclesMaster2: function () {
		    var colors = [
		        ['#D3B6C6', '#9B6BCC'], ['#C9FF97', '#72c02c'], ['#BEE3F7', '#3498DB'], ['#FFC2BB', '#E74C3C']
		    ];

		    for (var i = 1; i <= 4; i++) {
		        var child = document.getElementById('circles-' + i),
		            percentage = 45 + (i * 9);
		            
		        Circles.create({
		            id:         child.id,
		            percentage: percentage,
		            radius:     70,
		            width:      2,
		            number:     percentage / 1,
		            text:       '%',
		            colors:     colors[i - 1],
		            duration:   2000,
		        });
		    }	    
        }

    };
    
}();