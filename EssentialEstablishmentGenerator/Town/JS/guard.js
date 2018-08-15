setup.createGuard = function (town) {
  var guard = {
    passageName: 'GuardOutput',
    primaryColours: [
      'black',
      'red',
      'scarlet',
      'forest green',
      'royal blue',
      'light blue',
      'magenta',
      'pale yellow',
      'brown',
      'dark grey',
      'gunmetal',
      'maroon',
      'navy blue',
      'steel',
      'olive green'].random(),
    secondaryColours: [
      'black',
      'gold',
      'silver',
      'white',
      'pearl white',
      'purple'].random(),
    insignia: [
      'a skull',
      'a bow & arrow',
      'an eagle',
      'a star',
      'an axe',
      'a set of crossed spears',
      'a shield',
      'a ghost',
      'a clenched fist',
      'a flame',
      'an arrow',
      'a dagger',
      'a sword',
      'a hammer',
      'the sun',
      'the moon',
      'a bat',
      'a bull',
      'a dragon',
      'a falcon',
      'a lion',
      'a raven',
      'a scorpion',
      'a snake',
      'a vulture',
      'a wolf'].random()
  }
  guard.livery = guard.primaryColours + ' and ' + guard.secondaryColours + ' livery adorned with an image of ' + guard.insignia

  var _guardnameA = ['Regiment', 'Guard', 'Officers', 'Guardsmen', 'Protectors', 'Protectorate', 'Defenders', 'Watch', 'Watchers', 'Watchmen', 'Police', 'Peacemen', 'Axemen', 'Swordsmen', 'Pikesmen', 'Squad', 'Batallion', 'Battlesquad', 'Fighters', 'Keepers'].random()
  var _guardnameB = ['Justice', 'Righteousness', 'Law', 'Order', 'Safety', 'Strength', '$town.name', '$town.name', '$town.name'].random()
  var _guardnameC = ['Black', 'White', 'Shining', 'Just', 'Tall', 'Impenetrable', 'Unbreakable', 'Brass', 'Bronze', 'Blue', 'Strong', 'Mighty', 'Lawful'].random()
  var _guardnameD = ['Hand', 'Fist', 'Gauntlet', 'Glove', 'Hammer', 'Shield', 'Cloak', 'Dagger', 'Mace', 'Sword'].random()
  var _guardnameRoll = random(1, 6)
  switch (_guardnameRoll) {
    case 1:
      guard.name = 'The ' + _guardnameA + ' of ' + town.name
      break
    case 2:
      guard.name = 'The ' + town.name + ' ' + _guardnameA
      break
    case 3:
      guard.name = 'The ' + _guardnameA + ' of ' + _guardnameB
      break
    case 4:
      guard.name = 'The ' + _guardnameC + ' ' + _guardnameA
      break
    case 5:
      guard.name = 'The ' + _guardnameC + ' ' + _guardnameD
      break
    default:
      guard.name = 'The ' + _guardnameC + ' ' + _guardnameD + ' of ' + _guardnameB
  }
  guard.captain = setup.createNPC({dndclass: "fighter", background: "soldier", gender: ["man", "man", "man", "woman"].random()})
  return guard
}
