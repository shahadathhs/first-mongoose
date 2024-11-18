import express from 'express';
import { StudentController } from './student.controller';

const router: express.Router = express.Router()

router.post('/create-student', StudentController.createStudent)

export const StudentRoutes = router