interface IOnlineTestItem {
    id: number
    name: string
    questions_count: number
}

export interface IOnlineTestSubject{
    name: string,
    subject: string,
    id: number,
    is_mandatory: boolean | null,
    duration: number
}


interface Test {
    id: number | null;
    name: string | null;
    duration: number;
}

interface MainTest extends Test {
    question_count: number;
}

interface MandatoryTest {
    subject: string;
    test_id: number | null;
    test_name: string | null;
    question_count: number | null;
    duration: number;
}

interface FullTestData {
    main_test: MainTest;
    second_test: Test;
    mandatory_tests: MandatoryTest[];
    total_mandatory_duration: number;
}
export interface IOnlineTestEnter {
    requiredSubject: FullTestData | null,
    subject: IOnlineTestSubject[],
    secondSubject: IOnlineTestSubject[],
    loading: boolean
    error: boolean
}