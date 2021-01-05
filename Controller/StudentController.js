const Student = require('../model/Students')

module.exports = {

    createStudent : async (req,res)=>{
        const body = req.body
        console.log(body)

        const username = body.username
        const classId = body.classId
        const email = body.email
        const password = body.password
        const data = await Student.findOne({classId:classId})
        if(data){
            res.status(409).json({
                msg:"Student Already exist"
            })
        }else{
            const newStudent = new Student()
            newStudent.username = username
            newStudent.email = email
            newStudent.classId = classId
            newStudent.password = newStudent.hashPassword(password)
            await newStudent.save()
            res.status(200).json({
                msg:"Student Created"
            })
        }
    },
    login: async (req,res)=>{
        const body = req.body
        console.log(body)
        const email = body.email
        const password = body.password
        const data = await Student.findOne({email:email})
        if(!data){
            res.status(200).json({
                msg:"Student Not Exist"
            })
        }
        else {
            const passwordVaildation = data.validPassword(password)
            if(!passwordVaildation){
                res.status(200).json({
                    msg:"Password Mismatched"
                })
            }else {
                res.status(200).json({
                    msg:"Login Success"
                })
            }
        }
    },
    update: async (req,res)=>{
        const body = req.body
        const username = body.username
        const email = body.email
        const password = body.password
        const phone_Number = body.phone_Number
        const classId = body.classId
        const location = body.location
        const Bio = body.Bio
        const Education = body.Education
        const newdata = await Student.findOneAndUpdate({classId:classId},{$set:body})
        res.status(200).json({
            msg:'Updated'
        })

    },
    allstudents: async (req,res)=>{
        const body = req.body
        const data = await Student.find()
        res.status(200).json(data)
    }

}