interface AnswerOption {
    id: number;
    answer: string;
    to_json: {
        type: string;
        prevId?: number;
    };
    image: string | null;
    is_selected: boolean;
    is_true: boolean;
}

interface Question {
    id: number;
    text: string | null;
    to_json: {
        type: string;
    };
    image: string | null;
    is_true: boolean;
    answer_options: AnswerOption[];
}

interface Subject {
    name: string;
    type: 'mandatory' | 'optional';
    questions: Question[];
}


interface SubjectInfo {
    score: number;
    subject: string;
    correct_count: number;
}

interface Info {
    optional: {
        [key: string]: SubjectInfo;
    };
    mandatory: {
        [key: string]: SubjectInfo;
    };
    total_score: number;
}

interface StudentTest {
    student_test_id: number;
    score: number;
    subjects: Subject[];
    info: Info;
}

export  interface GetFinalAnswerSchema{
    data: StudentTest | undefined
    loading: boolean,
    error: boolean
}