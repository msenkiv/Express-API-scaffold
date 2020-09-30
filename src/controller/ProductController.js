const mongoose = require('mongoose');
const routes = require('../routes');
const Callback = mongoose.model('Callback');
const Token = mongoose.model('Token');
const jwt = require('jsonwebtoken');


module.exports = {

    async worker(req,res) {        
        console.log('NEEEEEEEEEEaaaqEEEEEEEY')
        let callback = {};
        console.log(req.body)
        try{
            callback = await Callback.create(req.body);      
        } catch (e){
            res.send(400)
        }
        return res.send(200)
        
    },

    async getter(req,res){
        console.log(req.query.token)
        const resp = await Callback.find()
        const tok = await Token.find()
        let xa = jwt.sign({resp}, tok[0].token);
        let err
        try{
            jwt.verify(xa, req.query.token);
            res.json({
                total: resp.length,
                data: resp
    
            })
        }
        catch(e){
            res.json({
                total: e,
    
            })
        }

      
    }

}