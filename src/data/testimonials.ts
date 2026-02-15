
export interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "Sarah Jenkins",
        role: "Director of Engineering",
        company: "GoDaddy",
        content: "Nishant is one of those rare engineers who truly understands both the infrastructure and the business value of data. His work on our pricing analytics platform was instrumental in driving a 15% revenue uplift."
    },
    {
        name: "Michael Chen",
        role: "Senior Data Scientist",
        company: "Warner Bros. Discovery",
        content: "I worked closely with Nishant on the EMEA marketing data lake. His ability to design scalable pipelines that could handle our massive viewership data was impressive. He's also a fantastic mentor to junior engineers."
    },
    {
        name: "David Miller",
        role: "VP of Data",
        company: "Impetus Technologies",
        content: "Nishant played a key role in our migration to Palantir Foundry. His deep technical knowledge and problem-solving skills helped us navigate complex legacy systems and deliver the project ahead of schedule."
    }
];
