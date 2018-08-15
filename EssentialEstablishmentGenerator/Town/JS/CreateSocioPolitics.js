setup.createSocioPolitics = function (town) {
  // First, take the town size, and assign it economic ideologies and political sources
  switch (town.type) {
    case 'hamlet':
      town.economicIdeology = ['feudalism', 'feudalism', 'feudalism', 'feudalism', 'capitalism', 'syndicalism', 'communism', 'primitivism', 'primitivism'].random()
      town.politicalSource = ['absolute monarchy', 'republic', 'republic', 'republic', 'anarchy'].random()
      break
    case 'village':
      town.economicIdeology = ['feudalism', 'feudalism', 'feudalism', 'feudalism', 'capitalism', 'capitalism', 'syndicalism', 'communism', 'primitivism', 'primitivism'].random()
      town.politicalSource = ['constitutional monarchy', 'republic', 'republic', 'republic', 'anarchy'].random()
      break
    case 'town':
      town.economicIdeology = ['feudalism', 'feudalism', 'feudalism', 'feudalism', 'capitalism', 'capitalism', 'capitalism', 'syndicalism', 'communism', 'primitivism'].random()
      town.politicalSource = ['absolute monarchy', 'constitutional monarchy', 'republic', 'republic', 'republic', 'anarchy'].random()
      break
    case 'city':
      town.economicIdeology = ['feudalism', 'feudalism', 'capitalism', 'capitalism', 'capitalism', 'capitalism', 'syndicalism', 'communism'].random()
      town.politicalSource = ['absolute monarchy', 'absolute monarchy', 'absolute monarchy', 'constitutional monarchy', 'constitutional monarchy', 'republic', 'republic', 'republic', 'anarchy'].random()
      break
    default:
      town.economicIdeology = ['feudalism', 'feudalism', 'feudalism', 'capitalism', 'capitalism', 'capitalism', 'capitalism', 'syndicalism', 'communism'].random()
      town.politicalSource = ['absolute monarchy', 'absolute monarchy', 'absolute monarchy', 'constitutional monarchy', 'constitutional monarchy', 'republic', 'republic', 'republic', 'republic', 'anarchy'].random()
  }
  // give those ideologies some descriptions
  town.economicIdeologyIC = setup.townData.economicIdeology[town.economicIdeology].economicIdeologyIC
  town.economicIdeologyIST = setup.townData.economicIdeology[town.economicIdeology].economicIdeologyIST
  town.economicIdeologyDescription = setup.townData.economicIdeology[town.economicIdeology].economicIdeologyDescription

  // ideology attribute modifiers
  town.economicsRoll += setup.townData.economicIdeology[town.economicIdeology].economicsRoll
  town.welfareRoll += setup.townData.economicIdeology[town.economicIdeology].welfareRoll
  town.lawRoll += setup.townData.economicIdeology[town.economicIdeology].lawRoll
  town.militaryRoll += setup.townData.economicIdeology[town.economicIdeology].militaryRoll

  // console.log(town.economicIdeologyDescription)
  switch (town.politicalIdeology) {
    case 'pedocracy', 'kleptocracy', 'theocracy', 'magocracy', 'technocracy':
      town.leaderType = "<<link '_townPoliticalFaction.name'>><<set $currentFaction to _townPoliticalFaction>><<goto 'FactionProfile'>><</link>>"
      town.leaderFaction = setup.createFaction({leadershipType: "individual", isPoliticalPower: true, type: setup.townData.politicalIdeology[town.politicalIdeology].type})
  }
  // autocratic monarchies / constitutional monarchies
  if (town.politicalSource === 'absolute monarchy') {
    if (town.politicalIdeology === 'autocracy') {
      town.politicalSourceDescription = '<<print _townRuler.title.toUpperFirst()>> <<profile _townRuler>> is technically the head of state, but affairs are handled by the prime minister, <<profile _townLeader>>, who controls all executive decisions.'
    } else {
      town.politicalSourceDescription = '<<print _townRuler.title.toUpperFirst()>> <<profile _townRuler>> is technically the head of state, but affairs are handled by a parliamentary consisting of ' + town.leaderType + ', the head of whom is _townLeader.title <<profile _townLeader>>.'
    }
  } else if (town.politicalSource === 'constitutional monarchy') {
    if (town.politicalIdeology === 'autocracy') {
      town.politicalSourceDescription = "<<print _townLeader.title.toUpperFirst()>> <<profile _townLeader>> is the supreme ruler, and all laws and affairs are governed by the crowns' will."
    } else {
      town.politicalSourceDescription = '<<print _townRuler.title.toUpperFirst()>> <<profile _townRuler>> is the head of state, but affairs are handled by ' + town.leaderType + ', the head of whom is _townLeader.title <<profile _townLeader>>.'
    }
  } else {
    town.politicalSourceDescription = setup.townData.politicalSource[town.politicalSource].politicalSourceDescription
  }

  town.politicalIdeology = setup.townData.politicalSource[town.politicalSource].politicalIdeology.random()
  switch (town.politicalSource) {
    case 'anarchy':
      town.economicsRoll -= 40
      town.welfareRoll -= 45
      town.lawRoll -= 50
      town.militaryRoll -= 60
      break
  }

  // political ideology modifiers
  town.economicsRoll += setup.townData.politicalIdeology[town.politicalIdeology].economicsRoll
  town.welfareRoll += setup.townData.politicalIdeology[town.politicalIdeology].welfareRoll
  town.lawRoll += setup.townData.politicalIdeology[town.politicalIdeology].lawRoll
  town.militaryRoll += setup.townData.politicalIdeology[town.politicalIdeology].militaryRoll
  town.arcanaRoll += setup.townData.politicalIdeology[town.politicalIdeology].arcanaRoll

  switch (town.politicalIdeology) {
    case 'autocracy':
      switch (town.politicalSource) {
        case 'absolute monarchy':
          town.ruler = setup.createNPC({title: 'Royal Highness', background: 'noble'})
          var townRuler = town.ruler
          switch (townRuler.gender) {
            case 'man':
              town.rulerType = 'King'
              break
            case 'woman':
              town.rulerType = 'Queen'
              break
            default:
              town.rulerType = 'the supreme leader'
          }
          State.variables.townLeader = townRuler
          break
        case 'constitutional monarchy':
          town.ruler = setup.createNPC({title: 'Royal Highness', background: 'noble'})
          var townRuler = town.ruler
          switch (townRuler.gender) {
            case 'man':
              town.rulerType = 'King'
              break
            case 'woman':
              town.rulerType = 'Queen'
              break
            default:
              town.rulerType = 'the supreme leader'
          }
          town.leader = setup.createNPC({title: 'Lord', background: 'noble'})
          var townLeader = town.leader
          break
        default:
          town.leaderType = 'the supreme leader'
          town.leader = setup.createNPC({title: 'Lord', background: 'noble'})
          var townLeader = town.leader
      }
      break
    default:
      town.leaderType = setup.townData.politicalIdeology[town.politicalIdeology].leaderType
      town.leader = setup.createNPC({
        title: setup.townData.politicalIdeology[town.politicalIdeology].title,
        hasClass: setup.townData.politicalIdeology[town.politicalIdeology].hasClass,
        dndclass: setup.townData.politicalIdeology[town.politicalIdeology].dndclass,
        background: setup.townData.politicalIdeology[town.politicalIdeology].background
      })
      var townLeader = town.leader
  }

  return town
}
