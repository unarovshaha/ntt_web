export interface Subject {
    id: number;
    name: string;
    question_count: number;
}

interface Questions {
    mandatory: QuestionItem[];
    optional: QuestionItem[];
}

export interface QuestionItem {
    id: number;
    name: string;
    duration: number;
    is_mandatory: boolean | null;
    subject_id: number;
    field_id: number;
    question_count: number
    blocks: QuestionBlock[];
}

export interface QuestionBlock {
    id: number;
    text: string | null;
    to_json: BlockType;
    image: string | null;
    questions: AnswerOption[];
}

type BlockType = 'text' | 'image';

interface AnswerOption {
    id: number;
    answer: string;
    isTrue: boolean;
    to_json: BlockType;
    image: string | null;
}

export interface Test {
    id: number;
    name: string;
    surname: string;
    student: number;
    test1: number;
    test2: number;
    field: number | null;
    subject: Subject[];
    questions: Questions;
}

export interface ITakeTestInterface {
    loading: boolean;
    error: boolean;
    testItem: Test | null;
}


