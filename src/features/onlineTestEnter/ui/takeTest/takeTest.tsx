import {TakeTestHeader} from "entities/takeTest";

export const TakeTest = () => {
    const token = sessionStorage.getItem("token")
    return (
        <div style={{padding: token ? 0 : '10rem 0'}}>

            <TakeTestHeader/>



        </div>
    );
};

