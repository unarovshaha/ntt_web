import React from 'react';
import {useNavigate} from "react-router-dom";

import {Table} from "shared/ui/table";

import cls from "./applicationList.module.sass";
import {useSelector} from "react-redux";
import {getApplicationData} from "entities/application/module/applicationSelector";

export const ApplicationList = () => {

    const navigate = useNavigate()
    const data = useSelector(getApplicationData)

    const renderList = () => {
        return data?.map((item, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    {
                        window.innerWidth <= 430 ? <td>
                                <div className={cls.list__item}>
                                    <p>{item.name}</p>
                                    <p>900032880</p>
                                </div>
                            </td> :
                            <>
                                <td>{item.name}</td>
                                <td>900032880</td>
                            </>
                    }
                    <td>
                        <div
                            onClick={() => navigate(`profile/${item.id}`)}
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
                {
                    window.innerWidth <= 430 ? <></>
                        :
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Ism Sharif</th>
                            <th>Tel raqam</th>
                            <th>Batafsil</th>
                        </tr>
                        </thead>
                }
                <tbody>
                {renderList()}
                </tbody>
            </Table>
        </div>
    );
}
