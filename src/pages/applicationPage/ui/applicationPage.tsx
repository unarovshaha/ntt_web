import React, {useMemo, useState} from 'react';

import {ApplicationList} from "entities/application";
import {Pagination} from "features/pagination";

import cls from "./applicationPage.module.sass";

export const ApplicationPage = () => {


    const pageSize = useMemo(() => 10, [])
    const [currentPage, setCurrentPage] = useState<number>(1)


    const onChangePage = (data: number) => {
        setCurrentPage(data)
    }

    return (
        <div className={cls.application}>
            <ApplicationList/>
            <Pagination
                totalCount={20}
                onPageChange={onChangePage}
                currentPage={currentPage}
                pageSize={pageSize}
            />
        </div>
    );
}
