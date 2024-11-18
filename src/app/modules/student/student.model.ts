import { Schema, model } from 'mongoose'
import { IStudent } from './student.interface'
const studentSchema = new Schema<IStudent>({
  name: {
    first: { type: String, required: true },
    middle: { type: String },
    last: { type: String, required: true },
  },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  course: { type: String },
  date: { type: String },
  gender: { type: String, enum: ['Male', 'Female'] },
  avatar: { type: String },
})

export const Student = model('Student', studentSchema)