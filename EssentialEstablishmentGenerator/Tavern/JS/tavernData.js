setup.tavernLookAround = function (tavern) {
  var bartender = tavern.bartender
  setup.lookAroundData = [
    {
      populationRoll: 90,
      roughnessRoll: 70,
      note: 'You can barely hear each other over the din of the other patrons, who are pretty rowdy. One elbows you in the ribs as they try to get around you to the bar.'
    },
    {
      populationRoll: 80,
      roughnessRoll: 60,
      note: 'You find it difficult to hear each other over the din of the crowds that are drunkenly cavorting around.'
    },
    {
      populationRoll: 80,
      roughnessRoll: 50,
      note:
      'It must be peak hour for the ' + tavern.wordnoun + '. The barmaid is running back and forth between customers and the kitchen, trying desperately to keep ontop of the ever growing requests for more ale.'
    },
    {
      populationRoll: 80,
      roughnessRoll: 40,
      note: 'The ' + tavern.wordnoun + ' is packed, and the patrons are clamouring to find the few barmaids that are on staff.'
    },
    {
      populationRoll: 80,
      roughnessRoll: 20,
      note: "There's barely enough room to stand, let alone find a seat in the " + tavern.lighting + ' ' + tavern.wordnoun + '.'
    },
    {
      populationRoll: 60,
      roughnessRoll: 60,
      note: 'The ' + tavern.wordnoun + " is packed with patrons, and you're pushed to the side as somebody makes for the latrine in a hurry."
    },
    {
      populationRoll: 70,
      roughnessRoll: 60,
      note:
      "It's peak hour for " + tavern.name + ' and you can tell that the bartender is concerned about a fight breaking out.'
    },
    {
      populationRoll: 70,
      roughnessRoll: 20,
      note: 'The ' + tavern.wordnoun + " is pretty packed with patrons, and it's difficult for you to find a seat."
    },
    {
      populationRoll: 60,
      roughnessRoll: 20,
      note:
      'The ' + tavern.wordnoun + ' is quite full, and the owner is clearly enjoying the amount of business ' + bartender.hisher + tavern.wordnoun + ' is receiving.'
    },
    {
      populationRoll: 50,
      roughnessRoll: 60,
      note:
      "There's a fair number of people in the " + tavern.wordnoun + ' with quite a few swords on display.'
    },
    {
      populationRoll: 50,
      roughnessRoll: 20,
      note:
      "There's a decent number of people in " + tavern.name + ', and you manage to find a seat without too much trouble.'
    },
    {
      populationRoll: 40,
      roughnessRoll: 60,
      note: 'The clientele is pretty rough, and might have scared off some of the less rambunctious potential customers.'
    },
    {
      populationRoll: 40,
      roughnessRoll: 20,
      note: "There's a reasonable amount of customers in the " + tavern.wordnoun + '. The barmaid is happily walking back and forth from the kitchen, taking out plates as they are delivered.'
    },
    {
      populationRoll: 30,
      roughnessRoll: 80,
      note: "The few people that are in the tavern bear scars, and openly talk of their violent exploits. It's pretty clear that they have scared away any regular clientele."
    },
    {
      populationRoll: 30,
      roughnessRoll: 60,
      note:
      'There are basically no people in the tavern, save for a few battle-hardened men talking in the corner.'
    },
    {
      populationRoll: 30,
      roughnessRoll: 20,
      note: tavern.name + " is basically empty, and there's not much for the barmaid to do, who settles for polishing a glass."
    },
    {
      populationRoll: 20,
      roughnessRoll: 60,
      note:
      "There's not very many customers in name at the moment. You see a couple of adventurers hunked over in the corner, quietly discussing battle plans, but nothing of particular interest in the clientele."
    },
    {
      populationRoll: 20,
      roughnessRoll: 20,
      note: "It's almost just you and the bartender in here."
    }
  ]
  return setup.lookAroundData
}

setup.tavernFun = ['A group of commoners is playing horse shoes out back.',
  'The party is surprised to find the country darts league in full swing as they enter. The waitresses are used to the chaos and dodge darts easily. The half ogre bouncer is using lawn darts.',
  'A group of Hill Dwarves are in the middle of a drinking contest, and two of them are passed out already. The Prize is a solid platinum stein.',
  'Wet Chainmail contest!',
  'A shy teenage girl is reciting bad poetry in a corner. No one is paying the slightest bit of attention to her.',
  "It's trivia night! Those scholars from the School of History and the Arts at the University always win, but tonight, we represent and the School of Alchemy will show those smug book-snobs what it means to be a nerd.",
  'A promoter is working his way around the tables looking for challengers to fight the local champion pugilist.',
  "It's a sausage fest! The place is packed with dwarves eager to devour the all-you-can-eat sausage special.",
  'An over-sized brute is arm-wrestling crushing the hand of everyone in sight.',
  'Some goblins are throwing dice with some animated skeletons at a table in the corner.',
  'A goblin is doing a poor job at cheating at a dice game, while a skeleton is doing an excellent job at cheating.',
  "A 7'2 red dragonborn with a 5' bastard sword is having a drinking contest with a dwarf. The dragonborn has a 4-pint tankard, and is almost managing to keep pace.",
  'A party sits in the corner booth playing cards. All of them are cheating, except the paladin, who, curiously, is winning.',
  'A mountain of a man in barbarian leathers is arm wrestling a small dragon and winning.',
  'An awakened Roper is winning two games of billiards at once.',
  'A group of drunken pixies is playing hide and seek by hiding behind patrons.',
  'The players have stumbled into a regional card championship being held that night. The buy in is huge but so is the pot.',
  'A shady looking gnomish inventor is proudly showing off his latest invention. He calls it a one armed bandit.',
  "A grey haired story teller is sitting near the fire holding a contest. He'll give a large purse for a story he hasn't heard yet, but so far no one has won."]

setup.tavernEntertainment = [
  'A bard is telling a story about the player’s latest act of daring do. He’s embellishing quite a bit. When he recognizes the party he makes a big spectacle.',
  'A bard is telling the story of the player’s latest exploit. It’s an obvious character assassination.',
  'A local bardic group, The Rolling Boulders, are performing, and a large crowd of drunken groupies will not stop screaming.',
  "A beggar offers to sing for a few coppers. You heard him singing to the last table. He's awful.",
  'A sassy fortune teller has set up shop in a corner booth. She informs you that she sees a hangover in your near future.',
  "A stirring rendition of 'The Lady and the Faerie Dragon' has the crowd calling for an encore from the minstrels.",
  'The lute-player catches some undergarments from the crowd and drapes them across the ridiculous horned helm he wears.',
  'On stage tonight: The Deep Tones. A quartet of dwarves with long beards and deep voices singing a capella favorites from places without light (or proper music).',
  'On stage tonight: Shaela Windspeaker. An elf-maid singer-songwriter with a bit of a whiny voice who is slowly making her way through her most recent song of protest against the previous and the present centuries of war.',
  'A nervous show-wizard on the small stage is doing tricks with Prestidigitation for the un-amused patrons.',
  'There is a pair of musicians warbling well known drinking songs. They have made an impromptu stage out of several tables. One of them seems to be tilting precariously.'].random()

setup.tavernPatrons = ['A poor farmer is trying to pay his bar tab with a sack of potatoes and a barrel of pickles.',
  'A sea captain has set up shop at a table and is trying to sell mementos and souvenirs from his latest great voyage of exploration. Birds, exotic coins, tiny mermaids, he has it all. Some of it looks fake though. A tiny bit looks disturbingly real.',
  'A ranger sits alone in a corner, smoking. A hood covers most of his face. At his feet is a sleeping wolfhound. Everyone is giving him a wide berth.',
  'A lone Troll is drinking at the end of the bar and softly crying and singing one country ballad after another.',
  'A stoned magician is fumbling his way through one awful card trick after another.',
  'A mixed group of Elves are drinking bad wine and holding scented handkerchiefs up to their noses to keep out the stench. One has an obsidian bow strapped to her back.',
  'Two guards are arguing at a table over who the captain likes more by comparing almost identical spears and claiming to have the better one.',
  'A sad clown is drinking a beer alone.',
  'A handsome young woman is holding court among some of her would-be suitors. Her father interrupts, and she stalks off embarrassed.',
  'Some idiot is having a stag night. His friends are loud and obnoxiously harassing the barmaid.',
  "It's ladies night! And it's not disappointing... A few pretty little things from the weavers' guild are here, a couple of attractive healers from the temple, and the beautiful new town librarian.",
  'A surly old witch is drinking sherry while stroking the fat grey cat sitting on her lap.',
  'The barmaid is a marilith, mixing up four drinks at a time.',
  'The barmaid is a succubus, she seems to be making great tips.',
  'The attendant in the bathroom is a foul-smelling zombie. He offers you a mint crystal.',
  'Behind the bar is a gnomish alchemist with a penchant for mixology experiments.',
  "The toothless mop-hand reminisces with a hobgoblin military has-been over ales about how an otyugh in the loo isn't as bad as the time a carrion crawler was in there.",
  'The barmaid is a doppelganger. When she returns to your table with your drinks she has taken the form of one of your party.',
  "A fat priest is doing an excellent jiggly dance in rhythm with the music. Either that or a gelatinous cube has made it's way onto the dance floor?"]

setup.getTavernMenu = function (tavern) {
  var bartender = tavern.bartender
  setup.tavernMenu = [
    { wealthRoll: 80,
      roughnessRoll: 80,
      note:
      ["There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the game that's on menu. " + bartender.name + " proudly tells you that there are no stinkin' vegetables, and that " + tavern.name + ' stocks only the finest meats.',
        "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's available to drink, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. The server then tells you that while " + tavern.name + ' is proud of its menu, it caters to an exclusively carnivorous diet.'].random()
    },
    { wealthRoll: 80,
      roughnessRoll: 30,
      note:
      ["There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the food that's on menu. The waitstaff tell you that " + tavern.name + ' is proud to be 100% violence free; upon further clarification, this is revealed to mean that there is not a single bone of meat in the entire ' + tavern.wordnoun + '.',
        "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's on menu, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. The waitstaff tell you that " + tavern.name + ' is proud to be 100% violence free; upon further clarification, this is revealed to mean that there is not a single bone of meat in the entire ' + tavern.wordnoun + '.'].random()
    },
    { wealthRoll: 80,
      roughnessRoll: 50,
      note:
      ["There's ales and boutique spirits available. Delicious smells are wafting from the kitchen, and your mouth salivates at the thought of the game that's on menu.",
        "The smells emanating from the kitchen tantalise your nostrils, and when you ask the waiting staff what's on menu, they begin to take a deep breath, before listing out a huge array of wines, ales, lagers, and spirits. It goes without saying that the kitchen is able to accomodate even the pickiest of royalty."].random()
    },
    { wealthRoll: 60,
      roughnessRoll: 80,
      note:
      ["There's ales available. The food is standard fare, with roast beef, pork, and mutton on the menu for food, but curiously no vegetables. " + bartender.name + " spits when you mention this, and says 'no stinkin' veggies around here. We eat meat and we like it, so if you don't like it, yer not eatin'.",
        "There's your standard beers, with the " + tavern.wordnoun + " specialising in ales, which are allegedly quite good. As far as food is concerned, there's regular fare of beef, pork, and mutton, but strangely, no breads, cheeses, or potatoes of any description; you hear another patron loudly state that he loves not having to put up with those 'pointy ears complaining about the lack of green stuff' in " + tavern.name + '.'].random()
    },
    { wealthRoll: 60,
      roughnessRoll: 30,
      note:
      ["There's ales available. The food is a peculiarly limited menu; roast vegetables, breads, cheeses, but no meats, despite " + tavern.name + ' clearly being able to afford it.',
        "There's your standard beers, with the " + tavern.wordnoun + " specialising in ales, which are allegedly quite good. As far as food is concerned, there's breads, cheeses, and all the vegetables you could ever ask for, but not a single bone of meat is available.",
        'Drinks are pretty standard, with a house lager being twenty percent off tonight. The menu is sadly lacking any meats, and when you ask ' + bartender.name + ' about it, ' + bartender.heshe + ' smiles, and says that ' + bartender.heshe + " is an animal lover, and wouldn't be able to forgive " + bartender.himherself + ' if an animal came to harm due to ' + bartender.hisher + ' business.'].random()
    },
    { wealthRoll: 60,
      roughnessRoll: 20,
      // bartender.race === "elf",
      note: 'Drinks are pretty standard, with the house lager being twenty percent off tonight. The menu is sadly lacking any meats, and when you ask ' + bartender.name + ' about it, ' + bartender.heshe + ' smiles, and says that ' + bartender.heshe + " is an animal lover, and wouldn't be able to forgive " + bartender.himherself + ' if an animal came to harm due to ' + bartender.hisher + ' business.'
    },
    { wealthRoll: 60,
      roughnessRoll: 30,
      note:
      ["There's ales available. The food is standard fare, with roast beef, pork, and mutton on the menu for food.",
        "There's your standard beers, with the " + tavern.wordnoun + " specialising in ales, which are allegedly quite good. As far as food is concerned, there's regular fare of beef, pork, breads and cheeses, and mutton."].random()
    },
    { wealthRoll: 40,
      roughnessRoll: 60,
      note:
      ["There's the usual house-brewed ale on tap, but it is warm and undercarbonated. You suspect that " + bartender.firstName + ' has watered it down. As far as food is concerned, there is the usual mutton and breads available.',
        '' + bartender.firstName + " says that they have some freshly brewed ale, although you soon discover that to be a lie; it's lukewarm, and barely carbonated."].random()
    },
    { wealthRoll: 40,
      roughnessRoll: 30,
      note:
      ["There's the usual house-brewed ale on tap, but it is warm and undercarbonated. As far as food is concerned, there is the usual mutton and breads available.",
        "There's a limited range of beers, some of which have very clearly soured.",
        'The food on offer is rather plain, with nothing terribly interesting or appetizing. The beer is unfortunately not much better.'].random()
    },
    { wealthRoll: 20,
      roughnessRoll: 30,
      note: "There's what can only be described as piss available to drink, and the food isn't much better; other patrons can be seen chewing away at stale pieces of bread."},
    { wealthRoll: 10,
      roughnessRoll: 30,
      note: "There's what can only be described as piss available to drink, and the food isn't much better; other patrons can be seen chewing away at stale pieces of bread."}
  ]
  return setup.tavernMenu
}

setup.getSleep = function (tavern) {
  setup.sleepData = [
    {
      restfulness: 90,
      sleepEasy: 2,
      note: "You unsurprisingly get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 90,
      sleepEasy: 0,
      note: "You get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 90,
      sleepEasy: 0,
      note: "You surprisingly get an excellent night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 80,
      sleepEasy: 2,
      note: "You unsurprisingly get a great night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 80,
      sleepEasy: 0,
      note: "You get a great night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 80,
      sleepEasy: -2,
      note: "You surprisingly get a great night's sleep, and awake feeling refreshed and reinvigorated"
    },
    {
      restfulness: 70,
      sleepEasy: 2,
      note: "You unsurprisingly get a good night's sleep, and awake feeling refreshed"
    },
    {
      restfulness: 70,
      sleepEasy: 0,
      note: "You get a good night's sleep, and awake feeling refreshed"
    },
    {
      restfulness: 70,
      sleepEasy: -2,
      note: "You surprisingly get a good night's sleep, and awake feeling refreshed"
    },
    {
      restfulness: 50,
      sleepEasy: 2,
      note: "You get an alright night's sleep, which is disappointing considering the quality of " + tavern.name + ', but you awake feeling reasonably refreshed'
    },
    {
      restfulness: 50,
      sleepEasy: 0,
      note: "You get an alright night's sleep, and awake feeling reasonably refreshed"
    },
    {
      restfulness: 50,
      sleepEasy: -2,
      note: "You get an alright night's sleep despite the poor quality of " + tavern.name + ', but you awake feeling reasonably refreshed'
    },
    {
      restfulness: 30,
      sleepEasy: 2,
      note: "You get an awful night's sleep, which is disappointing considering the quality of " + tavern.name + ', and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful'
    },
    {
      restfulness: 30,
      sleepEasy: 0,
      note: "You get an awful night's sleep, and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful"
    },
    {
      restfulness: 30,
      sleepEasy: -2,
      note: "You get an awful night's sleep, which is unsurprising considering the quality of " + tavern.name + ', and awake with a sore back; it might have been how you were sleeping, or the bed, but you feel pretty awful'
    },
    {
      restfulness: 10,
      sleepEasy: 2,
      note: "The night seems to go on forever, and you just can't get to sleep, despite the comforts provided. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
    },
    {
      restfulness: 10,
      sleepEasy: 0,
      note: "The night seems to go on forever, and you just can't get to sleep. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
    },
    {
      restfulness: 10,
      sleepEasy: -2,
      note: "The night seems to go on forever, and you just can't get to sleep, probably due to the conditions that you were expected to sleep in. You awake in the morning to the roosters outside, and feel groggy, and not at all rested"
    }
  ]
  return setup.sleepData
}

setup.getTavernDraws = function (town, tavern) {
  var bartender = tavern.bartender
  setup.tavernDraw = [
    {
      draw: 'attractive waitstaff',
      drawFeature: "You see one of the barmaids talking to a patron, and it's difficult to convince your eyes there's a more pleasant sight in the room, until you see another equally attractive barmaid pulling a pint at the bar."
    },
    {
      draw: 'resident bard',
      drawFeature: "You see a bard singing a love song in the corner of the room, and are drawn to his pure, melifluous voice. He's quite a good singer, and the patrons are nodding along to the song appreciatively."
    },
    {
      draw: 'witty banter with the waitstaff',
      drawFeature: "You see a gruff looking man catcall after one of the barmaids, and she looks over her shoulder, and replies something that you can't quite make out. Despite this, it's clear that whatever she said destroyed the man, as his friends burst into laughter while he deflates rather rapidly."
    },
    {
      draw: 'crude jokes the bartender makes',
      drawFeature: 'You see the bartender is talking to a $tavernPatron.age <<print either($tavernPatron.descriptor)>>. ' + bartender.heshe.toUpperFirst() + ' smiles, and then says something, making the <<print either($tavernPatron.descriptor)>> go white as a sheet, and immediately leave the establishment, with ' + bartender.firstName + " laughing, calling $tavernPatron.himher 'too goody-two-shoes to be able to handle " + tavern.name + '.'
    },
    {
      draw: "proximity to the thieves' guild headquarters",
      // drawFunction: setup.createFaction({type: "thieves"}),
      drawFeature: "You can see a sign by the door stating 'REPEATED PICKPOCKETING WILL RESULT IN THE THIEVES' GUILD BEING BANNED FROM THESE PREMISES'. Clearly, " + tavern.name + " has an issue with <<link '$factionThieves.name'>><<set $currentFaction to $factionThieves>><<goto 'FactionProfile'>><</link>>."
    },
    {
      draw: 'warmth inside',
      drawFeature: tavern.name + ' is kept wonderfully toasty, and the warm air makes you comfortable and sleepy'
    },
    {
      draw: 'magic incense which is constantly burning',
      drawFeature: "You smell a peculiar aroma, which you can't quite place, only that it reminds you of the fond days of your childhood, until you see wafts of smoke trailing from behind the bar; there's a stick of incense burning, clearly at least somewhat magical.",
      drawFunction: function increaseTavernMagic (tavern) {
        tavern.magicRoll += 10
        return tavern
      }
    },
    {
      draw: 'proximity to the brothel',
      drawFeature: "You saw a sign outside which read 'No Soliciting', but inside, you see a much larger, more insistent sign which read 'NO SOLICITING. OF EITHER SORT'. Clearly, " + tavern.name + ' has an issue with the nearby whorehouse, [[$brothel.name|BrothelOutput]].'
    },
    {
      draw: 'proximity to the church',
      drawFeature: "You see a sign by the door which reads 'No proselytising'. Clearly, " + tavern.name + ' has an issue with the nearby church.',
      drawFunction: function increaseTavernMagic (tavern) {
        tavern.magicRoll += 10
        return tavern
      }
    },
    {
      draw: 'location by the river',
      drawFeature: tavern.name + ' overlooks a gorgeous river, which you can hear gently rushing by the ' + tavern.material + ' ' + tavern.wordnoun + " inside. A fisherman is sitting at the bar, talking about his day's catch, which he's clearly exaggerating."
    },
    {
      draw: 'wooden-chopping competition held weekly',
      drawFeature: "Above the bar is a fearsome axe. And another, and another. On the wall is what looks to be a leaderboard, with names and points next to the names. Upon closer inspection, it's revealed to be the scores for the wood chopping competition. Clever bartender; you can see the fireplace is well stocked."
    },
    {
      draw: 'mahogany stairs',
      drawFeature: "You see a gorgeous spiral staircase, which presumably leads up to the sleeping quarters. The craftsmanship is astounding, and it's clearly well loved by staff and patrons alike."
    },
    {
      draw: 'clean beds',
      drawFeature: "You see that the bar has been recently cleaned, and there's a surprising lack of spittle on the floor of the " + tavern.wordnoun + '.'
    },
    {
      draw: 'lack of bedbugs',
      drawFeature: 'You see a patron enter the bar from the sleeping quarters. The bartender asks if she slept well, and she nods at the ' + bartender.weight + ' ' + bartender.manwoman + ', saying that she slept very well.'
    },
    {
      draw: 'magic bedbugs',
      drawFeature: "You see a patron enter the bar from the sleeping quarters, who's scratching his arms madly, with a doped up smile upon his face.",
      drawFunction: function increaseTavernMagic (tavern) {
        tavern.magicRoll += 10
        return tavern
      }
    },
    // {
    //   draw: 'drunk wizard',
    //   drawFunction: function (tavern) {
    //     tavern.magicRoll += 10
    //     var drunkWizard = setup.createNPC({dndClass: 'wizard'})
    //     return {
    //       drunkWizard: drunkWizard,
    //       tavern: tavern
    //     }
    //   },
    //   drawFeature: "There's a " + drunkWizard.descriptor.random() + ' thaumaturgist in the corner, who is practising cantrips as ' + drunkWizard.heshe + ' downs another pint. ' + drunkWizard.heshe.toUpperFirst() + " looks over at you, smiles, and says 'You can't cast drunk if you don't practice drunk!'"
    // },
    {
      draw: 'huge fireplace',
      drawFeature: 'You see a huge fireplace in the centre of the ' + tavern.wordnoun + ', which fills the surrounding air with a wonderful warmth and aroma due to the pot which hangs above it, contentedly bubbling over the embers.'
    },
    {
      draw: 'incredible view',
      drawFeature: 'You look out the window, and see that the view is indeed nothing to scoff at; the ' + tavern.wordnoun + ' is situated on a hill which overlooks the sleepy ' + town.type + ' of ' + town.name + ", and you can make out the specks of people walking about below. It's an unbelievable location for an inn."
    },
    {
      draw: 'nice view',
      drawFeature: 'You look out the window, and see that the view is indeed quite nice; the ' + tavern.wordnoun + ' is situated on a hill which overlooks the sleepy ' + town.type + ' of ' + town.name + ", and you can make out the specks of people walking about below. It's a nice location for an inn."
    }
  ]
  return setup.tavernDraw.random()
}

setup.getTavernDescription = function (tavern) {
  var bartender = tavern.bartender
  setup.tavernDescription = [
    {
      sizeRoll: 90,
      wealthRoll: 10,
      note: [tavern.name + ' is just one huge, ' + tavern.lighting + ' ' + tavern.cleanliness + ' room, with a small section of the hall cordoned off as the kitchen and bar area. Off to the side is a spiral staircase, which you would assume leads up to the lodgings.',
        tavern.name + ' is huge, ' + tavern.lighting + ', and ' + tavern.cleanliness + '. There are several large ' + tavern.material + ' tables.'
      ].random()
    },
    {
      sizeRoll: 80,
      wealthRoll: 10,
      note: [tavern.name + ' is quite large, ' + tavern.lighting + ', and ' + tavern.cleanliness + '. The ceiling is unusually high, and the amount of wood that ' + bartender.firstName + ' must go through would be immense. The dining hall has several large ' + tavern.material + ' tables, fit for up to twelve people each. Off to the side is a spiral staircase, which you would assume leads up to the lodgings.'

      ].random()
    },
    {
      sizeRoll: 70,
      wealthRoll: 10,
      note: [tavern.name + ' is a large building, with the ' + tavern.cleanliness + " bar occupying the ground floor, and the beds for patrons are on the floor directly above you. It's " + tavern.lighting + '.'

      ].random()
    },
    {
      sizeRoll: 60,
      wealthRoll: 10,
      note: [tavern.name + ' is nice and spacious. The bar is roomy and ' + tavern.lighting + ', with several stools in front of it for patrons that wish to while away the evening talking to ' + bartender.firstName + ". There's a couple large " + tavern.material + " tables, which are large enough to put out a map and still have room for your mugs of ale; perhaps a deliberate choice on the owner's part."

      ].random()
    },
    {
      sizeRoll: 50,
      wealthRoll: 10,
      note: [
        tavern.name + ' is a tall building, but not particularly spacious; the ' + tavern.cleanliness + ' bar occupies the ground floor which is ' + tavern.lighting + ', and you see a barmaid carrying a dish down from the stairs; the sign outside said that it had accomodation, so the beds must be on the third floor of the ' + tavern.material + ' building.',
        tavern.name + ' is a reasonably spacious building that is ' + tavern.lighting + ", and very similar to the countless other taverns that you've come across in your times, right down to the specials board being somewhat battered with so many uses, and the dart board with many holes constantly seeing use.",
        tavern.name + ' is clearly a converted house; you can see that a bathroom was originally where the bar is, due to the unmistakable water staining that comes with bathtubs. The tavern is ' + tavern.cleanliness + ', and ' + tavern.lighting + '.'
      ].random()
    },
    {
      sizeRoll: 40,
      wealthRoll: 10,
      note: [tavern.name + ' is slightly cramped, and ' + tavern.lighting + '. The ' + tavern.cleanliness + " tables are a touch too close to the wall, and the bar area is the front of the kitchen, which doesn't seem to be a very efficient set up. The " + tavern.wealth + ' establishment is clearly in need of an extension to relieve the somewhat small ' + tavern.material + ' pub of its congestion issues.'
      ].random()
    },
    {
      sizeRoll: 30,
      wealthRoll: 10,
      note: [tavern.name + ' is barely more than a large, ' + tavern.cleanliness + ' house; the ' + tavern.lighting + ' bar area is permanently crowded due to a bottleneck preventing barmaids from passing through without having to negotiate through thirsty patrons looking for refills.'
      ].random()
    },
    {
      sizeRoll: 20,
      wealthRoll: 10,
      note: [tavern.name + " is very obviously a house that's been converted into a " + tavern.wordnoun + ", probably as a hobby for the owner. It's unfortunately rather cramped inside, and taller patrons would be at risk of hitting their heads if they were careless inside the tiny " + tavern.material + ' building. The tavern is ' + tavern.cleanliness + ', and is ' + tavern.lighting + '.'
      ].random()
    }

  ]
  return setup.tavernDescription
}
