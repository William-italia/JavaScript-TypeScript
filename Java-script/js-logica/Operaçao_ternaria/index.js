// Operação Ternária
// ? :
const UserPoints = 999;
const UserLevel = UserPoints >= 1000 ? 'Vip User' : 'Normal User';

const colorUser = null;
const DefaultColor = colorUser || 'Preta'

console.log(UserLevel, DefaultColor);

// if (UserPoints >= 1000) {
//     console.log("Vip User");
// } else {
//     console.log("Normal User");
// }

