import "regenerator-runtime/runtime";
import "core-js/stable";
import Ajv from "ajv";
var ajv = new Ajv();
var validate = function (schema, data) {
    return ajv.validate(schema, data) ? "valid" : "not valid";
};
export default validate;
