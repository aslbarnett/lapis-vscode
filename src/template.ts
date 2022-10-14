import {
  base,
  lightBase,
  lightPalette,
  lightPaletteLight,
  palette,
  paletteLight,
} from './colors';

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
  const selectedBase = shade === 'light' ? lightBase : base;
  const selectedPalette = shade === 'light' ? lightPalette : palette;
  const selectedPaletteLight =
    shade === 'light' ? lightPaletteLight : paletteLight;
  const primaryBackgroundColor =
    shade === 'dark' ? selectedBase.backgroundDark : selectedBase.background;
  const secondaryBackgroundColor =
    shade === 'dark' ? selectedBase.background : selectedBase.backgroundDark;

  function getBaseColor(defaultColor: string, stealthColor: string): string {
    return baseVariant === 'stealth' ? stealthColor : defaultColor;
  }

  return {
    name: name,
    type: 'dark',
    colors: {
      focusBorder: `${selectedBase.selection}50`,
      foreground: selectedBase.foreground,
      'widget.shadow': selectedBase.shadow,
      'selection.background': `${selectedBase.selection}70`,
      descriptionForeground: selectedBase.foreground,
      errorForeground: selectedPalette.ruby,

      // Editor Group
      'editorGroup.border': selectedBase.selection,
      'editorGroup.dropBackground': selectedBase.selection,
      'editorGroup.emptyBackground': primaryBackgroundColor,
      'editorGroup.focusedEmptyBorder': primaryBackgroundColor,
      'editorGroupHeader.noTabsBackground': primaryBackgroundColor,
      'editorGroupHeader.tabsBackground': secondaryBackgroundColor,
      'editorGroupHeader.border': primaryBackgroundColor,
      'editorGroupHeader.tabsBorder': primaryBackgroundColor,

      // Editor
      'editorPane.background': primaryBackgroundColor,
      'editor.background': primaryBackgroundColor,
      'editor.foreground': selectedBase.foreground,
      'editor.selectionBackground': `${selectedBase.selection}60`,
      'editor.selectionForeground': selectedBase.foreground,
      'editor.inactiveSelectionBackground': `${selectedBase.selection}60`,
      'editor.selectionHighlightBackground': `${selectedBase.selection}60`,
      'editor.wordHighlightBackground': `${selectedBase.selection}60`,
      'editor.wordHighlightStrongBackground': `${selectedBase.selection}80`,
      'editor.findMatchBackground': `${selectedBase.selection}50`,
      'editor.findMatchHighlightBackground': `${selectedBase.selection}50`,
      'editor.findRangeHighlightBackground': `${selectedBase.selection}50`,
      'editor.findMatchBorder': selectedPalette.lapis,
      'editor.hoverHighlightBackground': `${selectedBase.selection}50`,
      'editor.lineHighlightBackground': `${selectedBase.selection}50`,
      'editor.lineHighlightBorder': `${selectedBase.selection}50`,
      'editor.rangeHighlightBackground': `${selectedBase.selection}50`,
      'editorLineNumber.foreground':
        shade === 'light'
          ? selectedBase.text
          : getBaseColor(selectedBase.textMid, selectedBase.textDark),
      'editorLineNumber.activeForeground':
        shade === 'light' ? selectedPalette[variant] : selectedBase.foreground,
      'editorCursor.background': primaryBackgroundColor,
      'editorCursor.foreground': selectedPalette[variant],
      'editorLink.activeForeground': selectedPalette.lapis,
      'editorWhitespace.foreground': `${selectedBase.selection}50`,
      'editorIndentGuide.background':
        shade === 'light' ? selectedBase.selection : selectedBase.selectionDark,
      'editorIndentGuide.activeBackground': selectedPalette[variant],
      'editorInlayHint.background': primaryBackgroundColor,
      'editorInlayHint.foreground': `${selectedBase.selection}99`,
      'editorRuler.foreground': selectedBase.selection,
      'editorCodeLens.foreground': selectedBase.foreground,
      'editorBracketMatch.background': `${selectedBase.selection}60`,
      'editorBracketMatch.border': selectedPalette.lapis,

      // Editor Overview Ruler
      'editorOverviewRuler.border': selectedBase.selection,
      'editorOverviewRuler.findMatchForeground': selectedPalette.lapis,
      'editorOverviewRuler.rangeHighlightForeground': selectedBase.selection,
      'editorOverviewRuler.selectionHighlightForeground': `${selectedBase.selection}50`,
      'editorOverviewRuler.wordHighlightForeground': selectedBase.selection,
      'editorOverviewRuler.wordHighlightStrongForeground':
        selectedBase.selection,
      'editorOverviewRuler.modifiedForeground': selectedPalette.lapis,
      'editorOverviewRuler.addedForeground': selectedPalette.peridot,
      'editorOverviewRuler.deletedForeground': selectedPalette.ruby,
      'editorOverviewRuler.errorForeground': selectedPalette.ruby,
      'editorOverviewRuler.warningForeground': selectedPalette.amber,
      'editorOverviewRuler.infoForeground': selectedPalette.lapis,
      'editorOverviewRuler.bracketMatchForeground': selectedPalette.lapis,
      'editorOverviewRuler.currentContentForeground': selectedPalette.lapis,
      'editorOverviewRuler.incomingContentForeground': selectedPalette.peridot,
      'editorOverviewRuler.commonContentForeground': selectedBase.selection,

      // Editor Widget
      'editorWidget.background': primaryBackgroundColor,
      'editorWidget.border': primaryBackgroundColor,
      'editorWidget.foreground': selectedBase.foreground,
      'editorSuggestWidget.background': primaryBackgroundColor,
      'editorSuggestWidget.border': selectedBase.selection,
      'editorSuggestWidget.foreground': selectedBase.foreground,
      'editorSuggestWidget.highlightForeground': selectedPalette.lapis,
      'editorSuggestWidget.selectedBackground': selectedBase.selection,
      'editorHoverWidget.background': primaryBackgroundColor,
      'editorHoverWidget.border': selectedBase.selection,
      'debugExceptionWidget.background': primaryBackgroundColor,
      'debugExceptionWidget.border': selectedBase.selection,

      // Editor Marker Navigation
      'editorMarkerNavigation.background': primaryBackgroundColor,
      'editorMarkerNavigationError.background': selectedPalette.ruby,
      'editorMarkerNavigationWarning.background': selectedPalette.amber,
      'editorMarkerNavigationInfo.background': selectedPalette.lapis,

      // Diff Editor
      'diffEditor.insertedTextBackground': `${selectedPalette.peridot}22`,
      'diffEditor.insertedTextBorder': `${selectedPalette.peridot}44`,
      'diffEditor.removedTextBackground': `${selectedPalette.ruby}22`,
      'diffEditor.removedTextBorder': `${selectedPalette.ruby}44`,
      'diffEditor.border': selectedBase.selection,

      // Editor Error
      'editorError.foreground': selectedPalette.ruby,
      'editorWarning.foreground': selectedPalette.amber,
      'editorInfo.foreground': selectedPalette.lapis,
      'editorHint.foreground': selectedPalette.aquamarine,

      // Editor Gutter
      'editorGutter.background': primaryBackgroundColor,
      'editorGutter.modifiedBackground': selectedPalette.lapis,
      'editorGutter.addedBackground': selectedPalette.peridot,
      'editorGutter.deletedBackground': selectedPalette.ruby,

      // Text
      'textBlockQuote.background': selectedBase.selection,
      'textBlockQuote.border': selectedBase.selection,
      'textCodeBlock.background': primaryBackgroundColor,
      'textLink.activeForeground': selectedPalette[variant],
      'textLink.foreground': selectedPalette[variant],
      'textPreformat.foreground': selectedBase.foreground,
      'textSeparator.foreground': selectedBase.foreground,

      // Button
      'button.background': selectedPalette[variant],
      'button.foreground': primaryBackgroundColor,
      'button.hoverBackground': `${selectedPalette[variant]}99`,

      // Dropdown
      'dropdown.background': selectedBase.selection,
      'dropdown.listBackground': primaryBackgroundColor,
      'dropdown.border': selectedBase.selection,
      'dropdown.foreground': selectedBase.foreground,

      // Input
      'input.background': primaryBackgroundColor,
      'input.border': selectedBase.selection,
      'input.foreground': selectedBase.foreground,
      'input.placeholderForeground': `${selectedBase.selection}50`,
      'inputOption.activeBorder': selectedBase.selection,

      // Input Validation
      'inputValidation.errorBackground': primaryBackgroundColor,
      'inputValidation.errorForeground': selectedPalette.ruby,
      'inputValidation.errorBorder': selectedPalette.ruby,
      'inputValidation.infoBackground': primaryBackgroundColor,
      'inputValidation.infoForeground': selectedPalette.lapis,
      'inputValidation.infoBorder': selectedPalette.lapis,
      'inputValidation.warningBackground': primaryBackgroundColor,
      'inputValidation.warningForeground': selectedPalette.amber,
      'inputValidation.warningBorder': selectedPalette.amber,

      // Scrollbar
      'scrollbar.shadow': selectedBase.shadow,
      'scrollbarSlider.activeBackground': `${selectedBase.selection}50`,
      'scrollbarSlider.background': `${selectedBase.selection}60`,
      'scrollbarSlider.hoverBackground': `${selectedBase.selection}99`,

      // Badge
      'badge.foreground': primaryBackgroundColor,
      'badge.background': selectedPalette[variant],

      // Progress Bar
      'progressBar.background': selectedPalette[variant],

      // List
      'list.activeSelectionBackground':
        shade === 'light'
          ? `${selectedBase.selectionDark}70`
          : `${selectedBase.selectionDark}90`,
      'list.activeSelectionForeground': selectedBase.foreground,
      'list.dropBackground':
        shade === 'light'
          ? `${selectedBase.selectionDark}70`
          : `${selectedBase.selectionDark}90`,
      'list.focusBackground':
        shade === 'light'
          ? `${selectedBase.selectionDark}70`
          : `${selectedBase.selectionDark}90`,
      'list.focusForeground': selectedBase.foreground,
      'list.highlightForeground': selectedBase.foreground,
      'list.hoverBackground': `${selectedBase.selection}50`,
      'list.hoverForeground': selectedBase.textMid,
      'list.inactiveSelectionBackground':
        shade === 'light'
          ? `${selectedBase.selectionDark}70`
          : `${selectedBase.selectionDark}90`,
      'list.inactiveSelectionForeground': selectedBase.foreground,
      'list.inactiveFocusBackground':
        shade === 'light'
          ? `${selectedBase.selectionDark}70`
          : `${selectedBase.selectionDark}90`,
      'list.invalidItemForeground': selectedPalette.ruby,
      'list.errorForeground': selectedPalette.ruby,
      'list.warningForeground': selectedPalette.amber,
      'listFilterWidget.background': primaryBackgroundColor,
      'listFilterWidget.outline': selectedBase.selection,
      'listFilterWidget.noMatchesOutline': selectedPalette.ruby,

      // Tree
      'tree.indentGuidesStroke': selectedBase.selection,

      // Activity Bar
      'activityBar.background': primaryBackgroundColor,
      'activityBar.dropBorder': selectedBase.selection,
      'activityBar.foreground':
        shade === 'light' ? selectedPalette[variant] : selectedBase.foreground,
      'activityBar.inactiveForeground': getBaseColor(
        selectedBase.textMid,
        selectedBase.textDark
      ),
      'activityBar.border': primaryBackgroundColor,
      'activityBarBadge.background': selectedPalette[variant],
      'activityBarBadge.foreground': primaryBackgroundColor,

      // Side Bar
      'sideBar.background': secondaryBackgroundColor,
      'sideBar.foreground': getBaseColor(
        selectedBase.foreground,
        selectedBase.selection
      ),
      'sideBarTitle.foreground': selectedPalette[variant],
      'sideBarSectionHeader.background': secondaryBackgroundColor,
      'sideBarSectionHeader.foreground': selectedPalette[variant],
      'sideBarSectionHeader.border': primaryBackgroundColor,

      // Tab
      'tab.activeBackground': primaryBackgroundColor,
      'tab.unfocusedActiveBackground': primaryBackgroundColor,
      'tab.activeForeground': selectedBase.foreground,
      'tab.border': secondaryBackgroundColor,
      'tab.activeBorderTop': selectedPalette[variant],
      'tab.unfocusedActiveBorderTop': primaryBackgroundColor,
      'tab.inactiveBackground': secondaryBackgroundColor,
      'tab.inactiveForeground': getBaseColor(
        selectedBase.textMid,
        selectedBase.textDark
      ),
      'tab.unfocusedActiveForeground': selectedBase.foreground,
      'tab.unfocusedInactiveForeground': getBaseColor(
        selectedBase.textMid,
        selectedBase.textDark
      ),
      'tab.hoverForeground': selectedPalette[variant],

      // Peek View
      'peekView.border': selectedPalette[variant],
      'peekViewEditor.background': `${selectedBase.selectionDark}50`,
      'peekViewEditorGutter.background': primaryBackgroundColor,
      'peekViewEditor.matchHighlightBackground': `${selectedBase.selection}50`,
      'peekViewEditor.matchHighlightBorder': selectedBase.foreground,
      'peekViewResult.background': `${selectedBase.selectionDark}50`,
      'peekViewResult.fileForeground': selectedBase.foreground,
      'peekViewResult.lineForeground': selectedPalette[variant],
      'peekViewResult.matchHighlightBackground': selectedBase.selectionDark,
      'peekViewResult.selectionBackground': selectedBase.selection,
      'peekViewResult.selectionForeground': selectedBase.foreground,
      'peekViewTitle.background': `${selectedBase.selectionDark}50`,
      'peekViewTitleDescription.foreground': selectedBase.foreground,
      'peekViewTitleLabel.foreground': selectedBase.foreground,

      // Icon
      'icon.foreground': selectedBase.foreground,

      // Checkbox
      'checkbox.background': primaryBackgroundColor,
      'checkbox.foreground': selectedBase.foreground,
      'checkbox.border': primaryBackgroundColor,

      // Merge
      'merge.currentHeaderBackground': `${selectedPalette.lapis}70`,
      'merge.currentContentBackground': `${selectedPalette.lapis}22`,
      'merge.incomingHeaderBackground': `${selectedPalette.peridot}70`,
      'merge.incomingContentBackground': `${selectedPalette.peridot}22`,
      'merge.border': selectedBase.selection,
      'merge.commonHeaderBackground': `${selectedBase.selection}70`,
      'merge.commonContentBackground': `${selectedBase.selection}60`,

      // Panel
      'panel.background': primaryBackgroundColor,
      'panel.border': selectedPalette[variant],
      'panel.dropBorder': selectedBase.selection,
      'panelTitle.activeBorder': selectedPalette[variant],
      'panelTitle.activeForeground': selectedBase.foreground,
      'panelTitle.inactiveForeground': getBaseColor(
        selectedBase.textMid,
        selectedBase.textDark
      ),
      'panelInput.border': selectedBase.selection,
      'panelSection.border': selectedBase.selection,
      'panelSection.dropBackground': selectedBase.selection,
      'panelSectionHeader.background': primaryBackgroundColor,
      'panelSectionHeader.foreground': selectedPalette[variant],

      // Status Bar
      'statusBar.background': primaryBackgroundColor,
      'statusBar.foreground': selectedBase.foreground,
      'statusBar.border': primaryBackgroundColor,
      'statusBar.debuggingBackground': selectedPalette.amber,
      'statusBar.debuggingForeground': primaryBackgroundColor,
      'statusBar.noFolderBackground': selectedPalette.ruby,
      'statusBar.noFolderForeground': primaryBackgroundColor,
      'statusBarItem.activeBackground': selectedBase.selection,
      'statusBarItem.hoverBackground': selectedBase.selection,
      'statusBarItem.remoteBackground': selectedPalette.peridot,
      'statusBarItem.remoteForeground': primaryBackgroundColor,

      // Title Bar
      'titleBar.activeBackground': primaryBackgroundColor,
      'titleBar.activeForeground': selectedBase.foreground,
      'titleBar.inactiveBackground': primaryBackgroundColor,
      'titleBar.inactiveForeground': selectedBase.selection,
      'titleBar.border': primaryBackgroundColor,

      // Menu
      'menubar.selectionForeground': selectedBase.foreground,
      'menubar.selectionBackground': selectedBase.selection,
      'menu.foreground': selectedBase.foreground,
      'menu.background': primaryBackgroundColor,
      'menu.selectionForeground': selectedBase.foreground,
      'menu.selectionBackground': selectedBase.selection,

      // Notifications
      'notificationCenter.border': primaryBackgroundColor,
      'notificationCenterHeader.foreground': selectedBase.foreground,
      'notificationCenterHeader.background': primaryBackgroundColor,
      'notificationToast.border': primaryBackgroundColor,
      'notifications.foreground': selectedBase.foreground,
      'notifications.background': primaryBackgroundColor,
      'notifications.border': primaryBackgroundColor,
      'notificationLink.foreground': selectedBase.foreground,

      // Extension Button
      'extensionButton.prominentBackground': selectedPalette[variant],
      'extensionButton.prominentForeground': primaryBackgroundColor,
      'extensionButton.prominentHoverBackground': `${selectedBase.selection}50`,

      // Picker Group
      'pickerGroup.border': selectedBase.selection,
      'pickerGroup.foreground': selectedPalette[variant],

      // Terminal
      'terminal.background': primaryBackgroundColor,
      'terminal.border': selectedPalette[variant],
      'terminal.foreground': selectedBase.foreground,
      'terminal.ansiBlack': selectedBase.selectionDark,
      'terminal.ansiBlue': selectedPalette.lapis,
      'terminal.ansiBrightBlue': selectedPaletteLight.lapis,
      'terminal.ansiBrightCyan': selectedPaletteLight.aquamarine,
      'terminal.ansiBrightGreen': selectedPaletteLight.peridot,
      'terminal.ansiBrightBlack': selectedBase.selection,
      'terminal.ansiBrightMagenta': selectedPaletteLight.amethyst,
      'terminal.ansiBrightRed': selectedPaletteLight.ruby,
      'terminal.ansiBrightWhite': selectedBase.foreground,
      'terminal.ansiBrightYellow': selectedPaletteLight.amber,
      'terminal.ansiCyan': selectedPalette.aquamarine,
      'terminal.ansiGreen': selectedPalette.peridot,
      'terminal.ansiMagenta': selectedPalette.amethyst,
      'terminal.ansiRed': selectedPalette.ruby,
      'terminal.ansiWhite': selectedBase.foreground,
      'terminal.ansiYellow': selectedPalette.amber,
      'terminal.selectionBackground': `${selectedBase.selection}33`,
      'terminalCursor.background': selectedPalette[variant],
      'terminalCursor.foreground': selectedPalette[variant],

      // Debug Toolbar
      'debugToolBar.background': selectedBase.selection,
      'debugToolBar.border': selectedBase.selection,

      // Welcome Page
      'welcomePage.buttonBackground': selectedBase.selection,
      'welcomePage.buttonHoverBackground': `${selectedBase.selection}99`,
      'walkThrough.embeddedEditorBackground': primaryBackgroundColor,

      // Git Decoration
      'gitDecoration.modifiedResourceForeground': selectedPalette.lapis,
      'gitDecoration.deletedResourceForeground': selectedPalette.ruby,
      'gitDecoration.untrackedResourceForeground': selectedPalette.peridot,
      'gitDecoration.ignoredResourceForeground':
        baseVariant === 'default'
          ? selectedBase.selection
          : selectedBase.selectionDark,
      'gitDecoration.conflictingResourceForeground': selectedPalette.ruby,

      // Settings
      'settings.headerForeground': selectedBase.foreground,
      'settings.modifiedItemIndicator': selectedPalette[variant],
      'settings.dropdownBackground':
        shade === 'light' ? selectedBase.selection : selectedBase.selectionDark,
      'settings.dropdownForeground': selectedBase.foreground,
      'settings.dropdownBorder': selectedBase.selectionDark,
      'settings.dropdownListBorder': selectedBase.selectionDark,
      'settings.checkboxBackground': selectedBase.selectionDark,
      'settings.checkboxForeground': selectedBase.foreground,
      'settings.checkboxBorder': selectedBase.selectionDark,
      'settings.textInputBackground': selectedBase.selectionDark,
      'settings.textInputForeground': selectedBase.foreground,
      'settings.textInputBorder': selectedBase.selectionDark,
      'settings.numberInputBackground': selectedBase.selectionDark,
      'settings.numberInputForeground': selectedBase.foreground,
      'settings.numberInputBorder': selectedBase.selectionDark,

      // Breadcrumb
      'breadcrumb.foreground': selectedBase.foreground,
      'breadcrumb.background': primaryBackgroundColor,
      'breadcrumb.focusForeground': selectedBase.foreground,
      'breadcrumb.activeSelectionForeground': selectedBase.foreground,
      'breadcrumbPicker.background': primaryBackgroundColor,
    },
    tokenColors: [
      {
        scope: [],
        settings: {
          foreground: selectedBase.foreground,
        },
      },
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          fontStyle: 'italic',
          foreground:
            shade === 'light'
              ? selectedBase.text
              : getBaseColor(selectedBase.textMid, selectedBase.textDark),
        },
      },
      {
        name: 'Variables',
        scope: ['variable', 'string constant.other.placeholder', 'source'],
        settings: {
          foreground: selectedBase.foreground,
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
          foreground: selectedPalette.amethyst,
        },
      },
      {
        name: 'Invalid',
        scope: ['invalid', 'invalid.illegal'],
        settings: {
          foreground: selectedPalette.ruby,
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
          foreground: selectedPalette.lapis,
        },
      },
      {
        name: 'Keyword',
        scope: ['keyword'],
        settings: {
          foreground: selectedPalette.amethyst,
        },
      },
      {
        name: 'Constant, Number',
        scope: ['constant.language.boolean', 'constant.numeric'],
        settings: {
          foreground: selectedPalette.amber,
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
          foreground: selectedBase.foreground,
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
          foreground: selectedPalette.aquamarine,
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
          foreground: selectedPalette.ruby,
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
          foreground: selectedPalette.amethyst,
        },
      },
      {
        name: 'Block Level Variables',
        scope: ['meta.block variable.other'],
        settings: {
          foreground: selectedBase.foreground,
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
          foreground: selectedBase.foreground,
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
          foreground: selectedPalette.peridot,
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
          foreground: selectedPalette.lapis,
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
          foreground: selectedPalette.ruby,
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
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Scala',
        scope: 'variable.parameter.scala',
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: 'Sub-methods',
        scope: ['entity.name.module.js', 'variable.import.parameter.js'],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Language methods',
        scope: ['variable.language'],
        settings: {
          fontStyle: 'italic',
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'entity.name.method.js',
        scope: ['entity.name.method.js'],
        settings: {
          fontStyle: 'italic',
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'meta.method.js',
        scope: [
          'meta.class-method.js entity.name.function.js',
          'variable.function.constructor',
        ],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Attributes',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: 'HTML Attributes',
        scope: [
          'text.html.basic entity.other.attribute-name.html',
          'text.html.basic entity.other.attribute-name',
        ],
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: 'CSS Classes',
        scope: [
          'entity.other.attribute-name.class',
          'punctuation.definition.entity.css',
        ],
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: "CSS ID's",
        scope: ['source.sass keyword.control'],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Inserted',
        scope: ['markup.inserted'],
        settings: {
          foreground: selectedPalette.peridot,
        },
      },
      {
        name: 'Deleted',
        scope: ['markup.deleted'],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Changed',
        scope: ['markup.changed'],
        settings: {
          foreground: selectedPalette.amethyst,
        },
      },
      {
        name: 'Regular Expressions',
        scope: ['string.regexp'],
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: 'Escape Characters',
        scope: ['constant.character.escape'],
        settings: {
          foreground: selectedPalette.ruby,
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
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'ES7 Bind Operator',
        scope: [
          'source.js constant.other.object.key.js string.unquoted.label.js',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 0',
        scope: [
          'source.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 1',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 2',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: 'JSON Key - Level 3',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 4',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: 'JSON Key - Level 5',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 6',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: 'JSON Key - Level 7',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 8',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: 'Markup - Italic',
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic',
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Markup - Bold',
        scope: ['markup.bold'],
        settings: {
          fontStyle: 'bold',
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Markup - Underline',
        scope: ['markup.underline'],
        settings: {
          fontStyle: 'underline',
          foreground: selectedPalette.amethyst,
        },
      },
      {
        name: 'Markup - Strike',
        scope: ['markup.strike'],
        settings: {
          fontStyle: 'italic',
          foreground: selectedPalette.amber,
        },
      },
      {
        name: 'Markup - Quote',
        scope: ['markup.quote'],
        settings: {
          fontStyle: 'italic',
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Markup - Raw Block',
        scope: ['markup.raw.block'],
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
      {
        name: 'Markup - Table',
        scope: ['markup.table'],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Markdown - Plain',
        scope: [
          'text.html.markdown',
          'punctuation.definition.list_item.markdown',
        ],
        settings: {
          foreground: selectedBase.foreground,
        },
      },
      {
        name: 'Markdown - Markup Raw Inline',
        scope: [
          'text.html.markdown markup.raw.inline',
          'text.html.markdown markup.inline.raw.string.markdown',
        ],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Markdown - Line Break',
        scope: ['text.html.markdown meta.dummy.line-break'],
        settings: {
          foreground: selectedBase.foreground,
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
          foreground: selectedPalette.peridot,
        },
      },
      {
        name: 'Markdown - Blockquote',
        scope: ['markup.quote', 'punctuation.definition.blockquote.markdown'],
        settings: {
          fontStyle: 'italic',
          foreground: selectedPalette.ruby,
        },
      },
      {
        name: 'Markdown - Link',
        scope: ['string.other.link.title.markdown'],
        settings: {
          fontStyle: 'underline',
          foreground: selectedPalette.amber,
        },
      },
      {
        name: 'Markdown - Raw Block Fenced',
        scope: ['markup.raw.block.fenced.markdown'],
        settings: {
          foreground: selectedBase.foreground,
        },
      },
      {
        name: 'Markdown - Fenced Bode Block',
        scope: [
          'punctuation.definition.fenced.markdown',
          'variable.language.fenced.markdown',
        ],
        settings: {
          foreground: selectedBase.foreground,
        },
      },
      {
        name: 'Markdown - Fenced Language',
        scope: ['variable.language.fenced.markdown'],
        settings: {
          fontStyle: '',
          foreground: selectedBase.foreground,
        },
      },
      {
        name: 'Markdown - Separator',
        scope: ['meta.separator'],
        settings: {
          fontStyle: '',
          foreground: selectedBase.foreground,
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: selectedPalette.amber,
        },
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: selectedPalette.amethyst,
        },
      },
      {
        scope: ['storage.type.error.go'],
        settings: {
          foreground: selectedPalette.ruby,
        },
      },
      {
        scope: 'punctuation.other.period.go',
        settings: {
          foreground: selectedPalette.aquamarine,
        },
      },
    ],
  };
};
