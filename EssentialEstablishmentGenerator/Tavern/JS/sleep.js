setup.tavernSleep = function (tavern) {
  var restfulness = random(1, 100)
  var sleepEasy = 0

  if (tavern.wealth === 'kingly') {
    restfulness += 30
    sleepEasy += 3
  } else if (tavern.wealth === 'aristocratic') {
    restfulness += 15
    sleepEasy += 2
  } else if (tavern.wealth === 'wealthy') {
    restfulness += 7
    sleepEasy += 1
  } else if (tavern.wealth === 'modest') {
    restfulness -= 2
  } else if (tavern.wealth === 'poor') {
    restfulness -= 5
    sleepEasy -= 2
  } else if (tavern.wealth === 'squalid') {
    restfulness -= 10
    sleepEasy -= 3
  }

  if (tavern.cleanlinessRoll > 90) {
    restfulness += 30
  } else if (tavern.cleanlinessRoll > 80) {
    restfulness += 15
    sleepEasy += 3
  } else if (tavern.cleanlinessRoll > 70) {
    restfulness += 5
    sleepEasy += 2
  } else if (tavern.cleanlinessRoll > 60) {
    restfulness += 3
    sleepEasy += 1
  } else if (tavern.cleanlinessRoll > 50) {
    restfulness -= 2
  } else if (tavern.cleanlinessRoll > 40) {
    restfulness -= 5
  } else if (tavern.cleanlinessRoll > 30) {
    restfulness -= 10
    sleepEasy -= 1
  } else if (tavern.cleanlinessRoll > 20) {
    restfulness -= 15
    sleepEasy -= 2
  } else if (tavern.cleanlinessRoll < 20) {
    restfulness -= 20
    sleepEasy -= 3
  }

  if (tavern.bedCleanlinessRoll > 90) {
    restfulness += 30
    sleepEasy += 4
  } else if (tavern.bedCleanlinessRoll > 80) {
    restfulness += 15
    sleepEasy += 3
  } else if (tavern.bedCleanlinessRoll > 70) {
    restfulness += 5
    sleepEasy += 2
  } else if (tavern.bedCleanlinessRoll > 60) {
    restfulness += 3
    sleepEasy += 1
  } else if (tavern.bedCleanlinessRoll > 50) {
    restfulness -= 2
  } else if (tavern.bedCleanlinessRoll > 40) {
    restfulness -= 5
  } else if (tavern.bedCleanlinessRoll > 30) {
    restfulness -= 10
    sleepEasy -= 1
  } else if (tavern.bedCleanlinessRoll > 20) {
    restfulness -= 15
    sleepEasy -= 2
  } else if (tavern.bedCleanlinessRoll < 20) {
    restfulness -= 20
    sleepEasy -= 3
  }

  tavern.sleepOutput = setup.closestMatch(setup.getSleep(tavern), 'note', 'restfulness', 'sleepEasy', 'restfulness', 'sleepEasy')

  switch (tavern.type) {
    case 'brothel':
      tavern.sleepOutput += ' in spite of the whores moaning. '
      break
    case 'gambling den':
      tavern.sleepOutput += ' in spite of the commotion whenever something interesting happened at the gambling tables. '
      break
    default:
      tavern.sleepOutput += '. '
  }

  setup.tavernWakeUp = function (tavern) {
    var bartender = tavern.bartender
    if (tavern.wealth === 'kingly') {
      tavern.sleepOutput += "In the morning, you're awakened to a knock on the door; apparently " + tavern.name + ' comes with a complimentary breakfast in bed. You get dressed and open the door, and one of the barmaids comes in wheeling a trolley, upon which is laden with toast, fruits, cured meats, porridge, and all kinds of cheeses with breads.'
    } else if (tavern.wealth === 'aristocratic') {
      tavern.sleepOutput += "In the morning, you're awakened to the sound of a bell. Going downstairs to the bar area, you see that a continental breakfast has been set out for you. " + bartender.name + ' is standing behind the counter, pouring a beer which ' + bartender.heshe + ' hands to you, asking if you slept well.'
    } else if (tavern.wealth === 'wealthy') {
      tavern.sleepOutput += 'When you wake, you pack your things and head downstairs to see that ' + bartender.name + ' is waiting there, in case you wanted any breakfast before you left; ' + bartender.heshe + " says that there's hot porridge, breads and cheeses, and fruit if you'd like to pay the nominal fee of one silver for the breakfast."
    } else if (tavern.wealth === 'modest') {
      tavern.sleepOutput += 'You head down after packing your things, and see that ' + bartender.name + ' is sitting at one of the benches, chewing on a hunk of bread with cheese. The ' + bartender.weight + ' ' + bartender.manwoman + ' nods at you, and pauses, finishing chewing. When ' + bartender.heshe + ' does finish, ' + bartender.heshe + " tells you that there's some bread and cheese left, if you want to pay the three copper for it."
    } else if (tavern.wealth === 'poor') {
      tavern.sleepOutput += [
        'You make your way down out of the ' + tavern.wordnoun + ' and see ' + bartender.name + ' has fallen asleep at a bowl of porridge. From the kitchen, you can smell something burning',
        "You make your way down, and as you're leaving " + tavern.name + ', you accidentally knock a cup over. From behind the bar, you hear ' + bartender.firstName + ' yell out obscenities at you for disturbing ' + bartender.hisher + ' slumber.',
        'You start to make your way out of ' + tavern.name + ', careful not to disturb the patrons that have fallen asleep at their tables.',
        'You smell something burning, and make your way down to check; when you get down to the kitchen of ' + tavern.name + ', you find ' + bartender.firstName + ' sitting, chewing angrily over a bowl of burnt porridge.'].random()
    } else if (tavern.wealth === 'squalid') {
      tavern.sleepOutput += [
        'You start to make your way out of the ' + tavern.cleanliness + ' ' + tavern.wordnoun + ', and smell something burning, and make your way down to check; when you get down to the kitchen of ' + tavern.name + ', you find ' + bartender.firstName + ' sitting, chewing angrily over a bowl of burnt porridge.',
        "You can't help but shake the feeling that there's a smell clinging to your clothes after staying the night at " + tavern.name + '.'].random()
    }
  }
  setup.tavernWakeUp(tavern)

  return tavern.sleepOutput
}
