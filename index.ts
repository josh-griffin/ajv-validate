import "regenerator-runtime/runtime";
import "core-js/stable";
import Ajv, { Schema } from "ajv";

const ajv = new Ajv();

const validate = (schema: Schema, data: unknown) => {
  return ajv.validate(schema, data) ? "valid" : "not valid";
};

export default validate;
