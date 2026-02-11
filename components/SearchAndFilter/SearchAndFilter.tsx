"use client";

import React from "react";
import Button from "../Button/Button";

type SearchAndFilterProps = {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    resultCount: number;
    resultLabel?: string;
    placeholder: string;
    showSort?: boolean;
    sortValue?: string;
    onSortChange?: (value: string) => void;
    sortOptions?: { value: string; label: string }[];
}

const SearchAndFilter = ({ searchTerm, onSearchChange, resultCount, resultLabel = "resultados", showSort = false, sortValue = "", onSortChange, sortOptions = [], placeholder }: SearchAndFilterProps) => {
    return (
        <div className = "space-y-6 mb-10">
            {/* Buscador */}
            <div className = "flex items-center justify-between gap-4 w-full bg-(--gray-color) px-5 py-3 rounded-full search">
                <input type = "search" name = "search" placeholder = {placeholder} value = {searchTerm} onChange = {(e) => onSearchChange(e.target.value)} className = "flex-1 py-3 outline-none px-5 text-xl bg-transparent text-white placeholder:text-gray-300 focus:placeholder:text-gray-400 transition-all" aria-label = "Buscar" />
                <Button text = "Buscar" />
            </div>

            {/* Contador y ordenamiento */}
            <div className = "flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
                <p className = "text-xl sm:text-2xl text-gray-300">
                    <span className = "text-(--primary) font-semibold text-2xl sm:text-3xl">
                        {resultCount}
                    </span>{" "}
                    {resultLabel}
                    {resultCount !== 1 && "s"}
                    {searchTerm && ` encontrado${resultCount !== 1 ? "s" : ""}`}
                </p>
                {
                    showSort && sortOptions.length > 0 && (
                        <div className = "relative w-full sm:w-auto">
                            <select name = "sort" value = {sortValue} onChange = {(e) => onSortChange?.(e.target.value)} className = "w-full sm:w-auto bg-(--gray-color) hover:bg-(--gray-light) text-(--primary) font-medium px-5 py-3 pr-12 rounded-full outline-none cursor-pointer appearance-none transition-all duration-300 focus:ring-2 focus:ring-(--primary)" aria-label = "Ordenar">
                                {
                                    sortOptions.map((option) => (
                                        <option key = {option.value} value = {option.value}>
                                            {option.label}
                                        </option>
                                    ))
                                }
                            </select>
                            <i className = "bi bi-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-(--primary) pointer-events-none text-sm"></i>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SearchAndFilter;