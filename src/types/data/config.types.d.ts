// ====================
// CONFIG SPECIFIC TYPES
// ====================

namespace Config {

  // ====================
  // BASE CONFIGURATION
  // ====================

  /** Icon sizes for progressive web app and favicon support */
  interface Icons {
    favicon: OptionalString
    "512×512": OptionalString
    "384×384": OptionalString
    "192×192": OptionalString
    "152×152": OptionalString
    "144×144": OptionalString
    "128×128": OptionalString
    "96×96": OptionalString
    "72×72": OptionalString
    "48×48": OptionalString
  }

  /** Base branding and visual configuration */
  interface Base {
    logo: string | ""
    icons: Icons
  }

  // ====================
  // META INFORMATION
  // ====================

  /** SEO and page meta information */
  interface Meta {
    siteTitle: NonEmptyString
    description: OptionalString
    quizTitle: OptionalString
    checkoutTitle: OptionalString
    notFoundTitle: OptionalString
    confirmPayTitle: OptionalString
    preCheckoutTitle: OptionalString
    serverErrorTitle: OptionalString
    testimonialsTitle: OptionalString
    authenticationTitle: OptionalString
    additionalPlansTitle: OptionalString
  }

  // ====================
  // MESSAGES SYSTEM
  // ====================

  /** Success message categories */
  interface SuccessMessages {
    enter: NonEmptyString
    out: NonEmptyString
    submit: NonEmptyString
  }

  /** Input error message types */
  interface InputErrors {
    default: NonEmptyString
    empty: NonEmptyString
    required: NonEmptyString
    length: NonEmptyString
  }

  /** All user-facing messages */
  interface Messages {
    success: SuccessMessages
  }

  /** All error messages */
  interface Errors {
    input: InputErrors
    timeout: NonEmptyString
    general: NonEmptyString
    forbiden: NonEmptyString
    connection: NonEmptyString
    authorization: NonEmptyString
  }

  // ====================
  // MAIN CONFIG
  // ====================

  /** Main configuration structure */
  interface Config {
    base: Base
    meta: Meta
    messages: Messages
    errors: Errors
  }
}