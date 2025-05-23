import React, { useEffect, useState } from 'react';
import cls from './profile.module.sass';
import { Input } from 'shared/ui/input';
import { useWindowSize } from '@react-hook/window-size';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userProfileThunk } from 'entities/profile/model/userProfile/userProfileThunk';
import { useSelector } from 'react-redux';
import { getUserData, getUserLoading } from 'entities/profile/model/userProfile/userProfileSelector';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { userProfileReducer } from 'entities/profile/model/userProfile/userProfileSlice';
import { Button } from 'shared/ui/button';
import { useForm } from 'react-hook-form';
import { headers, useHttp } from 'shared/api/base';
import { Select } from 'shared/ui/select';
import { fetchLocationsData, getLocationsData } from 'entities/oftenUsed';
import { Loader } from 'shared/ui/loader';
import image from "shared/assets/images/defaultImg.svg"

const reducers: ReducersList = {
    userProfileSlice: userProfileReducer,
};

const sex = [
    { id: 'erkak', name: 'Erkak' },
    { id: 'ayol', name: 'Ayol' },
];

export const Profile = () => {
    const {register, handleSubmit} = useForm();
    const [layout, setLayout] = useState<boolean>(false);
    const size = useWindowSize();
    const dispatch = useAppDispatch();
    const loading = useSelector(getUserLoading);
    const userId: any = localStorage.getItem('user_id');
    const getData = useSelector(getUserData);
    const regions = useSelector(getLocationsData);
    const [region, setRegion] = useState();
    const [sexChange, setSex] = useState();
    const [change, setChange] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [pdf, setPdf] = useState<File | null>(null);
    const [pdf2, setPdf2] = useState<File | null>(null);
    const [trumb, setTrumb] = useState<boolean>(false);
    const [flipped, setFlipped] = useState(false);


    const {request} = useHttp();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<File | null>>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setState(files[0]);
            console.log('Selected file:', files[0]); // Tanlangan faylni logga chiqarish
            console.log('Selected file:', files[0]);
        }
    };

    useEffect(() => {
        if ((size[0] > 480 && !layout) || (size[0] <= 480 && layout)) {
            setLayout(size[0] > 480);
        }
    }, [size, layout]);

    useEffect(() => {
        dispatch(userProfileThunk(userId));
    }, [userId]);

    useEffect(() => {
        dispatch(fetchLocationsData());
    }, []);

    const onClick = async (data: any) => {
        const formData = new FormData();

        // Append form fields
        Object.keys(data).forEach(key => {
            if (data[key]) {
                formData.append(key, data[key]);
            }
        });

        // Append region and sex if they exist
        if (region) formData.append('region', region);
        if (sexChange) formData.append('sex', sexChange);

        // Append files if they exist
        if (file) formData.append('certificate', file);
        if (pdf) formData.append('passport_pdf1', pdf);
        if (pdf2) formData.append('passport_pdf2', pdf2);

        await request({
            url: `users/user/crud/${userId}/`,
            method: 'PUT',
            body: formData,
            headers: headers(),
        });
        setChange(false)
        setTrumb(true)
        await dispatch(userProfileThunk(userId));
        setTrumb(false)
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            {loading ? (
                <Loader/>
            ) : (
                <div className={cls.container}>
                    {layout ? (
                        <div className={cls.container__arounder}>
                            <div>
                                <Input register={register} name="name" title="Ism familiya" value={getData?.name}/>
                                <Input register={register} name="name" title="Ism" value={getData?.name}/>
                                <Input register={register} name="surname" title="Familiya" value={getData?.surname}/>
                                <Input
                                    name="passport_seria"
                                    register={register}
                                    title="Passport seriya"
                                    value={getData?.passport_seria}
                                />
                                <Input
                                    name="indefikatsiya_pin"
                                    title="JSHSHR"
                                    register={register}
                                    value={getData?.indefikatsiya_pin}
                                />
                                <Input
                                    name="phone_extra"
                                    title="Qo'shimcha telefon raqami"
                                    register={register}
                                    value={getData?.phone_extra}
                                />
                                <Input
                                    name="born_date"
                                    title="Tug'ilgan sanasi"
                                    type="date"
                                    register={register}
                                    value={getData?.born_date}
                                />
                                <Input
                                    name="born_address"
                                    title="Tug'ilgan joyi"
                                    value={getData?.born_address}
                                    register={register}
                                />
                                <Input name="email" title="Email" value={getData?.email} register={register}/>
                                <Input
                                    name="password"
                                    title="Password"
                                    type="password"
                                    register={register}
                                    value={getData?.password}
                                />
                                {/*<Input*/}
                                {/*    name="password"*/}
                                {/*    title="Password"*/}
                                {/*    type="password"*/}
                                {/*    register={register}*/}
                                {/*    value={getData?.password}*/}
                                {/*/>*/}
                                <label className={cls.label}>
                                    <h2>Diplom</h2>
                                    <a target={"_blank"} href={`${getData?.certificate}`}>
                                        <img src={getData?.certificate ? `${getData.certificate}` : image} alt=""/>
                                    </a>

                                </label>
                                <label className={cls.label}>
                                    <h2>Passport</h2>
                                    <div className={cls.flipCard} onClick={() => setFlipped(!flipped)}>
                                        <div className={`${cls.flipCardInner} ${flipped ? [cls.flipped] : ""}`}>
                                            <div className={cls.flipCardFront}>
                                                {/*<a target={"_blank"} href={`${getData?.passport_pdf1}`}>*/}
                                                <img src={getData?.passport_pdf1 ? `${getData.passport_pdf1}` : image}
                                                     alt=""/>
                                                {/*</a>*/}
                                            </div>
                                            <div className={cls.flipCardBack}>
                                                {/*<a target={"_blank"} href={`${getData?.passport_pdf2}`}>*/}
                                                <img src={getData?.passport_pdf2 ? `${getData.passport_pdf2}` : image}
                                                     alt=""/>
                                                {/*</a>*/}
                                            </div>
                                        </div>
                                    </div>


                                </label>
                                {change && (
                                    <div className={cls.edit}>
                                        <label className={cls.labels} htmlFor="certi">
                                            <h2>Diplom rasmi</h2>
                                            <input
                                                id={"certi"}
                                                name="certificate"
                                                type="file"
                                                className={cls.input}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e, setFile)}
                                            />
                                        </label>
                                        <label className={cls.labels} htmlFor="">
                                            <h2>Passport rasmi</h2>
                                            <h2>Passport rasmi(old tomoni)</h2>
                                            <input
                                                name="passport_pdf1"
                                                type="file"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e, setPdf)}
                                            />
                                        </label>
                                        <label className={cls.labels} htmlFor="">
                                            <h2>Passport rasmi(orqa tomoni)</h2>
                                            <input
                                                name="passport_pdf2"
                                                type="file"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e, setPdf2)}
                                            />
                                        </label>

                                        <label className={cls.labels} htmlFor="">
                                            <h2>Hudud</h2>
                                            <Select extraClass={cls.select} setSelectOption={setRegion}
                                                    optionsData={regions} title="Region"/>
                                        </label>
                                        <label className={cls.labels} htmlFor="">
                                            <h2>Jinsi</h2>
                                            <Select extraClass={cls.select} setSelectOption={setSex} optionsData={sex}
                                                    title="Jinsi"/>
                                        </label>


                                    </div>
                                )}
                            </div>

                            {change ? (
                                <Button onClick={handleSubmit(onClick)} extraClass={cls.container__arounder__btn}>
                                    Saqlash
                                </Button>
                            ) : (
                                <Button onClick={() => setChange(true)} extraClass={cls.container__arounder__btn}>
                                    Tahrirlash
                                </Button>
                            )}
                        </div>
                    ) : (
                        <div className={cls.container__box}>
                            <Input name="name" title="Ism familiya" value={getData?.name}/>
                            <Input name="passport_seria" title="Passport seriya" value={getData?.passport_seria}/>
                            <Input name="indefikatsiya_pin" title="JSHSHR" value={getData?.indefikatsiya_pin}/>
                            <Input name="sex" title="Jinsi" value={getData?.sex}/>
                            <Input name="phone_extra" title="Qo'shimcha telefon raqami" value={getData?.phone_extra}/>
                            <Input name="born_date" title="Tug'ilgan sanasi" type="date" value={getData?.born_date}/>
                            <Input name="born_address" title="Tug'ilgan joyi" value={getData?.born_address}/>
                            <Input name="email" title="Email" value={getData?.email}/>
                        </div>
                    )}
                </div>
            )}
            {
                trumb && (
                    <div className={cls.overlay}>
                        <h3>Yuklanmoqda...</h3>
                    </div>
                )
            }
        </DynamicModuleLoader>
    );
}