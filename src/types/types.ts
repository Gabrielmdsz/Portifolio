import type { ElementType } from "react";

export interface TypesCardsSkill {
    title: string,
    description: string,
    icon: ElementType,
    brandColor: string
}
export interface ProjectType {
    id: string;
    title: string;
    description: string;
    category: string; // ex: 'landing', 'backend', 'apps'
    isHighlight: boolean;
    githubUrl: string;
    liveUrl: string;
}

export interface FilterType {
    id: string;
    label: string;
}