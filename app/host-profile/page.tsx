"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader/PageHeader";
import HostCard from "@/components/HostCard/HostCard";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";
import { hostProfilesData, hostSortOptions } from "@/constants/constant";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter";
import EmptyState from "@/components/EmptyState/EmptyState";

const HostProfile = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("name-asc");

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredHosts = hostProfilesData.filter((host) =>
        host.name.toLowerCase().includes(normalizedSearch) ||
        host.role.toLowerCase().includes(normalizedSearch)
    );

    const sortedHosts = [...filteredHosts].sort((a, b) => {
        switch (sortBy) {
            case "name-asc":
                return a.name.localeCompare(b.name);
            case "name-desc":
                return b.name.localeCompare(a.name);
            default:
                return 0;
        }
    });

    return (
        <>
            <PageHeader title = "Conoce a nuestros" highlight = "hosts" />
            <div className = "dark-section">
                <div className = "px-[8%] py-16 relative">
                    <SearchAndFilter searchTerm = {searchTerm} onSearchChange = {setSearchTerm} resultCount = {filteredHosts.length} resultLabel = "host" showSort = {true} sortValue = {sortBy} onSortChange = {setSortBy} sortOptions = {hostSortOptions} placeholder = "Buscar por nombre o rol..." />
                    {
                        filteredHosts.length === 0 ? (
                            <EmptyState icon = "bi-person-x" title = "No se encontraron hosts" description = "Intenta con otros términos de búsqueda." searchTerm = {searchTerm} />
                        ) : (
                            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {
                                    sortedHosts.map((host) => (
                                        <HostCard key = {host.id} host = {host} />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                <BannerEpisode />
            </div>
        </>
    )
}

export default HostProfile;