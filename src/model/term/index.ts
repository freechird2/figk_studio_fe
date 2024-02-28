export interface TermVersionModel {
    id: number
    version: string
}

export interface TermFilterOption {
    id: string | undefined
    termType: number
}

export interface TermDetailResponse {
    id: number
    type: number
    version: number
    content: string
    activedAt: string
    register: string
    registeredAt: string
}
