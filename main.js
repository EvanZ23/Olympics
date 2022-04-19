my_Canvas = document.getElementById("Drawing");

sheet = my_Canvas.getContext('2d');

pen_color = "green";
pen_width = 6;

sheet.beginPath();
sheet.strokeStyle = "black";
sheet.lineWidth = pen_width;
sheet.arc(300,300,50,0,2 * Math.PI);
sheet.stroke();

sheet.beginPath();
sheet.strokeStyle = "blue";
sheet.lineWidth = pen_width;
sheet.arc(175,300,50,0,2 * Math.PI);
sheet.stroke();

sheet.beginPath();
sheet.strokeStyle = "red";
sheet.lineWidth = pen_width;
sheet.arc(425,300,50,0,2 * Math.PI);
sheet.stroke();

sheet.beginPath();
sheet.strokeStyle = "yellow";
sheet.lineWidth = pen_width;
sheet.arc(235,350,50,0,2 * Math.PI);
sheet.stroke();

sheet.beginPath();
sheet.strokeStyle = "green";
sheet.lineWidth = pen_width;
sheet.arc(360,350,50,0,2 * Math.PI);
sheet.stroke();

