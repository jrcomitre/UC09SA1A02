function enviarFormulario() {
    var vNome = document.getElementById('name').value;
    var vnickName = document.getElementById('nickname').value;
    var vDia = document.getElementById('day').value;
    var vMes = document.getElementById('month').value;
    var vAno = document.getElementById('year').value;
    var timeCorac = document.getElementById('team_id').value;
    var vCpf = document.getElementById('cpf');

    var listaEsporte = document.getElementsByName('sport');
    var selectListaesp = [];

    for(var i = 0; i < listaEsporte.length; i++){
        if(listaEsporte[i].checked){
            selectListaesp.push(listaEsporte[i].id);
        }
    }

    var resultado = false;

    if (vNome.length >= 10 && vNome.length <= 80) {
        if (vnickName.length >= 2 && vnickName.length <= 20) {
            if (vDia >= 1 && vDia <= 31) {
                if (vMes >= 1 && vMes <= 12) {
                    if (vAno >= 1900 && vAno <= 2021) {
                        if (timeCorac != "") {
                            if(vCpf.value.length == 14 && vCpf.checkValidity()){
                                if(selectListaesp.length > 0){
                                    resultado = true;
                                }else{
                                    resultado = false;
                                }                                
                            }else{
                                resultado = false;
                            }                            
                        }else{
                            resultado = false;
                        }                        
                    }else{
                        resultado = false;
                    }
                } else {
                    resultado = false;
                }
            } else {
                resultado = false;
            }
        } else {
            resultado = false;
        }
    } else {
        resultado = false;
    }

    var resultadoFinal = document.getElementById('resultadoP');
    resultadoFinal.innerHTML = resultado;
}


function enviarJson() {

    var objetoJson = {
        nome: '',
        nickname: '',
        dia: 0,
        mes: 0,
        ano: 0,
        cpf: '',
        time_id: '',
        sport: []
    }

    objetoJson.nome = document.getElementById('name').value;
    objetoJson.nickname = document.getElementById('nickname').value;
    objetoJson.dia = document.getElementById('day').value;
    objetoJson.mes = document.getElementById('month').value;
    objetoJson.ano = document.getElementById('year').value;
    objetoJson.cpf = document.getElementById('cpf').value;
    objetoJson.time_id = document.getElementById('team_id').value;

    var listaEsporte = document.getElementsByName('sport');

    for(var i = 0; i < listaEsporte.length; i++){
        if(listaEsporte[i].checked){
            objetoJson.sport.push(listaEsporte[i].id);
        }
    }   

    var vJson = JSON.stringify(objetoJson);
    var resultadoFinal = document.getElementById('resultadoP');
    resultadoFinal.innerHTML = vJson;

}

