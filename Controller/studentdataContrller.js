const SData = require('../model/StudentData')

module.exports = {
    adddata: async (req,res)=>{
        const body = req.body
        const section = body.section
        const pdflink = body.pdflink
        const newData = new SData()
        newData.section = section
        newData.pdflink = pdflink
        await newData.save()
        res.status(200).json({
            msg: 'Added'
        })
    },
    viewSection: async (req,res)=>{
        const data = await SData.find().populate('Student')
        console.log(data)
        res.status(200).json(data)
    }
}