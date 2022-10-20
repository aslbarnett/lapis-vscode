import {
  base,
  baseLightTheme,
  lightPalette,
  lightPaletteLightTheme,
  palette,
  paletteLightTheme,
} from './colors';
import {
  getBasePalette,
  getColorPalette,
  getLightColorPalette,
} from './helpers';

export type BaseVariant = 'default' | 'stealth';
export type Variant =
  | 'lapis'
  | 'amethyst'
  | 'ruby'
  | 'amber'
  | 'peridot'
  | 'aquamarine'
  | 'quartz';
export type Shade = 'default' | 'dark' | 'light';

export const uiTemplate = ({
  name,
  baseVariant,
  variant,
  shade,
}: {
  name: string;
  baseVariant: BaseVariant;
  variant: Variant;
  shade?: Shade;
}) => {
  const basePalette = getBasePalette(shade);
  const colorPalette = getColorPalette(shade);
  const lightColorPalette = getLightColorPalette(shade);
  const primaryBackgroundColor =
    shade === 'dark' ? basePalette.backgroundDark : basePalette.background;
  const secondaryBackgroundColor =
    shade === 'dark' ? basePalette.background : basePalette.backgroundDark;

  function getBaseColor(defaultColor: string, stealthColor: string): string {
    return baseVariant === 'stealth' ? stealthColor : defaultColor;
  }

  return {
    name: name,
    type: 'dark',
    colors: {
      focusBorder: `${basePalette.selection}50`,
      foreground: basePalette.foreground,
      'widget.shadow': basePalette.shadow,
      'selection.background': `${basePalette.selection}70`,
      descriptionForeground: basePalette.foreground,
      errorForeground: colorPalette.ruby,

      // Editor Group
      'editorGroup.border': basePalette.selection,
      'editorGroup.dropBackground': basePalette.selection,
      'editorGroup.emptyBackground': primaryBackgroundColor,
      'editorGroup.focusedEmptyBorder': primaryBackgroundColor,
      'editorGroupHeader.noTabsBackground': primaryBackgroundColor,
      'editorGroupHeader.tabsBackground': secondaryBackgroundColor,
      'editorGroupHeader.border': primaryBackgroundColor,
      'editorGroupHeader.tabsBorder': primaryBackgroundColor,

      // Editor
      'editorPane.background': primaryBackgroundColor,
      'editor.background': primaryBackgroundColor,
      'editor.foreground': basePalette.foreground,
      'editor.selectionBackground': `${basePalette.selection}60`,
      'editor.selectionForeground': basePalette.foreground,
      'editor.inactiveSelectionBackground': `${basePalette.selection}60`,
      'editor.selectionHighlightBackground': `${basePalette.selection}60`,
      'editor.wordHighlightBackground': `${basePalette.selection}60`,
      'editor.wordHighlightStrongBackground': `${basePalette.selection}80`,
      'editor.findMatchBackground': `${basePalette.selection}50`,
      'editor.findMatchHighlightBackground': `${basePalette.selection}50`,
      'editor.findRangeHighlightBackground': `${basePalette.selection}50`,
      'editor.findMatchBorder': colorPalette.lapis,
      'editor.hoverHighlightBackground': `${basePalette.selection}50`,
      'editor.lineHighlightBackground': `${basePalette.selection}50`,
      'editor.lineHighlightBorder': `${basePalette.selection}50`,
      'editor.rangeHighlightBackground': `${basePalette.selection}50`,
      'editorLineNumber.foreground':
        shade === 'light'
          ? basePalette.text
          : getBaseColor(basePalette.textMid, basePalette.textDark),
      'editorLineNumber.activeForeground':
        shade === 'light' ? colorPalette[variant] : basePalette.foreground,
      'editorCursor.background': primaryBackgroundColor,
      'editorCursor.foreground': colorPalette[variant],
      'editorLink.activeForeground': colorPalette.lapis,
      'editorWhitespace.foreground': `${basePalette.selection}50`,
      'editorIndentGuide.background':
        shade === 'light' ? basePalette.selection : basePalette.selectionDark,
      'editorIndentGuide.activeBackground': colorPalette[variant],
      'editorInlayHint.background': primaryBackgroundColor,
      'editorInlayHint.foreground': `${basePalette.selection}99`,
      'editorRuler.foreground': basePalette.selection,
      'editorCodeLens.foreground': basePalette.foreground,
      'editorBracketMatch.background': `${basePalette.selection}60`,
      'editorBracketMatch.border': colorPalette.lapis,

      // Editor Overview Ruler
      'editorOverviewRuler.border': basePalette.selection,
      'editorOverviewRuler.findMatchForeground': colorPalette.lapis,
      'editorOverviewRuler.rangeHighlightForeground': basePalette.selection,
      'editorOverviewRuler.selectionHighlightForeground': `${basePalette.selection}50`,
      'editorOverviewRuler.wordHighlightForeground': basePalette.selection,
      'editorOverviewRuler.wordHighlightStrongForeground':
        basePalette.selection,
      'editorOverviewRuler.modifiedForeground': colorPalette.lapis,
      'editorOverviewRuler.addedForeground': colorPalette.peridot,
      'editorOverviewRuler.deletedForeground': colorPalette.ruby,
      'editorOverviewRuler.errorForeground': colorPalette.ruby,
      'editorOverviewRuler.warningForeground': colorPalette.amber,
      'editorOverviewRuler.infoForeground': colorPalette.lapis,
      'editorOverviewRuler.bracketMatchForeground': colorPalette.lapis,
      'editorOverviewRuler.currentContentForeground': colorPalette.lapis,
      'editorOverviewRuler.incomingContentForeground': colorPalette.peridot,
      'editorOverviewRuler.commonContentForeground': basePalette.selection,

      // Editor Widget
      'editorWidget.background': primaryBackgroundColor,
      'editorWidget.border': primaryBackgroundColor,
      'editorWidget.foreground': basePalette.foreground,
      'editorSuggestWidget.background': primaryBackgroundColor,
      'editorSuggestWidget.border': basePalette.selection,
      'editorSuggestWidget.foreground': basePalette.foreground,
      'editorSuggestWidget.highlightForeground': colorPalette.lapis,
      'editorSuggestWidget.selectedBackground': basePalette.selection,
      'editorHoverWidget.background': primaryBackgroundColor,
      'editorHoverWidget.border': basePalette.selection,
      'debugExceptionWidget.background': primaryBackgroundColor,
      'debugExceptionWidget.border': basePalette.selection,

      // Editor Marker Navigation
      'editorMarkerNavigation.background': primaryBackgroundColor,
      'editorMarkerNavigationError.background': colorPalette.ruby,
      'editorMarkerNavigationWarning.background': colorPalette.amber,
      'editorMarkerNavigationInfo.background': colorPalette.lapis,

      // Diff Editor
      'diffEditor.insertedTextBackground': `${colorPalette.peridot}22`,
      'diffEditor.insertedTextBorder': `${colorPalette.peridot}44`,
      'diffEditor.removedTextBackground': `${colorPalette.ruby}22`,
      'diffEditor.removedTextBorder': `${colorPalette.ruby}44`,
      'diffEditor.border': basePalette.selection,

      // Editor Error
      'editorError.foreground': colorPalette.ruby,
      'editorWarning.foreground': colorPalette.amber,
      'editorInfo.foreground': colorPalette.lapis,
      'editorHint.foreground': colorPalette.aquamarine,

      // Editor Gutter
      'editorGutter.background': primaryBackgroundColor,
      'editorGutter.modifiedBackground': colorPalette.lapis,
      'editorGutter.addedBackground': colorPalette.peridot,
      'editorGutter.deletedBackground': colorPalette.ruby,

      // Text
      'textBlockQuote.background': basePalette.selection,
      'textBlockQuote.border': basePalette.selection,
      'textCodeBlock.background': primaryBackgroundColor,
      'textLink.activeForeground': colorPalette[variant],
      'textLink.foreground': colorPalette[variant],
      'textPreformat.foreground': basePalette.foreground,
      'textSeparator.foreground': basePalette.foreground,

      // Button
      'button.background': colorPalette[variant],
      'button.foreground': primaryBackgroundColor,
      'button.hoverBackground': `${colorPalette[variant]}99`,

      // Dropdown
      'dropdown.background': basePalette.selection,
      'dropdown.listBackground': primaryBackgroundColor,
      'dropdown.border': basePalette.selection,
      'dropdown.foreground': basePalette.foreground,

      // Input
      'input.background': primaryBackgroundColor,
      'input.border': basePalette.selection,
      'input.foreground': basePalette.foreground,
      'input.placeholderForeground': `${basePalette.selection}50`,
      'inputOption.activeBorder': basePalette.selection,

      // Input Validation
      'inputValidation.errorBackground': primaryBackgroundColor,
      'inputValidation.errorForeground': colorPalette.ruby,
      'inputValidation.errorBorder': colorPalette.ruby,
      'inputValidation.infoBackground': primaryBackgroundColor,
      'inputValidation.infoForeground': colorPalette.lapis,
      'inputValidation.infoBorder': colorPalette.lapis,
      'inputValidation.warningBackground': primaryBackgroundColor,
      'inputValidation.warningForeground': colorPalette.amber,
      'inputValidation.warningBorder': colorPalette.amber,

      // Scrollbar
      'scrollbar.shadow': basePalette.shadow,
      'scrollbarSlider.activeBackground': `${basePalette.selection}50`,
      'scrollbarSlider.background': `${basePalette.selection}60`,
      'scrollbarSlider.hoverBackground': `${basePalette.selection}99`,

      // Badge
      'badge.foreground': primaryBackgroundColor,
      'badge.background': colorPalette[variant],

      // Progress Bar
      'progressBar.background': colorPalette[variant],

      // List
      'list.activeSelectionBackground':
        shade === 'light'
          ? `${basePalette.selectionDark}70`
          : `${basePalette.selectionDark}90`,
      'list.activeSelectionForeground': basePalette.foreground,
      'list.dropBackground':
        shade === 'light'
          ? `${basePalette.selectionDark}70`
          : `${basePalette.selectionDark}90`,
      'list.focusBackground':
        shade === 'light'
          ? `${basePalette.selectionDark}70`
          : `${basePalette.selectionDark}90`,
      'list.focusForeground': basePalette.foreground,
      'list.highlightForeground': basePalette.foreground,
      'list.hoverBackground': `${basePalette.selection}50`,
      'list.hoverForeground': basePalette.textMid,
      'list.inactiveSelectionBackground':
        shade === 'light'
          ? `${basePalette.selectionDark}70`
          : `${basePalette.selectionDark}90`,
      'list.inactiveSelectionForeground': basePalette.foreground,
      'list.inactiveFocusBackground':
        shade === 'light'
          ? `${basePalette.selectionDark}70`
          : `${basePalette.selectionDark}90`,
      'list.invalidItemForeground': colorPalette.ruby,
      'list.errorForeground': colorPalette.ruby,
      'list.warningForeground': colorPalette.amber,
      'listFilterWidget.background': primaryBackgroundColor,
      'listFilterWidget.outline': basePalette.selection,
      'listFilterWidget.noMatchesOutline': colorPalette.ruby,

      // Tree
      'tree.indentGuidesStroke': basePalette.selection,

      // Activity Bar
      'activityBar.background': primaryBackgroundColor,
      'activityBar.dropBorder': basePalette.selection,
      'activityBar.foreground':
        shade === 'light' ? colorPalette[variant] : basePalette.foreground,
      'activityBar.inactiveForeground': getBaseColor(
        basePalette.textMid,
        basePalette.textDark
      ),
      'activityBar.border': primaryBackgroundColor,
      'activityBarBadge.background': colorPalette[variant],
      'activityBarBadge.foreground': primaryBackgroundColor,

      // Side Bar
      'sideBar.background': secondaryBackgroundColor,
      'sideBar.foreground': getBaseColor(
        basePalette.foreground,
        basePalette.selection
      ),
      'sideBarTitle.foreground': colorPalette[variant],
      'sideBarSectionHeader.background': secondaryBackgroundColor,
      'sideBarSectionHeader.foreground': colorPalette[variant],
      'sideBarSectionHeader.border': primaryBackgroundColor,

      // Tab
      'tab.activeBackground': primaryBackgroundColor,
      'tab.unfocusedActiveBackground': primaryBackgroundColor,
      'tab.activeForeground': basePalette.foreground,
      'tab.border': secondaryBackgroundColor,
      'tab.activeBorderTop': colorPalette[variant],
      'tab.unfocusedActiveBorderTop': primaryBackgroundColor,
      'tab.inactiveBackground': secondaryBackgroundColor,
      'tab.inactiveForeground': getBaseColor(
        basePalette.textMid,
        basePalette.textDark
      ),
      'tab.unfocusedActiveForeground': basePalette.foreground,
      'tab.unfocusedInactiveForeground': getBaseColor(
        basePalette.textMid,
        basePalette.textDark
      ),
      'tab.hoverForeground': colorPalette[variant],

      // Peek View
      'peekView.border': colorPalette[variant],
      'peekViewEditor.background': `${basePalette.selectionDark}50`,
      'peekViewEditorGutter.background': primaryBackgroundColor,
      'peekViewEditor.matchHighlightBackground': `${basePalette.selection}50`,
      'peekViewEditor.matchHighlightBorder': basePalette.foreground,
      'peekViewResult.background': `${basePalette.selectionDark}50`,
      'peekViewResult.fileForeground': basePalette.foreground,
      'peekViewResult.lineForeground': colorPalette[variant],
      'peekViewResult.matchHighlightBackground': basePalette.selectionDark,
      'peekViewResult.selectionBackground': basePalette.selection,
      'peekViewResult.selectionForeground': basePalette.foreground,
      'peekViewTitle.background': `${basePalette.selectionDark}50`,
      'peekViewTitleDescription.foreground': basePalette.foreground,
      'peekViewTitleLabel.foreground': basePalette.foreground,

      // Icon
      'icon.foreground': basePalette.foreground,

      // Checkbox
      'checkbox.background': primaryBackgroundColor,
      'checkbox.foreground': basePalette.foreground,
      'checkbox.border': primaryBackgroundColor,

      // Merge
      'merge.currentHeaderBackground': `${colorPalette.lapis}70`,
      'merge.currentContentBackground': `${colorPalette.lapis}22`,
      'merge.incomingHeaderBackground': `${colorPalette.peridot}70`,
      'merge.incomingContentBackground': `${colorPalette.peridot}22`,
      'merge.border': basePalette.selection,
      'merge.commonHeaderBackground': `${basePalette.selection}70`,
      'merge.commonContentBackground': `${basePalette.selection}60`,

      // Panel
      'panel.background': primaryBackgroundColor,
      'panel.border': colorPalette[variant],
      'panel.dropBorder': basePalette.selection,
      'panelTitle.activeBorder': colorPalette[variant],
      'panelTitle.activeForeground': basePalette.foreground,
      'panelTitle.inactiveForeground': getBaseColor(
        basePalette.textMid,
        basePalette.textDark
      ),
      'panelInput.border': basePalette.selection,
      'panelSection.border': basePalette.selection,
      'panelSection.dropBackground': basePalette.selection,
      'panelSectionHeader.background': primaryBackgroundColor,
      'panelSectionHeader.foreground': colorPalette[variant],

      // Status Bar
      'statusBar.background': primaryBackgroundColor,
      'statusBar.foreground': basePalette.foreground,
      'statusBar.border': primaryBackgroundColor,
      'statusBar.debuggingBackground': colorPalette.amber,
      'statusBar.debuggingForeground': primaryBackgroundColor,
      'statusBar.noFolderBackground': colorPalette.ruby,
      'statusBar.noFolderForeground': primaryBackgroundColor,
      'statusBarItem.activeBackground': basePalette.selection,
      'statusBarItem.hoverBackground': basePalette.selection,
      'statusBarItem.remoteBackground': colorPalette.peridot,
      'statusBarItem.remoteForeground': primaryBackgroundColor,

      // Title Bar
      'titleBar.activeBackground': primaryBackgroundColor,
      'titleBar.activeForeground': basePalette.foreground,
      'titleBar.inactiveBackground': primaryBackgroundColor,
      'titleBar.inactiveForeground': basePalette.selection,
      'titleBar.border': primaryBackgroundColor,

      // Menu
      'menubar.selectionForeground': basePalette.foreground,
      'menubar.selectionBackground': basePalette.selection,
      'menu.foreground': basePalette.foreground,
      'menu.background': primaryBackgroundColor,
      'menu.selectionForeground': basePalette.foreground,
      'menu.selectionBackground': basePalette.selection,

      // Notifications
      'notificationCenter.border': primaryBackgroundColor,
      'notificationCenterHeader.foreground': basePalette.foreground,
      'notificationCenterHeader.background': primaryBackgroundColor,
      'notificationToast.border': primaryBackgroundColor,
      'notifications.foreground': basePalette.foreground,
      'notifications.background': primaryBackgroundColor,
      'notifications.border': primaryBackgroundColor,
      'notificationLink.foreground': basePalette.foreground,

      // Extension Button
      'extensionButton.prominentBackground': colorPalette[variant],
      'extensionButton.prominentForeground': primaryBackgroundColor,
      'extensionButton.prominentHoverBackground': `${basePalette.selection}50`,

      // Picker Group
      'pickerGroup.border': basePalette.selection,
      'pickerGroup.foreground': colorPalette[variant],

      // Terminal
      'terminal.background': primaryBackgroundColor,
      'terminal.border': colorPalette[variant],
      'terminal.foreground': basePalette.foreground,
      'terminal.ansiBlack': basePalette.selectionDark,
      'terminal.ansiBlue': colorPalette.lapis,
      'terminal.ansiBrightBlue': lightColorPalette.lapis,
      'terminal.ansiBrightCyan': lightColorPalette.aquamarine,
      'terminal.ansiBrightGreen': lightColorPalette.peridot,
      'terminal.ansiBrightBlack': basePalette.selection,
      'terminal.ansiBrightMagenta': lightColorPalette.amethyst,
      'terminal.ansiBrightRed': lightColorPalette.ruby,
      'terminal.ansiBrightWhite': basePalette.foreground,
      'terminal.ansiBrightYellow': lightColorPalette.amber,
      'terminal.ansiCyan': colorPalette.aquamarine,
      'terminal.ansiGreen': colorPalette.peridot,
      'terminal.ansiMagenta': colorPalette.amethyst,
      'terminal.ansiRed': colorPalette.ruby,
      'terminal.ansiWhite': basePalette.foreground,
      'terminal.ansiYellow': colorPalette.amber,
      'terminal.selectionBackground': `${basePalette.selection}33`,
      'terminalCursor.background': colorPalette[variant],
      'terminalCursor.foreground': colorPalette[variant],

      // Debug Toolbar
      'debugToolBar.background': basePalette.selection,
      'debugToolBar.border': basePalette.selection,

      // Welcome Page
      'welcomePage.buttonBackground': basePalette.selection,
      'welcomePage.buttonHoverBackground': `${basePalette.selection}99`,
      'walkThrough.embeddedEditorBackground': primaryBackgroundColor,

      // Git Decoration
      'gitDecoration.modifiedResourceForeground': colorPalette.lapis,
      'gitDecoration.deletedResourceForeground': colorPalette.ruby,
      'gitDecoration.untrackedResourceForeground': colorPalette.peridot,
      'gitDecoration.ignoredResourceForeground':
        baseVariant === 'default'
          ? basePalette.selection
          : basePalette.selectionDark,
      'gitDecoration.conflictingResourceForeground': colorPalette.ruby,

      // Settings
      'settings.headerForeground': basePalette.foreground,
      'settings.modifiedItemIndicator': colorPalette[variant],
      'settings.dropdownBackground':
        shade === 'light' ? basePalette.selection : basePalette.selectionDark,
      'settings.dropdownForeground': basePalette.foreground,
      'settings.dropdownBorder': basePalette.selectionDark,
      'settings.dropdownListBorder': basePalette.selectionDark,
      'settings.checkboxBackground': basePalette.selectionDark,
      'settings.checkboxForeground': basePalette.foreground,
      'settings.checkboxBorder': basePalette.selectionDark,
      'settings.textInputBackground': basePalette.selectionDark,
      'settings.textInputForeground': basePalette.foreground,
      'settings.textInputBorder': basePalette.selectionDark,
      'settings.numberInputBackground': basePalette.selectionDark,
      'settings.numberInputForeground': basePalette.foreground,
      'settings.numberInputBorder': basePalette.selectionDark,

      // Breadcrumb
      'breadcrumb.foreground': basePalette.foreground,
      'breadcrumb.background': primaryBackgroundColor,
      'breadcrumb.focusForeground': basePalette.foreground,
      'breadcrumb.activeSelectionForeground': basePalette.foreground,
      'breadcrumbPicker.background': primaryBackgroundColor,
    },
    tokenColors: [
      {
        scope: [],
        settings: {
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          fontStyle: 'italic',
          foreground:
            shade === 'light'
              ? basePalette.text
              : getBaseColor(basePalette.textMid, basePalette.textDark),
        },
      },
      {
        name: 'Variables',
        scope: ['variable', 'string constant.other.placeholder', 'source'],
        settings: {
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'Colors',
        scope: [
          'constant.other.color',
          'punctuation.definition.entity',
          'constant.character.entity',
          'punctuation.definition.template-expression',
          'punctuation.section.tag.twig',
        ],
        settings: {
          foreground: colorPalette.amethyst,
        },
      },
      {
        name: 'Invalid',
        scope: ['invalid', 'invalid.illegal'],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Storage, Number, Constant',
        scope: [
          'storage.type',
          'storage.modifier',
          'constant.language',
          'support.constant',
          'constant.character',
          'constant.escape',
        ],
        settings: {
          foreground: colorPalette.lapis,
        },
      },
      {
        name: 'Keyword',
        scope: ['keyword'],
        settings: {
          foreground: colorPalette.amethyst,
        },
      },
      {
        name: 'Constant, Number',
        scope: ['constant.language.boolean', 'constant.numeric'],
        settings: {
          foreground: colorPalette.amber,
        },
      },
      {
        name: 'Operator, Misc',
        scope: [
          'punctuation',
          'punctuation.definition.tag',
          'punctuation.separator.inheritance.php',
          'punctuation.definition.tag.html',
          'punctuation.section.embedded',
          'keyword.other.template',
          'keyword.other.substitution',
          'meta.brace',
          'meta.block',
          'meta.jsx',
          'meta.embedded.expression',
          'meta.template.expression',
          'meta.tag.block.any.html',
          'string.unquoted.tag-string.nunjucks',
          'text.html.nunjucks',
        ],
        settings: {
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'Attribute Equal Signs, handlebars operators',
        scope: [
          'punctuation.separator.key-value.html',
          'keyword.control',
          'keyword.operator',
          'constant.other.color',
          'punctuation.definition.constant',
          'meta.function.block.start.handlebars',
          'meta.function.inline.other',
          'meta.property-value',
          'support.constant.mathematical-symbols',
          'support.constant.vendored.property-value',
          'punctuation.definition.keyword',
          'punctuation.accessor',
          'punctuation.separator.property',
          'string.unquoted.filter-pipe',
        ],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'Tag',
        scope: [
          'entity.name.tag',
          'meta.tag.sgml',
          'markup.deleted.git_gutter',
          'support.variable.dom',
          'meta.import',
          'meta.export',
          'meta.export.default',
          'support.class.builtin',
          'support.class.component',
          'variable.other.object',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Function, Special Method',
        scope: [
          'entity.name.function',
          'variable.function',
          'support.function',
          'keyword.other.special-method',
          'meta.function-call',
          'keyword.control.filter',
        ],
        settings: {
          foreground: colorPalette.amethyst,
        },
      },
      {
        name: 'Block Level Variables',
        scope: ['meta.block variable.other'],
        settings: {
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'Function Argument, Tag Attribute, Embedded, Things that should be grey',
        scope: [
          'variable.parameter',
          'text.html',
          'punctuation.section.property-list',
          'meta.property-value.scss punctuation',
          'meta.property-list',
          'keyword.operator.type.annotation',
          'variable.other.object.property',
        ],
        settings: {
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'String, Symbols, Inherited Class, Markup Heading',
        scope: [
          'string',
          'constant.other.symbol',
          'constant.other.key',
          'markup.heading',
          'markup.inserted.git_gutter',
          'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
          'punctuation.definition.string',
          'entity.name.section.markdown',
          'meta.attribute-selector',
          'entity.name.import.go',
          'storage.type.attr.nunjucks',
        ],
        settings: {
          foreground: colorPalette.peridot,
        },
      },
      {
        name: 'Class, Support',
        scope: [
          'entity.name',
          'support.type',
          'support.orther.namespace.use.php',
          'meta.use.php',
          'support.other.namespace.php',
          'markup.changed.git_gutter',
          'support.type.sys-types',
          'meta.object-literal.key',
        ],
        settings: {
          foreground: colorPalette.lapis,
        },
      },
      {
        name: 'Entity Types',
        scope: [
          'support.type',
          'support.class',
          'keyword.other.debugger',
          'entity.other.inherited-class',
          'meta.property-name',
          'punctuation.definition.raw.markdown',
          'variable.graphql',
          'variable.other.readwrite',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'CSS Class and Support',
        scope: [
          'source.css support.type.property-name',
          'source.sass support.type.property-name',
          'source.scss support.type.property-name',
          'source.less support.type.property-name',
          'source.stylus support.type.property-name',
          'source.postcss support.type.property-name',
          'support.type.property-name',
          'support.variable.object.node',
          'support.variable.object.process',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Scala',
        scope: 'variable.parameter.scala',
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'Sub-methods',
        scope: ['entity.name.module.js', 'variable.import.parameter.js'],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Language methods',
        scope: ['variable.language'],
        settings: {
          fontStyle: 'italic',
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'entity.name.method.js',
        scope: ['entity.name.method.js'],
        settings: {
          fontStyle: 'italic',
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'meta.method.js',
        scope: [
          'meta.class-method.js entity.name.function.js',
          'variable.function.constructor',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Attributes',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'HTML Attributes',
        scope: [
          'text.html.basic entity.other.attribute-name.html',
          'text.html.basic entity.other.attribute-name',
        ],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'CSS Classes',
        scope: [
          'entity.other.attribute-name.class',
          'punctuation.definition.entity.css',
        ],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: "CSS ID's",
        scope: ['source.sass keyword.control'],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Inserted',
        scope: ['markup.inserted'],
        settings: {
          foreground: colorPalette.peridot,
        },
      },
      {
        name: 'Deleted',
        scope: ['markup.deleted'],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Changed',
        scope: ['markup.changed'],
        settings: {
          foreground: colorPalette.amethyst,
        },
      },
      {
        name: 'Regular Expressions',
        scope: ['string.regexp'],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'Escape Characters',
        scope: ['constant.character.escape'],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'URL',
        scope: ['*url*', '*link*', '*uri*'],
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        name: 'Decorators',
        scope: [
          'meta.decorator',
          'tag.decorator.js entity.name.tag',
          'tag.decorator.js punctuation.definition.tag',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'ES7 Bind Operator',
        scope: [
          'source.js constant.other.object.key.js string.unquoted.label.js',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 0',
        scope: [
          'source.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 1',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 2',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'JSON Key - Level 3',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 4',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'JSON Key - Level 5',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 6',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'JSON Key - Level 7',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 8',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'Markup - Italic',
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic',
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Markup - Bold',
        scope: ['markup.bold'],
        settings: {
          fontStyle: 'bold',
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Markup - Underline',
        scope: ['markup.underline'],
        settings: {
          fontStyle: 'underline',
          foreground: colorPalette.amethyst,
        },
      },
      {
        name: 'Markup - Strike',
        scope: ['markup.strike'],
        settings: {
          fontStyle: 'italic',
          foreground: colorPalette.amber,
        },
      },
      {
        name: 'Markup - Quote',
        scope: ['markup.quote'],
        settings: {
          fontStyle: 'italic',
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Markup - Raw Block',
        scope: ['markup.raw.block'],
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
      {
        name: 'Markup - Table',
        scope: ['markup.table'],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Markdown - Plain',
        scope: [
          'text.html.markdown',
          'punctuation.definition.list_item.markdown',
        ],
        settings: {
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'Markdown - Markup Raw Inline',
        scope: [
          'text.html.markdown markup.raw.inline',
          'text.html.markdown markup.inline.raw.string.markdown',
        ],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Markdown - Line Break',
        scope: ['text.html.markdown meta.dummy.line-break'],
        settings: {
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'Markdown - Heading',
        scope: [
          'markdown.heading',
          'markup.heading',
          'markup.heading entity.name',
          'markup.heading.markdown',
          'punctuation.definition.heading.markdown',
        ],
        settings: {
          foreground: colorPalette.peridot,
        },
      },
      {
        name: 'Markdown - Blockquote',
        scope: ['markup.quote', 'punctuation.definition.blockquote.markdown'],
        settings: {
          fontStyle: 'italic',
          foreground: colorPalette.ruby,
        },
      },
      {
        name: 'Markdown - Link',
        scope: ['string.other.link.title.markdown'],
        settings: {
          fontStyle: 'underline',
          foreground: colorPalette.amber,
        },
      },
      {
        name: 'Markdown - Raw Block Fenced',
        scope: ['markup.raw.block.fenced.markdown'],
        settings: {
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'Markdown - Fenced Bode Block',
        scope: [
          'punctuation.definition.fenced.markdown',
          'variable.language.fenced.markdown',
        ],
        settings: {
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'Markdown - Fenced Language',
        scope: ['variable.language.fenced.markdown'],
        settings: {
          fontStyle: '',
          foreground: basePalette.foreground,
        },
      },
      {
        name: 'Markdown - Separator',
        scope: ['meta.separator'],
        settings: {
          fontStyle: '',
          foreground: basePalette.foreground,
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: colorPalette.amber,
        },
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: colorPalette.amethyst,
        },
      },
      {
        scope: ['storage.type.error.go'],
        settings: {
          foreground: colorPalette.ruby,
        },
      },
      {
        scope: 'punctuation.other.period.go',
        settings: {
          foreground: colorPalette.aquamarine,
        },
      },
    ],
  };
};
