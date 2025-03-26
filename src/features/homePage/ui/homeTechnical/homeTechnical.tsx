import {TechnicalSchool} from "entities/home";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {HeaderItem} from "entities/home/model/schema/homeSchema";



export const HomeTechnical = ({item} : {item : HeaderItem}) => {
    return (

            <>
                <TechnicalSchool item={item}/>
            </>

    );
};

