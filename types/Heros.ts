
export type Hero = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: { current: string };
    headline: string;
    subheading: string;
    weight: number
}