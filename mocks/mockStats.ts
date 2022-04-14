import { IStats } from "../interfaces/IStats";

export const mockStats: IStats = {
  top: {
    avgSpeed: 10,
    distance: 100,
    duration: 36000,
    favoriteSport: {
      name: "running",
      total: 23,
    },
  },
  avg: {
    avgSpeed: 3500,
    distance: 3000,
    duration: 3600,
  },
  total: {
    distance: 1500,
    duration: 360000,
    sport: [
      {
        name: "biking",
        total: 33434,
      },
    ],
  },
};
