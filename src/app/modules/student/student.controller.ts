import { Request, Response } from "express"
import { StudentServices } from "./student.services"
import { IStudent } from "./student.interface"


const createStudent = async (req: Request, res: Response) => {
  const student = req.body
   
  const result = await StudentServices.createStudent(student as IStudent)
  
  res.send({
    success: true,
    message: 'Student created successfully',
    data: result,
  })
}

export const StudentController = {
  createStudent
}