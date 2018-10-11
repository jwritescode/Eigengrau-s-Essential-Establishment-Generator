setup.getAlchemistPriceTalk = function (alchemist) {
  setup.alchemistPriceTalk = [
    {
      priceModifier: 5,
      wealthRoll: 80,
      priceTalk: 'Be warned, these prices might be... out of your range'
    },
    {
      priceModifier: 5,
      wealthRoll: 50,
      priceTalk: "Fair warning; the prices ain't what they used to be, by a long shot."
    },
    {
      priceModifier: 5,
      wealthRoll: 20,
      priceTalk: "I'm afraid that times are tough, there's a bit of a surcharge on the fun stuff."
    },
    {
      priceModifier: 2,
      wealthRoll: 80,
      priceTalk: 'Fair warning, premium products come with a premium price.'
    },
    {
      priceModifier: 2,
      wealthRoll: 50,
      priceTalk: "Fair warning; the prices ain't what they used to be."
    },
    {
      priceModifier: 2,
      wealthRoll: 20,
      priceTalk: "Things might be a wee bit more expensive than you're used to, but that's the cost of doing business at the moment."
    },
    {
      priceModifier: -2,
      wealthRoll: 80,
      priceTalk: 'These are priced to move, so I can make some space and get some new stock in.'
    },
    {
      priceModifier: -2,
      wealthRoll: 50,
      priceTalk: 'Priced to move!'
    },
    {
      priceModifier: -2,
      wealthRoll: 20,
      priceTalk: 'Priced to sell, so I can afford some new stock!'
    },
    {
      priceModifier: -4,
      wealthRoll: 80,
      priceTalk: "Everything must go! I'm getting in entirely new, custom stock in a couple day's time, and need the space clear."
    },
    {
      priceModifier: -4,
      wealthRoll: 50,
      priceTalk: "I've got a massive sale going on at the moment!"
    },
    {
      priceModifier: -4,
      wealthRoll: 20,
      priceTalk: "Everything must go- can't afford to keep " + alchemist.name + " open much longer, so I'm getting rid of the final stock."
    }
  ]
  return setup.alchemistPriceTalk
}

setup.getAlchemistLookAround = function (alchemist) {
  setup.alchemistLookAround = [
    {
      cleanlinessRoll: 80,
      wealthRoll: 10,
      note: 'Looking around, ' + alchemist.name + ' is an extremely clean shop. Sheafs of paper are stacked in piles neatly, with recipes being used currently carefully placed on stands. The typical chemical burns that stain most alchemist shops are nowhere to be found.'
    },
    {
      cleanlinessRoll: 70,
      wealthRoll: 10,
      note: 'Looking around, ' + alchemist.name + ' is a very clean shop (as far as alchemist shops go). There are sheafs of paper, presumably recipes, neatly stacked on benches away from the ominous bubbling of pots that are brewing new concoctions.'
    },
    {
      cleanlinessRoll: 60,
      wealthRoll: 10,
      note: 'Looking around, ' + alchemist.name + " is pretty clean, by alchemical standards. There's a decent sense of order, and sheafs of paper are for the most part kept away from the pots and jugs of strangely coloured brews that stand in a line on the desk."
    },
    {
      cleanlinessRoll: 50,
      wealthRoll: 10,
      note: 'Looking around, ' + alchemist.name + " is as clean as you'd expect for a shop that deals with magical, often volatile chemicals. There's some sense of order, with papers (presumably recipes) kept in stacks, some of them concerningly close to the pots and jugs of strangely coloured brews that clutter the desk."
    },
    {
      cleanlinessRoll: 40,
      wealthRoll: 10,
      note: 'Looking around, ' + alchemist.name + " is somewhat messy; a dangerous trait for a shop that deals with magical, often volatile chemicals. There's a vague sense of order, although the papers that are strewn around the room do little to help. There are pots and pans of mixtures yet to be decanted crowding the desk."
    },
    {
      cleanlinessRoll: 30,
      wealthRoll: 10,
      note: 'Looking around, ' + alchemist.name + " is rather messy; a dangerous trait for a shop that deals with magical, often volatile chemicals. There's little sense of order, and you accidentally step on a recipe as you make your way through the shop. There are pots and pans of mixtures yet to be decanted crowding the desk, leaving the currently brewing potions to take residence on the floor, where they could be easily knocked over."
    },
    {
      cleanlinessRoll: 20,
      wealthRoll: 10,
      note: 'Looking around, ' + alchemist.name + " is extremely messy; a very dangerous trait for a shop that deals with magical, often volatile chemicals. There's no sense of order, and you accidentally step in something that fizzled rather disconcertingly as you make your way through the shop. There are pots and pans of mixtures yet to be cleaned crowding the desk, leaving the currently brewing potions to take residence on the floor, where they could be easily knocked over."
    },
    {
      cleanlinessRoll: 10,
      wealthRoll: 10,
      note: 'Looking around, ' + alchemist.name + " must have had an explosion the day before; there is no other possible reason that a shop that deals with magical, often volatile chemicals would be so cluttered, crowded, and blatantly a danger to itself and the half-mile radius surrounding it. There are pots and pans of mixtures that have already spilt over crowding the desk, with potions that are currently brewing strewn around the floor. There's little hope to walk through the shop without putting your boot in something that you probably would prefer not to put it in. Just as you try and hesitate, you hear the distinct sound of 'no, please don't go!' come from the floorboards, which at first seemed to be sticky, but on closer inspection, was more... 'grabby'."
    }
  ]
  return setup.alchemistLookAround
}
