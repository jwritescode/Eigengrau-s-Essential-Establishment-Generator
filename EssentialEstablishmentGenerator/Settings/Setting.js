Setting.addHeader('Content Settings')

Setting.addToggle('showSliders', {
  label: 'Show sliders?'
})

var settingShowTutorial = function () {
  if (settings.showTutorial) {
    Config.passages.start = "Start"
  } else {
    Config.passages.start = "Welcome"
  }
}

Setting.addToggle('showTutorial', {
  label: 'Show tutorial?',
  onChange: settingShowTutorial
})

Setting.addToggle('showCelsius', {
  label: 'Show celsius?'
})

Setting.addToggle('showMetric', {
  label: 'Show metric?'
})

Setting.addToggle('silverStandard', {
  label: 'Silver Standard?'
})

var settingPatreonContentHandler = function () {
  if (settings.patreonContent) { // is true
    State.variables.bartender = State.variables.Birchbottom
  } else { // is false
    State.variables.bartender = State.variables.backupBartender
  }
}

Setting.addToggle('patreonContent', {
  label: 'Show Patreon content?',
  onInit: settingPatreonContentHandler,
  onChange: settingPatreonContentHandler
})

Setting.save()
