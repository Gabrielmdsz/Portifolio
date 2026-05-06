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
    category: string; 
    isHighlight: boolean;
    githubUrl: string;
    liveUrl: string;
    desktopImage: string;
    mobileImage: string;
}

export interface FilterType {
    id: string;
    label: string;
}

export interface SocialContactType {
  id: string;
  name: string;
  url: string;
  icon: React.ElementType;
}