let contador = 0;
function teste() {
  let sorteio = document.getElementById("txt-sorteio");
  let menu = document.getElementById("menu-hamburguer");
    if (contador == 0) {
      menu.style.display = 'block';
      sorteio.style.display = 'none';
      contador = 1;
      }else{
        menu.style.display = 'none';
        sorteio.style.display = 'block';
        contador = 0;
      }
      
    }

  const $html = document.querySelector('html')
  const $checkbox = document.querySelector('#switch')

  $checkbox.addEventListener('change', function () {
      $html.classList.toggle('dark-mode')
  })

  var sort = 0
  var nomes = []

  function text(){

      var list = txt.value.split("\n")
      

      for (var i = 0; i < list.length; i++){
          if (list[i].length > 0) {
              sort=i+1
              nomes[i] = list[i]
              
          }
      }
  }

  

  function sortear() {
      var ran = Math.floor(Math.random() * sort);
      
      
      document.getElementById("sorteados").innerHTML="O nome sorteado foi: <br>"+ nomes[ran];
      let res = document.getElementById("resultado");
      res.style.display = 'flex';
  }
  function reset() {
    let res = document.getElementById("resultado");
      res.style.display = 'none';
}
