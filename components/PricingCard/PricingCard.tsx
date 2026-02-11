import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { PricingPlan } from "@/constants/constant";

type PricingCardProps = {
    plan: PricingPlan;
    billing: "monthly" | "yearly";
};

const PricingCard = ({ plan, billing }: PricingCardProps) => {
    const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
    const billingLabel = billing === "monthly" ? "Mes" : "Año";

    const enabledFeatures = plan.features.filter(f => f.enabled);
    const disabledFeatures = plan.features.filter(f => !f.enabled);

    return (
        <div className = {`bg-(--gray-light) px-6 py-6 rounded-xl ${plan.featured ? "ring-2 ring-(--primary) shadow-lg shadow-(--primary)/20" : ""}`}>
            {/* Header */}
            <div className = "border-b border-dashed border-(--primary)/30 pb-8">
                <div className = "flex justify-between items-center mb-4">
                    <h3 className = "font-semibold text-2xl">
                        {plan.name}
                    </h3>
                    {
                        plan.featured && plan.featuredImage && (
                            <Image src = {plan.featuredImage} alt = "Plan destacado" className = "w-40" />
                        )
                    }
                </div>
                <div className = "flex items-end gap-1 mb-5">
                    <span className = "text-2xl text-gray-400 font-medium">
                        S/.
                    </span>
                    <h2 className = "text-5xl text-(--primary) font-semibold">
                        {price.toFixed(2)}
                    </h2>
                    <span className = "text-xl text-(--primary)">
                        / {billingLabel}
                    </span>
                </div>
                <p className = "text-gray-300 leading-relaxed">
                    {plan.description}
                </p>
            </div>
            {/* Features habilitadas */}
            <ul className = "space-y-3 list-none py-8">
                {
                    enabledFeatures.map((feature, index) => (
                        <li key = {index} className = "flex gap-3 items-center">
                            <i className = "bi bi-check-circle-fill text-(--primary) text-xl shrink-0"></i>
                            <span className = "text-gray-200">
                                {feature.text}
                            </span>
                        </li>
                    ))
                }
            </ul>
            {/* Features deshabilitadas */}
            {
                disabledFeatures.length > 0 && (
                    <ul className = "opacity-50 space-y-3 list-none pb-8">
                        {
                            disabledFeatures.map((feature, index) => (
                                <li key = {index} className = "flex gap-3 items-center">
                                    <i className = "bi bi-check-circle-fill text-(--primary) text-xl shrink-0"></i>
                                    <span className = "text-gray-400">
                                        {feature.text}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            {/* CTA Button */}
            <Button text = "Comenzar ahora" />
        </div>
    );
};

export default PricingCard;