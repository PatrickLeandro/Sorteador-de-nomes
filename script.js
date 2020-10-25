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
            
            
            document.getElementById("resultado").innerHTML="O nome sorteado foi: "+ nomes[ran]
        }
