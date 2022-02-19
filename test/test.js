
var data = [
    {x: 'cool', y: 120},
    {x: 'swag', y: 60},
    {x: 'ok', y: 30},
    {x: 'yeah', y: 80},
    {x: 'fnaf4', y: 50}
];

var chart = anychart.bar();

chart.title('Swag Test');
chart.xAxis().title("Swagg");
chart.yAxis().title("cool chart!");

var series = chart.bar(data);

chart.container("chart");

chart.draw();

var i = 0;

var txt = 'AYOOOOOOOOOOOOOOOOO';
var speed = 70;

function typeWriter() {

    // Text
    if (i < txt.length) {

        document.getElementById("intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

        if(i == txt.length){
            showArr();
        }

    }

}

function showArr(){
    document.getElementById("arrow").style.visibility = 'visible';

    showChart();
}

function showChart(){

    setTimeout(() => { document.getElementById("chartholder").classList.add("fade-in");
        document.getElementById("chart").style.visibility = 'visible'; }, 1000);


}
