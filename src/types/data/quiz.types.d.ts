// ====================
// QUIZ SPECIFIC TYPES
// ====================

namespace Quiz {

  // ====================
  // REUSE SHARED TYPES
  // ====================

  type BaseConfig = Shared.BaseConfig
  type Header = Shared.Header
  type Media = Shared.Media

  // ====================
  // QUIZ SPECIFIC IDS
  // ====================

  /** Question ID */
  type QuestionId = string

  /** Answer ID */
  type AnswerId = string

  // ====================
  // QUESTION TYPES & STYLES
  // ====================

  /** Question types */
  const QUESTION_TYPES = ["select", "input", "parasite", "nutritions", "range"] as const
  type QuestionType = typeof QUESTION_TYPES[number]

  /** Question layouts */

  type QuestionLayoutDefault = {
    key: "default"
  }

  type QuestionLayoutHeaderless = {
    key: "headerless"
  }

  type QuestionLayoutNoProgress = {
    key: "noProgress"
  }

  type QuestionLayoutWithSteps = {
    key: "withSteps"
    steps: { label: string, value: string }[]
    activeStep: string
  }

  const QUESTION_LAYOUTS = ["default", "headerless", "withSteps"] as const
  type QuestionLayout = QuestionLayoutDefault | QuestionLayoutHeaderless | QuestionLayoutWithSteps | QuestionLayoutNoProgress

  /** Question styles mapping */
  type QuestionStyleMap = {
    select:
    | "select_single_secondary_default"
    | "select_single_primary_default"
    | "select_single_halfwidth_default"
    | "select_multi_primary_default"
    | "select_multi_halfwidth_default"

    input:
    | "input_range_ruler_default"
    | "input_range_wheel_default"
    | "input_text_primary_default"
    | "input_datePicker_primary_default"

    parasite:
    | "parasite_normal_primary_default"
    | "parasite_normal_secondary_default"
    | "parasite_loading_primary_default"
    | "parasite_chart_primary_default"
    | "parasite_chart_secondary_default"
    | "parasite_loadingChart_primary_default"
    | "parasite_transitionText_primary_default"
    | "parasite_transitionTextChart_primary_default"
    | "parasite_loadingComments_primary_default"
    | "parasite_titleFade_primary_default"
    | "parasite_summary_primary_default"
    | "parasite_comments_primary_default"
    | "parasite_slider_primary_default"
    | "parasite_scanner_primary_default"
    | "parasite_thankYou_primary_default"

    nutritions:
    | "nutritions_normal_primary_default"

    range:
    | "range_normal_primary_default"
  }

  // ====================
  // COMMON QUESTION STRUCTURES
  // ====================

  /** Custom styling for questions */
  interface CustomStyle {
    color: string
    background: string
  }

  /** Hint structure */
  interface Hint {
    title: OptionalString
    description: OptionalString
  }

  /** Answer structure */
  interface Answer {
    type: "answer"
    aid: AnswerId
    title: NonEmptyString
    image: OptionalString
    description: OptionalString
    isNoneAnswer?: boolean
  }

  /** Next question navigation */
  type NextQuestion = {
    type: "string"
    value: QuestionId
  }
    |
  {
    type: "conditional"
    value: Record<QuestionId, AnswerId>
  }

  /** Base question interface */
  interface BaseQuestion<T extends QuestionType = QuestionType> {
    qid: QuestionId
    questionNumber: number
    questionStyle: QuestionStyleMap[T]
    questionLayout: QuestionLayout
    questionKey: UniqueKey
    questionType: T
    flutterEvent?: OptionalString
    customStyle?: CustomStyle
    nextQuestion: NextQuestion
    isController: boolean
    isDependent: boolean
  }

  // ====================
  // SELECT QUESTION TYPES
  // ====================

  /** Select question answer */

  /** Single select normal type */
  interface SingleSelectNormal {
    answers: Answer[]
  }

  /** Single select structure */
  interface SingleSelect {
    singleType: "normal"
    normal: SingleSelectNormal
  }

  /** Multi select normal type */
  interface MultiSelectNormal {
    answers: Answer[]
  }

  /** Multi select structure */
  interface MultiSelect {
    multiType: "normal"
    normal: MultiSelectNormal
  }

  /** Select content structure */
  interface SelectContent {
    title: NonEmptyString
    subtitle: OptionalString
    image: OptionalString
    description: OptionalString
    button: OptionalString
    selectType: "single" | "multi"
    single?: SingleSelect
    multi?: MultiSelect
    hint: Hint
  }

  /** Select question */
  interface SelectQuestion extends BaseQuestion<"select"> {
    select: SelectContent
  }

  // ====================
  // INPUT QUESTION TYPES
  // ====================

  /** Input validation */
  interface InputValidation {
    pattern: OptionalString
    error: OptionalString
  }

  /** Input variable */
  interface InputVariableBase {
    min?: number
    max?: number
    step?: number
    key: UniqueKey
    prefix: OptionalString
    suffix: OptionalString
    defaultValue: OptionalString
    placeholder: OptionalString
    validation: InputValidation
    inputMode?: "numeric"
  }

  interface DefaultInputVariable extends InputVariableBase {
    type: "tel" | "number" | "text"
  }

  interface RangeInputVariable extends InputVariableBase {
    min: number
    max: number
    step: number
    type: "range"
  }

  type InputVariable = DefaultInputVariable | RangeInputVariable

  /** Text input structure */
  interface TextInput {
    inputCategories: string[]
    inputVariables: Record<string, InputVariable[]>
    answers: Answer[]
    hint?: {
      icon: OptionalString,
      title: OptionalString,
      description: OptionalString
    }
  }

  /** DatePicker input structure */
  interface DatePickerInput {
    answers: Answer[]
    inputCategories: string[]
    inputVariables: Record<string, InputVariable[]>
  }

  interface RangeInput {
    answers: Answer[]
    inputCategories: string[]
    inputVariables: Record<string, RangeInputVariable[]>
  }

  /** Input content structure */
  interface InputContent {
    title: NonEmptyString
    subtitle: OptionalString
    image: OptionalString
    description: OptionalString
    button: NonEmptyString
    inputType: "text" | "datePicker" | "range"
    text?: TextInput
    datePicker?: DatePickerInput
    range?: RangeInput
    hint: Hint
  }

  /** Input question */
  interface InputQuestion extends BaseQuestion<"input"> {
    input: InputContent
  }

  // ====================
  // PARASITE QUESTION TYPES
  // ====================

  /** Loading item for parasite questions */
  interface LoadingItem {
    loadingType: "circular"
    duration: number
    value: number
    maxValue: number
    isLast: boolean
    delay: number
    color: string
    circular: {
      title: OptionalString
      description: OptionalString
      icons: {
        before: string
        after: string
      }
    }
  }

  /** Chart axis configuration */
  interface ChartAxis {
    labels: string[]
    unit: OptionalString
    note: OptionalString
  }

  /** Chart tooltip configuration */
  interface ChartTooltip {
    start: NonEmptyString
    end: NonEmptyString
  }

  /** Chart structure */
  interface Chart {
    type: "primary" | "secondary"
    mode: "asc" | "desc"
    x: ChartAxis
    y: ChartAxis
    tootltip: ChartTooltip
  }

  /** Normal parasite content */
  interface ParasiteNormal {
    answers: Answer[]
  }

  /** Loading parasite content */
  interface ParasiteLoading {
    items: LoadingItem[]
    answers: Answer[]
  }

  /** Chart parasite content */
  interface ParasiteChart {
    type: "primary" | "secondary"
    mode: "asc" | "desc"
    x: ChartAxis
    y: ChartAxis
    tootltip: ChartTooltip
    answers: Answer[]
  }

  /** Loading + Chart parasite content */
  interface ParasiteLoadingChart {
    loading: {
      items: LoadingItem[]
    }
    chart: Chart
    answers: Answer[]
  }

  /** Transition text structure */
  interface TransitionText {
    title: OptionalString
    before: OptionalString
    after: OptionalString
    description: OptionalString
    answers: Answer[]
  }

  /** Transition Text + Chart parasite content */
  interface ParasiteTransitionTextChart {
    transitionText: Omit<TransitionText, "answers">
    chart: Omit<Chart, "answers">
    answers: Answer[]
  }

  type ParasiteTransitionText = TransitionText

  /** Title fade parasite content */
  interface ParasiteTitleFade {
    items: string[]
    answers: Answer[]
  }

  /** BMI summary structure */
  interface BMISummary {
    title: string
    hint: string
    range: Checkout.BmiProgressRange
    tooltip: OptionalString
  }

  /** Summary detail item */
  interface SummaryDetailItem {
    key: string
    icon: string
    label: string
    value: string
  }

  /** Summary details structure */
  interface SummaryDetails {
    image: string
    items: SummaryDetailItem[]
  }

  /** Summary result structure */
  interface SummaryResult {
    emoji: string
    title: string
    description: string
  }

  /** Summary parasite content */
  interface ParasiteSummary {
    bmi: BMISummary
    details: SummaryDetails
    result: SummaryResult
    answers: Answer[]
  }

  /** Comments parasite content */
  interface ParasiteComments {
    answers: Answer[]
    items: Omit<Checkout.CommentItem, "button">[]
  }

  /** Loading Comments parasite content */
  interface ParasiteLoadingComments {
    comments: Omit<ParasiteComments, "answers">
    loading: Omit<ParasiteLoading, "answers">
    answers: Answer[]
  }

  /** Slider item */
  interface SliderItem {
    key: string
    image: string
    title: string
    description: string
  }

  /** Slider parasite content */
  interface ParasiteSlider {
    items: SliderItem[]
    answers: Answer[]
  }

  /** Scanner result item */
  interface ScannerResultItem {
    key: string,
    title: string,
    icon: string,
    color: string,
    unit: string,
    value: number,
    maxValue: number
  }

  /** Scanner parasite content */
  interface ParasiteScanner {
    title: string
    subtitle: string
    description: string
    image: string
    result: {
      items: ScannerResultItem[]
    }
    answers: Answer[]
  }

  /** ThankYou parasite content */
  interface ParasiteThankYou {
    hasConfetti: boolean
    answers: Answer[]
  }

  /** Parasite content structure */
  interface ParasiteContent {
    type: "normal" | "loading" | "chart" | "loadingChart" | "transitionTextChart" | "titleFade" | "summary" | "loadingComments" | "comments" | "transitionText" | "slider" | "scanner" | "thankYou"
    icon: OptionalString
    title: OptionalString
    subtitle: OptionalString
    image: OptionalString
    video: OptionalString
    description: OptionalString
    button: OptionalString
    normal?: ParasiteNormal
    loading?: ParasiteLoading
    chart?: ParasiteChart
    loadingChart?: ParasiteLoadingChart
    loadingComments?: ParasiteLoadingComments
    transitionTextChart?: ParasiteTransitionTextChart
    transitionText?: ParasiteTransitionText
    titleFade?: ParasiteTitleFade
    summary?: ParasiteSummary
    comments?: ParasiteComments
    slider?: ParasiteSlider
    scanner?: ParasiteScanner
    thankYou?: ParasiteThankYou
    hint: Hint
  }

  /** Parasite question */
  interface ParasiteQuestion extends BaseQuestion<"parasite"> {
    parasite: ParasiteContent
  }

  // ====================
  // NUTRITIONS QUESTION TYPES
  // ====================

  interface NormalNutritionResultItem {
    key: string;
    title: string;
    input: InputVariable
    value: number;
    maxValue: number;
    unit: string;
    edit: string;
    sumbit: string
    reset: string
    color: string
  }

  interface NormalNutritionsHealthScore {
    icon: string;
    title: string;
    value: number;
    maxValue: number;
  }

  interface NormalNutritionsInstructionItem {
    key: string;
    title: string;
    icon: string;
  }

  interface NormalNutritionsResult {
    title: string;
    items: NormalNutritionResultItem[];
    healthScore: NormalNutritionsHealthScore;
  }

  interface NormalNutritionsInstructions {
    title: string;
    items: NormalNutritionsInstructionItem[];
  }

  interface NormalNutritions {
    result: NormalNutritionsResult;
    instructions: NormalNutritionsInstructions;
    answers: Answer[];
  }

  /** Nutritions content structure */
  interface NutritionsContent {
    title: NonEmptyString
    subtitle: OptionalString
    image: OptionalString
    description: OptionalString
    button: NonEmptyString
    nutritionsType: "normal"
    normal?: NormalNutritions
    hint: Hint
  }

  /** Nutritions question */
  interface NutritionsQuestion extends BaseQuestion<"nutritions"> {
    nutritions: NutritionsContent
  }

  // ====================
  // RANGE QUESTION TYPES
  // ====================
  interface NormalRangeStepsItem {
    title: string
    value: number,
    key: string
  }
  interface NormalRangeSteps {
    per: number
    unit: "KG"
    initialStepIndex: number
    items: NormalRangeStepsItem[]
  }

  interface NormalRange {
    minValue: number
    maxValue: number
    steps: NormalRangeSteps
    answers: Answer[];
  }

  /** Range content structure */
  interface RangeContent {
    title: NonEmptyString
    subtitle: OptionalString
    image: OptionalString
    description: OptionalString
    button: NonEmptyString
    rangeType: "normal"
    normal?: NormalRange
    hint: Hint
  }

  /** Range question */
  interface RangeQuestion extends BaseQuestion<"range"> {
    range: RangeContent
  }

  // ====================
  // QUESTION UNION
  // ====================

  /** Discriminated union of all question types */
  type Question = SelectQuestion | InputQuestion | ParasiteQuestion | NutritionsQuestion | RangeQuestion

  // ====================
  // QUIZ CONFIGURATION
  // ====================

  /** Quiz questions collection */
  interface Questions {
    [qid: string]: Question
  }

  /** Quiz configuration */
  interface Config extends BaseConfig {
    type: TypeName
    questionsLength: number
    questions: Questions
    nextPage: ValidPath
    categories: string[]
  }

  // ====================
  // UTILITY TYPES
  // ====================

  /** Extract question by type */
  type QuestionByType<T extends QuestionType> = Extract<Question, { questionType: T }>

  /** Get question content by type */
  type QuestionContentByType<T extends QuestionType> = T extends "select"
    ? SelectContent
    : T extends "input"
    ? InputContent
    : T extends "parasite"
    ? ParasiteContent
    : T extends "nutritions"
    ? NutritionsContent
    : T extends "range"
    ? RangeContent
    : never
}