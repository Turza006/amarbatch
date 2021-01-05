const Examresult = require('../model/ExamResult')
module.exports = {
    addER : async (req,res)=>{
        const body = req.body
        const section = body.section
        const midResult = body.midResult
        const classtest = body.classtest
        const newER = new Examresult()
        newER.section = section
        newER.midResult = midResult
        newER.classtest = classtest
        await newER.save()
        res.status(200).json({
            msg: 'Added'
        })

    },
    allEr: async (req,res)=>{
        const data = await Examresult.find()
        res.status(200).json(data)
    }
}