let contador = 0;
function menu() {
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

  var sort = 0;
  var nomes = [];
  var testador = [];
  var repetidor = 0;
  let qtdn = document.getElementById('qtd-nomes');
  

  function text(){

      var list = txt.value.split("\n")
      

      for (var i = 0; i < list.length; i++){
          if (list[i].length > 0) {
              sort=i+1
              nomes[i] = list[i]
              
          }
      }
  }

desc = document.getElementById('txt-sorteio');
res = document.getElementById('res');


function iniciarModal(modalID) {
  const modal = document.getElementById(modalID);
  if (modal) {
    if (sort >= qtdn.value && qtdn.value >= 1) {
      modal.classList.add('mostrar');
      let c = 1;
    while (c <= qtdn.value) {

      var ran = Math.floor(Math.random() * sort);
      repetidor = testador.indexOf(ran); 
      testador.push(ran);
      if ( repetidor == -1) {
        res.innerHTML += c + '- ' + nomes[ran] + '<br>' ;
        c++;
      } 
    }
    
    document.getElementById('describe').innerHTML=""+desc.value
    
    repetidor = 0;
    testador = [];

    } else {
      window.alert('[ERRO] Favor verificar o campo "Quantos nomes deseja sortear"')
    }
    modal.addEventListener('click', (e) => {
      if (e.target.id == modalID || e.target.className == 'fechar') {
        modal.classList.remove('mostrar');
        res.innerHTML = '';
      }
    });
    
    
  }

}

let logo = document.querySelector('.sorteio');
logo.addEventListener('click', () => iniciarModal('modal'));


