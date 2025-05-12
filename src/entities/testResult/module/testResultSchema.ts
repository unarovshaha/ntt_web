

export interface ITest {
    name: string,
    surname: string,
    id: number,
    date: string,
    result: number
}

export interface ITestResultSchema {
    data: ITest[],
    loading: boolean,
    error?: "error"
}

