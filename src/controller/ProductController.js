const mongoose = require('mongoose');
const Callback = mongoose.model('Callback');



module.exports = {


    async worker(req,res) {        
        let callback = {};
        console.log(req.body)
        try{
            callback = await Callback.create(req.body);        
        } catch (e){
            res.send(400)
        }
        res.setHeader('Access-Control-Allow-Origin', 'https://cosmlov.com.br');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        return res.json();
        
    }


}