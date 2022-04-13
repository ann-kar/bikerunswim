import { Discipline } from "./IWorkout";

export interface IStats {
  top: {
    avgSpeed: number;
    distance: number;
    duration: number;
    favoriteSport?: {
      name: string;
      total: number;
    };
  };
  avg: {
    avgSpeed: number;
    distance: number;
    duration: number;
  };
  total: {
    distance: number;
    duration: number;
    sport: [
      {
        name: string;
        total: number;
      }
    ];
  };
}

export interface IStatsRequest {
  startDate: string;
  endDate: string;
  discipline?: Discipline;
}

export interface IStatsResponse {
  request: IStatsRequest;
  stats: {
    top: {
      avgSpeed: number;
      distance: number;
      duration: number;
      favoriteSport?: {
        name: string;
        total: number;
      };
    };
    avg: {
      avgSpeed: number;
      distance: number;
      duration: number;
    };
    total: {
      distance: number;
      duration: number;
      sport: [
        {
          name: string;
          total: number;
        }
      ];
    };
  };
}
