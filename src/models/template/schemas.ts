import { Schema } from "mongoose";

export const ErrorTemplateSchema = new Schema<Errors.Content>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    content: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      button: { type: String, required: true },
    },
  },
  { _id: false }
)

export const ConstantsTemplateSchema = new Schema<Constants.Config>(
  {
    featuredRegimeTitle: { type: String, required: true },
    underWeightStatus: { type: String, required: true },
    underWeightStatusDescription: { type: String, required: true },
    normalWeightStatus: { type: String, required: true },
    normalWeightStatusDescription: { type: String, required: true },
    overWeightStatus: { type: String, required: true },
    overWeightStatusDescription: { type: String, required: true },
    weightUnitKG: { type: String, required: true },
    weightUnitLBS: { type: String, required: true },
    monthTitle: { type: String, required: true },
    weightLossUntilEventBefore: { type: String, required: true },
    weightLossUntilEventAfter: { type: String, required: true },
    weightGainUntilEventBefore: { type: String, required: true },
    weightGainUntilEventAfter: { type: String, required: true },
    energeticLifestyle: { type: String, required: true },
    activeLifestyle: { type: String, required: true },
    lazyLifestyle: { type: String, required: true },
    highMotivation: { type: String, required: true },
    mediumMotivation: { type: String, required: true },
    lowMotivation: { type: String, required: true },
    lightEater: { type: String, required: true },
    heavyEater: { type: String, required: true },
    healthyEmoji: { type: String, required: true },
    riskyEmoji: { type: String, required: true },
    healthyTitle: { type: String, required: true },
    riskyTitle: { type: String, required: true },
    healthyDescription: { type: String, required: true },
    riskyDescription: { type: String, required: true },
    resendCodeInActiveTextAfter: { type: String, required: true },
    resendCodeActiveText: { type: String, required: true },
    maintainWeight: { type: String, required: true },
    weightLoss: { type: String, required: true },
    weightGain: { type: String, required: true },
    itTitle: { type: String, required: true },
    auTitle: { type: String, required: true },
    irTitle: { type: String, required: true },
    thTitle: { type: String, required: true },
    jpTitle: { type: String, required: true },
    ptTitle: { type: String, required: true },
    saTitle: { type: String, required: true },
    bhTitle: { type: String, required: true },
    joTitle: { type: String, required: true },
    kwTitle: { type: String, required: true },
    omTitle: { type: String, required: true },
    qaTitle: { type: String, required: true },
    usTitle: { type: String, required: true },
    gbTitle: { type: String, required: true },
    languagePickerTitle: { type: String, required: true },
  },
  { _id: false }
)

const InputDependenciesSchema = new Schema<Authentication.InputDependencies>(
  {
    isController: { type: Boolean, required: true },
    dependentKey: { type: String, default: "" },
    valuePatterns: {
      display: { type: String, default: "" },
      required: { type: String, default: "" },
      disabled: { type: String, default: "" },
      options: { type: String, default: "" },
    },
  },
  { _id: false }
);

const InputOptionSchema = new Schema<Authentication.InputOption>(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
    disabled: { type: Boolean, default: false },
  },
  { _id: false }
);

const InputFieldSchema = new Schema<Authentication.InputField>(
  {
    label: String,
    helper: String,
    key: { type: String, required: true },
    type: { type: String, required: true },
    value: String,
    pattern: String,
    placeholder: String,
    prefix: String,
    suffix: String,
    required: { type: Boolean, required: true },
    disabled: { type: Boolean, required: true },
    display: { type: Boolean, required: true },
    focus: { type: Boolean, required: true },
    options: [InputOptionSchema],
    dependencies: { type: InputDependenciesSchema, required: true },
    inputWidth: { type: String, required: true },
  },
  { _id: false }
);

const InitialStepSchema = new Schema<Authentication.InitialStep>(
  {
    title: { type: String, required: true },
    description: String,
    inputs: [InputFieldSchema],
    button: { type: String, required: true },
  },
  { _id: false }
);

const VerificationStepSchema = new Schema<Authentication.VerificationStep>(
  {
    title: { type: String, required: true },
    description: String,
    inputs: [InputFieldSchema],
    button: { type: String, required: true },
  },
  { _id: false }
);

export const AuthenticationTemplateSchema = new Schema<Authentication.Config>(
  {
    initial: { type: InitialStepSchema, required: true },
    verification: { type: VerificationStepSchema, required: true },
  },
  { _id: false }
);