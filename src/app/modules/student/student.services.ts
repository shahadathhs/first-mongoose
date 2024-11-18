import { IStudent } from "./student.interface"
import { Student } from "./student.model"

const createStudent = async (payload: IStudent) => {
  const result = await Student.create(payload)
  
  return result
}

export const StudentServices = {
  createStudent
}