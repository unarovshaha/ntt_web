import React, {useEffect, useState} from 'react';
import cls from './profile.module.sass'
import {Input} from "shared/ui/input";
import {useWindowSize} from "@react-hook/window-size";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {userProfileThunk} from "entities/profile/model/userProfile/userProfileThunk";
import {useSelector} from "react-redux";
import {getUserData} from "entities/profile/model/userProfile/userProfileSelector";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {userProfileReducer} from "entities/profile/model/userProfile/userProfileSlice";



const reducers: ReducersList = {
    userProfileSlice: userProfileReducer
}
export const Profile = () => {

    const [layout, setLayout] = useState<boolean>(false)
    const size = useWindowSize()
    const dispatch = useAppDispatch()
    const userId: any = localStorage.getItem("user_id")
    const getData = useSelector(getUserData)
    useEffect(() => {
        if ((size[0] > 480 && !layout) || (size[0] <= 480 && layout)) {
            setLayout(size[0] > 480);
        }
    }, [size, layout])

    useEffect(() => {
        dispatch(userProfileThunk(userId))
    }, [userId])

    return (
        <DynamicModuleLoader reducers={reducers}>
        <div className={cls.container}>
            <h1>Shaxsiy ma'lumotlarim</h1>
            {
                layout ?
                    <div className={cls.container__arounder}>
                        {
                            <>
                                <Input name={"name"} title={"Ism familiya"} value={getData?.name}/>
                                <Input name={"passport_seria"} title={"Passport seriya"} value={getData?.passport_seria}/>
                                <Input name={"indefikatsiya_pin"} title={"JSHSHR"} value={getData?.indefikatsiya_pin}/>
                                <Input name={"sex"} title={"Jinsi"} value={getData?.sex}/>
                                <Input name={"phone_extra"} title={"Qo'shimcha telefon raqami"} value={getData?.phone_extra}/>
                                <Input name={"born_date"} title={"Tug'ilgan sanasi"} type={"date"} value={getData?.born_date}/>
                                <Input name={"born_address"} title={"Tug'ilgan joyi"}  value={getData?.born_address}/>
                                <Input name={"email"} title={"Email"}  value={getData?.email}/>
                            </>
                        }
                    </div>
                    :
                    <div className={cls.container__box}>
                        {
                                <>
                                    <Input name={"name"} title={"Ism familiya"} value={getData?.name}/>
                                    <Input name={"passport_seria"} title={"Passport seriya"} value={getData?.passport_seria}/>
                                    <Input name={"indefikatsiya_pin"} title={"JSHSHR"} value={getData?.indefikatsiya_pin}/>
                                    <Input name={"sex"} title={"Jinsi"} value={getData?.sex}/>
                                    <Input name={"phone_extra"} title={"Qo'shimcha telefon raqami"} value={getData?.phone_extra}/>
                                    <Input name={"born_date"} title={"Tug'ilgan sanasi"} type={"date"} value={getData?.born_date}/>
                                    <Input name={"born_address"} title={"Tug'ilgan joyi"}  value={getData?.born_address}/>
                                    <Input name={"email"} title={"Email"}  value={getData?.email}/>
                                </>


                        }
                    </div>
            }


        </div>
        </DynamicModuleLoader>
    );
};

