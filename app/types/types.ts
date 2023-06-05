
export type ProfileType = {
    gender: string;
    about: string;
    socialLinks: SocialLinksType;
}

export type SocialLinksType = {
    twitter?: string,
    linkedin: string,
    github: string
}