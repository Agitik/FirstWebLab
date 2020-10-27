function addString(result) {
  if(result != null){
    table = $('#ResultTable')
    let res = result.split("&")
    addable = '<tr>'
        +`<td class="head_title">${res[0]}</td>`
        +`<td class="head_title">${res[1]}</td>`
        +`<td class="head_title">${res[2]}</td>`
        +`<td class="head_title">${res[3]}</td>`
        +`<td class="head_title">${res[4]}</td>`
        +`<td class="head_title">${res[5]}</td>`
        +'</tr>'
    table.append(addable)
  }
}

window.onload = function () {
  for(let i=0; i<localStorage.length; i++){
    addString(localStorage.getItem(`${i}`))
  }
}

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
      addString(result)
      localStorage.setItem(`${localStorage.length++}`, result)
    },
    error: function () {
      alert("Ошибка!")
    }
  });
}

function clearTable() {
  $(".deletebale").remove()
}


