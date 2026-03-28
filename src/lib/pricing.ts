export const launchPricingPlans = [
    {
        key: "monthly",
        officialPrice: "$3.99",
        launchPrice: "$1.99",
        discount: "-50%",
        featured: false,
    },
    {
        key: "annual",
        officialPrice: "$34.99",
        launchPrice: "$19.99",
        discount: "-43%",
        featured: true,
    },
    {
        key: "lifetime",
        officialPrice: "$129.99",
        launchPrice: "$69.99",
        discount: "-46%",
        featured: false,
    },
] as const;

export type LaunchPricingPlan = (typeof launchPricingPlans)[number];
