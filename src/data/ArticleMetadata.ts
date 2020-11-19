export interface ArticleMetadata {
    id: number;
    title: string;
    status: Status;
    keywords: string;
    createdBy: string;
    lastModifiedBy: string;
    createdAt: string;
    lastModifiedAt: string;
}

export type Status = "visible" | "nosearch" | "archived";