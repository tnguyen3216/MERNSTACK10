//named export/import and default export/import

//constant.js
export default constant = 12; //default export, only one default is allowed from one file

export const pi = 3.1414; //named export, there can be many exports from one file
export const shy = 3.19;

//... n exports

//constantLocal.js
//export const pi = 3.14;


//on purchaseorder.js
import constant, { pi, shy }  from "./path/constant"; // default import
import { pi as localPi} from "./path/constantLocal"; //aliasing of exported module
console.log(localPi);
console.log(constant)


import { pi, shy } from "./path/constant"; //name export
console.log(pi, shy)

//import all with *
import * as constants from "./path/constant";
console.log(constants.pi)
console.log(constants.shy)

//these export import will be applcable to functions and classes as well