const MIN_Y = -5;
const MAX_Y = 3;
var rParametr = 0;

function validateAndSend() {
  var y = $('input[name="yCord"]').val();
  if((y > MIN_Y)&&(y < MAX_Y)&&(y !== "")){
    sendAndGetAjax()
  } else {
    alert("Введено некорректное значение Y!")
  }
}

$('.send').click(function () {
  rParametr = this.value
  validateAndSend()
})

// function test(){
//   let info = `xCord=${$('input[name="xCord"]:checked').val()}&yCord=${$('input[name="yCord"]').val()}&rParametr=${rParametr}`
//   alert(info)
// }

function sendAndGetAjax() {
  $.ajax({
    url: 'count.php',
    type: 'post',
    dataType: 'text',
    data: `xCord=${$('input[name="xCord"]:checked').val()}&yCord=${$('input[name="yCord"]').val()}&rParametr=${rParametr}`,
    success: function (result) {
      $('#ResultTable').append(result)
    },
    error: function () {
      alert("Ошибка!")
    }
  });
}

function clearTable() {
  $(".deletebale").remove()
}

