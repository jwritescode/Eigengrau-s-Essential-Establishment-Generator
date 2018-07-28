setup.reputationFaction = function (faction) {
  // switch (faction.age) {
  //   case 'ancient':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, 30)
  //     break
  //   case 'extremely old':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, 25)
  //     break
  //   case 'very old':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, 20)
  //     break
  //   case 'quite old':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, 15)
  //     break
  //   case 'well established':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, 10)
  //     break
  //   case 'somewhat old':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, 5)
  //     break
  //   case 'relatively new':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, -5)
  //     break
  //   case 'recently established':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, -10)
  //     break
  //   case 'new':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, -15)
  //     break
  //   case 'quite new':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, -20)
  //     break
  //   case 'very new':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, -25)
  //     break
  //   case 'brand new':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, -25)
  //     break
  //   case 'unknown':
  //     faction.reputationRoll += Math.fm(faction.reputationRoll, 15)
  // }

  switch (faction.age) {
    case 'ancient':
      faction.reputationRoll += 30
      break
    case 'extremely old':
      faction.reputationRoll += 25
      break
    case 'very old':
      faction.reputationRoll += 20
      break
    case 'quite old':
      faction.reputationRoll += 15
      break
    case 'well established':
      faction.reputationRoll += 10
      break
    case 'somewhat old':
      faction.reputationRoll += 5
      break
    case 'relatively new':
      faction.reputationRoll += -5
      break
    case 'recently established':
      faction.reputationRoll += -10
      break
    case 'new':
      faction.reputationRoll += -15
      break
    case 'quite new':
      faction.reputationRoll += -20
      break
    case 'very new':
      faction.reputationRoll += -25
      break
    case 'brand new':
      faction.reputationRoll += -25
      break
    case 'unknown':
      faction.reputationRoll += 15
  }

  if (faction.reputationRoll > 95) {
    faction.reputation = 'excellent'
  } else if (faction.reputationRoll > 90) {
    faction.reputation = 'very good'
  } else if (faction.reputationRoll > 80) {
    faction.reputation = 'quite good'
  } else if (faction.reputationRoll > 70) {
    faction.reputation = 'good'
  } else if (faction.reputationRoll > 60) {
    faction.reputation = 'above average'
  } else if (faction.reputationRoll > 55) {
    faction.reputation = 'slightly above average'
  } else if (faction.reputationRoll > 50) {
    faction.reputation = 'average'
  } else if (faction.reputationRoll > 45) {
    faction.reputation = 'slightly below average'
  } else if (faction.reputationRoll > 40) {
    faction.reputation = 'poor'
  } else if (faction.reputationRoll > 30) {
    faction.reputation = 'quite poor'
  } else if (faction.reputationRoll > 20) {
    faction.reputation = 'very poor'
  } else if (faction.reputationRoll > 10) {
    faction.reputation = 'extremely poor'
  } else if (faction.reputationRoll <= 5) {
    faction.reputation = 'abysmal'
  } else {
    faction.reputation = 'average'
  }

  return faction
}
