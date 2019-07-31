const Objects = () => {

  const days = [
    {day: 'Day One', T1: 'Squat', T1max: 455},
    {day: 'Day Two', T1: 'Bench', T1max: 265},
    {day: 'Day Three', T1: 'Deadlift', T1max: 475},
    {day: 'Day Four', T1: 'OHP', T1max: 175}
  ]

  const weeks = [
    {week: 'Week 1', T1reps: '3x6', T1perc: .70},
    {week: 'Week 2', T1reps: '3x5', T1perc: .75},
    {week: 'Week 3', T1reps: '3x4', T1perc: .80},
    {week: 'Week 4', T1reps: '3x3', T1perc: .825},
    {week: 'Week 5', T1reps: '4x2', T1perc: .85},
    {week: 'Week 6', T1reps: '1', T1perc: 1.00},
    {week: 'Week 7', T1reps: '5x3', T1perc: .80},
    {week: 'Week 8', T1reps: '5x2', T1perc: .825},
    {week: 'Week 9', T1reps: '5x1', T1perc: .85},
    {week: 'Week 10', T1reps: '3x2', T1perc: .90},
    {week: 'Week 11', T1reps: '3x1', T1perc: .95},
    {week: 'Week 12', T1reps: '1', T1perc: 1.05}
  ]

  const dupWeeks = [
    {week: 'Week 1'},
    {week: 'Week 2'},
    {week: 'Week 3'},
    {week: 'Week 4'}
  ]

  const dup = [
    {reps: '3x8', perc: .80},
    {reps: '4x5', perc: .85},
    {reps: '5x3', perc: .90}
  ]

  var count = 0

  return (
    days,
    weeks,
    dupWeeks,
    dup,
    count
  )
}

export default Objects