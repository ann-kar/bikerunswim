
export const mockStats = {
  cycling: {
    topWorkout: {
      speed: 20,
      distance: 15000,
      duration: 3700,
    }, //dane dla najlepszego treningu danej dyscypliny
    avgOfWorkouts: {
      speed: 6,
      distance: 5000,
      duration: 1600,
    }, //średnie wartości dla sumy wszystkich treningów danej dyscypliny
    totalWorkouts: {
      distance: 10000000,
      duration: 360000,
      workoutsCount: 37,
    } //suma distance i duration (tutaj pomijamy speed)
  },
  running: {
    topWorkout: {
      speed: 10,
      distance: 10000,
      duration: 3600,
    }, //dane dla najlepszego treningu danej dyscypliny
    avgOfWorkouts: {
      speed: 6,
      distance: 5000,
      duration: 1600,
    }, //średnie wartości dla sumy wszystkich treningów danej dyscypliny
    totalWorkouts: {
      distance: 10000000,
      duration: 360000,
      workoutsCount: 12,
    } //suma distance i duration (tutaj pomijamy speed)
  },
  swimming: {
    topWorkout: {
      speed: 7,
      distance: 5000,
      duration: 1800,
    }, //dane dla najlepszego treningu danej dyscypliny
    avgOfWorkouts: {
      speed: 6,
      distance: 5000,
      duration: 1600,
    }, //średnie wartości dla sumy wszystkich treningów danej dyscypliny
    totalWorkouts: {
      distance: 10000000,
      duration: 360000,
      workoutsCount: 7,
    } //suma distance i duration (tutaj pomijamy speed)
  }
}