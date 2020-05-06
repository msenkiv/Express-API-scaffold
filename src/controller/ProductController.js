const mongoose = require('mongoose');
const Callback = mongoose.model('Callback');



module.exports = {


    async worker(req,res) {        
        let callback = {};
        try{
            callback = await Callback.create(req.body);        
        } catch (e){
            res.send(400)
        }

        res.json(callback);
        
    }


}