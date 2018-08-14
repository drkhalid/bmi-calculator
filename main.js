let myWeight = 0;
let myHeight = 0;
$('#weight').on('keyup', (e) => myWeight = parseInt(e.target.value, 10))
$('#height').on('keyup', (e) => myHeight = parseInt(e.target.value, 10))

$('#calculate').on('click', function () {

    (e) => myWeight = parseInt(e.target.value, 10);
    (e) => myHeight = parseInt(e.target.value, 10);
    let myBmi = (parseInt((myWeight / ((myHeight * myHeight) / 10000)), 10))
    $('#bmi').html(`Your BMI is` + ' ' + ' ' + myBmi)
})