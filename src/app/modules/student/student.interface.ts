export interface IStudent {
  name: {
    first: string
    middle: string
    last: string
  }
  email: string
  phone: string
  address: string
  course: string
  date: string
  gender: 'Male' | 'Female'
  avatar?: string
}
