import React from "react";

type EpisodeBadgeProps = {
    episode: string;
}

const EpisodeBadge = ({ episode }: EpisodeBadgeProps) => {
    return (
        <span className = {`bg-(--gray-color) px-5 py-2 rounded-full text-(--primary) font-semibold tracking-wide`}>
            {episode}
        </span>
    );
};

export default EpisodeBadge;