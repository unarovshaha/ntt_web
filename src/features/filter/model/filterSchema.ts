

export interface IFilterSchema {
    direction?: number,
    locations: number[],
    languages: number[],
    minSalary?: string,
    maxSalary?: string,
    loading: boolean,
    error?: "error"
}