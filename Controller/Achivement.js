const Achivement = require('../model/Achivement')

module.exports={
    addAchivement : async (req,res)=>{
        const body = req.body
        const newAc = new Achivement(body)
        await newAc.save()
        res.status(200).json({
            msg: 'added'
        })
    },
    allAchivement: async (req,res)=>{
        const data = await Achivement.find()
        res.status(200).json(data)
    }
}