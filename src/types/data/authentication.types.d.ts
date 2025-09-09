// ====================
// AUTHENTICATION SPECIFIC TYPES
// ====================

namespace Authentication {

  // ====================
  // REUSE SHARED TYPES
  // ====================

  // Import shared types
  type BaseConfig = Shared.BaseConfig
  type Header = Shared.Header
  type ValidationResult = Shared.ValidationResult

  // ====================
  // INPUT TYPES
  // ====================

  /** Input field types */
  const INPUT_TYPES = ["text", "back", "otp", "phoneNumber"] as const
  type InputType = typeof INPUT_TYPES[number]

  /** Input dependency structure for conditional logic */
  interface InputDependencies {
    isController: boolean
    dependentKey: UniqueKey | ""
    valuePatterns: {
      display: OptionalString
      required: OptionalString
      disabled: OptionalString
      options: OptionalString
    }
  }

  /** Input option structure for select/radio inputs */
  interface InputOption {
    label: NonEmptyString
    value: string
    disabled?: boolean
  }

  /** Base input field structure */
  interface InputField {
    label: OptionalString
    helper: OptionalString
    key: UniqueKey
    type: InputType
    value: OptionalString
    pattern: OptionalString
    placeholder: OptionalString
    prefix: OptionalString
    suffix: OptionalString
    required: boolean
    disabled: boolean
    display: boolean
    focus: boolean
    options: InputOption[]
    dependencies: InputDependencies
    inputWidth: string
  }

  // ====================
  // STEP STRUCTURES
  // ====================

  /** Initial step - phone number input */
  interface InitialStep {
    title: NonEmptyString
    description: OptionalString
    inputs: InputField[]
    button: NonEmptyString
  }

  /** Verification step - OTP input */
  interface VerificationStep {
    title: NonEmptyString
    description: OptionalString
    inputs: InputField[]
    button: NonEmptyString
  }

  // ====================
  // MAIN CONFIG
  // ====================

  /** Authentication configuration extends base config */
  interface Config extends BaseConfig {
    initial: InitialStep
    verification: VerificationStep
  }
}