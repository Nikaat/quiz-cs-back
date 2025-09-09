// ====================
// CHECKOUT SPECIFIC TYPES
// ====================

namespace Checkout {

  // ====================
  // REUSE SHARED TYPES
  // ====================

  // Import shared types
  type BaseConfig = Shared.BaseConfig
  type Media = Shared.Media
  type Button = Shared.Button

  // ====================
  // CHECKOUT SPECIFIC CONTENT
  // ====================

  /** Rate structure */
  interface Rate {
    title: OptionalString
    range: {
      value: number
      maxValue: number
    }
  }

  // ====================
  // SECTION TYPES & STYLES
  // ====================

  const SECTION_TYPES = [
    "banner",
    "bmiComparison",
    "button",
    "comments",
    "plans",
    "payment",
    "faq",
    "groupImage",
    "guarantee",
    "customHTML",
    "whatYouGet",
    "successRate",
    "warning",
    "proceedToProgram",
    "confirm",
  ] as const

  type SectionType = typeof SECTION_TYPES[number]

  /** Section styles mapping */
  type SectionStyleMap = {
    banner: "default" | "withDiscount"
    bmiComparison: "default"
    button: "default" | "fixed" | "ghost"
    comments: "default" | "masonry" | "grid" | "slider"
    plans: "default" | "glass"
    payment: "default"
    faq: "default"
    groupImage: "default"
    guarantee: "default"
    customHTML: "default"
    whatYouGet: "default"
    successRate: "default"
    warning: "default"
    proceedToProgram: "default"
    confirm: "default"
  }

  // ====================
  // BASE SECTION INTERFACE
  // ====================

  /** Every section MUST have these fields */
  interface BaseSectionContent<T extends SectionType = SectionType> {
    sectionStyle: SectionStyleMap[T]
    sectionType: T
    title: OptionalString
    subtitle: OptionalString
    description: OptionalString
    media: Media
  }

  // ====================
  // SPECIFIC SECTION CONTENT
  // ====================

  /** Banner specific content */
  interface BannerContent extends BaseSectionContent<"banner"> { }

  /** BMI Detail item structure */
  interface BmiDetail {
    key: UniqueKey
    type: "normal" | "progress"
    title: NonEmptyString
    value: string | number
    maxValue?: number
  }

  /** BMI Progress range structure */
  interface BmiProgressRange {
    title?: string
    hint?: string
    items: string[]
    value: string | number
    maxValue: number
  }

  /** BMI Progress structure */
  interface BmiProgress {
    range: BmiProgressRange
    tooltip: OptionalString
  }

  /** BMI Comparison item structure */
  interface BmiComparisonItem {
    key: string
    title: NonEmptyString
    image: OptionalString
    details: BmiDetail[]
    progress: BmiProgress
  }

  /** BMI Comparison specific content */
  interface BmiComparisonContent extends BaseSectionContent<"bmiComparison"> {
    bmiComparison: {
      items: BmiComparisonItem[]
    }
  }

  /** Button specific content */
  interface ButtonContent extends BaseSectionContent<"button"> {
    button: Button
  }

  /** Comment item structure */
  interface CommentItem {
    key: UniqueKey
    name: OptionalString
    title: OptionalString
    description?: OptionalString
    avatar: OptionalString
    socialIcon: OptionalString
    date: OptionalString
    media: Media
    rate?: Rate
    button?: OptionalString
  }

  /** Comments specific content */
  interface CommentsContent extends BaseSectionContent<"comments"> {
    comments: {
      itemType: "default" | "mediaCard" | "textCard"
      items: CommentItem[]
    }
  }

  /** Plan detail structure for goal, regime type, etc. */
  interface PlanDetail {
    key: UniqueKey
    title: NonEmptyString
    icon: OptionalString
    description: OptionalString
  }

  /** Plan price structure */
  interface PlanPrice {
    preUnit: OptionalString
    unit: NonEmptyString
    regular: number
    discounted: number
    after: OptionalString
  }

  /** Individual plan item */
  interface PlanItem {
    key: UniqueKey
    status: "active" | "inactive"
    id: UniqueKey
    type: "monthly"
    length: number
    isFeatured: boolean
    badge: OptionalString
    title: NonEmptyString
    description: OptionalString
    prices: PlanPrice
  }

  /** Additional payment options */
  interface PlanAdditional {
    key: UniqueKey
    image: OptionalString
    title: NonEmptyString
    description: OptionalString
  }

  /** Plans specific content */
  interface PlansContent extends BaseSectionContent<"plans"> {
    plans: {
      details: PlanDetail[]
      items: PlanItem[]
      additionals: PlanAdditional
      button: NonEmptyString
      footnote: OptionalString
    }
  }

  /** FAQ item structure */
  interface FaqItem {
    key: UniqueKey
    title: NonEmptyString
    description: NonEmptyString
  }

  /** FAQ specific content */
  interface FaqContent extends BaseSectionContent<"faq"> {
    faq: {
      items: FaqItem[]
    }
  }

  /** Group Image specific content */
  interface GroupImageContent extends BaseSectionContent<"groupImage"> {
    groupImage: {
      items: OptionalString[]
    }
  }

  /** Guarantee specific content */
  interface GuaranteeContent extends BaseSectionContent<"guarantee"> { }

  /** Custom HTML specific content */
  interface CustomHTMLContent extends BaseSectionContent<"customHTML"> {
    customHTML: string
  }

  /** Trust Symbol item structure */
  interface TrustSymbolItem {
    key: UniqueKey
    image: OptionalString
    path: ValidPath | ""
    innerHTML: string
  }

  /** Trust Symbols specific content */
  interface TrustSymbolsContent extends BaseSectionContent<"trustSymbols"> {
    trustSymbols: {
      items: TrustSymbolItem[]
    }
  }

  /** What You Get item structure */
  interface WhatYouGetItem {
    key: UniqueKey
    title: NonEmptyString
    description: OptionalString
    icon: OptionalString
  }

  /** What You Get specific content */
  interface WhatYouGetContent extends BaseSectionContent<"whatYouGet"> {
    whatYouGet: {
      items: WhatYouGetItem[]
    }
  }

  /** Success Rate specific content */
  interface SuccessRateContent extends BaseSectionContent<"successRate"> {
    successRate: {
      rate: OptionalString
      unit: NonEmptyString
      info: OptionalString
    }
  }

  /** Warning specific content */
  interface WarningContent extends BaseSectionContent<"warning"> { }

  /** Payment specific content */
  interface PaymentContent extends BaseSectionContent<"payment"> {
    payment: {
      methods: {
        key: NonEmptyString
        icon: OptionalString
        title: NonEmptyString
        description: OptionalString
      }[]
      button: NonEmptyString
    }
  }

  interface ProceedToProgramContent extends BaseSectionContent<"proceedToProgram"> {
    proceedToProgram: {
      initial: Authentication.InitialStep
      verification: Authentication.VerificationStep
    }
  }

  interface ConfirmContent extends BaseSectionContent<"confirm"> {
    confirm: {
      type: "reset"
      buttons: {
        cancel: string
        confirm: string
      }
    }
  }

  // ====================
  // SECTION CONTENT UNION
  // ====================

  /** Discriminated union of all section content types */
  type SectionContent =
    | BannerContent
    | BmiComparisonContent
    | ButtonContent
    | CommentsContent
    | PlansContent
    | PaymentContent
    | FaqContent
    | GroupImageContent
    | GuaranteeContent
    | CustomHTMLContent
    | WhatYouGetContent
    | SuccessRateContent
    | WarningContent
    | ConfirmContent
    | ProceedToProgramContent

  // ====================
  // SECTION REFERENCE
  // ====================

  /** Section reference in main config */
  interface SectionReference {
    sectionType: SectionType
    key: UniqueKey
    path: ValidPath
  }

  // ====================
  // CHECKOUT SPECIFIC CONFIG EXTENSIONS
  // ====================

  const SPECIAL_OFFER_STYLES = ["default", "premium", "flash"] as const
  type SpecialOfferStyle = typeof SPECIAL_OFFER_STYLES[number]

  interface SpecialOffer {
    specialOfferStyle: SpecialOfferStyle
    title: OptionalString
    description: OptionalString
    image: OptionalString
  }

  interface Discount {
    duration: number
    title: NonEmptyString
  }

  interface Offer {
    special: SpecialOffer
    discount: Discount
  }

  // ====================
  // MAIN CHECKOUT CONFIG
  // ====================

  /** Checkout configuration extends base config */
  interface Config extends BaseConfig {
    offer: Offer
    sections: SectionReference[]
  }
}