export interface Company {
    id: number
    name: string
    phone: string
    email: string
    industry: string
    website: string
    identificationType?: 'CPF' | 'CNPJ' | 'SSN' | 'EIN'
    identificationNmber?: number
    projectsCount: number
    projectsRevenue: number
    status: boolean
}

// export interface Customer {

// }

export interface Project {
    title: string
    description: string
    createdDate: EpochTimeStamp
    cost: number
    customerId: number
    active: boolean
    notes: string
    recurrence: 'one-off' | 'monthly' | 'annualy'
}

export interface InvoiceItem {
    title: string
    amount: number
    quantity: number
}

export interface Invoice {
    title: string
    description: string
    createdDate: EpochTimeStamp
    dueDate: EpochTimeStamp
    items: InvoiceItem []
}
