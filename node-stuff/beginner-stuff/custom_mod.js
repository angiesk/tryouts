exports.mycustomDateTime = function () {
    return Date();
};
exports.mySumMod = function sum(a, b) {
    return (a + b);
};
exports.myMultMod = function mul(a, b) {
    return (a * b);
};
//Structuring the export of the custom modules
var export_mod = module.exports = {};
export_mod.calculations = function sub(a, b) {
    return a - b;
};
export_mod.calculations = function div(a, b) {
    if (b == 0)
        return ("divide by zero error");
    else
        return (a / b);
}