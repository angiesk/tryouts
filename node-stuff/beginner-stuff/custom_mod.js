// exports.myDateTime = function dt() {
//     return Date();
// };
// exports.mySumMod = function (a, b) {
//     return (a + b);
// };
// exports.myMultMod = function (a, b) {
//     return (a * b);
// };
//Structuring the export of the custom modules
var export_mod = module.exports = {};
export_mod.calculations = function (a, b) {
    return a - b;
};
export_mod.calculations1 = function (a, b) {
    if (b == 0)
        return ("divide by zero error");
    else
        return (a / b);
}