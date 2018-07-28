setup.createLifeEvents = function (npc) {
  var lifeEventsNumber
  var lifeEventsRoll

  npc.lifeEvents = []
  if (npc.ageRoll > 60) {
    lifeEventsNumber = dice(2, 6)
  } else if (npc.ageRoll > 50) {
    lifeEventsNumber = random(1, 10)
  } else if (npc.ageRoll > 40) {
    lifeEventsNumber = random(1, 8)
  } else if (npc.ageRoll > 30) {
    lifeEventsNumber = random(1, 6)
  } else if (npc.ageRoll > 20) {
    lifeEventsNumber = random(1, 4)
  } else if (npc.ageRoll > 15) {
    lifeEventsNumber = 1
  } else if (npc.ageRoll <= 15) {
    lifeEventsNumber = 0
  }

  // this is meant to assign an age for when the NPC had the life event. Still haven't decided how I'll handle distribution of events.
  // lifeEventsAgeNumber = ((npc.ageRoll - 15) / lifeEventsNumber)
  // var e
  // npc.lifeEventsAge = []
  // for (e = 0; e < lifeEventsNumber; e++) {
  //   npc.lifeEventsAge.push()
  // }

  var i
  for (i = 0; i < lifeEventsNumber; i++) {
    lifeEventsRoll = random(1, 100)
    if (lifeEventsRoll === 100) {
      npc.lifeEvents.push(weirdStuff())
    } else if (lifeEventsRoll >= 96) {
      npc.lifeEvents.push(arcaneMatters())
    } else if (lifeEventsRoll >= 91) {
      npc.lifeEvents.push(crime())
    } else if (lifeEventsRoll >= 86) {
      npc.lifeEvents.push(war())
    } else if (lifeEventsRoll >= 81) {
      npc.lifeEvents.push(supernatural())
    } else if (lifeEventsRoll >= 76) {
      npc.lifeEvents.push(adventure())
    } else if (lifeEventsRoll >= 71) {
      npc.lifeEvents.push(meetImportantNPC())
    } else if (lifeEventsRoll >= 51) {
      npc.lifeEvents.push(backgroundWork())
    } else if (lifeEventsRoll >= 41) {
      npc.lifeEvents.push(meetPartnerNPC())
    } else if (lifeEventsRoll >= 31) {
      npc.lifeEvents.push(meetEnemyNPC())
    } else if (lifeEventsRoll >= 21) {
      npc.lifeEvents.push(meetFriendNPC())
    } else if (lifeEventsRoll >= 11) {
      npc.lifeEvents.push(trinket())
    }
  }

  function trinket () {
    var trinket = setup.createMagicTrinket()
    return [
      "I was given a magical trinket- it's a ",
      'I happened across a ',
      'I was gifted a ',
      "I saved a wizard's life, and as a token of his thanks, he gave me a ",
      "I came across a trinket in a field- It's a "
    ].random() + trinket.name + '<blockquote>(' + trinket.description + ')</blockquote>'
  }

  function meetFriendNPC () {
    // npc.friend = setup.createNPC()
    // return 'I made a friend for life in my travels- ' + '<<profile ' + npc.friend + '>>'
    return [
      'I made a friend for life in my travels',
      'I was poor as a churchmouse, but then the priest helped me get a job. I owe everything I am today to his compassion',
      'I went traveling for a while, and found myself in the company of all manner of folk, who I like to think helped teach me how to be a bit wiser',
      "I took an odd job delivering a package to the town over. Never would have thought that that sort of thing could be life-changing, but it was- it's where I met my best friend"
    ].random()
  }

  function meetImportantNPC () {
    // npc.important = setup.createNPC()
    // return 'in my travels, I met the illustrious ' + '<<profile ' + npc.important + '>>'
    return [
      ['I met a famous ', 'I came across a famous ', 'for a time, I worked for a famous ', 'I met a well known ', 'I had a brief stint working for a famous '].random() + ['wizard', 'bard', 'priest', 'noble', 'sorcerer', 'inventor', 'merchant', 'group of mercenaries', 'witch', 'general', 'commander', 'enchanter', 'druid', 'talking horse'].random() + [' in my travels', ' on the road', ' while I was traveling', ' when I was spending some time as a ' + npc.background].random()
    ].random()
  }

  function meetPartnerNPC () {
    if (npc.partnerID !== undefined) {
      return 'I had a child with my dear partner'
    } else {
      if (npc.gender === 'man') {
        npc.partnerID = setup.createNPC({gender: 'woman'})
      } else {
        npc.partnerID = setup.createNPC({gender: 'man'})
      }
      return 'I met the love of my life- ' + npc.partnerID
    }
  }

  function meetEnemyNPC () {
    // npc.enemy = setup.createNPC()
    // return 'I made an enemy for life in my travels- ' + '<<profile ' + npc.enemy + '>> still hunts me'
    return [
      'I made an enemy for life in my travels- ',
      'I met a man, and we played cards. He decided that I was cheating- ',
      'I was a guest in the court of a lord, and made an embarassment of him- ',
      'I used to play cards in a pub, ' + State.variables.tavern.name + ', and one time supposedly cheated a man out of his winnings; '
    ].random() + [
      'it was a misunderstanding, but I cannot convince him otherwise. ',
      'I admit that I am at least partially at fault. ',
      "I suppose that I'm at least partially to blame. ",
      "I'll freely admit that I'm to blame. ",
      "I'm ashamed to admit that I'm to blame. "
    ].random() + [
      'He hunts me to this day',
      'I hope to apologise to him if I ever encounter him again',
      "I don't exactly care to run into him again",
      "I couldn't care less if he tries to do anything about it",
      "I'll gut him like a fish if he crosses my path again",
      "I'm afraid that he'll kill me in my sleep",
      'I would rather have backup the next time that I face him'
    ].random()
  }

  function supernatural () {
    return [
      'I came across a horde of ghouls feasting on a dead body in my youth',
      'I was ensorcelled by a fey for a year. It played tricks on my mind, making me see things which were not there, and not see things which were there',
      "I once woke up miles away from my home- I don't know if it was due to drinking or some other, magical force at work, but I've sworn off the grog ever since",
      'I had gone for a walk, when I found a horse. It spoke to me, and told me to leave the town I was in before sundown. I was planning on leaving anyway, so I did, and then when I had reached the next town, there were rumours that the village had been attacked by ghouls',
      'I went to find a sheep that had gone missing, and must have gotten lost- I ended up in a strange land, where the colours were not as they should have been. I eventually found my way back, but never found the missing sheep. It turned up, completely skeletised in my bed three days later',
      'I saw a miracle- honest to god. This old man had told us that he was the physical aspect of a deity, and one of the boys did not believe him. Then, with a wave of his hand, he vanished'
    ].random()
  }

  function backgroundWork () {
    npc.wealth += (dice('2d6') * 1000)
    return [
      'I spent some time working as a ',
      'I did a stint as a ',
      'to pay off a debt, I spent some time as a ',
      'to pay off a debt, I had to work as a '].random() + [npc.background, npc.background, npc.background, npc.background, npc.profession, npc.profession, npc.profession].random()
  }

  function war () {
    var warRoll = random(1, 12)
    var warStart = [
      'there was a minor skirmish with some orcs that I was involved with.',
      'there was a small skirmish with a rivaling faction that I was drafted into.',
      'there was a small war between a rival lord that I was forced to take part with.',
      'there were some goblin raids which I had to defend my town from.',
      'there was a pretty nasty zombie outbreak which I had to defend my town against.'
    ].random()
    var warResults
    var warDescription
    if (warRoll === 12) {
      warResults = 'I acquitted myself well in battle, and was awarded a medal for bravery'
    } else if (warRoll >= 10) {
      warResults = 'I managed to escape the battle unscathed, but many of my friends were killed or injured'
    } else if (warRoll >= 8) {
      warResults = 'I managed to survive, but I still have nightmares about what happened'
    } else if (warRoll >= 5) {
      warResults = 'I suffered only minor injuries, and the wounds all healed without leaving any scars'
    } else if (warRoll >= 2) {
      warResults = 'I suffered some serious injuries, and had to be carried off the field'
      npc.physicaltrait = ['a long, thin scar running up the arm', 'a scar on the eye', 'a scar around the neck', 'a scar on the throat', 'a fiery red scar', 'a finger missing', 'two fingers missing', 'a chunk of left ear missing', 'a chunk of right ear missing', 'a scar through the eyebrow', 'a scar across the cheek', 'a scar on the nose', 'a scar down the forehead', 'a scar in the middle of the hand', 'a crooked scar along the jaw'].random()
    } else if (warRoll === 1) {
      warResults = 'I was knocked out, and left for dead. I woke up hours later, after the battle was over, and had to walk injured for days to find aid'
    }
    warDescription = warStart + ' ' + warResults
    return warDescription
  }

  function weirdStuff () {
    return [
      'I came across a genie, but squandered the wish on an ex lover',
      'I was once swallowed by a giant fish. Spent a bloody month in there, subsisting on fish and the other things it ate as I tried to find my way out',
      'I met a ' + ['demigod', 'arch-fey', 'lich', 'demon lord', 'titan'].random() + ' and lived to tell the tale',
      'I was once captured by a group of cultists. They nearly sacrificed me, but I managed to set one of their robes on fire, and escaped in the confusion',
      'I really have had some pretty bad luck in my love life in the past- one lover turned out to be a silver dragon. Took all my gold',
      "I had a bit of a nervous breakdown a while back, and spent a lot of time alone, stark raving mad. But I'm better now! Honest",
      'some bloody dragon held me as prisoner for a couple months. I was forced to polish all its gold! Luckily, I managed to escape when it tried to torch the nearby village',
      'believe it or not, I was a stone statue for quite a while; I only recently was released. I still feel pretty stiff, to be honest'
    ].random()
  }

  function arcaneMatters () {
    return [
      'I once saw a demon',
      'I once saw a powerful wizard enchanting a weapon',
      'I once got caught in the cross-fires between two dueling wizards',
      'I had a mishap with a charm spell- an old friend tried to force me to hand over all my money, but I luckily managed to resist the spell',
      'I once drank a really strong potion- I swear to god, I could taste colours'
    ].random()
  }

  function crime () {
    var crime = ['murder', 'theft', 'arson', 'assault', 'kidnapping', 'smuggling', 'extortion', 'counterfeiting'].random()
    var crimeRoll = random(1, 12)
    var crimeReadout
    if (crimeRoll >= 9) {
      crimeReadout = 'I was caught and convicted of ' + crime + ', and spent ' + random(1, 4) + ' years ' + ['in jail', 'chained to an oar', 'doing hard labour'].random() + ' before ' + ['being released', 'managing to escape'].random()
    } else if (crimeRoll >= 7) {
      crimeReadout = 'I was nearly caught and convicted in the middle of a ' + crime + ', but managed to escape. They are still after me, though'
    } else if (crimeRoll >= 4) {
      crimeReadout = 'I was caught aiding and abetting the crime of ' + crime + ', but due to ' + ['being forced to do it against my will', 'my amazing lawyer', 'being under a spell'].random() + ', I was found not guilty'
    } else {
      crimeReadout = 'I was falsely accused of ' + crime + ", but eventually was acquitted. It took up years of my life, though, and I still get antsy around guards that I don't know"
    }
    return crimeReadout
  }

  function adventure () {
    var adventureRoll = random(1, 100)
    var adventureResults
    var adventurePrefix = [
      'I went on an adventure, and ',
      'I went on a hike with a friend, and we got lost. It took us months to get back home, and on the way, I ',
      'I had a spur of the moment whim to go on an adventure, and on my journeys, I ',
      'I got really drunk, and woke up in the middle of nowhere. From there, I had to trek back home, and on the way, I ',
      'there was a mercenary company which I signed on with for a season. We did fairly standard stuff- things like guarding caravans, you know. One time, I was separated from the party, and I '].random()
    if (adventureRoll === 100) {
      var weapon = setup.createMagicWeapon()
      adventureResults = 'came across a magical weapon- this is my trusty ' + weapon.name + ' (' + weapon.description + ')'
    } else if (adventureRoll >= 91) {
      adventureResults = 'found a considerable amount of treasure'
      npc.wealth += random(5100, 7150)
    } else if (adventureRoll >= 91) {
      adventureResults = 'found some treasure'
      npc.wealth += random(0, 600)
      npc.wealth += random(0, 600)
    } else if (adventureRoll >= 71) {
      adventureResults = 'learnt a great deal about myself'
    } else if (adventureRoll >= 61) {
      adventureResults = 'came across something terrifying that still stalks the lands'
    } else if (adventureRoll >= 51) {
      adventureResults = 'lost something of sentimental value to me'
    } else if (adventureRoll >= 41) {
      adventureResults = 'was poisoned by a ' + ['monster', 'trap', 'monster'].random() + ', but recovered in due time'
    } else if (adventureRoll >= 31) {
      adventureResults = "contracted a disease while exploring a filthy warren. I recovered, but I'm still not quite right"
      npc.physicaltrait = ['pockmarked face', 'grey hair'].random()
    } else if (adventureRoll >= 21) {
      adventureResults = 'was wounded, but recovered in time'
    } else if (adventureRoll >= 11) {
      adventureResults = 'was greivously wounded, but recovered in time. It still hurts, from time to time'
    } else if (adventureRoll < 11) {
      adventureResults = "nearly died- that's how I got the scars."
      npc.physicaltrait = ['a missing ear', 'a missing finger', 'two missing fingers'].random()
    }
    return adventurePrefix + adventureResults
  }
  return npc
}
