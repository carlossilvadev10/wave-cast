"use client";

import React from "react";
import CountUp from "react-countup";

type StatCardProps = {
    value: number;
    suffix?: string;
    label: string;
}

const StatCard = ({ value, suffix = "", label }: StatCardProps) => {
    return (
        <div className = {`bg-(--gray-light) rounded-2xl p-8 text-center`}>
            <h2 className = "text-6xl font-semibold text-(--primary)">
                <CountUp start = {0} end = {value} duration = {5} />
                {suffix}
            </h2>
            <p className = "mt-3 text-xl text-gray-300">
                {label}
            </p>
        </div>
    );
};

export default StatCard;