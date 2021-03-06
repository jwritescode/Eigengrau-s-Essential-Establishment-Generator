setup.createAge = function (npc) {
  var ageStageRoll = dice(2, 4)
  var ageModifier
  var baseAge

  if (ageStageRoll === 8) {
    npc.ageStage = 'elderly'
  } else if (ageStageRoll >= 5) {
    npc.ageStage = 'settled adult'
  } else if (ageStageRoll <= 4) {
    npc.ageStage = 'young adult'
  }

  if (npc.ageStage === 'elderly') {
    switch (npc.race) {
      case 'human':
        baseAge = 65
        ageModifier = dice(3, 10)
        break
      case 'dwarf':
        baseAge = 197
        ageModifier = dice(3, 50)
        break
      case 'elf':
        baseAge = 650
        ageModifier = dice(3, 50)
        break
      case 'half-elf':
        baseAge = 150
        ageModifier = dice(3, 10)
        break
      case 'half-orc':
        baseAge = 57
        ageModifier = dice(3, 6)
        break
      case 'tiefling':
        baseAge = 70
        ageModifier = dice(3, 10)
        break
      case 'dragonborn':
        baseAge = 50
        ageModifier = dice(3, 10)
        break
      case 'gnome':
        baseAge = 200
        ageModifier = dice(3, 100)
        break
      default:
        baseAge = 65
        ageModifier = dice(3, 10)
    }
  } else if (npc.ageStage === 'settled adult') {
    switch (npc.race) {
      case 'human':
        baseAge = 30
        ageModifier = dice(3, 15)
        break
      case 'dwarf':
        baseAge = 50
        ageModifier = dice(3, 50)
        break
      case 'elf':
        baseAge = 450
        ageModifier = dice(3, 75)
        break
      case 'half-elf':
        baseAge = 50
        ageModifier = dice(3, 50)
        break
      case 'half-orc':
        baseAge = 45
        ageModifier = dice(3, 6)
        break
      case 'tiefling':
        baseAge = 40
        ageModifier = dice(3, 10)
        break
      case 'dragonborn':
        baseAge = 20
        ageModifier = dice(3, 10)
        break
      case 'gnome':
        baseAge = 40
        ageModifier = dice(3, 75)
        break
      default:
        baseAge = 30
        ageModifier = dice(3, 10)
    }
  } else if (npc.ageStage === 'young adult') {
    switch (npc.race) {
      case 'human':
        baseAge = 15
        ageModifier = dice(3, 6)
        break
      case 'dwarf':
        baseAge = 15
        ageModifier = dice(4, 8)
        break
      case 'elf':
        baseAge = 100
        ageModifier = dice(4, 75)
        break
      case 'half-elf':
        baseAge = 20
        ageModifier = dice(3, 10)
        break
      case 'half-orc':
        baseAge = 15
        ageModifier = dice(3, 12)
        break
      case 'tiefling':
        baseAge = 18
        ageModifier = dice(3, 12)
        break
      case 'dragonborn':
        baseAge = 13
        ageModifier = dice(2, 4)
        break
      case 'gnome':
        baseAge = 18
        ageModifier = dice(2, 10)
        break
      default:
        baseAge = 16
        ageModifier = dice(2, 12)
    }
  } else if (npc.ageStage === 'child') {
    switch (npc.race) {
      case 'human':
        baseAge = 4
        ageModifier = dice(3, 4)
        break
      case 'dwarf':
        baseAge = 4
        ageModifier = dice(3, 6)
        break
      case 'elf':
        baseAge = 10
        ageModifier = dice(4, 20)
        break
      case 'half-elf':
        baseAge = 6
        ageModifier = dice(3, 4)
        break
      case 'half-orc':
        baseAge = 3
        ageModifier = dice(3, 4)
        break
      case 'tiefling':
        baseAge = 4
        ageModifier = dice(3, 4)
        break
      case 'dragonborn':
        baseAge = 4
        ageModifier = dice(3, 4)
        break
      case 'gnome':
        baseAge = 6
        ageModifier = dice(2, 6)
        break
      default:
        baseAge = 4
        ageModifier = dice(2, 6)
    }
  }

  npc.ageRoll = baseAge + ageModifier
  switch (npc.race) {
    case 'human':
      if (npc.ageRoll >= 80) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageRoll >= 75) {
        npc.age = 'withered'
      } else if (npc.ageRoll >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageRoll >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageRoll >= 60) {
        npc.age = 'aged'
      } else if (npc.ageRoll >= 55) {
        npc.age = 'old'
      } else if (npc.ageRoll >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageRoll >= 37) {
        npc.age = 'adult'
      } else if (npc.ageRoll >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageRoll >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageRoll >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageRoll >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageRoll >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageRoll >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageRoll >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageRoll >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageRoll >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageRoll >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageRoll >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageRoll >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageRoll >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageRoll >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageRoll >= 10) {
        npc.age = 'child'
      } else if (npc.ageRoll >= 8) {
        npc.age = 'young child'
      } else if (npc.ageRoll < 8) {
        npc.age = 'kid'
      }
      break
    case 'dwarf':
      if (npc.ageRoll >= 200) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageRoll >= 190) {
        npc.age = 'withered'
      } else if (npc.ageRoll >= 180) {
        npc.age = 'elderly'
      } else if (npc.ageRoll >= 160) {
        npc.age = 'weathered'
      } else if (npc.ageRoll >= 150) {
        npc.age = 'aged'
      } else if (npc.ageRoll >= 140) {
        npc.age = 'old'
      } else if (npc.ageRoll >= 130) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 80) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 50) {
        npc.age = 'early middle aged'
      } else if (npc.ageRoll >= 40) {
        npc.age = 'adult'
      } else if (npc.ageRoll >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageRoll >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageRoll >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageRoll >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageRoll >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageRoll >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageRoll >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageRoll >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageRoll >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageRoll >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageRoll >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageRoll >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageRoll >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageRoll >= 10) {
        npc.age = 'child'
      } else if (npc.ageRoll >= 8) {
        npc.age = 'young child'
      } else if (npc.ageRoll < 8) {
        npc.age = 'kid'
      }
      break
    case 'elf':
      if (npc.ageRoll >= 800) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageRoll >= 750) {
        npc.age = 'withered'
      } else if (npc.ageRoll >= 700) {
        npc.age = 'elderly'
      } else if (npc.ageRoll >= 650) {
        npc.age = 'weathered'
      } else if (npc.ageRoll >= 600) {
        npc.age = 'aged'
      } else if (npc.ageRoll >= 550) {
        npc.age = 'old'
      } else if (npc.ageRoll >= 500) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 450) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 400) {
        npc.age = 'early middle aged'
      } else if (npc.ageRoll >= 370) {
        npc.age = 'adult'
      } else if (npc.ageRoll >= 350) {
        npc.age = 'mid three-hundreds'
      } else if (npc.ageRoll >= 320) {
        npc.age = 'earlyish three-hundreds'
      } else if (npc.ageRoll >= 300) {
        npc.age = 'early three hundreds'
      } else if (npc.ageRoll >= 250) {
        npc.age = 'young adult'
      } else if (npc.ageRoll >= 200) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageRoll >= 180) {
        npc.age = 'relatively young'
      } else if (npc.ageRoll >= 150) {
        npc.age = 'surprisingly young'
      } else if (npc.ageRoll >= 120) {
        npc.age = 'barely ten dozen years old'
      } else if (npc.ageRoll >= 100) {
        npc.age = 'barely adult aged'
      } else if (npc.ageRoll >= 70) {
        npc.age = 'young'
      } else if (npc.ageRoll >= 60) {
        npc.age = 'young'
      } else if (npc.ageRoll >= 40) {
        npc.age = 'adolescent'
      } else if (npc.ageRoll >= 30) {
        npc.age = 'barely teenaged'
      } else if (npc.ageRoll >= 20) {
        npc.age = 'child-like'
      } else if (npc.ageRoll >= 15) {
        npc.age = 'young child'
      } else if (npc.ageRoll < 15) {
        npc.age = 'kid'
      }
      break
    case 'half-elf':
      if (npc.ageRoll >= 180) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageRoll >= 170) {
        npc.age = 'withered'
      } else if (npc.ageRoll >= 150) {
        npc.age = 'elderly'
      } else if (npc.ageRoll >= 130) {
        npc.age = 'weathered'
      } else if (npc.ageRoll >= 110) {
        npc.age = 'aged'
      } else if (npc.ageRoll >= 90) {
        npc.age = 'old'
      } else if (npc.ageRoll >= 70) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 60) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 50) {
        npc.age = 'early middle aged'
      } else if (npc.ageRoll >= 40) {
        npc.age = 'adult'
      } else if (npc.ageRoll >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageRoll >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageRoll >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageRoll >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageRoll >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageRoll >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageRoll >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageRoll >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageRoll >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageRoll >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageRoll >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageRoll >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageRoll >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageRoll >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageRoll >= 10) {
        npc.age = 'child'
      } else if (npc.ageRoll >= 8) {
        npc.age = 'young child'
      } else if (npc.ageRoll < 8) {
        npc.age = 'kid'
      }
      break
    case 'half-orc':
      if (npc.ageRoll >= 80) {
        npc.age = 'ancient'
      } else if (npc.ageRoll >= 75) {
        npc.age = 'withered'
      } else if (npc.ageRoll >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageRoll >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageRoll >= 60) {
        npc.age = 'aged'
      } else if (npc.ageRoll >= 55) {
        npc.age = 'old'
      } else if (npc.ageRoll >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageRoll >= 37) {
        npc.age = 'adult'
      } else if (npc.ageRoll >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageRoll >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageRoll >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageRoll >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageRoll >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageRoll >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageRoll >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageRoll >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageRoll >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageRoll >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageRoll >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageRoll >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageRoll >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageRoll >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageRoll >= 10) {
        npc.age = 'child'
      } else if (npc.ageRoll >= 8) {
        npc.age = 'young child'
      } else if (npc.ageRoll < 8) {
        npc.age = 'kid'
      }
      break
    case 'tiefling':
      if (npc.ageRoll >= 80) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageRoll >= 75) {
        npc.age = 'withered'
      } else if (npc.ageRoll >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageRoll >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageRoll >= 60) {
        npc.age = 'aged'
      } else if (npc.ageRoll >= 55) {
        npc.age = 'old'
      } else if (npc.ageRoll >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageRoll >= 37) {
        npc.age = 'adult'
      } else if (npc.ageRoll >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageRoll >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageRoll >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageRoll >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageRoll >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageRoll >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageRoll >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageRoll >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageRoll >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageRoll >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageRoll >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageRoll >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageRoll >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageRoll >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageRoll >= 10) {
        npc.age = 'child'
      } else if (npc.ageRoll >= 8) {
        npc.age = 'young child'
      } else if (npc.ageRoll < 8) {
        npc.age = 'kid'
      }
      break
    case 'dragonborn':
      if (npc.ageRoll >= 80) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageRoll >= 75) {
        npc.age = 'withered'
      } else if (npc.ageRoll >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageRoll >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageRoll >= 60) {
        npc.age = 'aged'
      } else if (npc.ageRoll >= 55) {
        npc.age = 'old'
      } else if (npc.ageRoll >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageRoll >= 37) {
        npc.age = 'adult'
      } else if (npc.ageRoll >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageRoll >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageRoll >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageRoll >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageRoll >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageRoll >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageRoll >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageRoll >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageRoll >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageRoll >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageRoll >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageRoll >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageRoll >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageRoll >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageRoll >= 10) {
        npc.age = 'child'
      } else if (npc.ageRoll >= 8) {
        npc.age = 'young child'
      } else if (npc.ageRoll < 8) {
        npc.age = 'kid'
      }
      break
    case 'gnome':
      if (npc.ageRoll >= 400) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageRoll >= 360) {
        npc.age = 'withered'
      } else if (npc.ageRoll >= 320) {
        npc.age = 'elderly'
      } else if (npc.ageRoll >= 280) {
        npc.age = 'weathered'
      } else if (npc.ageRoll >= 230) {
        npc.age = 'aged'
      } else if (npc.ageRoll >= 180) {
        npc.age = 'old'
      } else if (npc.ageRoll >= 130) {
        npc.age = 'late middle aged'
      } else if (npc.ageRoll >= 80) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 50) {
        npc.age = 'early middle aged'
      } else if (npc.ageRoll >= 40) {
        npc.age = 'adult'
      } else if (npc.ageRoll >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageRoll >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageRoll >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageRoll >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageRoll >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageRoll >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageRoll >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageRoll >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageRoll >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageRoll >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageRoll >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageRoll >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageRoll >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageRoll >= 10) {
        npc.age = 'child'
      } else if (npc.ageRoll >= 8) {
        npc.age = 'young child'
      } else if (npc.ageRoll < 8) {
        npc.age = 'kid'
      }
      break
    default:
      if (npc.ageRoll >= 80) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageRoll >= 75) {
        npc.age = 'withered'
      } else if (npc.ageRoll >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageRoll >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageRoll >= 60) {
        npc.age = 'aged'
      } else if (npc.ageRoll >= 55) {
        npc.age = 'old'
      } else if (npc.ageRoll >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageRoll >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageRoll >= 37) {
        npc.age = 'adult'
      } else if (npc.ageRoll >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageRoll >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageRoll >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageRoll >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageRoll >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageRoll >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageRoll >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageRoll >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageRoll >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageRoll >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageRoll >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageRoll >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageRoll >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageRoll >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageRoll >= 10) {
        npc.age = 'child'
      } else if (npc.ageRoll >= 8) {
        npc.age = 'young child'
      } else if (npc.ageRoll < 8) {
        npc.age = 'kid'
      }
      break
  }
  // To Do: create a descriptor for each age category for each race

  return npc
}
