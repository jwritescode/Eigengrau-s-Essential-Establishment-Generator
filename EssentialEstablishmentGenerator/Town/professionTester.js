// setup.getNPCProfession = function(profession) {
// /* Set the number of trades equal to the town's population divided by how many people are needed to support that type of business */
//   var V = State.variables;
//   var roll    = (V.town.population / profession.sv);
//   var professionCount = (roll >= 1 ? Math.trunc(roll) : Number(random(1, 100) <= roll * 100));
//   var npcsCount;
//
//   if (professionCount >= 1){
//     // If there's at least one person
//     npcsCount = V.npcs.filter(function(npc) { return npc.profession === profession.profession; });
//     if(npcsCount.length < professionCount) {
//         // Create the missing NPCs
//         for(var i = professionCount - npcsCount.length; i > 0; -- i) {
//             setup.createNPC({profession: profession.profession, hasClass: false});
//         }
//     } else if (npcsCount.length > professionCount) {
//         // if there's more than there should be, remove then add just the right amount back
//         V.npcs = V.npcs.filter(function(npc) { return npc.profession !== profession.profession; });
//         Array.prototype.push.apply(V.npcs, npcs.splice(0, professionCount));
//     }}
// };
