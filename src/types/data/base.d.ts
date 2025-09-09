// ====================
// UTILITY TYPES
// ====================

/** Branded type for type safety */
type Brand<T, TBrand extends string> = T & { __brand: TBrand }

/** Common string types */
type NonEmptyString = Brand<string, "NonEmptyString">
type URL = Brand<string, "URL">
type UniqueKey = Brand<string, "UniqueKey">
type ValidPath = Brand<string, "ValidPath">

/** Optional string (can be empty) */
type OptionalString = string

// ====================
// CORE SHARED TYPES
// ====================

/** Supported themes */
type SupportedTheme = "default"

/** Supported languages */
type SupportedLanguage = "us" | "gb" | "ir" | "it" | "jp" | "pt" | "th" | "au" | "sa" | "bh" | "jo" | "kw" | "om" | "qa"

/** Project names */
type ProjectName = "matchaAI"

/** Type names */
type TypeName = "myfit" | "fit" | "tamdid"

/** First aid options */
type FirstAidOption = "start"

// ====================
// SHARED NAMESPACE
// ====================

namespace Shared {

  // ====================
  // HEADER TYPES
  // ====================

  type MenuItemType = "link"
  type HeaderStyle = "default"

  interface BaseMenuItem {
    key: UniqueKey
    title: NonEmptyString
    type: MenuItemType
  }

  interface LinkMenuItem extends BaseMenuItem {
    type: "link"
    path: ValidPath
  }

  type MenuItem = LinkMenuItem

  type ButtonItem = {
    key: UniqueKey
    title: NonEmptyString
    type: Button["type"]
    path?: Button["path"]
  }

  interface Header {
    headerStyle: HeaderStyle
    menuItems: MenuItem[]
    buttonItems: ButtonItem[]
  }

  // ====================
  // COMMON MEDIA STRUCTURE
  // ====================

  /** Common media structure - appears in multiple services */
  interface Media {
    image?: OptionalString
    video?: OptionalString
    lottie?: OptionalString
    voice?: OptionalString
  }

  // ====================
  // COMMON BUTTON STRUCTURE
  // ====================

  type ButtonType = "navigator" | "reset"

  interface Button {
    title: NonEmptyString
    type: ButtonType
    path?: ValidPath
  }

  // ====================
  // BASE CONFIG INTERFACE
  // ====================

  /** Base configuration that all services should extend */
  interface BaseConfig {
    project: ProjectName
    language: SupportedLanguage
    header: Header
  }
}