import React from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

import {studyRouteConfig} from "../../model/studyConfig";

import cls from "./studyHeader.module.sass";
import {useSelector} from "react-redux";
import {getOrganizationTypes} from "entities/oftenUsed";

export const StudyHeader = () => {

    const organizationTypes = useSelector(getOrganizationTypes)

    const renderLinks = () => {
        return organizationTypes?.map(item => {
            return (
                <NavLink
                    className={({isActive}) =>
                        classNames(cls.header__item, {
                            [cls.active] : isActive
                        })
                    }
                    to={`/platform/study/${item.id}`}
                >
                    {item.name}
                </NavLink>
            )
        })
    }

    return (
        <div className={cls.header}>
            {renderLinks()}
        </div>
    );
}
