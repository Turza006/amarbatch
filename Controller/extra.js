const extra = require('../model/Extra')
module.exports={
    addextra: async (req,res)=>{
        const newextra = new extra(req.body)
        await newextra.save()
        res.status(200).json({
            msg: 'added'
        })
    },
    viewextra: async (req,res)=>{
        const data = await extra.find()
        res.status(200).json(data)
    }
}