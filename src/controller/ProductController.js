const mongoose = require('mongoose');
const Callback = mongoose.model('Callback');



module.exports = {


    async worker(req,res) {        
        console.log('NEEEEEEEEEEEEEEEEEY')
        let callback = {};
        console.log(req.body)
        try{
            callback = await Callback.create(req.body);        
        } catch (e){
            res.send(400)
        }
         res.json();
        
    }


}