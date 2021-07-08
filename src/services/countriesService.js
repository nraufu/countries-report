const countriesData = [
  {
    id: 1,
    name: "rwanda",
    population: "12.63 million",
    size: "26,338 km²",
    domains: [
      {
        id: 1,
        name: "domain 1",
        categories: [
          {
            id: 1,
            name: "category 1",
            score: 0,
            action: "supervise",
            priority: "high",
            timeline: "1 month",
            responsible: "CEO",
          },
          {
            id: 2,
            name: "category 2",
            score: 1,
            action: "educate",
            priority: "medium",
            timeline: "1 week",
            responsible: "manager",
          },
        ],
      },
      {
        id: 2,
        name: "domain 2",
        categories: [
          {
            id: 1,
            name: "category 3",
            score: 0,
            action: "supervise",
            priority: "high",
            timeline: "1 month",
            responsible: "CEO",
          },
          {
            id: 2,
            name: "category 4",
            score: 1,
            action: "educate",
            priority: "medium",
            timeline: "1 week",
            responsible: "manager",
          },
        ],
      },
    ],
  },
  {
    id:2,
    name: "kenya",
    population: "52.57 million",
    size: "580,367 km²",
    domains: [
      {
        id: 1,
        name: "domain 1",
        categories: [
          {
            id: 1,
            name: "category 1",
            score: 10,
            action: "supervise",
            priority: "high",
            timeline: "1 month",
            responsible: "CEO",
          },
          {
            id: 2,
            name: "category 2",
            score: 1,
            action: "educate",
            priority: "medium",
            timeline: "1 week",
            responsible: "manager",
          },
        ],
      },
      {
        id: 2,
        name: "domain 2",
        categories: [
          {
            id: 1,
            name: "category 3",
            score: 5,
            action: "supervise",
            priority: "high",
            timeline: "1 month",
            responsible: "CEO",
          },
          {
            id: 2,
            name: "category 4",
            score: 1,
            action: "educate",
            priority: "medium",
            timeline: "1 week",
            responsible: "manager",
          },
        ],
      },
    ],
  }
];

export const getCountriesData = () => countriesData;


export const getCountryData = (id) => countriesData.find(c => c.id === id);
