export type evalution =
    {
        id: number,
        valuationDate: string,
        note: number,
        userAccount: {
                id: number,
                firstName: string,
                lastName: string,
                email: string,
                title: string,
                username: string,
                password: string,
                category: string
            },
        criteria: {
                id: number,
                label: string,
                weight: number
            },
        project: {
                id: number,
                label: string,
                valuationDate: string,
                score: number
            }
    }
