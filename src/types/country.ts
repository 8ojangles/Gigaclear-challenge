export interface Country {
    code: string;
    name: string;
    capital: string;
    continent: {
        name: string;
    };
    currency: string;
    languages: { name: string }[];
    emoji: string;
}