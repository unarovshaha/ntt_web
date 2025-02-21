import React from 'react';
import cls from './entrance.module.sass';
import { Box } from 'shared/ui/box';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/button';
import userIcon from 'shared/assets/icons/user.png';
import rightIcon from 'shared/assets/icons/rightIcon.png';
import boardIcon from 'shared/assets/icons/board.png';
import bookIcon from 'shared/assets/icons/book.png';
import notifIcon from 'shared/assets/icons/notification.png';

const list = [
    {
        id: 1,
        image: userIcon,
        backColor: "#004AADB2",
        title: "Shaxsiy ma'lumotlar",
        btnIcon: rightIcon,
        navigateTo: "profile"
    },
    {
        id: 2,
        image: boardIcon,
        backColor: "#5900ADB2",
        title: "Mening arizalarim",
        btnIcon: rightIcon,
        navigateTo: "userApplications"
    },
    {
        id: 3,
        image: bookIcon,
        backColor: "#00AD85B2",
        title: "Ta’lim ma’lumotlari",
        btnIcon: rightIcon,
        navigateTo: "education"
    },
    {
        id: 4,
        image: notifIcon,
        backColor: "#ADA400B2",
        title: "Bildirishnomalar",
        btnIcon: rightIcon
    }
];

export const Entrance = () => {
    const navigate = useNavigate();

    return (
        <div className={cls.container}>
            <h1 className={cls.container__article}>Mening profilim</h1>
            <div className={cls.container__arounder}>
                {list.map((item) => (
                    <Box key={item.id} extraClass={cls.container__arounder__box} style={{ background: item.backColor }}>
                        <div className={cls.container__arounder__box__iconBox}>
                            <img src={item.image} alt="" />
                        </div>
                        <h1>{item.title}</h1>
                        <div className={cls.container__arounder__box__navigator}>

                                <Button
                                    onClick={() => navigate(`${item.navigateTo}`)}
                                    extraClass={cls.container__arounder__box__navigator__btn}
                                >
                                    <img src={item.btnIcon} alt="" />
                                </Button>

                        </div>
                    </Box>
                ))}
            </div>
        </div>
    );
};
