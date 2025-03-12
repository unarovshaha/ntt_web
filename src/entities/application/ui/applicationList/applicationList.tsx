import React from 'react';
import {useNavigate} from "react-router-dom";

import {Table} from "shared/ui/table";

import cls from "./applicationList.module.sass";

export const ApplicationList = () => {

    const navigate = useNavigate()

    const renderList = () => {
        return [1,2,3,4,5,6,7,8,9,0].map((item, index) => {
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>Sobirjonova Shahzoda</td>
                    <td>900032880</td>
                    <td>
                        <div
                            onClick={() => navigate(`profile/${index}`)}
                            className={cls.list__more}
                        >
                            Batafsil
                        </div>
                    </td>
                </tr>
            )
        })
    }


    return (
        <div className={cls.list}>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Ism Sharif</th>
                    <th>Tel raqam</th>
                    <th>Batafsil</th>
                </tr>
                </thead>
                <tbody>
                {renderList()}
                </tbody>
            </Table>
        </div>
    );
}
