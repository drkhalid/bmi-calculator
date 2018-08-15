let myWeight = 0;
let myHeight = 0;
$('#weight').on('change', (e) => myWeight = parseInt(e.target.value, 10))
$('#height').on('change', (e) => myHeight = parseInt(e.target.value, 10))

$('#calculate').on('click', function () {

    (e) => myWeight = parseInt(e.target.value, 10);
    (e) => myHeight = parseInt(e.target.value, 10);
    let myBmi = ((myWeight / ((myHeight * myHeight) / 10000)) || 0).toFixed(2)
    $('#bmi').html(myBmi);
    if (myBmi == 0.00) {
        $('#result').html("Please enter your data");
        $('#bmi').html(' ');
    } else if (myBmi < 18.5) {
        $('#result').html("You are under weight")
    } else if (myBmi > 24.9) {
        $('#result').html("You are over weight")
    } else {
        $('#result').html("You have normal weight")
    }

})