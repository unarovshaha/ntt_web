import React, { useState, useEffect, useRef } from 'react'
import cls from './searchInput.module.sass'
import {fetchSearchOrganizations} from "entities/home/model/thunk/homeThunk";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getSearchResults} from "entities/home/model/selector/homeSelector";
import {useNavigate} from "react-router-dom";

interface SearchResult {
    name: string
    category: string
    city: string
    organization_type: string
    id: number
}






export const SearchInput= () => {
    const [query, setQuery] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [filteredResults, setFilteredResults] = useState<SearchResult[]>([])
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const getData = useSelector(getSearchResults)

    useEffect(() => {
        dispatch(fetchSearchOrganizations(query))
    }, [query])
    console.log(getData, 'eeddd')

    useEffect(() => {
        if (query.trim() === '') {
            setFilteredResults([])
            setIsDropdownOpen(false)
            return
        }

        const filtered = getData?.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredResults(filtered!)
        setIsDropdownOpen(filtered!.length > 0)
    }, [query])



    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

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

            {
                isDropdownOpen && (
                <div className={cls.dropdown}>
                    {filteredResults.map((result, index) => (
                        <div
                            onClick={
                            () =>
                                navigate(`${result.organization_type == "1" ? 
                                    `/Maktab/profile/${result.id}/about` : 
                                    `${result.organization_type == "2" ? 
                                        `/O'quv%20markaz/profile/${result.id}/about` :
                                        `${result.organization_type == "3" ? 
                                            `/Universitet/profile/${result.id}/about` : 
                                            `${result.organization_type == "4" ?
                                                `/Kollej/profile/${result.id}/about` : 
                                                `${result.organization_type == "5" ?
                                                    `/Texnikum/profile/${result.id}/about` : 
                                                    `${result.organization_type == "6" ?
                                                        `/Litsey/profile/${result.id}/about` : null
                                                }`}`}`}`}`}`)}
                            key={index} className={cls.dropdownItem}>
                            <div className={cls.itemCategory}>
                                <h3>{result.name}</h3>
                            </div>
                            <div className={cls.itemName}>
                                <span className={cls.pinIcon}>📍</span>
                                Manzil
                            </div>
                        </div>
                    ))
                    }
                </div>
            )}
        </div>
    )
}

