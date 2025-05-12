import React from 'react';

import {Table} from "shared/ui/table";

import cls from "./testResultList.module.sass";

export const TestResultList = () => {

    const renderList = () => {
        return [1, 2, 3, 4].map((item, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>Lorem</td>
                    <td>10.01.2025</td>
                    <td>50 ball</td>
                </tr>
            )
        })
    }

    return (
        <Table>
            <thead>
            <tr>
                <th>№</th>
                <th>Test nomi</th>
                <th>Sana</th>
                <th>Natijasi</th>
            </tr>
            </thead>
            <tbody>
            {renderList()}
            </tbody>
        </Table>
    );
}
