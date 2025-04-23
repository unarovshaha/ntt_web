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
import {Button} from "shared/ui/button";
import {useForm} from "react-hook-form";
import {headers, useHttp} from "shared/api/base";
import {Select} from "shared/ui/select";
import {fetchLocationsData, getLocationsData} from "entities/oftenUsed";


const reducers: ReducersList = {
    userProfileSlice: userProfileReducer
}

const sex = [
    {id: "erkak", name: "Erkak"},
    {id: "ayol", name: "Ayol"}
]
export const Profile = () => {

    const {register, handleSubmit} = useForm()
    const [layout, setLayout] = useState<boolean>(false)
    const size = useWindowSize()
    const dispatch = useAppDispatch()
    const userId: any = localStorage.getItem("user_id")
    const getData = useSelector(getUserData)
    const regions = useSelector(getLocationsData)
    const [region, setRegion] = useState()
    const [sexChange, setSex] = useState()
    const [change, setChange] = useState(false)

    const {request} = useHttp()
    useEffect(() => {
        if ((size[0] > 480 && !layout) || (size[0] <= 480 && layout)) {
            setLayout(size[0] > 480);
        }
    }, [size, layout])

    useEffect(() => {
        dispatch(userProfileThunk(userId))
    }, [userId])
    useEffect(() => {
        dispatch(fetchLocationsData())
    }, [])

    const onClick = (data: any) => {
        const res = {
            ...data,
            region: region,
            sex: sexChange
        }
        request({
            url: `users/user/crud/${userId}/`,
            method: "PUT",
            body: JSON.stringify(res),
            headers: headers()
        })

    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.container}>
                {
                    layout ?
                        <div className={cls.container__arounder}>

                            <div>
                                {/*// @ts-ignore*/}
                                <Input register={register} name={"name"} title={"Ism familiya"} value={getData?.name}/>
                                <Input name={"passport_seria"} register={register} title={"Passport seriya"}
                                       value={getData?.passport_seria}/>
                                <Input name={"indefikatsiya_pin"} title={"JSHSHR"} register={register}
                                       value={getData?.indefikatsiya_pin}/>
                                <Input name={"phone_extra"} title={"Qo'shimcha telefon raqami"} register={register}
                                       value={getData?.phone_extra}/>
                                <Input name={"born_date"} title={"Tug'ilgan sanasi"} type={"date"} register={register}
                                       value={getData?.born_date}/>
                                <Input name={"born_address"} title={"Tug'ilgan joyi"} value={getData?.born_address}
                                       register={register}/>
                                <Input name={"email"} title={"Email"} value={getData?.email} register={register}/>
                                <Input name={"password"} title={"Password"} type={"password"} register={register}
                                       value={getData?.password}/>
                                {
                                    change ?
                                        <>
                                            <Select setSelectOption={setRegion} optionsData={regions}
                                                    title={"Region"}/>
                                            <Select setSelectOption={setSex} optionsData={sex}
                                                    title={"Jinsi"}/>
                                        </>
                                        : ""}
                            </div>

                            {
                                change ?

                                       <Button onClick={handleSubmit(onClick)}
                                               extraClass={cls.container__arounder__btn}>Saqlash</Button>

                                    :
                                    <Button onClick={() => setChange(true)}
                                            extraClass={cls.container__arounder__btn}>Tahrirlash</Button>
                            }
                        </div>
                        :
                        <div className={cls.container__box}>
                            {
                                <>
                                    <Input name={"name"} title={"Ism familiya"} value={getData?.name}/>
                                    <Input name={"passport_seria"} title={"Passport seriya"}
                                           value={getData?.passport_seria}/>
                                    <Input name={"indefikatsiya_pin"} title={"JSHSHR"}
                                           value={getData?.indefikatsiya_pin}/>
                                    <Input name={"sex"} title={"Jinsi"} value={getData?.sex}/>
                                    <Input name={"phone_extra"} title={"Qo'shimcha telefon raqami"}
                                           value={getData?.phone_extra}/>
                                    <Input name={"born_date"} title={"Tug'ilgan sanasi"} type={"date"}
                                           value={getData?.born_date}/>
                                    <Input name={"born_address"} title={"Tug'ilgan joyi"}
                                           value={getData?.born_address}/>
                                    <Input name={"email"} title={"Email"} value={getData?.email}/>
                                </>


                            }
                        </div>
                }


            </div>
        </DynamicModuleLoader>
    );
};

