export interface Profile {
  firstName: string,
  lastName: string,
  location: string,
  specialty: string,
  contactInfo: {
    phone: string,
    email: string,
    github: string,
    linkedIn: string
  }
}