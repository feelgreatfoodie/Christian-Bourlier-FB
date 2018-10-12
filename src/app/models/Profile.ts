export interface Profile {
  firstName: string,
  lastName: string,
  location: string,
  specialty: string,
  image?: string,
  contactInfo: {
    phone: string,
    email: string,
    github?: string,
    linkedIn?: string
  }
}