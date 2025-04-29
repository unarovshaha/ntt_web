

export interface IFilterSchema {
    direction?: number,
    locations: number[],
    languages: number[],
    district: number[],
    minSalary?: string,
    maxSalary?: string,
    loading: boolean,
    error?: "error"
}