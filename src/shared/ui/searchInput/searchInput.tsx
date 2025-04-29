 import React, { useState, useEffect, useRef } from 'react';
import cls from './searchInput.module.sass';
import {fetchFieldsItem, fetchHomeTechnical, fetchSearchOrganizations} from 'entities/home/model/thunk/homeThunk';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getSearchResults } from 'entities/home/model/selector/homeSelector';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
    name: string;
    category: string;
    city: string;
    organization_type: string;
    id: number;
}

const organizationRoutes: Record<string, string> = {
    '1': '/Maktab',
    '2': "/O'quv%20markaz",
    '3': '/Universitet',
    '4': '/Kollej',
    '5': '/Texnikum',
    '6': '/Litsey',
};

export const SearchInput = () => {
    const [query, setQuery] = useState<string>('');
    const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const getData = useSelector(getSearchResults);


    useEffect(() => {
        dispatch(fetchSearchOrganizations(query))
    }, [query])



    useEffect(() => {
        if (query.trim() === '') {
            setFilteredResults([]);
            setIsDropdownOpen(false);
            return;
        }

        const filtered = getData?.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        ) || [];
        setFilteredResults(filtered);
        setIsDropdownOpen(filtered.length > 0);
    }, [query, getData]);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const handleNavigate = async (type: string , id: number) => {
        const route = organizationRoutes[type];
        if (route) {
            localStorage.setItem('activeMenu', route);
            await dispatch(fetchFieldsItem(type));
            //@ts-ignore
            await dispatch(fetchHomeTechnical({organizationId: type}));
            navigate(`${route}`);
        }
    };

    return (
        <div className={cls.searchWrapper} ref={wrapperRef}>
            <div className={cls.searchInputContainer}>
                <span className={cls.searchIcon}>🔍</span>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="OTM yoki ta’lim yo’nalishlarini izlang"
                    className={cls.searchInput}
                />
                <button className={cls.searchButton}>Qidirish</button>
            </div>

            {isDropdownOpen && (
                <div className={cls.dropdown}>
                    {filteredResults.map((result) => (
                        <div
                            key={result.id}
                            onClick={() => handleNavigate(result.organization_type, result.id)}
                            className={cls.dropdownItem}
                        >
                            <div className={cls.itemCategory}>
                                <h3>{result.name}</h3>
                            </div>
                            <div className={cls.itemName}>
                                <span className={cls.pinIcon}>📍</span>
                                Manzil
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};