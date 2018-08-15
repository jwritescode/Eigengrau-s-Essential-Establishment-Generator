setup.createTownName = function () {
  var name = setup.townData.name.prefix.random() + setup.townData.name.suffix.random()
  setup.linguisticDrift(name)
  return name
}
