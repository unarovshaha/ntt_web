import React, {useState} from 'react';
import {MultiSelect} from "shared/ui/select";
import cls from './entrancePage.module.sass'
import {Input} from "shared/ui/input";
import {Box} from "shared/ui/box";
import {MttFilter} from "features/filter";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export const EntrancePage = () => {
    const [checked, setChecked] = useState(false);


    const handleCheckboxChange = (event: any) => {
        setChecked(event.target.checked);
        console.log(event.target.checked);
    };

    return (
        <div style={{display: "flex", gap: "4rem", flexDirection: "column"}}>
            <h1>Hush kebsiz</h1>
            <div style={{display: "flex", gap: '1rem'}}>
                {/*<Box children={*/}
                {/*    <Input onChange={handleCheckboxChange} extraTitle={"PLease check"} extraType={"checkbox"}*/}
                {/*           name={'sss'}*/}
                {/*           checked={checked}/>*/}

                {/*}/>*/}
                <Input name={"name"} title={"ssss"}/>
                {/*<MttFilter/>*/}


            </div>

        </div>
    );
};

