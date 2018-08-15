setup.createTown = function (base) {
  var wealthRoll = random(1, 100).clamp(1, 100)
  var reputationRoll = random(1, 100).clamp(1, 100)
  var sinRoll = random(1, 100).clamp(1, 100)
  var diversityRoll = random(1, 100).clamp(1, 100)
  var magicRoll = random(0, 35).clamp(1, 100)
  var sizeRoll = random(0, 100).clamp(1, 100)
  var economicsRoll = random(1, 100).clamp(1, 100)
  var welfareRoll = random(1, 100).clamp(1, 100)
  var militaryRoll = random(1, 100).clamp(1, 100)
  var lawRoll = random(1, 100).clamp(1, 100)
  var arcanaRoll = random(1, 100).clamp(1, 100)
  var type = ['hamlet', 'hamlet', 'village', 'village', 'village', 'town', 'town', 'town', 'city', 'city'].random()
  var terrain = ['temperate', 'temperate', 'temperate', 'tropical', 'polar', 'arid'].random()
  var population
  var name = setup.createTownName()
  var town = {
    name: name,
    type: type,
    population: population,
    terrain: terrain,
    location: setup.townData.terrain[terrain].start.random(),
    primaryCrop: setup.townData.misc.primaryCrop.random(),
    primaryExport: setup.townData.misc.primaryExport.random(),
    currentEvent: setup.townData.misc.currentEvent.random(),
    microEvent: setup.townData.misc.microEvent,
    wealthRoll: wealthRoll,
    reputationRoll: reputationRoll,
    sinRoll: sinRoll,
    diversityRoll: diversityRoll,
    magicRoll: magicRoll,
    sizeRoll: sizeRoll,
    economicsRoll: economicsRoll,
    welfareRoll: welfareRoll,
    militaryRoll: militaryRoll,
    lawRoll: lawRoll,
    arcanaRoll: arcanaRoll
  }
  town.origin = setup.townData.terrain[town.terrain][town.location].origin.random()
  town.vegetation = setup.townData.terrain[town.terrain][town.location].vegetation.random()
  // town.location = setup.townData.terrain[terrain].random()

  town.population = setup.townData.type[town.type].population
  town.wealthRoll += setup.townData.type[town.type].wealthRoll
  town.reputationRoll += setup.townData.type[town.type].reputationRoll
  town.sinRoll += setup.townData.type[town.type].sinRoll
  town.diversityRoll += setup.townData.type[town.type].diversityRoll

  State.variables.guard = setup.createGuard(town)
  setup.createSocioPolitics(town)

  setup.townRender(town)
  return town
}
