// setup.createTavern = function () {
//   var shortages = ['wine', 'booze', 'grog', 'whiskey', 'mutton', 'lamb', 'carrots', 'mugs', 'forks', 'frogs', 'bread', 'mushrooms', 'salt', 'silver pieces', 'chairs', 'eggs', 'potatoes']
//   var fun = ['A group of commoners is playing horse shoes out back.',
//     'The party is surprised to find the country darts league in full swing as they enter. The waitresses are used to the chaos and dodge darts easily. The half ogre bouncer is using lawn darts.',
//     'A group of Hill Dwarves are in the middle of a drinking contest, and two of them are passed out already. The Prize is a solid platinum stein.',
//     'Wet Chainmail contest!',
//     'A shy teenage girl is reciting bad poetry in a corner. No one is paying the slightest bit of attention to her.',
//     "It's trivia night! Those scholars from the School of History and the Arts at the University always win, but tonight, we represent and the School of Alchemy will show those smug book-snobs what it means to be a nerd.",
//     'A promoter is working his way around the tables looking for challengers to fight the local champion pugilist.',
//     "It's a sausage fest! The place is packed with dwarves eager to devour the all-you-can-eat sausage special.",
//     'An over-sized brute is arm-wrestling crushing the hand of everyone in sight.',
//     'Some goblins are throwing dice with some animated skeletons at a table in the corner.',
//     'A goblin is doing a poor job at cheating at a dice game, while a skeleton is doing an excellent job at cheating.',
//     "A 7'2 red dragonborn with a 5' bastard sword is having a drinking contest with a dwarf. The dragonborn has a 4-pint tankard, and is almost managing to keep pace.",
//     'A party sits in the corner booth playing cards. All of them are cheating, except the paladin, who, curiously, is winning.',
//     'A mountain of a man in barbarian leathers is arm wrestling a small dragon and winning.',
//     'An awakened Roper is winning two games of billiards at once.',
//     'A group of drunken pixies is playing hide and seek by hiding behind patrons.',
//     'The players have stumbled into a regional card championship being held that night. The buy in is huge but so is the pot.',
//     'A shady looking gnomish inventor is proudly showing off his latest invention. He calls it a one armed bandit.',
//     "A grey haired story teller is sitting near the fire holding a contest. He'll give a large purse for a story he hasn't heard yet, but so far no one has won."].random()
//
//   var entertainment = [
//     'A bard is telling a story about the player’s latest act of daring do. He’s embellishing quite a bit. When he recognizes the party he makes a big spectacle.',
//     'A bard is telling the story of the player’s latest exploit. It’s an obvious character assassination.',
//     'A local bardic group, The Rolling Boulders, are performing, and a large crowd of drunken groupies will not stop screaming.',
//     "A beggar offers to sing for a few coppers. You heard him singing to the last table. He's awful.",
//     'A sassy fortune teller has set up shop in a corner booth. She informs you that she sees a hangover in your near future.',
//     "A stirring rendition of 'The Lady and the Faerie Dragon' has the crowd calling for an encore from the minstrels.",
//     'The lute-player catches some undergarments from the crowd and drapes them across the ridiculous horned helm he wears.',
//     'On stage tonight: The Deep Tones. A quartet of dwarves with long beards and deep voices singing a capella favorites from places without light (or proper music).',
//     'On stage tonight: Shaela Windspeaker. An elf-maid singer-songwriter with a bit of a whiny voice who is slowly making her way through her most recent song of protest against the previous and the present centuries of war.',
//     'A nervous show-wizard on the small stage is doing tricks with Prestidigitation for the un-amused patrons.',
//     'There is a pair of musicians warbling well known drinking songs. They have made an impromptu stage out of several tables. One of them seems to be tilting precariously.'].random()
//
//   var patrons = ['A poor farmer is trying to pay his bar tab with a sack of potatoes and a barrel of pickles.',
//     'A sea captain has set up shop at a table and is trying to sell mementos and souvenirs from his latest great voyage of exploration. Birds, exotic coins, tiny mermaids, he has it all. Some of it looks fake though. A tiny bit looks disturbingly real.',
//     'A ranger sits alone in a corner, smoking. A hood covers most of his face. At his feet is a sleeping wolfhound. Everyone is giving him a wide berth.',
//     'A lone Troll is drinking at the end of the bar and softly crying and singing one country ballad after another.',
//     'A stoned magician is fumbling his way through one awful card trick after another.',
//     'A mixed group of Elves are drinking bad wine and holding scented handkerchiefs up to their noses to keep out the stench. One has an obsidian bow strapped to her back.',
//     'Two guards are arguing at a table over who the captain likes more by comparing almost identical spears and claiming to have the better one.',
//     'A sad clown is drinking a beer alone.',
//     'A handsome young woman is holding court among some of her would-be suitors. Her father interrupts, and she stalks off embarrassed.',
//     'Some idiot is having a stag night. His friends are loud and obnoxiously harassing the barmaid.',
//     "It's ladies night! And it's not disappointing... A few pretty little things from the weavers' guild are here, a couple of attractive healers from the temple, and the beautiful new town librarian.",
//     'A surly old witch is drinking sherry while stroking the fat grey cat sitting on her lap.',
//     'The barmaid is a marilith, mixing up four drinks at a time.',
//     'The barmaid is a succubus, she seems to be making great tips.',
//     'The attendant in the bathroom is a foul-smelling zombie. He offers you a mint crystal.',
//     'Behind the bar is a gnomish alchemist with a penchant for mixology experiments.',
//     "The toothless mop-hand reminisces with a hobgoblin military has-been over ales about how an otyugh in the loo isn't as bad as the time a carrion crawler was in there.",
//     'The barmaid is a doppelganger. When she returns to your table with your drinks she has taken the form of one of your party.',
//     "A fat priest is doing an excellent jiggly dance in rhythm with the music. Either that or a gelatinous cube has made it's way onto the dance floor?"].random()
//
//   var tavern = setup.createBuilding()
//   Object.assign(tavern, {
//     name: setup.createTavernNameGen(),
//     wordnoun: ['tavern', 'tavern', 'tavern', 'tavern', 'pub', 'pub', 'pub', 'inn', 'inn', 'bar', 'bar', 'bar', 'watering hole', 'drinkery'].random(),
//     shortages: shortages,
//     fun: fun,
//     entertainment: entertainment,
//     patrons: patrons
//   })
//
//   if (['Silver', 'Golden', 'Glorious', 'Beautiful', 'Handsome', 'Lovely', 'Educated', 'Ornate', 'Wealthy', 'Cleanly', 'Jeweled', 'Superior', 'Flawless', 'Exquisite', 'Elegant', 'Fine'].includes(tavern.adjective)) {
//     tavern.wealthRoll += 5
//   } else if (['Blighted', 'Withered', 'Lecherous', 'Faulty', 'Cracked', 'Common'].includes($tavern.adjective)) {
//     tavern.wealthRoll -= 5
//   }
//
//   tavern.type = ['attractive waitstaff',
//     'resident bard',
//     tavern.roughness + ' atmosphere',
//     tavern.roughness + ' atmosphere',
//     'witty banter with the waitstaff',
//     'crude jokes the bartender makes',
//     "proximity to the thieves' guild headquarters",
//     'warmth inside',
//     'magic incense which is constantly burning',
//     'proximity to the brothel',
//     'proximity to the church',
//     'location by the river',
//     'wooden-chopping competition held weekly',
//     'mahogany stairs',
//     'clean beds',
//     'lack of bedbugs',
//     'magic bedbugs',
//     'drunk wizard',
//     'huge fireplace',
//     'incredible view',
//     'nice view'].random()
//
//   if (tavern.draw === 'proximity to the church') {
//     if (tavern.type.indexOf(['gambling den', 'proximity to the brothel', 'raucous dive']) !== -1) {
//       tavern.draw = 'proximity to the brothel'
//     } else if (tavern.type === 'brothel') {
//       tavern.draw = 'cheap prices for customers'
//       tavern.hasBrothel = true
//     }
//   }
//
//   return tavern
// }
