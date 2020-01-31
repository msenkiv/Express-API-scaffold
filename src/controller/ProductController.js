const mongoose = require('mongoose');
const Callback = mongoose.model('Callback');
const axios = require('axios');
const url = 'http://v4.chatpro.com.br/chatpro-xosb9e0uei/api/v1/send_message';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': '305cfc5482b59eac47b314eb7d7dbe9be584eed4'
};
const greets = [
    'Bom dia', 'bom dia', 'boa tarde', 'boa', 'oi', 'olá', 'ola', 'bom'

]

const questCar = [
    'qual carro', 'alugar', 'quero alugar','quero','aluga','carro'
]

const consKm = [
    'quanto rodei', 'quantos km rodei', 'km', 'kilometragem'
]

const Chat = {
    greeting: 'Olá, como vai? sou Rodrigo, atendente virtual da Locadora Concept. Em que posso ajudar?',
    resQuestCar: 'Trabalhamos com aluguel semanal e mensal, com os carros Onix 2019 e Spin 2020',
    resConsKm:'Caro cliente, você rodou 150km de 6000km. (10%) Restam 22 dias de contrato',
    sorry: 'Desculpe, ainda não sei trabalhar com essa mensagem :c'
}
function messageWorker(mes) {
     let message = mes.toLowerCase();

     let response = roleArray(message, greets, 'greeting')
     if(!response){
         response = roleArray(message, questCar, 'resQuestCar');

         if(!response){
             response = roleArray(message,consKm,'resConsKm')
         }
     }
     
    return response;
}

function roleArray(message, arr, module){
    let res;
     arr.forEach(element => {
        if(message.includes(element))
            res = Chat[module]
    });

    return res;

}



module.exports = {
  

   
    async worker(req,res) { 

        //So it's just a callback
        if(req.body.Type !== "receveid_message"){
            console.log('NOT A DELVIERD');
            const callback = await Callback.create(req.body);        
            res.json(callback);
            res.send('ok');
            return true;
        }

        let message = req.body.Body.Text;
        response = messageWorker(message);
        if(!response){
            response = Chat.sorry;
        }
        
        //ENVIA PELA API WHATS
        // await axios.post(url,{
        //     "menssage": response,
        //     "number": "41991123177"
        // }, {
        //     headers: headers
        // });

        // ======================
        // SALVA MENSAGEM NO MONGO
        let callback = {};
        try{
            //callback = await Callback.create(req.body);        
        } catch (e){
            res.send(400)
        }

        res.json(callback);
        
    }


}