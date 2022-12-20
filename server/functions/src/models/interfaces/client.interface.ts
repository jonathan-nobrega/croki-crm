export interface Client {
    id: number
    name: string
    phone: string
    email: string
    industry: string
    website: string
    identificationType?: "CPF" | "CNPJ" | "SSN" | "EIN"
    identificationNmber?: number
    projectsCount: number
    projectsRevenue: number
    status: boolean
  }
