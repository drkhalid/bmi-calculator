let myWeight = 0;
let myHeight = 0;
$('#weight').on('keyup', (e) => myWeight = parseInt(e.target.value, 10))
$('#height').on('keyup', (e) => myHeight = parseInt(e.target.value, 10))

$('#calculate').on('click', function () {

    (e) => myWeight = parseInt(e.target.value, 10);
    (e) => myHeight = parseInt(e.target.value, 10);
    let myBmi = ((myWeight / ((myHeight * myHeight) / 10000))).toFixed(2)
    $('#bmi').html(myBmi);
    if (myBmi < 18.5) {
        $('#result').html("You are under weight")
    } else if (myBmi > 24.9) {
        $('#result').html("You are over weight")
    } else {
        $('#result').html("You have normal weight")
    }

})