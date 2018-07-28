setup.createFaction = function (base) {
  var faction = {}
  var index = State.variables.factions.size
  var type = ['thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars'].random()
  var leadershipType = ['individual', 'individual', 'individual', 'group', 'group'].random()
  var isPoliticalPower
  var leaders = []
  var leadershipGeneration = {}

  var reputationRoll = dice(2, 50)
  var reputation
  var influenceRoll = dice(2, 50)
  var influence
  var ageRoll = dice(2, 50)
  var age
  var sizeRoll = dice(2, 50)
  var size
  var stabilityRoll = dice(2, 50)
  var stability
  var resourcesRoll = dice(2, 50)
  var resources

  // Rolls are defined immediately in case they're needed in the subroutines out of order (i.e. it makes no sense to initialise SizeRoll in the size.js function if it's being used in "reputation.js")

  var faction = Object.assign({
    isPoliticalPower: isPoliticalPower,
    type: type,
    motivation: setup.motivationFaction(faction),
    leadershipType: leadershipType,
    influenceRoll: influenceRoll,
    reputationRoll: reputationRoll,
    ageRoll: ageRoll,
    sizeRoll: sizeRoll,
    stabilityRoll: stabilityRoll,
    resourcesRoll: resourcesRoll,
    influence: influence,
    reputation: reputation,
    age: age,
    size: size,
    stability: stability,
    resources: resources
  }, base)

  setup.nameFaction(faction)
  setup.ageFaction(faction)
  setup.reputationFaction(faction)
  setup.sizeFaction(faction)
  setup.influenceFaction(faction)
  setup.resourcesFaction(faction)
  setup.stabilityFaction(faction)

  setup.leaderFaction(faction)
  setup.joinFaction(faction)
  setup.membersFaction(faction)
  setup.createAllies(faction)

  State.variables.factions.set(++index, faction)

  return faction
}
