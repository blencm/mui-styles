import * as React from 'react';
import { Theme } from '@mui/system';
import { Mixins, Palette, Shadows, Transitions, ZIndex, Theme as Theme$1 } from '@mui/material';
export { Theme as DefaultTheme, Theme, ThemeProvider } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _mui_material_styles from '@mui/material/styles';
import { PropInjector } from '@mui/types';

interface ClassOptions {
    disableGlobal?: boolean;
    productionPrefix?: string;
    seed?: string;
    dangerouslyUseGlobalCSS?: boolean;
}

declare function createGenerateClassName$1(options?: ClassOptions): (rule?: any, styleSheet?: any) => string;

type Fallback<T> = {
    [P in keyof T]: T[P] | readonly NonNullable<T[P]>[];
};
interface StandardLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
    accentColor?: Property.AccentColor | undefined;
    alignContent?: Property.AlignContent | undefined;
    alignItems?: Property.AlignItems | undefined;
    alignSelf?: Property.AlignSelf | undefined;
    alignTracks?: Property.AlignTracks | undefined;
    animationComposition?: Property.AnimationComposition | undefined;
    animationDelay?: Property.AnimationDelay<TTime> | undefined;
    animationDirection?: Property.AnimationDirection | undefined;
    animationDuration?: Property.AnimationDuration<TTime> | undefined;
    animationFillMode?: Property.AnimationFillMode | undefined;
    animationIterationCount?: Property.AnimationIterationCount | undefined;
    animationName?: Property.AnimationName | undefined;
    animationPlayState?: Property.AnimationPlayState | undefined;
    animationTimeline?: Property.AnimationTimeline | undefined;
    animationTimingFunction?: Property.AnimationTimingFunction | undefined;
    appearance?: Property.Appearance | undefined;
    aspectRatio?: Property.AspectRatio | undefined;
    backdropFilter?: Property.BackdropFilter | undefined;
    backfaceVisibility?: Property.BackfaceVisibility | undefined;
    backgroundAttachment?: Property.BackgroundAttachment | undefined;
    backgroundBlendMode?: Property.BackgroundBlendMode | undefined;
    backgroundClip?: Property.BackgroundClip | undefined;
    backgroundColor?: Property.BackgroundColor | undefined;
    backgroundImage?: Property.BackgroundImage | undefined;
    backgroundOrigin?: Property.BackgroundOrigin | undefined;
    backgroundPositionX?: Property.BackgroundPositionX<TLength> | undefined;
    backgroundPositionY?: Property.BackgroundPositionY<TLength> | undefined;
    backgroundRepeat?: Property.BackgroundRepeat | undefined;
    backgroundSize?: Property.BackgroundSize<TLength> | undefined;
    blockOverflow?: Property.BlockOverflow | undefined;
    blockSize?: Property.BlockSize<TLength> | undefined;
    borderBlockColor?: Property.BorderBlockColor | undefined;
    borderBlockEndColor?: Property.BorderBlockEndColor | undefined;
    borderBlockEndStyle?: Property.BorderBlockEndStyle | undefined;
    borderBlockEndWidth?: Property.BorderBlockEndWidth<TLength> | undefined;
    borderBlockStartColor?: Property.BorderBlockStartColor | undefined;
    borderBlockStartStyle?: Property.BorderBlockStartStyle | undefined;
    borderBlockStartWidth?: Property.BorderBlockStartWidth<TLength> | undefined;
    borderBlockStyle?: Property.BorderBlockStyle | undefined;
    borderBlockWidth?: Property.BorderBlockWidth<TLength> | undefined;
    borderBottomColor?: Property.BorderBottomColor | undefined;
    borderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
    borderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
    borderBottomStyle?: Property.BorderBottomStyle | undefined;
    borderBottomWidth?: Property.BorderBottomWidth<TLength> | undefined;
    borderCollapse?: Property.BorderCollapse | undefined;
    borderEndEndRadius?: Property.BorderEndEndRadius<TLength> | undefined;
    borderEndStartRadius?: Property.BorderEndStartRadius<TLength> | undefined;
    borderImageOutset?: Property.BorderImageOutset<TLength> | undefined;
    borderImageRepeat?: Property.BorderImageRepeat | undefined;
    borderImageSlice?: Property.BorderImageSlice | undefined;
    borderImageSource?: Property.BorderImageSource | undefined;
    borderImageWidth?: Property.BorderImageWidth<TLength> | undefined;
    borderInlineColor?: Property.BorderInlineColor | undefined;
    borderInlineEndColor?: Property.BorderInlineEndColor | undefined;
    borderInlineEndStyle?: Property.BorderInlineEndStyle | undefined;
    borderInlineEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
    borderInlineStartColor?: Property.BorderInlineStartColor | undefined;
    borderInlineStartStyle?: Property.BorderInlineStartStyle | undefined;
    borderInlineStartWidth?: Property.BorderInlineStartWidth<TLength> | undefined;
    borderInlineStyle?: Property.BorderInlineStyle | undefined;
    borderInlineWidth?: Property.BorderInlineWidth<TLength> | undefined;
    borderLeftColor?: Property.BorderLeftColor | undefined;
    borderLeftStyle?: Property.BorderLeftStyle | undefined;
    borderLeftWidth?: Property.BorderLeftWidth<TLength> | undefined;
    borderRightColor?: Property.BorderRightColor | undefined;
    borderRightStyle?: Property.BorderRightStyle | undefined;
    borderRightWidth?: Property.BorderRightWidth<TLength> | undefined;
    borderSpacing?: Property.BorderSpacing<TLength> | undefined;
    borderStartEndRadius?: Property.BorderStartEndRadius<TLength> | undefined;
    borderStartStartRadius?: Property.BorderStartStartRadius<TLength> | undefined;
    borderTopColor?: Property.BorderTopColor | undefined;
    borderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
    borderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
    borderTopStyle?: Property.BorderTopStyle | undefined;
    borderTopWidth?: Property.BorderTopWidth<TLength> | undefined;
    bottom?: Property.Bottom<TLength> | undefined;
    boxDecorationBreak?: Property.BoxDecorationBreak | undefined;
    boxShadow?: Property.BoxShadow | undefined;
    boxSizing?: Property.BoxSizing | undefined;
    breakAfter?: Property.BreakAfter | undefined;
    breakBefore?: Property.BreakBefore | undefined;
    breakInside?: Property.BreakInside | undefined;
    captionSide?: Property.CaptionSide | undefined;
    caretColor?: Property.CaretColor | undefined;
    caretShape?: Property.CaretShape | undefined;
    clear?: Property.Clear | undefined;
    clipPath?: Property.ClipPath | undefined;
    color?: Property.Color | undefined;
    colorAdjust?: Property.PrintColorAdjust | undefined;
    colorScheme?: Property.ColorScheme | undefined;
    columnCount?: Property.ColumnCount | undefined;
    columnFill?: Property.ColumnFill | undefined;
    columnGap?: Property.ColumnGap<TLength> | undefined;
    columnRuleColor?: Property.ColumnRuleColor | undefined;
    columnRuleStyle?: Property.ColumnRuleStyle | undefined;
    columnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
    columnSpan?: Property.ColumnSpan | undefined;
    columnWidth?: Property.ColumnWidth<TLength> | undefined;
    contain?: Property.Contain | undefined;
    containIntrinsicBlockSize?: Property.ContainIntrinsicBlockSize<TLength> | undefined;
    containIntrinsicHeight?: Property.ContainIntrinsicHeight<TLength> | undefined;
    containIntrinsicInlineSize?: Property.ContainIntrinsicInlineSize<TLength> | undefined;
    containIntrinsicWidth?: Property.ContainIntrinsicWidth<TLength> | undefined;
    containerName?: Property.ContainerName | undefined;
    containerType?: Property.ContainerType | undefined;
    content?: Property.Content | undefined;
    contentVisibility?: Property.ContentVisibility | undefined;
    counterIncrement?: Property.CounterIncrement | undefined;
    counterReset?: Property.CounterReset | undefined;
    counterSet?: Property.CounterSet | undefined;
    cursor?: Property.Cursor | undefined;
    direction?: Property.Direction | undefined;
    display?: Property.Display | undefined;
    emptyCells?: Property.EmptyCells | undefined;
    filter?: Property.Filter | undefined;
    flexBasis?: Property.FlexBasis<TLength> | undefined;
    flexDirection?: Property.FlexDirection | undefined;
    flexGrow?: Property.FlexGrow | undefined;
    flexShrink?: Property.FlexShrink | undefined;
    flexWrap?: Property.FlexWrap | undefined;
    float?: Property.Float | undefined;
    fontFamily?: Property.FontFamily | undefined;
    fontFeatureSettings?: Property.FontFeatureSettings | undefined;
    fontKerning?: Property.FontKerning | undefined;
    fontLanguageOverride?: Property.FontLanguageOverride | undefined;
    fontOpticalSizing?: Property.FontOpticalSizing | undefined;
    fontPalette?: Property.FontPalette | undefined;
    fontSize?: Property.FontSize<TLength> | undefined;
    fontSizeAdjust?: Property.FontSizeAdjust | undefined;
    fontSmooth?: Property.FontSmooth<TLength> | undefined;
    fontStretch?: Property.FontStretch | undefined;
    fontStyle?: Property.FontStyle | undefined;
    fontSynthesis?: Property.FontSynthesis | undefined;
    fontVariant?: Property.FontVariant | undefined;
    fontVariantAlternates?: Property.FontVariantAlternates | undefined;
    fontVariantCaps?: Property.FontVariantCaps | undefined;
    fontVariantEastAsian?: Property.FontVariantEastAsian | undefined;
    fontVariantEmoji?: Property.FontVariantEmoji | undefined;
    fontVariantLigatures?: Property.FontVariantLigatures | undefined;
    fontVariantNumeric?: Property.FontVariantNumeric | undefined;
    fontVariantPosition?: Property.FontVariantPosition | undefined;
    fontVariationSettings?: Property.FontVariationSettings | undefined;
    fontWeight?: Property.FontWeight | undefined;
    forcedColorAdjust?: Property.ForcedColorAdjust | undefined;
    gridAutoColumns?: Property.GridAutoColumns<TLength> | undefined;
    gridAutoFlow?: Property.GridAutoFlow | undefined;
    gridAutoRows?: Property.GridAutoRows<TLength> | undefined;
    gridColumnEnd?: Property.GridColumnEnd | undefined;
    gridColumnStart?: Property.GridColumnStart | undefined;
    gridRowEnd?: Property.GridRowEnd | undefined;
    gridRowStart?: Property.GridRowStart | undefined;
    gridTemplateAreas?: Property.GridTemplateAreas | undefined;
    gridTemplateColumns?: Property.GridTemplateColumns<TLength> | undefined;
    gridTemplateRows?: Property.GridTemplateRows<TLength> | undefined;
    hangingPunctuation?: Property.HangingPunctuation | undefined;
    height?: Property.Height<TLength> | undefined;
    hyphenateCharacter?: Property.HyphenateCharacter | undefined;
    hyphenateLimitChars?: Property.HyphenateLimitChars | undefined;
    hyphens?: Property.Hyphens | undefined;
    imageOrientation?: Property.ImageOrientation | undefined;
    imageRendering?: Property.ImageRendering | undefined;
    imageResolution?: Property.ImageResolution | undefined;
    initialLetter?: Property.InitialLetter | undefined;
    inlineSize?: Property.InlineSize<TLength> | undefined;
    inputSecurity?: Property.InputSecurity | undefined;
    insetBlockEnd?: Property.InsetBlockEnd<TLength> | undefined;
    insetBlockStart?: Property.InsetBlockStart<TLength> | undefined;
    insetInlineEnd?: Property.InsetInlineEnd<TLength> | undefined;
    insetInlineStart?: Property.InsetInlineStart<TLength> | undefined;
    isolation?: Property.Isolation | undefined;
    justifyContent?: Property.JustifyContent | undefined;
    justifyItems?: Property.JustifyItems | undefined;
    justifySelf?: Property.JustifySelf | undefined;
    justifyTracks?: Property.JustifyTracks | undefined;
    left?: Property.Left<TLength> | undefined;
    letterSpacing?: Property.LetterSpacing<TLength> | undefined;
    lineBreak?: Property.LineBreak | undefined;
    lineHeight?: Property.LineHeight<TLength> | undefined;
    lineHeightStep?: Property.LineHeightStep<TLength> | undefined;
    listStyleImage?: Property.ListStyleImage | undefined;
    listStylePosition?: Property.ListStylePosition | undefined;
    listStyleType?: Property.ListStyleType | undefined;
    marginBlockEnd?: Property.MarginBlockEnd<TLength> | undefined;
    marginBlockStart?: Property.MarginBlockStart<TLength> | undefined;
    marginBottom?: Property.MarginBottom<TLength> | undefined;
    marginInlineEnd?: Property.MarginInlineEnd<TLength> | undefined;
    marginInlineStart?: Property.MarginInlineStart<TLength> | undefined;
    marginLeft?: Property.MarginLeft<TLength> | undefined;
    marginRight?: Property.MarginRight<TLength> | undefined;
    marginTop?: Property.MarginTop<TLength> | undefined;
    marginTrim?: Property.MarginTrim | undefined;
    maskBorderMode?: Property.MaskBorderMode | undefined;
    maskBorderOutset?: Property.MaskBorderOutset<TLength> | undefined;
    maskBorderSlice?: Property.MaskBorderSlice | undefined;
    maskBorderSource?: Property.MaskBorderSource | undefined;
    maskBorderWidth?: Property.MaskBorderWidth<TLength> | undefined;
    maskClip?: Property.MaskClip | undefined;
    maskComposite?: Property.MaskComposite | undefined;
    maskImage?: Property.MaskImage | undefined;
    maskMode?: Property.MaskMode | undefined;
    maskOrigin?: Property.MaskOrigin | undefined;
    maskPosition?: Property.MaskPosition<TLength> | undefined;
    maskRepeat?: Property.MaskRepeat | undefined;
    maskSize?: Property.MaskSize<TLength> | undefined;
    maskType?: Property.MaskType | undefined;
    mathDepth?: Property.MathDepth | undefined;
    mathShift?: Property.MathShift | undefined;
    mathStyle?: Property.MathStyle | undefined;
    maxBlockSize?: Property.MaxBlockSize<TLength> | undefined;
    maxHeight?: Property.MaxHeight<TLength> | undefined;
    maxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
    maxLines?: Property.MaxLines | undefined;
    maxWidth?: Property.MaxWidth<TLength> | undefined;
    minBlockSize?: Property.MinBlockSize<TLength> | undefined;
    minHeight?: Property.MinHeight<TLength> | undefined;
    minInlineSize?: Property.MinInlineSize<TLength> | undefined;
    minWidth?: Property.MinWidth<TLength> | undefined;
    mixBlendMode?: Property.MixBlendMode | undefined;
    motionDistance?: Property.OffsetDistance<TLength> | undefined;
    motionPath?: Property.OffsetPath | undefined;
    motionRotation?: Property.OffsetRotate | undefined;
    objectFit?: Property.ObjectFit | undefined;
    objectPosition?: Property.ObjectPosition<TLength> | undefined;
    offsetAnchor?: Property.OffsetAnchor<TLength> | undefined;
    offsetDistance?: Property.OffsetDistance<TLength> | undefined;
    offsetPath?: Property.OffsetPath | undefined;
    offsetPosition?: Property.OffsetPosition<TLength> | undefined;
    offsetRotate?: Property.OffsetRotate | undefined;
    offsetRotation?: Property.OffsetRotate | undefined;
    opacity?: Property.Opacity | undefined;
    order?: Property.Order | undefined;
    orphans?: Property.Orphans | undefined;
    outlineColor?: Property.OutlineColor | undefined;
    outlineOffset?: Property.OutlineOffset<TLength> | undefined;
    outlineStyle?: Property.OutlineStyle | undefined;
    outlineWidth?: Property.OutlineWidth<TLength> | undefined;
    overflowAnchor?: Property.OverflowAnchor | undefined;
    overflowBlock?: Property.OverflowBlock | undefined;
    overflowClipBox?: Property.OverflowClipBox | undefined;
    overflowClipMargin?: Property.OverflowClipMargin<TLength> | undefined;
    overflowInline?: Property.OverflowInline | undefined;
    overflowWrap?: Property.OverflowWrap | undefined;
    overflowX?: Property.OverflowX | undefined;
    overflowY?: Property.OverflowY | undefined;
    overscrollBehaviorBlock?: Property.OverscrollBehaviorBlock | undefined;
    overscrollBehaviorInline?: Property.OverscrollBehaviorInline | undefined;
    overscrollBehaviorX?: Property.OverscrollBehaviorX | undefined;
    overscrollBehaviorY?: Property.OverscrollBehaviorY | undefined;
    paddingBlockEnd?: Property.PaddingBlockEnd<TLength> | undefined;
    paddingBlockStart?: Property.PaddingBlockStart<TLength> | undefined;
    paddingBottom?: Property.PaddingBottom<TLength> | undefined;
    paddingInlineEnd?: Property.PaddingInlineEnd<TLength> | undefined;
    paddingInlineStart?: Property.PaddingInlineStart<TLength> | undefined;
    paddingLeft?: Property.PaddingLeft<TLength> | undefined;
    paddingRight?: Property.PaddingRight<TLength> | undefined;
    paddingTop?: Property.PaddingTop<TLength> | undefined;
    page?: Property.Page | undefined;
    pageBreakAfter?: Property.PageBreakAfter | undefined;
    pageBreakBefore?: Property.PageBreakBefore | undefined;
    pageBreakInside?: Property.PageBreakInside | undefined;
    paintOrder?: Property.PaintOrder | undefined;
    perspective?: Property.Perspective<TLength> | undefined;
    perspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
    pointerEvents?: Property.PointerEvents | undefined;
    position?: Property.Position | undefined;
    printColorAdjust?: Property.PrintColorAdjust | undefined;
    quotes?: Property.Quotes | undefined;
    resize?: Property.Resize | undefined;
    right?: Property.Right<TLength> | undefined;
    rotate?: Property.Rotate | undefined;
    rowGap?: Property.RowGap<TLength> | undefined;
    rubyAlign?: Property.RubyAlign | undefined;
    rubyMerge?: Property.RubyMerge | undefined;
    rubyPosition?: Property.RubyPosition | undefined;
    scale?: Property.Scale | undefined;
    scrollBehavior?: Property.ScrollBehavior | undefined;
    scrollMarginBlockEnd?: Property.ScrollMarginBlockEnd<TLength> | undefined;
    scrollMarginBlockStart?: Property.ScrollMarginBlockStart<TLength> | undefined;
    scrollMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
    scrollMarginInlineEnd?: Property.ScrollMarginInlineEnd<TLength> | undefined;
    scrollMarginInlineStart?: Property.ScrollMarginInlineStart<TLength> | undefined;
    scrollMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
    scrollMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
    scrollMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
    scrollPaddingBlockEnd?: Property.ScrollPaddingBlockEnd<TLength> | undefined;
    scrollPaddingBlockStart?: Property.ScrollPaddingBlockStart<TLength> | undefined;
    scrollPaddingBottom?: Property.ScrollPaddingBottom<TLength> | undefined;
    scrollPaddingInlineEnd?: Property.ScrollPaddingInlineEnd<TLength> | undefined;
    scrollPaddingInlineStart?: Property.ScrollPaddingInlineStart<TLength> | undefined;
    scrollPaddingLeft?: Property.ScrollPaddingLeft<TLength> | undefined;
    scrollPaddingRight?: Property.ScrollPaddingRight<TLength> | undefined;
    scrollPaddingTop?: Property.ScrollPaddingTop<TLength> | undefined;
    scrollSnapAlign?: Property.ScrollSnapAlign | undefined;
    scrollSnapMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
    scrollSnapMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
    scrollSnapMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
    scrollSnapMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
    scrollSnapStop?: Property.ScrollSnapStop | undefined;
    scrollSnapType?: Property.ScrollSnapType | undefined;
    scrollTimelineAxis?: Property.ScrollTimelineAxis | undefined;
    scrollTimelineName?: Property.ScrollTimelineName | undefined;
    scrollbarColor?: Property.ScrollbarColor | undefined;
    scrollbarGutter?: Property.ScrollbarGutter | undefined;
    scrollbarWidth?: Property.ScrollbarWidth | undefined;
    shapeImageThreshold?: Property.ShapeImageThreshold | undefined;
    shapeMargin?: Property.ShapeMargin<TLength> | undefined;
    shapeOutside?: Property.ShapeOutside | undefined;
    tabSize?: Property.TabSize<TLength> | undefined;
    tableLayout?: Property.TableLayout | undefined;
    textAlign?: Property.TextAlign | undefined;
    textAlignLast?: Property.TextAlignLast | undefined;
    textCombineUpright?: Property.TextCombineUpright | undefined;
    textDecorationColor?: Property.TextDecorationColor | undefined;
    textDecorationLine?: Property.TextDecorationLine | undefined;
    textDecorationSkip?: Property.TextDecorationSkip | undefined;
    textDecorationSkipInk?: Property.TextDecorationSkipInk | undefined;
    textDecorationStyle?: Property.TextDecorationStyle | undefined;
    textDecorationThickness?: Property.TextDecorationThickness<TLength> | undefined;
    textEmphasisColor?: Property.TextEmphasisColor | undefined;
    textEmphasisPosition?: Property.TextEmphasisPosition | undefined;
    textEmphasisStyle?: Property.TextEmphasisStyle | undefined;
    textIndent?: Property.TextIndent<TLength> | undefined;
    textJustify?: Property.TextJustify | undefined;
    textOrientation?: Property.TextOrientation | undefined;
    textOverflow?: Property.TextOverflow | undefined;
    textRendering?: Property.TextRendering | undefined;
    textShadow?: Property.TextShadow | undefined;
    textSizeAdjust?: Property.TextSizeAdjust | undefined;
    textTransform?: Property.TextTransform | undefined;
    textUnderlineOffset?: Property.TextUnderlineOffset<TLength> | undefined;
    textUnderlinePosition?: Property.TextUnderlinePosition | undefined;
    top?: Property.Top<TLength> | undefined;
    touchAction?: Property.TouchAction | undefined;
    transform?: Property.Transform | undefined;
    transformBox?: Property.TransformBox | undefined;
    transformOrigin?: Property.TransformOrigin<TLength> | undefined;
    transformStyle?: Property.TransformStyle | undefined;
    transitionDelay?: Property.TransitionDelay<TTime> | undefined;
    transitionDuration?: Property.TransitionDuration<TTime> | undefined;
    transitionProperty?: Property.TransitionProperty | undefined;
    transitionTimingFunction?: Property.TransitionTimingFunction | undefined;
    translate?: Property.Translate<TLength> | undefined;
    unicodeBidi?: Property.UnicodeBidi | undefined;
    userSelect?: Property.UserSelect | undefined;
    verticalAlign?: Property.VerticalAlign<TLength> | undefined;
    viewTransitionName?: Property.ViewTransitionName | undefined;
    visibility?: Property.Visibility | undefined;
    whiteSpace?: Property.WhiteSpace | undefined;
    widows?: Property.Widows | undefined;
    width?: Property.Width<TLength> | undefined;
    willChange?: Property.WillChange | undefined;
    wordBreak?: Property.WordBreak | undefined;
    wordSpacing?: Property.WordSpacing<TLength> | undefined;
    wordWrap?: Property.WordWrap | undefined;
    writingMode?: Property.WritingMode | undefined;
    zIndex?: Property.ZIndex | undefined;
    zoom?: Property.Zoom | undefined;
}
interface StandardShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
    all?: Property.All | undefined;
    animation?: Property.Animation<TTime> | undefined;
    background?: Property.Background<TLength> | undefined;
    backgroundPosition?: Property.BackgroundPosition<TLength> | undefined;
    border?: Property.Border<TLength> | undefined;
    borderBlock?: Property.BorderBlock<TLength> | undefined;
    borderBlockEnd?: Property.BorderBlockEnd<TLength> | undefined;
    borderBlockStart?: Property.BorderBlockStart<TLength> | undefined;
    borderBottom?: Property.BorderBottom<TLength> | undefined;
    borderColor?: Property.BorderColor | undefined;
    borderImage?: Property.BorderImage | undefined;
    borderInline?: Property.BorderInline<TLength> | undefined;
    borderInlineEnd?: Property.BorderInlineEnd<TLength> | undefined;
    borderInlineStart?: Property.BorderInlineStart<TLength> | undefined;
    borderLeft?: Property.BorderLeft<TLength> | undefined;
    borderRadius?: Property.BorderRadius<TLength> | undefined;
    borderRight?: Property.BorderRight<TLength> | undefined;
    borderStyle?: Property.BorderStyle | undefined;
    borderTop?: Property.BorderTop<TLength> | undefined;
    borderWidth?: Property.BorderWidth<TLength> | undefined;
    caret?: Property.Caret | undefined;
    columnRule?: Property.ColumnRule<TLength> | undefined;
    columns?: Property.Columns<TLength> | undefined;
    containIntrinsicSize?: Property.ContainIntrinsicSize<TLength> | undefined;
    container?: Property.Container | undefined;
    flex?: Property.Flex<TLength> | undefined;
    flexFlow?: Property.FlexFlow | undefined;
    font?: Property.Font | undefined;
    gap?: Property.Gap<TLength> | undefined;
    grid?: Property.Grid | undefined;
    gridArea?: Property.GridArea | undefined;
    gridColumn?: Property.GridColumn | undefined;
    gridRow?: Property.GridRow | undefined;
    gridTemplate?: Property.GridTemplate | undefined;
    inset?: Property.Inset<TLength> | undefined;
    insetBlock?: Property.InsetBlock<TLength> | undefined;
    insetInline?: Property.InsetInline<TLength> | undefined;
    lineClamp?: Property.LineClamp | undefined;
    listStyle?: Property.ListStyle | undefined;
    margin?: Property.Margin<TLength> | undefined;
    marginBlock?: Property.MarginBlock<TLength> | undefined;
    marginInline?: Property.MarginInline<TLength> | undefined;
    mask?: Property.Mask<TLength> | undefined;
    maskBorder?: Property.MaskBorder | undefined;
    motion?: Property.Offset<TLength> | undefined;
    offset?: Property.Offset<TLength> | undefined;
    outline?: Property.Outline<TLength> | undefined;
    overflow?: Property.Overflow | undefined;
    overscrollBehavior?: Property.OverscrollBehavior | undefined;
    padding?: Property.Padding<TLength> | undefined;
    paddingBlock?: Property.PaddingBlock<TLength> | undefined;
    paddingInline?: Property.PaddingInline<TLength> | undefined;
    placeContent?: Property.PlaceContent | undefined;
    placeItems?: Property.PlaceItems | undefined;
    placeSelf?: Property.PlaceSelf | undefined;
    scrollMargin?: Property.ScrollMargin<TLength> | undefined;
    scrollMarginBlock?: Property.ScrollMarginBlock<TLength> | undefined;
    scrollMarginInline?: Property.ScrollMarginInline<TLength> | undefined;
    scrollPadding?: Property.ScrollPadding<TLength> | undefined;
    scrollPaddingBlock?: Property.ScrollPaddingBlock<TLength> | undefined;
    scrollPaddingInline?: Property.ScrollPaddingInline<TLength> | undefined;
    scrollSnapMargin?: Property.ScrollMargin<TLength> | undefined;
    scrollTimeline?: Property.ScrollTimeline | undefined;
    textDecoration?: Property.TextDecoration<TLength> | undefined;
    textEmphasis?: Property.TextEmphasis | undefined;
    transition?: Property.Transition<TTime> | undefined;
}
interface StandardProperties<TLength = (string & {}) | 0, TTime = string & {}> extends StandardLonghandProperties<TLength, TTime>, StandardShorthandProperties<TLength, TTime> {
}
interface VendorLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
    MozAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
    MozAnimationDirection?: Property.AnimationDirection | undefined;
    MozAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
    MozAnimationFillMode?: Property.AnimationFillMode | undefined;
    MozAnimationIterationCount?: Property.AnimationIterationCount | undefined;
    MozAnimationName?: Property.AnimationName | undefined;
    MozAnimationPlayState?: Property.AnimationPlayState | undefined;
    MozAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
    MozAppearance?: Property.MozAppearance | undefined;
    MozBackfaceVisibility?: Property.BackfaceVisibility | undefined;
    MozBinding?: Property.MozBinding | undefined;
    MozBorderBottomColors?: Property.MozBorderBottomColors | undefined;
    MozBorderEndColor?: Property.BorderInlineEndColor | undefined;
    MozBorderEndStyle?: Property.BorderInlineEndStyle | undefined;
    MozBorderEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
    MozBorderLeftColors?: Property.MozBorderLeftColors | undefined;
    MozBorderRightColors?: Property.MozBorderRightColors | undefined;
    MozBorderStartColor?: Property.BorderInlineStartColor | undefined;
    MozBorderStartStyle?: Property.BorderInlineStartStyle | undefined;
    MozBorderTopColors?: Property.MozBorderTopColors | undefined;
    MozBoxSizing?: Property.BoxSizing | undefined;
    MozColumnCount?: Property.ColumnCount | undefined;
    MozColumnFill?: Property.ColumnFill | undefined;
    MozColumnRuleColor?: Property.ColumnRuleColor | undefined;
    MozColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
    MozColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
    MozColumnWidth?: Property.ColumnWidth<TLength> | undefined;
    MozContextProperties?: Property.MozContextProperties | undefined;
    MozFontFeatureSettings?: Property.FontFeatureSettings | undefined;
    MozFontLanguageOverride?: Property.FontLanguageOverride | undefined;
    MozHyphens?: Property.Hyphens | undefined;
    MozImageRegion?: Property.MozImageRegion | undefined;
    MozMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
    MozMarginStart?: Property.MarginInlineStart<TLength> | undefined;
    MozOrient?: Property.MozOrient | undefined;
    MozOsxFontSmoothing?: Property.FontSmooth<TLength> | undefined;
    MozPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
    MozPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
    MozPerspective?: Property.Perspective<TLength> | undefined;
    MozPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
    MozStackSizing?: Property.MozStackSizing | undefined;
    MozTabSize?: Property.TabSize<TLength> | undefined;
    MozTextBlink?: Property.MozTextBlink | undefined;
    MozTextSizeAdjust?: Property.TextSizeAdjust | undefined;
    MozTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
    MozTransformStyle?: Property.TransformStyle | undefined;
    MozTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
    MozTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
    MozTransitionProperty?: Property.TransitionProperty | undefined;
    MozTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
    MozUserFocus?: Property.MozUserFocus | undefined;
    MozUserModify?: Property.MozUserModify | undefined;
    MozUserSelect?: Property.UserSelect | undefined;
    MozWindowDragging?: Property.MozWindowDragging | undefined;
    MozWindowShadow?: Property.MozWindowShadow | undefined;
    msAccelerator?: Property.MsAccelerator | undefined;
    msBlockProgression?: Property.MsBlockProgression | undefined;
    msContentZoomChaining?: Property.MsContentZoomChaining | undefined;
    msContentZoomLimitMax?: Property.MsContentZoomLimitMax | undefined;
    msContentZoomLimitMin?: Property.MsContentZoomLimitMin | undefined;
    msContentZoomSnapPoints?: Property.MsContentZoomSnapPoints | undefined;
    msContentZoomSnapType?: Property.MsContentZoomSnapType | undefined;
    msContentZooming?: Property.MsContentZooming | undefined;
    msFilter?: Property.MsFilter | undefined;
    msFlexDirection?: Property.FlexDirection | undefined;
    msFlexPositive?: Property.FlexGrow | undefined;
    msFlowFrom?: Property.MsFlowFrom | undefined;
    msFlowInto?: Property.MsFlowInto | undefined;
    msGridColumns?: Property.MsGridColumns<TLength> | undefined;
    msGridRows?: Property.MsGridRows<TLength> | undefined;
    msHighContrastAdjust?: Property.MsHighContrastAdjust | undefined;
    msHyphenateLimitChars?: Property.MsHyphenateLimitChars | undefined;
    msHyphenateLimitLines?: Property.MsHyphenateLimitLines | undefined;
    msHyphenateLimitZone?: Property.MsHyphenateLimitZone<TLength> | undefined;
    msHyphens?: Property.Hyphens | undefined;
    msImeAlign?: Property.MsImeAlign | undefined;
    msLineBreak?: Property.LineBreak | undefined;
    msOrder?: Property.Order | undefined;
    msOverflowStyle?: Property.MsOverflowStyle | undefined;
    msOverflowX?: Property.OverflowX | undefined;
    msOverflowY?: Property.OverflowY | undefined;
    msScrollChaining?: Property.MsScrollChaining | undefined;
    msScrollLimitXMax?: Property.MsScrollLimitXMax<TLength> | undefined;
    msScrollLimitXMin?: Property.MsScrollLimitXMin<TLength> | undefined;
    msScrollLimitYMax?: Property.MsScrollLimitYMax<TLength> | undefined;
    msScrollLimitYMin?: Property.MsScrollLimitYMin<TLength> | undefined;
    msScrollRails?: Property.MsScrollRails | undefined;
    msScrollSnapPointsX?: Property.MsScrollSnapPointsX | undefined;
    msScrollSnapPointsY?: Property.MsScrollSnapPointsY | undefined;
    msScrollSnapType?: Property.MsScrollSnapType | undefined;
    msScrollTranslation?: Property.MsScrollTranslation | undefined;
    msScrollbar3dlightColor?: Property.MsScrollbar3dlightColor | undefined;
    msScrollbarArrowColor?: Property.MsScrollbarArrowColor | undefined;
    msScrollbarBaseColor?: Property.MsScrollbarBaseColor | undefined;
    msScrollbarDarkshadowColor?: Property.MsScrollbarDarkshadowColor | undefined;
    msScrollbarFaceColor?: Property.MsScrollbarFaceColor | undefined;
    msScrollbarHighlightColor?: Property.MsScrollbarHighlightColor | undefined;
    msScrollbarShadowColor?: Property.MsScrollbarShadowColor | undefined;
    msScrollbarTrackColor?: Property.MsScrollbarTrackColor | undefined;
    msTextAutospace?: Property.MsTextAutospace | undefined;
    msTextCombineHorizontal?: Property.TextCombineUpright | undefined;
    msTextOverflow?: Property.TextOverflow | undefined;
    msTouchAction?: Property.TouchAction | undefined;
    msTouchSelect?: Property.MsTouchSelect | undefined;
    msTransform?: Property.Transform | undefined;
    msTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
    msTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
    msTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
    msTransitionProperty?: Property.TransitionProperty | undefined;
    msTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
    msUserSelect?: Property.MsUserSelect | undefined;
    msWordBreak?: Property.WordBreak | undefined;
    msWrapFlow?: Property.MsWrapFlow | undefined;
    msWrapMargin?: Property.MsWrapMargin<TLength> | undefined;
    msWrapThrough?: Property.MsWrapThrough | undefined;
    msWritingMode?: Property.WritingMode | undefined;
    WebkitAlignContent?: Property.AlignContent | undefined;
    WebkitAlignItems?: Property.AlignItems | undefined;
    WebkitAlignSelf?: Property.AlignSelf | undefined;
    WebkitAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
    WebkitAnimationDirection?: Property.AnimationDirection | undefined;
    WebkitAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
    WebkitAnimationFillMode?: Property.AnimationFillMode | undefined;
    WebkitAnimationIterationCount?: Property.AnimationIterationCount | undefined;
    WebkitAnimationName?: Property.AnimationName | undefined;
    WebkitAnimationPlayState?: Property.AnimationPlayState | undefined;
    WebkitAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
    WebkitAppearance?: Property.WebkitAppearance | undefined;
    WebkitBackdropFilter?: Property.BackdropFilter | undefined;
    WebkitBackfaceVisibility?: Property.BackfaceVisibility | undefined;
    WebkitBackgroundClip?: Property.BackgroundClip | undefined;
    WebkitBackgroundOrigin?: Property.BackgroundOrigin | undefined;
    WebkitBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
    WebkitBorderBeforeColor?: Property.WebkitBorderBeforeColor | undefined;
    WebkitBorderBeforeStyle?: Property.WebkitBorderBeforeStyle | undefined;
    WebkitBorderBeforeWidth?: Property.WebkitBorderBeforeWidth<TLength> | undefined;
    WebkitBorderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
    WebkitBorderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
    WebkitBorderImageSlice?: Property.BorderImageSlice | undefined;
    WebkitBorderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
    WebkitBorderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
    WebkitBoxDecorationBreak?: Property.BoxDecorationBreak | undefined;
    WebkitBoxReflect?: Property.WebkitBoxReflect<TLength> | undefined;
    WebkitBoxShadow?: Property.BoxShadow | undefined;
    WebkitBoxSizing?: Property.BoxSizing | undefined;
    WebkitClipPath?: Property.ClipPath | undefined;
    WebkitColumnCount?: Property.ColumnCount | undefined;
    WebkitColumnFill?: Property.ColumnFill | undefined;
    WebkitColumnRuleColor?: Property.ColumnRuleColor | undefined;
    WebkitColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
    WebkitColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
    WebkitColumnSpan?: Property.ColumnSpan | undefined;
    WebkitColumnWidth?: Property.ColumnWidth<TLength> | undefined;
    WebkitFilter?: Property.Filter | undefined;
    WebkitFlexBasis?: Property.FlexBasis<TLength> | undefined;
    WebkitFlexDirection?: Property.FlexDirection | undefined;
    WebkitFlexGrow?: Property.FlexGrow | undefined;
    WebkitFlexShrink?: Property.FlexShrink | undefined;
    WebkitFlexWrap?: Property.FlexWrap | undefined;
    WebkitFontFeatureSettings?: Property.FontFeatureSettings | undefined;
    WebkitFontKerning?: Property.FontKerning | undefined;
    WebkitFontSmoothing?: Property.FontSmooth<TLength> | undefined;
    WebkitFontVariantLigatures?: Property.FontVariantLigatures | undefined;
    WebkitHyphenateCharacter?: Property.HyphenateCharacter | undefined;
    WebkitHyphens?: Property.Hyphens | undefined;
    WebkitInitialLetter?: Property.InitialLetter | undefined;
    WebkitJustifyContent?: Property.JustifyContent | undefined;
    WebkitLineBreak?: Property.LineBreak | undefined;
    WebkitLineClamp?: Property.WebkitLineClamp | undefined;
    WebkitMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
    WebkitMarginStart?: Property.MarginInlineStart<TLength> | undefined;
    WebkitMaskAttachment?: Property.WebkitMaskAttachment | undefined;
    WebkitMaskBoxImageOutset?: Property.MaskBorderOutset<TLength> | undefined;
    WebkitMaskBoxImageRepeat?: Property.MaskBorderRepeat | undefined;
    WebkitMaskBoxImageSlice?: Property.MaskBorderSlice | undefined;
    WebkitMaskBoxImageSource?: Property.MaskBorderSource | undefined;
    WebkitMaskBoxImageWidth?: Property.MaskBorderWidth<TLength> | undefined;
    WebkitMaskClip?: Property.WebkitMaskClip | undefined;
    WebkitMaskComposite?: Property.WebkitMaskComposite | undefined;
    WebkitMaskImage?: Property.WebkitMaskImage | undefined;
    WebkitMaskOrigin?: Property.WebkitMaskOrigin | undefined;
    WebkitMaskPosition?: Property.WebkitMaskPosition<TLength> | undefined;
    WebkitMaskPositionX?: Property.WebkitMaskPositionX<TLength> | undefined;
    WebkitMaskPositionY?: Property.WebkitMaskPositionY<TLength> | undefined;
    WebkitMaskRepeat?: Property.WebkitMaskRepeat | undefined;
    WebkitMaskRepeatX?: Property.WebkitMaskRepeatX | undefined;
    WebkitMaskRepeatY?: Property.WebkitMaskRepeatY | undefined;
    WebkitMaskSize?: Property.WebkitMaskSize<TLength> | undefined;
    WebkitMaxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
    WebkitOrder?: Property.Order | undefined;
    WebkitOverflowScrolling?: Property.WebkitOverflowScrolling | undefined;
    WebkitPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
    WebkitPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
    WebkitPerspective?: Property.Perspective<TLength> | undefined;
    WebkitPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
    WebkitPrintColorAdjust?: Property.PrintColorAdjust | undefined;
    WebkitRubyPosition?: Property.RubyPosition | undefined;
    WebkitScrollSnapType?: Property.ScrollSnapType | undefined;
    WebkitShapeMargin?: Property.ShapeMargin<TLength> | undefined;
    WebkitTapHighlightColor?: Property.WebkitTapHighlightColor | undefined;
    WebkitTextCombine?: Property.TextCombineUpright | undefined;
    WebkitTextDecorationColor?: Property.TextDecorationColor | undefined;
    WebkitTextDecorationLine?: Property.TextDecorationLine | undefined;
    WebkitTextDecorationSkip?: Property.TextDecorationSkip | undefined;
    WebkitTextDecorationStyle?: Property.TextDecorationStyle | undefined;
    WebkitTextEmphasisColor?: Property.TextEmphasisColor | undefined;
    WebkitTextEmphasisPosition?: Property.TextEmphasisPosition | undefined;
    WebkitTextEmphasisStyle?: Property.TextEmphasisStyle | undefined;
    WebkitTextFillColor?: Property.WebkitTextFillColor | undefined;
    WebkitTextOrientation?: Property.TextOrientation | undefined;
    WebkitTextSizeAdjust?: Property.TextSizeAdjust | undefined;
    WebkitTextStrokeColor?: Property.WebkitTextStrokeColor | undefined;
    WebkitTextStrokeWidth?: Property.WebkitTextStrokeWidth<TLength> | undefined;
    WebkitTextUnderlinePosition?: Property.TextUnderlinePosition | undefined;
    WebkitTouchCallout?: Property.WebkitTouchCallout | undefined;
    WebkitTransform?: Property.Transform | undefined;
    WebkitTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
    WebkitTransformStyle?: Property.TransformStyle | undefined;
    WebkitTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
    WebkitTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
    WebkitTransitionProperty?: Property.TransitionProperty | undefined;
    WebkitTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
    WebkitUserModify?: Property.WebkitUserModify | undefined;
    WebkitUserSelect?: Property.UserSelect | undefined;
    WebkitWritingMode?: Property.WritingMode | undefined;
}
interface VendorShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
    MozAnimation?: Property.Animation<TTime> | undefined;
    MozBorderImage?: Property.BorderImage | undefined;
    MozColumnRule?: Property.ColumnRule<TLength> | undefined;
    MozColumns?: Property.Columns<TLength> | undefined;
    MozTransition?: Property.Transition<TTime> | undefined;
    msContentZoomLimit?: Property.MsContentZoomLimit | undefined;
    msContentZoomSnap?: Property.MsContentZoomSnap | undefined;
    msFlex?: Property.Flex<TLength> | undefined;
    msScrollLimit?: Property.MsScrollLimit | undefined;
    msScrollSnapX?: Property.MsScrollSnapX | undefined;
    msScrollSnapY?: Property.MsScrollSnapY | undefined;
    msTransition?: Property.Transition<TTime> | undefined;
    WebkitAnimation?: Property.Animation<TTime> | undefined;
    WebkitBorderBefore?: Property.WebkitBorderBefore<TLength> | undefined;
    WebkitBorderImage?: Property.BorderImage | undefined;
    WebkitBorderRadius?: Property.BorderRadius<TLength> | undefined;
    WebkitColumnRule?: Property.ColumnRule<TLength> | undefined;
    WebkitColumns?: Property.Columns<TLength> | undefined;
    WebkitFlex?: Property.Flex<TLength> | undefined;
    WebkitFlexFlow?: Property.FlexFlow | undefined;
    WebkitMask?: Property.WebkitMask<TLength> | undefined;
    WebkitMaskBoxImage?: Property.MaskBorder | undefined;
    WebkitTextEmphasis?: Property.TextEmphasis | undefined;
    WebkitTextStroke?: Property.WebkitTextStroke<TLength> | undefined;
    WebkitTransition?: Property.Transition<TTime> | undefined;
}
interface VendorProperties<TLength = (string & {}) | 0, TTime = string & {}> extends VendorLonghandProperties<TLength, TTime>, VendorShorthandProperties<TLength, TTime> {
}
interface SvgProperties<TLength = (string & {}) | 0, TTime = string & {}> {
    alignmentBaseline?: Property.AlignmentBaseline | undefined;
    baselineShift?: Property.BaselineShift<TLength> | undefined;
    clip?: Property.Clip | undefined;
    clipPath?: Property.ClipPath | undefined;
    clipRule?: Property.ClipRule | undefined;
    color?: Property.Color | undefined;
    colorInterpolation?: Property.ColorInterpolation | undefined;
    colorRendering?: Property.ColorRendering | undefined;
    cursor?: Property.Cursor | undefined;
    direction?: Property.Direction | undefined;
    display?: Property.Display | undefined;
    dominantBaseline?: Property.DominantBaseline | undefined;
    fill?: Property.Fill | undefined;
    fillOpacity?: Property.FillOpacity | undefined;
    fillRule?: Property.FillRule | undefined;
    filter?: Property.Filter | undefined;
    floodColor?: Property.FloodColor | undefined;
    floodOpacity?: Property.FloodOpacity | undefined;
    font?: Property.Font | undefined;
    fontFamily?: Property.FontFamily | undefined;
    fontSize?: Property.FontSize<TLength> | undefined;
    fontSizeAdjust?: Property.FontSizeAdjust | undefined;
    fontStretch?: Property.FontStretch | undefined;
    fontStyle?: Property.FontStyle | undefined;
    fontVariant?: Property.FontVariant | undefined;
    fontWeight?: Property.FontWeight | undefined;
    glyphOrientationVertical?: Property.GlyphOrientationVertical | undefined;
    imageRendering?: Property.ImageRendering | undefined;
    letterSpacing?: Property.LetterSpacing<TLength> | undefined;
    lightingColor?: Property.LightingColor | undefined;
    lineHeight?: Property.LineHeight<TLength> | undefined;
    marker?: Property.Marker | undefined;
    markerEnd?: Property.MarkerEnd | undefined;
    markerMid?: Property.MarkerMid | undefined;
    markerStart?: Property.MarkerStart | undefined;
    mask?: Property.Mask<TLength> | undefined;
    opacity?: Property.Opacity | undefined;
    overflow?: Property.Overflow | undefined;
    paintOrder?: Property.PaintOrder | undefined;
    pointerEvents?: Property.PointerEvents | undefined;
    shapeRendering?: Property.ShapeRendering | undefined;
    stopColor?: Property.StopColor | undefined;
    stopOpacity?: Property.StopOpacity | undefined;
    stroke?: Property.Stroke | undefined;
    strokeDasharray?: Property.StrokeDasharray<TLength> | undefined;
    strokeDashoffset?: Property.StrokeDashoffset<TLength> | undefined;
    strokeLinecap?: Property.StrokeLinecap | undefined;
    strokeLinejoin?: Property.StrokeLinejoin | undefined;
    strokeMiterlimit?: Property.StrokeMiterlimit | undefined;
    strokeOpacity?: Property.StrokeOpacity | undefined;
    strokeWidth?: Property.StrokeWidth<TLength> | undefined;
    textAnchor?: Property.TextAnchor | undefined;
    textDecoration?: Property.TextDecoration<TLength> | undefined;
    textRendering?: Property.TextRendering | undefined;
    unicodeBidi?: Property.UnicodeBidi | undefined;
    vectorEffect?: Property.VectorEffect | undefined;
    visibility?: Property.Visibility | undefined;
    whiteSpace?: Property.WhiteSpace | undefined;
    wordSpacing?: Property.WordSpacing<TLength> | undefined;
    writingMode?: Property.WritingMode | undefined;
}
interface Properties<TLength = (string & {}) | 0, TTime = string & {}> extends StandardProperties<TLength, TTime>, VendorProperties<TLength, TTime>, SvgProperties<TLength, TTime> {
}
type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
declare namespace Property {
    type AccentColor = Globals | DataType.Color | "auto";
    type AlignContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});
    type AlignItems = Globals | DataType.SelfPosition | "baseline" | "normal" | "stretch" | (string & {});
    type AlignSelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "normal" | "stretch" | (string & {});
    type AlignTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});
    type All = Globals;
    type Animation<TTime = string & {}> = Globals | DataType.SingleAnimation<TTime> | (string & {});
    type AnimationComposition = Globals | DataType.SingleAnimationComposition | (string & {});
    type AnimationDelay<TTime = string & {}> = Globals | TTime | (string & {});
    type AnimationDirection = Globals | DataType.SingleAnimationDirection | (string & {});
    type AnimationDuration<TTime = string & {}> = Globals | TTime | (string & {});
    type AnimationFillMode = Globals | DataType.SingleAnimationFillMode | (string & {});
    type AnimationIterationCount = Globals | "infinite" | (string & {}) | (number & {});
    type AnimationName = Globals | "none" | (string & {});
    type AnimationPlayState = Globals | "paused" | "running" | (string & {});
    type AnimationTimeline = Globals | DataType.SingleAnimationTimeline | (string & {});
    type AnimationTimingFunction = Globals | DataType.EasingFunction | (string & {});
    type Appearance = Globals | DataType.CompatAuto | "auto" | "menulist-button" | "none" | "textfield";
    type AspectRatio = Globals | "auto" | (string & {}) | (number & {});
    type Azimuth = Globals | "behind" | "center" | "center-left" | "center-right" | "far-left" | "far-right" | "left" | "left-side" | "leftwards" | "right" | "right-side" | "rightwards" | (string & {});
    type BackdropFilter = Globals | "none" | (string & {});
    type BackfaceVisibility = Globals | "hidden" | "visible";
    type Background<TLength = (string & {}) | 0> = Globals | DataType.FinalBgLayer<TLength> | (string & {});
    type BackgroundAttachment = Globals | DataType.Attachment | (string & {});
    type BackgroundBlendMode = Globals | DataType.BlendMode | (string & {});
    type BackgroundClip = Globals | DataType.Box | (string & {});
    type BackgroundColor = Globals | DataType.Color;
    type BackgroundImage = Globals | "none" | (string & {});
    type BackgroundOrigin = Globals | DataType.Box | (string & {});
    type BackgroundPosition<TLength = (string & {}) | 0> = Globals | DataType.BgPosition<TLength> | (string & {});
    type BackgroundPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | "x-end" | "x-start" | (string & {});
    type BackgroundPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | "y-end" | "y-start" | (string & {});
    type BackgroundRepeat = Globals | DataType.RepeatStyle | (string & {});
    type BackgroundSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});
    type BlockOverflow = Globals | "clip" | "ellipsis" | (string & {});
    type BlockSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
    type Border<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderBlock<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderBlockColor = Globals | DataType.Color | (string & {});
    type BorderBlockEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderBlockEndColor = Globals | DataType.Color;
    type BorderBlockEndStyle = Globals | DataType.LineStyle;
    type BorderBlockEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderBlockStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderBlockStartColor = Globals | DataType.Color;
    type BorderBlockStartStyle = Globals | DataType.LineStyle;
    type BorderBlockStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderBlockStyle = Globals | DataType.LineStyle;
    type BorderBlockWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderBottom<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderBottomColor = Globals | DataType.Color;
    type BorderBottomLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderBottomRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderBottomStyle = Globals | DataType.LineStyle;
    type BorderBottomWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderCollapse = Globals | "collapse" | "separate";
    type BorderColor = Globals | DataType.Color | (string & {});
    type BorderEndEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderEndStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderImage = Globals | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});
    type BorderImageOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});
    type BorderImageRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});
    type BorderImageSlice = Globals | (string & {}) | (number & {});
    type BorderImageSource = Globals | "none" | (string & {});
    type BorderImageWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});
    type BorderInline<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderInlineColor = Globals | DataType.Color | (string & {});
    type BorderInlineEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderInlineEndColor = Globals | DataType.Color;
    type BorderInlineEndStyle = Globals | DataType.LineStyle;
    type BorderInlineEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderInlineStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderInlineStartColor = Globals | DataType.Color;
    type BorderInlineStartStyle = Globals | DataType.LineStyle;
    type BorderInlineStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderInlineStyle = Globals | DataType.LineStyle;
    type BorderInlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderLeft<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderLeftColor = Globals | DataType.Color;
    type BorderLeftStyle = Globals | DataType.LineStyle;
    type BorderLeftWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderRight<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderRightColor = Globals | DataType.Color;
    type BorderRightStyle = Globals | DataType.LineStyle;
    type BorderRightWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderSpacing<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderStartEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderStartStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderStyle = Globals | DataType.LineStyle | (string & {});
    type BorderTop<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type BorderTopColor = Globals | DataType.Color;
    type BorderTopLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderTopRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type BorderTopStyle = Globals | DataType.LineStyle;
    type BorderTopWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type BorderWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});
    type Bottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type BoxAlign = Globals | "baseline" | "center" | "end" | "start" | "stretch";
    type BoxDecorationBreak = Globals | "clone" | "slice";
    type BoxDirection = Globals | "inherit" | "normal" | "reverse";
    type BoxFlex = Globals | (number & {}) | (string & {});
    type BoxFlexGroup = Globals | (number & {}) | (string & {});
    type BoxLines = Globals | "multiple" | "single";
    type BoxOrdinalGroup = Globals | (number & {}) | (string & {});
    type BoxOrient = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";
    type BoxPack = Globals | "center" | "end" | "justify" | "start";
    type BoxShadow = Globals | "none" | (string & {});
    type BoxSizing = Globals | "border-box" | "content-box";
    type BreakAfter = Globals | "all" | "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";
    type BreakBefore = Globals | "all" | "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";
    type BreakInside = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";
    type CaptionSide = Globals | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";
    type Caret = Globals | DataType.Color | "auto" | "bar" | "block" | "underscore" | (string & {});
    type CaretColor = Globals | DataType.Color | "auto";
    type CaretShape = Globals | "auto" | "bar" | "block" | "underscore";
    type Clear = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";
    type Clip = Globals | "auto" | (string & {});
    type ClipPath = Globals | DataType.GeometryBox | "none" | (string & {});
    type Color = Globals | DataType.Color;
    type PrintColorAdjust = Globals | "economy" | "exact";
    type ColorScheme = Globals | "dark" | "light" | "normal" | (string & {});
    type ColumnCount = Globals | "auto" | (number & {}) | (string & {});
    type ColumnFill = Globals | "auto" | "balance" | "balance-all";
    type ColumnGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});
    type ColumnRule<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type ColumnRuleColor = Globals | DataType.Color;
    type ColumnRuleStyle = Globals | DataType.LineStyle | (string & {});
    type ColumnRuleWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});
    type ColumnSpan = Globals | "all" | "none";
    type ColumnWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto";
    type Columns<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});
    type Contain = Globals | "content" | "inline-size" | "layout" | "none" | "paint" | "size" | "strict" | "style" | (string & {});
    type ContainIntrinsicBlockSize<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});
    type ContainIntrinsicHeight<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});
    type ContainIntrinsicInlineSize<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});
    type ContainIntrinsicSize<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});
    type ContainIntrinsicWidth<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});
    type Container = Globals | "none" | (string & {});
    type ContainerName = Globals | "none" | (string & {});
    type ContainerType = Globals | "inline-size" | "normal" | "size";
    type Content = Globals | DataType.ContentList | "none" | "normal" | (string & {});
    type ContentVisibility = Globals | "auto" | "hidden" | "visible";
    type CounterIncrement = Globals | "none" | (string & {});
    type CounterReset = Globals | "none" | (string & {});
    type CounterSet = Globals | "none" | (string & {});
    type Cursor = Globals | "-moz-grab" | "-webkit-grab" | "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "no-drop" | "none" | "not-allowed" | "ns-resize" | "nw-resize" | "nwse-resize" | "pointer" | "progress" | "row-resize" | "s-resize" | "se-resize" | "sw-resize" | "text" | "vertical-text" | "w-resize" | "wait" | "zoom-in" | "zoom-out" | (string & {});
    type Direction = Globals | "ltr" | "rtl";
    type Display = Globals | DataType.DisplayOutside | DataType.DisplayInside | DataType.DisplayInternal | DataType.DisplayLegacy | "contents" | "list-item" | "none" | (string & {});
    type EmptyCells = Globals | "hide" | "show";
    type Filter = Globals | "none" | (string & {});
    type Flex<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "content" | "fit-content" | "max-content" | "min-content" | "none" | (string & {}) | (number & {});
    type FlexBasis<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-auto" | "auto" | "content" | "fit-content" | "max-content" | "min-content" | (string & {});
    type FlexDirection = Globals | "column" | "column-reverse" | "row" | "row-reverse";
    type FlexFlow = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | (string & {});
    type FlexGrow = Globals | (number & {}) | (string & {});
    type FlexShrink = Globals | (number & {}) | (string & {});
    type FlexWrap = Globals | "nowrap" | "wrap" | "wrap-reverse";
    type Float = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";
    type Font = Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | (string & {});
    type FontFamily = Globals | DataType.GenericFamily | (string & {});
    type FontFeatureSettings = Globals | "normal" | (string & {});
    type FontKerning = Globals | "auto" | "none" | "normal";
    type FontLanguageOverride = Globals | "normal" | (string & {});
    type FontOpticalSizing = Globals | "auto" | "none";
    type FontPalette = Globals | "dark" | "light" | "normal" | (string & {});
    type FontSize<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "larger" | "smaller" | (string & {});
    type FontSizeAdjust = Globals | "from-font" | "none" | (string & {}) | (number & {});
    type FontSmooth<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "always" | "auto" | "never";
    type FontStretch = Globals | DataType.FontStretchAbsolute;
    type FontStyle = Globals | "italic" | "normal" | "oblique" | (string & {});
    type FontSynthesis = Globals | "none" | "small-caps" | "style" | "weight" | (string & {});
    type FontVariant = Globals | DataType.EastAsianVariantValues | "all-petite-caps" | "all-small-caps" | "common-ligatures" | "contextual" | "diagonal-fractions" | "discretionary-ligatures" | "full-width" | "historical-forms" | "historical-ligatures" | "lining-nums" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | "oldstyle-nums" | "ordinal" | "petite-caps" | "proportional-nums" | "proportional-width" | "ruby" | "slashed-zero" | "small-caps" | "stacked-fractions" | "tabular-nums" | "titling-caps" | "unicase" | (string & {});
    type FontVariantAlternates = Globals | "historical-forms" | "normal" | (string & {});
    type FontVariantCaps = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";
    type FontVariantEastAsian = Globals | DataType.EastAsianVariantValues | "full-width" | "normal" | "proportional-width" | "ruby" | (string & {});
    type FontVariantEmoji = Globals | "emoji" | "normal" | "text" | "unicode";
    type FontVariantLigatures = Globals | "common-ligatures" | "contextual" | "discretionary-ligatures" | "historical-ligatures" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | (string & {});
    type FontVariantNumeric = Globals | "diagonal-fractions" | "lining-nums" | "normal" | "oldstyle-nums" | "ordinal" | "proportional-nums" | "slashed-zero" | "stacked-fractions" | "tabular-nums" | (string & {});
    type FontVariantPosition = Globals | "normal" | "sub" | "super";
    type FontVariationSettings = Globals | "normal" | (string & {});
    type FontWeight = Globals | DataType.FontWeightAbsolute | "bolder" | "lighter";
    type ForcedColorAdjust = Globals | "auto" | "none";
    type Gap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});
    type Grid = Globals | "none" | (string & {});
    type GridArea = Globals | DataType.GridLine | (string & {});
    type GridAutoColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});
    type GridAutoFlow = Globals | "column" | "dense" | "row" | (string & {});
    type GridAutoRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});
    type GridColumn = Globals | DataType.GridLine | (string & {});
    type GridColumnEnd = Globals | DataType.GridLine;
    type GridColumnGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type GridColumnStart = Globals | DataType.GridLine;
    type GridGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type GridRow = Globals | DataType.GridLine | (string & {});
    type GridRowEnd = Globals | DataType.GridLine;
    type GridRowGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type GridRowStart = Globals | DataType.GridLine;
    type GridTemplate = Globals | "none" | (string & {});
    type GridTemplateAreas = Globals | "none" | (string & {});
    type GridTemplateColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});
    type GridTemplateRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});
    type HangingPunctuation = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | (string & {});
    type Height<TLength = (string & {}) | 0> = Globals | TLength | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
    type HyphenateCharacter = Globals | "auto" | (string & {});
    type HyphenateLimitChars = Globals | "auto" | (string & {}) | (number & {});
    type Hyphens = Globals | "auto" | "manual" | "none";
    type ImageOrientation = Globals | "flip" | "from-image" | (string & {});
    type ImageRendering = Globals | "-moz-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated";
    type ImageResolution = Globals | "from-image" | (string & {});
    type ImeMode = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";
    type InitialLetter = Globals | "normal" | (string & {}) | (number & {});
    type InlineSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
    type InputSecurity = Globals | "auto" | "none";
    type Inset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type InsetBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type InsetBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type InsetBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type InsetInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type InsetInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type InsetInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type Isolation = Globals | "auto" | "isolate";
    type JustifyContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});
    type JustifyItems = Globals | DataType.SelfPosition | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | (string & {});
    type JustifySelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | (string & {});
    type JustifyTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});
    type Left<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type LetterSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";
    type LineBreak = Globals | "anywhere" | "auto" | "loose" | "normal" | "strict";
    type LineClamp = Globals | "none" | (number & {}) | (string & {});
    type LineHeight<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {}) | (number & {});
    type LineHeightStep<TLength = (string & {}) | 0> = Globals | TLength;
    type ListStyle = Globals | "inside" | "none" | "outside" | (string & {});
    type ListStyleImage = Globals | "none" | (string & {});
    type ListStylePosition = Globals | "inside" | "outside";
    type ListStyleType = Globals | "none" | (string & {});
    type Margin<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type MarginTrim = Globals | "all" | "in-flow" | "none";
    type Mask<TLength = (string & {}) | 0> = Globals | DataType.MaskLayer<TLength> | (string & {});
    type MaskBorder = Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});
    type MaskBorderMode = Globals | "alpha" | "luminance";
    type MaskBorderOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});
    type MaskBorderRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});
    type MaskBorderSlice = Globals | (string & {}) | (number & {});
    type MaskBorderSource = Globals | "none" | (string & {});
    type MaskBorderWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});
    type MaskClip = Globals | DataType.GeometryBox | "no-clip" | (string & {});
    type MaskComposite = Globals | DataType.CompositingOperator | (string & {});
    type MaskImage = Globals | "none" | (string & {});
    type MaskMode = Globals | DataType.MaskingMode | (string & {});
    type MaskOrigin = Globals | DataType.GeometryBox | (string & {});
    type MaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});
    type MaskRepeat = Globals | DataType.RepeatStyle | (string & {});
    type MaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});
    type MaskType = Globals | "alpha" | "luminance";
    type MathDepth = Globals | "auto-add" | (string & {}) | (number & {});
    type MathShift = Globals | "compact" | "normal";
    type MathStyle = Globals | "compact" | "normal";
    type MaxBlockSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "fit-content" | "max-content" | "min-content" | "none" | (string & {});
    type MaxHeight<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "-webkit-max-content" | "-webkit-min-content" | "fit-content" | "intrinsic" | "max-content" | "min-content" | "none" | (string & {});
    type MaxInlineSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "fit-content" | "max-content" | "min-content" | "none" | (string & {});
    type MaxLines = Globals | "none" | (number & {}) | (string & {});
    type MaxWidth<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "-webkit-max-content" | "-webkit-min-content" | "fit-content" | "intrinsic" | "max-content" | "min-content" | "none" | (string & {});
    type MinBlockSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
    type MinHeight<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "-webkit-max-content" | "-webkit-min-content" | "auto" | "fit-content" | "intrinsic" | "max-content" | "min-content" | (string & {});
    type MinInlineSize<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "auto" | "fit-content" | "max-content" | "min-content" | (string & {});
    type MinWidth<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fill-available" | "-webkit-fit-content" | "-webkit-max-content" | "-webkit-min-content" | "auto" | "fit-content" | "intrinsic" | "max-content" | "min-content" | "min-intrinsic" | (string & {});
    type MixBlendMode = Globals | DataType.BlendMode | "plus-lighter";
    type Offset<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | DataType.GeometryBox | "auto" | "none" | (string & {});
    type OffsetDistance<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type OffsetPath = Globals | DataType.GeometryBox | "none" | (string & {});
    type OffsetRotate = Globals | "auto" | "reverse" | (string & {});
    type ObjectFit = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";
    type ObjectPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;
    type OffsetAnchor<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto";
    type OffsetPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto";
    type Opacity = Globals | (string & {}) | (number & {});
    type Order = Globals | (number & {}) | (string & {});
    type Orphans = Globals | (number & {}) | (string & {});
    type Outline<TLength = (string & {}) | 0> = Globals | DataType.Color | DataType.LineStyle | DataType.LineWidth<TLength> | "auto" | "invert" | (string & {});
    type OutlineColor = Globals | DataType.Color | "invert";
    type OutlineOffset<TLength = (string & {}) | 0> = Globals | TLength;
    type OutlineStyle = Globals | DataType.LineStyle | "auto" | (string & {});
    type OutlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;
    type Overflow = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" | (string & {});
    type OverflowAnchor = Globals | "auto" | "none";
    type OverflowBlock = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";
    type OverflowClipBox = Globals | "content-box" | "padding-box";
    type OverflowClipMargin<TLength = (string & {}) | 0> = Globals | DataType.VisualBox | TLength | (string & {});
    type OverflowInline = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";
    type OverflowWrap = Globals | "anywhere" | "break-word" | "normal";
    type OverflowX = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible";
    type OverflowY = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible";
    type OverscrollBehavior = Globals | "auto" | "contain" | "none" | (string & {});
    type OverscrollBehaviorBlock = Globals | "auto" | "contain" | "none";
    type OverscrollBehaviorInline = Globals | "auto" | "contain" | "none";
    type OverscrollBehaviorX = Globals | "auto" | "contain" | "none";
    type OverscrollBehaviorY = Globals | "auto" | "contain" | "none";
    type Padding<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingRight<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type PaddingTop<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type Page = Globals | "auto" | (string & {});
    type PageBreakAfter = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";
    type PageBreakBefore = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";
    type PageBreakInside = Globals | "auto" | "avoid";
    type PaintOrder = Globals | "fill" | "markers" | "normal" | "stroke" | (string & {});
    type Perspective<TLength = (string & {}) | 0> = Globals | TLength | "none";
    type PerspectiveOrigin<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;
    type PlaceContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});
    type PlaceItems = Globals | DataType.SelfPosition | "baseline" | "normal" | "stretch" | (string & {});
    type PlaceSelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "normal" | "stretch" | (string & {});
    type PointerEvents = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";
    type Position = Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";
    type Quotes = Globals | "auto" | "none" | (string & {});
    type Resize = Globals | "block" | "both" | "horizontal" | "inline" | "none" | "vertical";
    type Right<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type Rotate = Globals | "none" | (string & {});
    type RowGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});
    type RubyAlign = Globals | "center" | "space-around" | "space-between" | "start";
    type RubyMerge = Globals | "auto" | "collapse" | "separate";
    type RubyPosition = Globals | "alternate" | "inter-character" | "over" | "under" | (string & {});
    type Scale = Globals | "none" | (string & {}) | (number & {});
    type ScrollBehavior = Globals | "auto" | "smooth";
    type ScrollMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type ScrollMarginBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type ScrollMarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength;
    type ScrollMarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength;
    type ScrollMarginBottom<TLength = (string & {}) | 0> = Globals | TLength;
    type ScrollMarginInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type ScrollMarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength;
    type ScrollMarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength;
    type ScrollMarginLeft<TLength = (string & {}) | 0> = Globals | TLength;
    type ScrollMarginRight<TLength = (string & {}) | 0> = Globals | TLength;
    type ScrollMarginTop<TLength = (string & {}) | 0> = Globals | TLength;
    type ScrollPadding<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollPaddingTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type ScrollSnapAlign = Globals | "center" | "end" | "none" | "start" | (string & {});
    type ScrollSnapCoordinate<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "none" | (string & {});
    type ScrollSnapDestination<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;
    type ScrollSnapPointsX = Globals | "none" | (string & {});
    type ScrollSnapPointsY = Globals | "none" | (string & {});
    type ScrollSnapStop = Globals | "always" | "normal";
    type ScrollSnapType = Globals | "block" | "both" | "inline" | "none" | "x" | "y" | (string & {});
    type ScrollSnapTypeX = Globals | "mandatory" | "none" | "proximity";
    type ScrollSnapTypeY = Globals | "mandatory" | "none" | "proximity";
    type ScrollTimeline = Globals | "none" | (string & {});
    type ScrollTimelineAxis = Globals | "block" | "horizontal" | "inline" | "vertical" | (string & {});
    type ScrollTimelineName = Globals | "none" | (string & {});
    type ScrollbarColor = Globals | "auto" | (string & {});
    type ScrollbarGutter = Globals | "auto" | "stable" | (string & {});
    type ScrollbarWidth = Globals | "auto" | "none" | "thin";
    type ShapeImageThreshold = Globals | (string & {}) | (number & {});
    type ShapeMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type ShapeOutside = Globals | DataType.Box | "margin-box" | "none" | (string & {});
    type TabSize<TLength = (string & {}) | 0> = Globals | TLength | (number & {}) | (string & {});
    type TableLayout = Globals | "auto" | "fixed";
    type TextAlign = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";
    type TextAlignLast = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";
    type TextCombineUpright = Globals | "all" | "none" | (string & {});
    type TextDecoration<TLength = (string & {}) | 0> = Globals | DataType.Color | TLength | "auto" | "blink" | "dashed" | "dotted" | "double" | "from-font" | "grammar-error" | "line-through" | "none" | "overline" | "solid" | "spelling-error" | "underline" | "wavy" | (string & {});
    type TextDecorationColor = Globals | DataType.Color;
    type TextDecorationLine = Globals | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | (string & {});
    type TextDecorationSkip = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | (string & {});
    type TextDecorationSkipInk = Globals | "all" | "auto" | "none";
    type TextDecorationStyle = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";
    type TextDecorationThickness<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "from-font" | (string & {});
    type TextEmphasis = Globals | DataType.Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});
    type TextEmphasisColor = Globals | DataType.Color;
    type TextEmphasisPosition = Globals | (string & {});
    type TextEmphasisStyle = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});
    type TextIndent<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type TextJustify = Globals | "auto" | "inter-character" | "inter-word" | "none";
    type TextOrientation = Globals | "mixed" | "sideways" | "upright";
    type TextOverflow = Globals | "clip" | "ellipsis" | (string & {});
    type TextRendering = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
    type TextShadow = Globals | "none" | (string & {});
    type TextSizeAdjust = Globals | "auto" | "none" | (string & {});
    type TextTransform = Globals | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "none" | "uppercase";
    type TextUnderlineOffset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type TextUnderlinePosition = Globals | "auto" | "from-font" | "left" | "right" | "under" | (string & {});
    type Top<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});
    type TouchAction = Globals | "-ms-manipulation" | "-ms-none" | "-ms-pinch-zoom" | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom" | (string & {});
    type Transform = Globals | "none" | (string & {});
    type TransformBox = Globals | "border-box" | "content-box" | "fill-box" | "stroke-box" | "view-box";
    type TransformOrigin<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});
    type TransformStyle = Globals | "flat" | "preserve-3d";
    type Transition<TTime = string & {}> = Globals | DataType.SingleTransition<TTime> | (string & {});
    type TransitionDelay<TTime = string & {}> = Globals | TTime | (string & {});
    type TransitionDuration<TTime = string & {}> = Globals | TTime | (string & {});
    type TransitionProperty = Globals | "all" | "none" | (string & {});
    type TransitionTimingFunction = Globals | DataType.EasingFunction | (string & {});
    type Translate<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});
    type UnicodeBidi = Globals | "-moz-isolate" | "-moz-isolate-override" | "-moz-plaintext" | "-webkit-isolate" | "-webkit-isolate-override" | "-webkit-plaintext" | "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext";
    type UserSelect = Globals | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text";
    type VerticalAlign<TLength = (string & {}) | 0> = Globals | TLength | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | (string & {});
    type ViewTransitionName = Globals | "none" | (string & {});
    type Visibility = Globals | "collapse" | "hidden" | "visible";
    type WhiteSpace = Globals | "-moz-pre-wrap" | "break-spaces" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
    type Widows = Globals | (number & {}) | (string & {});
    type Width<TLength = (string & {}) | 0> = Globals | TLength | "-moz-fit-content" | "-moz-max-content" | "-moz-min-content" | "-webkit-fit-content" | "-webkit-max-content" | "auto" | "fit-content" | "intrinsic" | "max-content" | "min-content" | "min-intrinsic" | (string & {});
    type WillChange = Globals | DataType.AnimateableFeature | "auto" | (string & {});
    type WordBreak = Globals | "break-all" | "break-word" | "keep-all" | "normal";
    type WordSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";
    type WordWrap = Globals | "break-word" | "normal";
    type WritingMode = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";
    type ZIndex = Globals | "auto" | (number & {}) | (string & {});
    type Zoom = Globals | "normal" | "reset" | (string & {}) | (number & {});
    type MozAppearance = Globals | "-moz-mac-unified-toolbar" | "-moz-win-borderless-glass" | "-moz-win-browsertabbar-toolbox" | "-moz-win-communications-toolbox" | "-moz-win-communicationstext" | "-moz-win-exclude-glass" | "-moz-win-glass" | "-moz-win-media-toolbox" | "-moz-win-mediatext" | "-moz-window-button-box" | "-moz-window-button-box-maximized" | "-moz-window-button-close" | "-moz-window-button-maximize" | "-moz-window-button-minimize" | "-moz-window-button-restore" | "-moz-window-frame-bottom" | "-moz-window-frame-left" | "-moz-window-frame-right" | "-moz-window-titlebar" | "-moz-window-titlebar-maximized" | "button" | "button-arrow-down" | "button-arrow-next" | "button-arrow-previous" | "button-arrow-up" | "button-bevel" | "button-focus" | "caret" | "checkbox" | "checkbox-container" | "checkbox-label" | "checkmenuitem" | "dualbutton" | "groupbox" | "listbox" | "listitem" | "menuarrow" | "menubar" | "menucheckbox" | "menuimage" | "menuitem" | "menuitemtext" | "menulist" | "menulist-button" | "menulist-text" | "menulist-textfield" | "menupopup" | "menuradio" | "menuseparator" | "meterbar" | "meterchunk" | "none" | "progressbar" | "progressbar-vertical" | "progresschunk" | "progresschunk-vertical" | "radio" | "radio-container" | "radio-label" | "radiomenuitem" | "range" | "range-thumb" | "resizer" | "resizerpanel" | "scale-horizontal" | "scale-vertical" | "scalethumb-horizontal" | "scalethumb-vertical" | "scalethumbend" | "scalethumbstart" | "scalethumbtick" | "scrollbarbutton-down" | "scrollbarbutton-left" | "scrollbarbutton-right" | "scrollbarbutton-up" | "scrollbarthumb-horizontal" | "scrollbarthumb-vertical" | "scrollbartrack-horizontal" | "scrollbartrack-vertical" | "searchfield" | "separator" | "sheet" | "spinner" | "spinner-downbutton" | "spinner-textfield" | "spinner-upbutton" | "splitter" | "statusbar" | "statusbarpanel" | "tab" | "tab-scroll-arrow-back" | "tab-scroll-arrow-forward" | "tabpanel" | "tabpanels" | "textfield" | "textfield-multiline" | "toolbar" | "toolbarbutton" | "toolbarbutton-dropdown" | "toolbargripper" | "toolbox" | "tooltip" | "treeheader" | "treeheadercell" | "treeheadersortarrow" | "treeitem" | "treeline" | "treetwisty" | "treetwistyopen" | "treeview";
    type MozBinding = Globals | "none" | (string & {});
    type MozBorderBottomColors = Globals | DataType.Color | "none" | (string & {});
    type MozBorderLeftColors = Globals | DataType.Color | "none" | (string & {});
    type MozBorderRightColors = Globals | DataType.Color | "none" | (string & {});
    type MozBorderTopColors = Globals | DataType.Color | "none" | (string & {});
    type MozContextProperties = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | (string & {});
    type MozFloatEdge = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";
    type MozForceBrokenImageIcon = Globals | 0 | (string & {}) | 1;
    type MozImageRegion = Globals | "auto" | (string & {});
    type MozOrient = Globals | "block" | "horizontal" | "inline" | "vertical";
    type MozOutlineRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type MozOutlineRadiusBottomleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type MozOutlineRadiusBottomright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type MozOutlineRadiusTopleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type MozOutlineRadiusTopright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type MozStackSizing = Globals | "ignore" | "stretch-to-fit";
    type MozTextBlink = Globals | "blink" | "none";
    type MozUserFocus = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";
    type MozUserInput = Globals | "auto" | "disabled" | "enabled" | "none";
    type MozUserModify = Globals | "read-only" | "read-write" | "write-only";
    type MozWindowDragging = Globals | "drag" | "no-drag";
    type MozWindowShadow = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";
    type MsAccelerator = Globals | "false" | "true";
    type MsBlockProgression = Globals | "bt" | "lr" | "rl" | "tb";
    type MsContentZoomChaining = Globals | "chained" | "none";
    type MsContentZoomLimit = Globals | (string & {});
    type MsContentZoomLimitMax = Globals | (string & {});
    type MsContentZoomLimitMin = Globals | (string & {});
    type MsContentZoomSnap = Globals | "mandatory" | "none" | "proximity" | (string & {});
    type MsContentZoomSnapPoints = Globals | (string & {});
    type MsContentZoomSnapType = Globals | "mandatory" | "none" | "proximity";
    type MsContentZooming = Globals | "none" | "zoom";
    type MsFilter = Globals | (string & {});
    type MsFlowFrom = Globals | "none" | (string & {});
    type MsFlowInto = Globals | "none" | (string & {});
    type MsGridColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});
    type MsGridRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});
    type MsHighContrastAdjust = Globals | "auto" | "none";
    type MsHyphenateLimitChars = Globals | "auto" | (string & {}) | (number & {});
    type MsHyphenateLimitLines = Globals | "no-limit" | (number & {}) | (string & {});
    type MsHyphenateLimitZone<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type MsImeAlign = Globals | "after" | "auto";
    type MsOverflowStyle = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";
    type MsScrollChaining = Globals | "chained" | "none";
    type MsScrollLimit = Globals | (string & {});
    type MsScrollLimitXMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";
    type MsScrollLimitXMin<TLength = (string & {}) | 0> = Globals | TLength;
    type MsScrollLimitYMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";
    type MsScrollLimitYMin<TLength = (string & {}) | 0> = Globals | TLength;
    type MsScrollRails = Globals | "none" | "railed";
    type MsScrollSnapPointsX = Globals | (string & {});
    type MsScrollSnapPointsY = Globals | (string & {});
    type MsScrollSnapType = Globals | "mandatory" | "none" | "proximity";
    type MsScrollSnapX = Globals | (string & {});
    type MsScrollSnapY = Globals | (string & {});
    type MsScrollTranslation = Globals | "none" | "vertical-to-horizontal";
    type MsScrollbar3dlightColor = Globals | DataType.Color;
    type MsScrollbarArrowColor = Globals | DataType.Color;
    type MsScrollbarBaseColor = Globals | DataType.Color;
    type MsScrollbarDarkshadowColor = Globals | DataType.Color;
    type MsScrollbarFaceColor = Globals | DataType.Color;
    type MsScrollbarHighlightColor = Globals | DataType.Color;
    type MsScrollbarShadowColor = Globals | DataType.Color;
    type MsScrollbarTrackColor = Globals | DataType.Color;
    type MsTextAutospace = Globals | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none";
    type MsTouchSelect = Globals | "grippers" | "none";
    type MsUserSelect = Globals | "element" | "none" | "text";
    type MsWrapFlow = Globals | "auto" | "both" | "clear" | "end" | "maximum" | "start";
    type MsWrapMargin<TLength = (string & {}) | 0> = Globals | TLength;
    type MsWrapThrough = Globals | "none" | "wrap";
    type WebkitAppearance = Globals | "-apple-pay-button" | "button" | "button-bevel" | "caret" | "checkbox" | "default-button" | "inner-spin-button" | "listbox" | "listitem" | "media-controls-background" | "media-controls-fullscreen-background" | "media-current-time-display" | "media-enter-fullscreen-button" | "media-exit-fullscreen-button" | "media-fullscreen-button" | "media-mute-button" | "media-overlay-play-button" | "media-play-button" | "media-seek-back-button" | "media-seek-forward-button" | "media-slider" | "media-sliderthumb" | "media-time-remaining-display" | "media-toggle-closed-captions-button" | "media-volume-slider" | "media-volume-slider-container" | "media-volume-sliderthumb" | "menulist" | "menulist-button" | "menulist-text" | "menulist-textfield" | "meter" | "none" | "progress-bar" | "progress-bar-value" | "push-button" | "radio" | "searchfield" | "searchfield-cancel-button" | "searchfield-decoration" | "searchfield-results-button" | "searchfield-results-decoration" | "slider-horizontal" | "slider-vertical" | "sliderthumb-horizontal" | "sliderthumb-vertical" | "square-button" | "textarea" | "textfield";
    type WebkitBorderBefore<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});
    type WebkitBorderBeforeColor = Globals | DataType.Color;
    type WebkitBorderBeforeStyle = Globals | DataType.LineStyle | (string & {});
    type WebkitBorderBeforeWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});
    type WebkitBoxReflect<TLength = (string & {}) | 0> = Globals | TLength | "above" | "below" | "left" | "right" | (string & {});
    type WebkitLineClamp = Globals | "none" | (number & {}) | (string & {});
    type WebkitMask<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | DataType.RepeatStyle | DataType.Box | "border" | "content" | "none" | "padding" | "text" | (string & {});
    type WebkitMaskAttachment = Globals | DataType.Attachment | (string & {});
    type WebkitMaskClip = Globals | DataType.Box | "border" | "content" | "padding" | "text" | (string & {});
    type WebkitMaskComposite = Globals | DataType.CompositeStyle | (string & {});
    type WebkitMaskImage = Globals | "none" | (string & {});
    type WebkitMaskOrigin = Globals | DataType.Box | "border" | "content" | "padding" | (string & {});
    type WebkitMaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});
    type WebkitMaskPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | (string & {});
    type WebkitMaskPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | (string & {});
    type WebkitMaskRepeat = Globals | DataType.RepeatStyle | (string & {});
    type WebkitMaskRepeatX = Globals | "no-repeat" | "repeat" | "round" | "space";
    type WebkitMaskRepeatY = Globals | "no-repeat" | "repeat" | "round" | "space";
    type WebkitMaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});
    type WebkitOverflowScrolling = Globals | "auto" | "touch";
    type WebkitTapHighlightColor = Globals | DataType.Color;
    type WebkitTextFillColor = Globals | DataType.Color;
    type WebkitTextStroke<TLength = (string & {}) | 0> = Globals | DataType.Color | TLength | (string & {});
    type WebkitTextStrokeColor = Globals | DataType.Color;
    type WebkitTextStrokeWidth<TLength = (string & {}) | 0> = Globals | TLength;
    type WebkitTouchCallout = Globals | "default" | "none";
    type WebkitUserModify = Globals | "read-only" | "read-write" | "read-write-plaintext-only";
    type AlignmentBaseline = Globals | "after-edge" | "alphabetic" | "auto" | "baseline" | "before-edge" | "central" | "hanging" | "ideographic" | "mathematical" | "middle" | "text-after-edge" | "text-before-edge";
    type BaselineShift<TLength = (string & {}) | 0> = Globals | TLength | "baseline" | "sub" | "super" | (string & {});
    type ClipRule = Globals | "evenodd" | "nonzero";
    type ColorInterpolation = Globals | "auto" | "linearRGB" | "sRGB";
    type ColorRendering = Globals | "auto" | "optimizeQuality" | "optimizeSpeed";
    type DominantBaseline = Globals | "alphabetic" | "auto" | "central" | "hanging" | "ideographic" | "mathematical" | "middle" | "no-change" | "reset-size" | "text-after-edge" | "text-before-edge" | "use-script";
    type Fill = Globals | DataType.Paint;
    type FillOpacity = Globals | (number & {}) | (string & {});
    type FillRule = Globals | "evenodd" | "nonzero";
    type FloodColor = Globals | DataType.Color | "currentColor";
    type FloodOpacity = Globals | (number & {}) | (string & {});
    type GlyphOrientationVertical = Globals | "auto" | (string & {}) | (number & {});
    type LightingColor = Globals | DataType.Color | "currentColor";
    type Marker = Globals | "none" | (string & {});
    type MarkerEnd = Globals | "none" | (string & {});
    type MarkerMid = Globals | "none" | (string & {});
    type MarkerStart = Globals | "none" | (string & {});
    type ShapeRendering = Globals | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed";
    type StopColor = Globals | DataType.Color | "currentColor";
    type StopOpacity = Globals | (number & {}) | (string & {});
    type Stroke = Globals | DataType.Paint;
    type StrokeDasharray<TLength = (string & {}) | 0> = Globals | DataType.Dasharray<TLength> | "none";
    type StrokeDashoffset<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type StrokeLinecap = Globals | "butt" | "round" | "square";
    type StrokeLinejoin = Globals | "bevel" | "miter" | "round";
    type StrokeMiterlimit = Globals | (number & {}) | (string & {});
    type StrokeOpacity = Globals | (number & {}) | (string & {});
    type StrokeWidth<TLength = (string & {}) | 0> = Globals | TLength | (string & {});
    type TextAnchor = Globals | "end" | "middle" | "start";
    type VectorEffect = Globals | "non-scaling-stroke" | "none";
}
declare namespace AtRule {
    export interface CounterStyle<TLength = (string & {}) | 0, TTime = string & {}> {
        additiveSymbols?: string | undefined;
        fallback?: string | undefined;
        negative?: string | undefined;
        pad?: string | undefined;
        prefix?: string | undefined;
        range?: Range | undefined;
        speakAs?: SpeakAs | undefined;
        suffix?: string | undefined;
        symbols?: string | undefined;
        system?: System | undefined;
    }
    export interface CounterStyleHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
        "additive-symbols"?: string | undefined;
        fallback?: string | undefined;
        negative?: string | undefined;
        pad?: string | undefined;
        prefix?: string | undefined;
        range?: Range | undefined;
        "speak-as"?: SpeakAs | undefined;
        suffix?: string | undefined;
        symbols?: string | undefined;
        system?: System | undefined;
    }
    export type CounterStyleFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<CounterStyle<TLength, TTime>>;
    export type CounterStyleHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<CounterStyleHyphen<TLength, TTime>>;
    export interface FontFace<TLength = (string & {}) | 0, TTime = string & {}> {
        MozFontFeatureSettings?: FontFeatureSettings | undefined;
        ascentOverride?: AscentOverride | undefined;
        descentOverride?: DescentOverride | undefined;
        fontDisplay?: FontDisplay | undefined;
        fontFamily?: string | undefined;
        fontFeatureSettings?: FontFeatureSettings | undefined;
        fontStretch?: FontStretch | undefined;
        fontStyle?: FontStyle | undefined;
        fontVariant?: FontVariant | undefined;
        fontVariationSettings?: FontVariationSettings | undefined;
        fontWeight?: FontWeight | undefined;
        lineGapOverride?: LineGapOverride | undefined;
        sizeAdjust?: string | undefined;
        src?: string | undefined;
        unicodeRange?: string | undefined;
    }
    export interface FontFaceHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
        "-moz-font-feature-settings"?: FontFeatureSettings | undefined;
        "ascent-override"?: AscentOverride | undefined;
        "descent-override"?: DescentOverride | undefined;
        "font-display"?: FontDisplay | undefined;
        "font-family"?: string | undefined;
        "font-feature-settings"?: FontFeatureSettings | undefined;
        "font-stretch"?: FontStretch | undefined;
        "font-style"?: FontStyle | undefined;
        "font-variant"?: FontVariant | undefined;
        "font-variation-settings"?: FontVariationSettings | undefined;
        "font-weight"?: FontWeight | undefined;
        "line-gap-override"?: LineGapOverride | undefined;
        "size-adjust"?: string | undefined;
        src?: string | undefined;
        "unicode-range"?: string | undefined;
    }
    export type FontFaceFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<FontFace<TLength, TTime>>;
    export type FontFaceHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<FontFaceHyphen<TLength, TTime>>;
    export interface FontPaletteValues<TLength = (string & {}) | 0, TTime = string & {}> {
        basePalette?: BasePalette | undefined;
        fontFamily?: string | undefined;
        overrideColors?: string | undefined;
    }
    export interface FontPaletteValuesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
        "base-palette"?: BasePalette | undefined;
        "font-family"?: string | undefined;
        "override-colors"?: string | undefined;
    }
    export type FontPaletteValuesFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<FontPaletteValues<TLength, TTime>>;
    export type FontPaletteValuesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<FontPaletteValuesHyphen<TLength, TTime>>;
    export interface Page<TLength = (string & {}) | 0, TTime = string & {}> {
        bleed?: Bleed<TLength> | undefined;
        marks?: Marks | undefined;
        pageOrientation?: PageOrientation | undefined;
        size?: Size<TLength> | undefined;
    }
    export interface PageHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
        bleed?: Bleed<TLength> | undefined;
        marks?: Marks | undefined;
        "page-orientation"?: PageOrientation | undefined;
        size?: Size<TLength> | undefined;
    }
    export type PageFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<Page<TLength, TTime>>;
    export type PageHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<PageHyphen<TLength, TTime>>;
    export interface Property<TLength = (string & {}) | 0, TTime = string & {}> {
        inherits?: Inherits | undefined;
        initialValue?: string | undefined;
        syntax?: string | undefined;
    }
    export interface PropertyHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
        inherits?: Inherits | undefined;
        "initial-value"?: string | undefined;
        syntax?: string | undefined;
    }
    export type PropertyFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<Property<TLength, TTime>>;
    export type PropertyHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<PropertyHyphen<TLength, TTime>>;
    export interface Viewport<TLength = (string & {}) | 0, TTime = string & {}> {
        height?: Height<TLength> | undefined;
        maxHeight?: MaxHeight<TLength> | undefined;
        maxWidth?: MaxWidth<TLength> | undefined;
        maxZoom?: MaxZoom | undefined;
        minHeight?: MinHeight<TLength> | undefined;
        minWidth?: MinWidth<TLength> | undefined;
        minZoom?: MinZoom | undefined;
        orientation?: Orientation | undefined;
        userZoom?: UserZoom | undefined;
        viewportFit?: ViewportFit | undefined;
        width?: Width<TLength> | undefined;
        zoom?: Zoom | undefined;
    }
    export interface ViewportHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
        height?: Height<TLength> | undefined;
        "max-height"?: MaxHeight<TLength> | undefined;
        "max-width"?: MaxWidth<TLength> | undefined;
        "max-zoom"?: MaxZoom | undefined;
        "min-height"?: MinHeight<TLength> | undefined;
        "min-width"?: MinWidth<TLength> | undefined;
        "min-zoom"?: MinZoom | undefined;
        orientation?: Orientation | undefined;
        "user-zoom"?: UserZoom | undefined;
        "viewport-fit"?: ViewportFit | undefined;
        width?: Width<TLength> | undefined;
        zoom?: Zoom | undefined;
    }
    export type ViewportFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<Viewport<TLength, TTime>>;
    export type ViewportHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = Fallback<ViewportHyphen<TLength, TTime>>;
    type Range = "auto" | (string & {});
    type SpeakAs = "auto" | "bullets" | "numbers" | "spell-out" | "words" | (string & {});
    type System = "additive" | "alphabetic" | "cyclic" | "fixed" | "numeric" | "symbolic" | (string & {});
    type FontFeatureSettings = "normal" | (string & {});
    type AscentOverride = "normal" | (string & {});
    type DescentOverride = "normal" | (string & {});
    type FontDisplay = "auto" | "block" | "fallback" | "optional" | "swap";
    type FontStretch = DataType.FontStretchAbsolute | (string & {});
    type FontStyle = "italic" | "normal" | "oblique" | (string & {});
    type FontVariant = DataType.EastAsianVariantValues | "all-petite-caps" | "all-small-caps" | "common-ligatures" | "contextual" | "diagonal-fractions" | "discretionary-ligatures" | "full-width" | "historical-forms" | "historical-ligatures" | "lining-nums" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | "oldstyle-nums" | "ordinal" | "petite-caps" | "proportional-nums" | "proportional-width" | "ruby" | "slashed-zero" | "small-caps" | "stacked-fractions" | "tabular-nums" | "titling-caps" | "unicase" | (string & {});
    type FontVariationSettings = "normal" | (string & {});
    type FontWeight = DataType.FontWeightAbsolute | (string & {});
    type LineGapOverride = "normal" | (string & {});
    type BasePalette = "dark" | "light" | (number & {}) | (string & {});
    type Bleed<TLength> = TLength | "auto";
    type Marks = "crop" | "cross" | "none" | (string & {});
    type PageOrientation = "rotate-left" | "rotate-right" | "upright";
    type Size<TLength> = DataType.PageSize | TLength | "auto" | "landscape" | "portrait" | (string & {});
    type Inherits = "false" | "true";
    type Height<TLength> = DataType.ViewportLength<TLength> | (string & {});
    type MaxHeight<TLength> = DataType.ViewportLength<TLength>;
    type MaxWidth<TLength> = DataType.ViewportLength<TLength>;
    type MaxZoom = "auto" | (string & {}) | (number & {});
    type MinHeight<TLength> = DataType.ViewportLength<TLength>;
    type MinWidth<TLength> = DataType.ViewportLength<TLength>;
    type MinZoom = "auto" | (string & {}) | (number & {});
    type Orientation = "auto" | "landscape" | "portrait";
    type UserZoom = "fixed" | "zoom";
    type ViewportFit = "auto" | "contain" | "cover";
    type Width<TLength> = DataType.ViewportLength<TLength> | (string & {});
    type Zoom = "auto" | (string & {}) | (number & {});
    export {  };
}
/**
 * **Attention!** Data types receives its name from the spec. E.g. `<color>` becomes `DataType.Color` and
 * `<content-distribution>` becomes `DataType.ContentDistribution`. It happens quite frequent that these data types
 * are split into several data types or/and name changes as the spec develops. So there's a risk that a minor/patch
 */
declare namespace DataType {
    type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large";
    type AnimateableFeature = "contents" | "scroll-position" | (string & {});
    type Attachment = "fixed" | "local" | "scroll";
    type BgPosition<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});
    type BgSize<TLength> = TLength | "auto" | "contain" | "cover" | (string & {});
    type BlendMode = "color" | "color-burn" | "color-dodge" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "normal" | "overlay" | "saturation" | "screen" | "soft-light";
    type Box = "border-box" | "content-box" | "padding-box";
    type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | (string & {});
    type CompatAuto = "button" | "checkbox" | "listbox" | "menulist" | "meter" | "progress-bar" | "push-button" | "radio" | "searchfield" | "slider-horizontal" | "square-button" | "textarea";
    type CompositeStyle = "clear" | "copy" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor";
    type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";
    type ContentDistribution = "space-around" | "space-between" | "space-evenly" | "stretch";
    type ContentList = Quote | "contents" | (string & {});
    type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";
    type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | (string & {});
    type Dasharray<TLength> = TLength | (string & {}) | (number & {});
    type DeprecatedSystemColor = "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText";
    type DisplayInside = "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "table";
    type DisplayInternal = "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group";
    type DisplayLegacy = "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";
    type DisplayOutside = "block" | "inline" | "run-in";
    type EasingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear";
    type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";
    type FinalBgLayer<TLength> = Color | BgPosition<TLength> | RepeatStyle | Attachment | Box | "none" | (string & {});
    type FontStretchAbsolute = "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded" | (string & {});
    type FontWeightAbsolute = "bold" | "normal" | (number & {}) | (string & {});
    type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";
    type GeometryBox = Box | "fill-box" | "margin-box" | "stroke-box" | "view-box";
    type GridLine = "auto" | (string & {}) | (number & {});
    type LineStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";
    type LineWidth<TLength> = TLength | "medium" | "thick" | "thin";
    type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | "none" | (string & {});
    type MaskingMode = "alpha" | "luminance" | "match-source";
    type NamedColor = "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen";
    type PageSize = "A3" | "A4" | "A5" | "B4" | "B5" | "JIS-B4" | "JIS-B5" | "ledger" | "legal" | "letter";
    type Paint = Color | "child" | "context-fill" | "context-stroke" | "none" | (string & {});
    type Position<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});
    type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";
    type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | (string & {});
    type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";
    type SingleAnimation<TTime> = EasingFunction | SingleAnimationDirection | SingleAnimationFillMode | TTime | "infinite" | "none" | "paused" | "running" | (string & {}) | (number & {});
    type SingleAnimationComposition = "accumulate" | "add" | "replace";
    type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";
    type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";
    type SingleAnimationTimeline = "auto" | "none" | (string & {});
    type SingleTransition<TTime> = EasingFunction | TTime | "all" | "none" | (string & {});
    type StepTimingFunction = "step-end" | "step-start" | (string & {});
    type TrackBreadth<TLength> = TLength | "auto" | "max-content" | "min-content" | (string & {});
    type ViewportLength<TLength> = TLength | "auto" | (string & {});
    type VisualBox = "border-box" | "content-box" | "padding-box";
}

type Func<P, T, R> = T extends undefined ? (data: P) => R : (data: P & {
    theme: T;
}) => R;
type NormalCssProperties = Properties<string | number>;
type NormalCssValues<K> = K extends keyof NormalCssProperties ? NormalCssProperties[K] : JssValue$1;
type JssValue$1 = (string & {}) | (number & {}) | Array<string | number | Array<string | number> | "!important"> | null | false;
type JssStyle<Props = any, Theme = undefined> = {
    [K in keyof NormalCssProperties]: NormalCssValues<K> | JssStyle<Props, Theme> | Func<Props, Theme, NormalCssValues<K> | JssStyle<undefined, undefined> | undefined> | MinimalObservable<NormalCssValues<K> | JssStyle | undefined>;
} | {
    [K: string]: JssValue$1 | JssStyle<Props, Theme> | Func<Props, Theme, JssValue$1 | JssStyle<undefined, undefined> | undefined> | MinimalObservable<JssValue$1 | JssStyle | undefined>;
};
type Styles$1<Name extends string | number | symbol = string, Props = unknown, Theme = undefined> = Record<Name, JssStyle<Props, Theme> | Array<JssStyle<Props, Theme>> | string | Func<Props, Theme, JssStyle<undefined, undefined> | string | null | undefined> | MinimalObservable<JssStyle | string | null | undefined>>;
type Classes$1<Name extends string | number | symbol = string> = Record<Name, string>;
type Keyframes<Name extends string = string> = Record<Name, string>;
type Rule = BaseRule | ContainerRule;

declare class RuleList {
    constructor(options: RuleListOptions);
    add(name: string, decl: JssStyle, options?: RuleOptions): Rule | null;
    replace(name: string, decl: JssStyle, options?: RuleOptions): Rule | null;
    get(nameOrSelector: string): Rule;
    remove(rule: Rule): void;
    indexOf(rule: Rule): number;
    process(): void;
    register(rule: Rule, className?: string): void;
    unregister(rule: Rule): void;
    update(name: string, data: {}): void;
    update(data: {}): void;
    toString(options?: ToCssOptions): string;
}

interface MinimalObservable<T> {
    subscribe(nextOrObserver: ((value: T) => void) | {
        next: (value: T) => void;
    }): {
        unsubscribe: () => void;
    };
}
interface Renderer {
    setProperty(cssRule: HTMLElement | CSSStyleRule, prop: string, value: JssValue): boolean;
    getPropertyValue(cssRule: HTMLElement | CSSStyleRule, prop: string): string;
    removeProperty(cssRule: HTMLElement | CSSStyleRule, prop: string): void;
    setSelector(cssRule: CSSStyleRule, selectorText: string): boolean;
    attach(): void;
    detach(): void;
    deploy(sheet: StyleSheet): void;
    insertRule(rule: Rule): false | CSSRule;
    deleteRule(cssRule: CSSRule): boolean;
    replaceRule(cssRule: CSSRule, rule: Rule): false | CSSRule;
    indexOf(cssRule: CSSRule): number;
    getRules(): CSSRuleList | void;
}
interface RuleFactoryOptions {
    selector?: string;
    classes?: object;
    sheet?: StyleSheet;
    index?: number;
    jss?: Jss;
    generateId?: GenerateId;
    Renderer?: Renderer;
}
interface StyleSheetFactoryOptions {
    media?: string;
    meta?: string;
    index?: number;
    link?: boolean;
    element?: HTMLStyleElement;
    generateId?: GenerateId;
    classNamePrefix?: string;
}
interface StyleSheetOptions extends StyleSheetFactoryOptions {
    index: number;
    generateId: GenerateId;
    Renderer: Renderer;
    insertionPoint?: InsertionPoint;
    jss: Jss;
}
interface StyleSheet<RuleName extends string | number | symbol = string | number | symbol> {
    classes: Classes$1<RuleName>;
    keyframes: Keyframes<string>;
    options: StyleSheetOptions;
    linked: boolean;
    attached: boolean;
    /**
     * Attach renderable to the render tree.
     */
    attach(): this;
    /**
     * Remove renderable from render tree.
     */
    detach(): this;
    deploy(): this;
    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */
    addRule(style: JssStyle, options?: Partial<RuleOptions>): Rule;
    addRule(name: RuleName, style: JssStyle, options?: Partial<RuleOptions>): Rule | null;
    /**
     * Replace a rule in the current stylesheet.
     */
    replaceRule(name: RuleName, style: JssStyle, options?: Partial<RuleOptions>): [Rule | null, Rule | null];
    insertRule(rule: Rule): void;
    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */
    addRules(styles: Partial<Styles$1<RuleName, any, undefined>>, options?: Partial<RuleOptions>): Rule[];
    /**
     * Get a rule by name or selector.
     */
    getRule(nameOrSelector: RuleName | string): Rule;
    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */
    deleteRule(name: RuleName): boolean;
    /**
     * Get index of a rule.
     */
    indexOf(rule: Rule): number;
    /**
     * Update the function values with a new data.
     */
    update(name: string, data: object, options?: UpdateOptions): this;
    update(data: object, options?: UpdateOptions): this;
    /**
     * Convert rules to a CSS string.
     */
    toString(options?: ToCssOptions): string;
}
interface JssOptions {
    createGenerateId: CreateGenerateId;
    plugins: ReadonlyArray<Plugin>;
    Renderer?: {
        new (): Renderer;
    } | null;
    insertionPoint: InsertionPoint;
    id: CreateGenerateIdOptions;
}
interface Jss {
    createStyleSheet<Name extends string | number | symbol>(styles: Partial<Styles$1<Name, any, undefined>>, options?: StyleSheetFactoryOptions): StyleSheet<Name>;
    removeStyleSheet(sheet: StyleSheet): this;
    setup(options?: Partial<JssOptions>): this;
    use(...plugins: Plugin[]): this;
    createRule(style: JssStyle, options?: RuleFactoryOptions): Rule;
    createRule<Name extends string>(name: Name, style: JssStyle, options?: RuleFactoryOptions): Rule;
}
interface RuleOptions {
    selector?: string;
    sheet?: StyleSheet;
    index?: number;
    parent?: ContainerRule | StyleSheet;
    classes: Classes$1;
    jss: Jss;
    generateId: GenerateId;
    Renderer: Renderer;
}
interface BaseRule {
    type: string;
    key: string;
    isProcessed: boolean;
    options: RuleOptions;
    toString(options?: ToCssOptions): string;
}
interface ContainerRule extends BaseRule {
    rules: RuleList;
}
interface Plugin {
    onCreateRule?(name: string, decl: JssStyle, options: RuleOptions): Rule;
    onProcessRule?(rule: Rule, sheet?: StyleSheet): void;
    onProcessStyle?(style: JssStyle, rule: Rule, sheet?: StyleSheet): JssStyle;
    onProcessSheet?(sheet?: StyleSheet): void;
    onChangeValue?(value: string, prop: string, rule: Rule): string | null | false;
    onUpdate?(data: object, rule: Rule, sheet?: StyleSheet): void;
}
interface CreateGenerateIdOptions {
    minify?: boolean;
}
type CreateGenerateId = (options?: CreateGenerateIdOptions) => GenerateId;
type GenerateId = (rule: Rule, sheet?: StyleSheet<string>) => string;
type JssValue = (string & {}) | (number & {}) | Array<string | number | Array<string | number> | "!important"> | null | false;
type InsertionPoint = string | HTMLElement | Comment;
interface UpdateOptions {
    process?: boolean;
    force?: boolean;
}
interface ToCssOptions {
    indent?: number;
    format?: boolean;
    allowEmpty?: boolean;
}
interface RuleListOptions {
    classes: Classes$1;
    generateClassName: GenerateId;
    Renderer: Renderer;
    jss: Jss;
    sheet: StyleSheet;
    parent: ContainerRule | StyleSheet;
}

type JSSNormalCssProperties = Properties<number | string>;
type JSSFontface = AtRule.FontFace & {
    fallbacks?: AtRule.FontFace[];
};
type PropsFunc<Props extends object, T> = (props: Props) => T;
/**
 * Allows the user to augment the properties available
 */
interface BaseCSSProperties extends JSSNormalCssProperties {
    "@font-face"?: JSSFontface | JSSFontface[];
}
interface CSSProperties extends BaseCSSProperties {
    [k: string]: unknown | CSSProperties;
}
type BaseCreateCSSProperties<Props extends object = {}> = {
    [P in keyof BaseCSSProperties]: BaseCSSProperties[P] | PropsFunc<Props, BaseCSSProperties[P]>;
};
interface CreateCSSProperties<Props extends object = {}> extends BaseCreateCSSProperties<Props> {
    [k: string]: BaseCreateCSSProperties<Props>[keyof BaseCreateCSSProperties<Props>] | CreateCSSProperties<Props>;
}
type StyleRules<Props extends object = {}, ClassKey extends string = string> = Record<ClassKey, CSSProperties | CreateCSSProperties<Props> | PropsFunc<Props, CreateCSSProperties<Props>>>;
/**
 * @internal
 */
type StyleRulesCallback<Theme, Props extends object, ClassKey extends string = string> = (theme: Theme) => StyleRules<Props, ClassKey>;
type Styles<Theme, Props extends object, ClassKey extends string = string> = StyleRules<Props, ClassKey> | StyleRulesCallback<Theme, Props, ClassKey>;
interface BaseTheme extends Theme {
    mixins: Mixins;
    palette: Palette;
    shadows: Shadows;
    transitions: Transitions;
    typography: Typography;
    zIndex: ZIndex;
    unstable_strictMode?: boolean;
}
interface WithStylesOptions<Theme = BaseTheme> extends StyleSheetFactoryOptions {
    defaultTheme?: Theme;
    flip?: boolean;
    withTheme?: boolean;
    name?: string;
    Component?: React.FC;
}
type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;
/**
 * @internal
 */
type ClassKeyInferable<Theme, Props extends object> = string | Styles<Theme, Props>;
type ClassKeyOfStyles<StylesOrClassKey> = StylesOrClassKey extends string ? StylesOrClassKey : StylesOrClassKey extends StyleRulesCallback<any, any, infer ClassKey> ? ClassKey : StylesOrClassKey extends StyleRules<any, infer ClassKey> ? ClassKey : never;
/**
 * infers the type of the props used in the styles
 */
type PropsOfStyles<StylesType> = StylesType extends Styles<any, infer Props> ? Props : {};
/**
 * infers the type of the theme used in the styles
 */
type ThemeOfStyles<StylesType> = StylesType extends Styles<infer Theme, any> ? Theme : {};
type WithStyles<StylesType extends ClassKeyInferable<any, any>, IncludeTheme extends boolean | undefined = false> = (IncludeTheme extends true ? {
    theme: ThemeOfStyles<StylesType>;
} : {}) & {
    classes: ClassNameMap<ClassKeyOfStyles<StylesType>>;
} & PropsOfStyles<StylesType>;
interface StyledComponentProps<ClassKey extends string = string> {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ClassNameMap<ClassKey>>;
}

declare function createStyles<ClassKey extends string, Props extends {}>(styles: StyleRules<Props, ClassKey>): StyleRules<Props, ClassKey>;

interface ThemeWithProps<Components> {
    components?: {
        [K in keyof Components]: {
            defaultProps?: Partial<Components[K]>;
        };
    };
}

declare function getThemeProps<Theme extends ThemeWithProps<any>, Props, Name extends keyof any>(params: {
    props: Props;
    name: Name;
    theme?: Theme;
}): any;

type ClassNameMake<ClassKey extends string = string> = Record<ClassKey, string>;

declare function makeStylesmakeStyles<Theme = Theme$1, Props extends object = {}, ClassKey extends string = string>(stylesOrCreator: Styles<Theme, Props, ClassKey>, options?: Omit<WithStylesOptions<Theme>, "withTheme"> | any): (props?: any) => ClassNameMake<ClassKey>;

interface Classes {
    [k: string]: string | undefined | null;
}
interface MergeClassesOption {
    baseClasses: Classes;
    newClasses?: Classes | null;
    Component?: React.ElementType | null | any;
}

declare function mergeClasses$1(options: MergeClassesOption): Classes;

interface StylesOptions {
    disableGeneration?: boolean;
    generateClassName?: GenerateId;
    serverGenerateClassName?: any;
    injectFirst?: boolean;
    jss?: Jss;
    sheetsCache?: any;
    sheetsManager?: any;
    sheetsRegistry?: any;
}
interface StylesProviderProps extends StylesOptions {
    children?: React.ReactNode;
}

interface ServerStyleSheetsOptions {
}
declare class ServerStyleSheets$1 {
    private options;
    private sheetsRegistry?;
    constructor(options?: ServerStyleSheetsOptions);
    collect(children: React.ReactNode): React.ReactElement<StylesProviderProps>;
    toString(): string;
    getStyleElement(props?: object): React.ReactElement;
}

declare function styled$1(Component: any): (style: any, options?: any) => React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;

declare function StylesProvider$1(props: StylesProviderProps): react_jsx_runtime.JSX.Element;

declare function useThemes(): _mui_material_styles.Theme;

declare const useThemeVariants: (props: any, name: string) => string;

/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created
 */
declare function propsToClassKey(props: object | any): string;

declare function withStyles<
  StylesType extends Styles<any, any>,
  Options extends WithStylesOptions<ThemeOfStyles<StylesType>> = {},
>(
  style: StylesType,
  options?: Options,
): PropInjector<
  WithStyles<StylesType, Options['withTheme']>,
  StyledComponentProps<ClassKeyOfStyles<StylesType>> & PropsOfStyles<StylesType>
>;

interface WithThemeCreatorOption<Theme = Theme$1> {
    defaultTheme?: Theme;
}
type WithThemeOption = WithThemeCreatorOption;

declare function withThemeCreator(options?: WithThemeOption): (Component: any) => any;
declare const withTheme: (Component: any) => any;

declare const createGenerateClassName: typeof createGenerateClassName$1;

declare const makeStyles: typeof makeStylesmakeStyles;

declare const mergeClasses: typeof mergeClasses$1;

declare const ServerStyleSheets: typeof ServerStyleSheets$1;

declare const styled: typeof styled$1;

declare const StylesProvider: typeof StylesProvider$1;

export { ServerStyleSheets, StylesProvider, createGenerateClassName, createStyles, getThemeProps, makeStyles, mergeClasses, propsToClassKey, styled, useThemes as useTheme, useThemeVariants, withStyles, withTheme, withThemeCreator };
