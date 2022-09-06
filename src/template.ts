import { base, palette, paletteLight } from './colors';

export type BaseVariant = 'default' | 'stealth';
export type Variant =
  | 'lapis'
  | 'amethyst'
  | 'ruby'
  | 'amber'
  | 'peridot'
  | 'aquamarine';

export const uiTemplate = (name: string, baseVariant: BaseVariant, variant: Variant) => {
  function getBaseColor(defaultColor: string, stealthColor: string): string {
    return baseVariant === 'stealth' ? stealthColor : defaultColor;
  }

  return {
    name: name,
    type: 'dark',
    colors: {
      focusBorder: `${base.selection}50`,
      foreground: base.foreground,
      'widget.shadow': base.shadow,
      'selection.background': `${base.selection}70`,
      descriptionForeground: base.foreground,
      errorForeground: palette.ruby,

      // Editor Group
      'editorGroup.border': base.selection,
      'editorGroup.dropBackground': base.selection,
      'editorGroup.emptyBackground': base.background,
      'editorGroup.focusedEmptyBorder': base.background,
      'editorGroupHeader.noTabsBackground': base.background,
      'editorGroupHeader.tabsBackground': base.backgroundDark,
      'editorGroupHeader.border': base.background,
      'editorGroupHeader.tabsBorder': base.background,

      // Editor
      'editorPane.background': base.background,
      'editor.background': base.background,
      'editor.foreground': base.foreground,
      'editor.selectionBackground': `${base.selection}60`,
      'editor.selectionForeground': base.foreground,
      'editor.inactiveSelectionBackground': `${base.selection}60`,
      'editor.selectionHighlightBackground': `${base.selection}60`,
      'editor.wordHighlightBackground': `${base.selection}60`,
      'editor.wordHighlightStrongBackground': `${base.selection}80`,
      'editor.findMatchBackground': `${base.selection}50`,
      'editor.findMatchHighlightBackground': `${base.selection}50`,
      'editor.findRangeHighlightBackground': `${base.selection}50`,
      'editor.findMatchBorder': palette.lapis,
      'editor.hoverHighlightBackground': `${base.selection}50`,
      'editor.lineHighlightBackground': `${base.selection}50`,
      'editor.lineHighlightBorder': `${base.selection}50`,
      'editor.rangeHighlightBackground': `${base.selection}50`,
      'editorLineNumber.foreground': getBaseColor(base.textMid, base.textDark),
      'editorLineNumber.activeForeground': base.foreground,
      'editorCursor.background': base.background,
      'editorCursor.foreground': palette[variant],
      'editorLink.activeForeground': palette.lapis,
      'editorWhitespace.foreground': `${base.selection}50`,
      'editorIndentGuide.background': base.selectionDark,
      'editorIndentGuide.activeBackground': palette[variant],
      'editorInlayHint.background': base.background,
      'editorInlayHint.foreground': `${base.selection}99`,
      'editorRuler.foreground': base.selection,
      'editorCodeLens.foreground': base.foreground,
      'editorBracketMatch.background': `${base.selection}55`,
      'editorBracketMatch.border': palette.lapis,

      // Editor Overview Ruler
      'editorOverviewRuler.border': base.selection,
      'editorOverviewRuler.findMatchForeground': palette.lapis,
      'editorOverviewRuler.rangeHighlightForeground': base.selection,
      'editorOverviewRuler.selectionHighlightForeground': `${base.selection}50`,
      'editorOverviewRuler.wordHighlightForeground': base.selection,
      'editorOverviewRuler.wordHighlightStrongForeground': base.selection,
      'editorOverviewRuler.modifiedForeground': palette.lapis,
      'editorOverviewRuler.addedForeground': palette.peridot,
      'editorOverviewRuler.deletedForeground': palette.ruby,
      'editorOverviewRuler.errorForeground': palette.ruby,
      'editorOverviewRuler.warningForeground': palette.amber,
      'editorOverviewRuler.infoForeground': palette.lapis,
      'editorOverviewRuler.bracketMatchForeground': palette.lapis,
      'editorOverviewRuler.currentContentForeground': palette.lapis,
      'editorOverviewRuler.incomingContentForeground': palette.peridot,
      'editorOverviewRuler.commonContentForeground': base.selection,

      // Editor Widget
      'editorWidget.background': base.background,
      'editorWidget.border': base.background,
      'editorWidget.foreground': base.foreground,
      'editorSuggestWidget.background': base.background,
      'editorSuggestWidget.border': base.selection,
      'editorSuggestWidget.foreground': base.foreground,
      'editorSuggestWidget.highlightForeground': palette.lapis,
      'editorSuggestWidget.selectedBackground': base.selection,
      'editorHoverWidget.background': base.background,
      'editorHoverWidget.border': base.selection,
      'debugExceptionWidget.background': base.background,
      'debugExceptionWidget.border': base.selection,

      // Editor Marker Navigation
      'editorMarkerNavigation.background': base.background,
      'editorMarkerNavigationError.background': palette.ruby,
      'editorMarkerNavigationWarning.background': palette.amber,
      'editorMarkerNavigationInfo.background': palette.lapis,

      // Diff Editor
      'diffEditor.insertedTextBackground': `${palette.peridot}22`,
      'diffEditor.insertedTextBorder': `${palette.peridot}44`,
      'diffEditor.removedTextBackground': `${palette.ruby}22`,
      'diffEditor.removedTextBorder': `${palette.ruby}44`,
      'diffEditor.border': base.selection,

      // Editor Error
      'editorError.foreground': palette.ruby,
      'editorWarning.foreground': palette.amber,
      'editorInfo.foreground': palette.lapis,
      'editorHint.foreground': palette.aquamarine,

      // Editor Gutter
      'editorGutter.background': base.background,
      'editorGutter.modifiedBackground': palette.lapis,
      'editorGutter.addedBackground': palette.peridot,
      'editorGutter.deletedBackground': palette.ruby,

      // Text
      'textBlockQuote.background': base.selection,
      'textBlockQuote.border': base.selection,
      'textCodeBlock.background': base.background,
      'textLink.activeForeground': palette[variant],
      'textLink.foreground': palette[variant],
      'textPreformat.foreground': base.foreground,
      'textSeparator.foreground': base.foreground,

      // Button
      'button.background': palette[variant],
      'button.foreground': base.background,
      'button.hoverBackground': `${palette[variant]}99`,

      // Dropdown
      'dropdown.background': base.selection,
      'dropdown.listBackground': base.background,
      'dropdown.border': base.selection,
      'dropdown.foreground': base.foreground,

      // Input
      'input.background': base.background,
      'input.border': base.selection,
      'input.foreground': base.foreground,
      'input.placeholderForeground': `${base.selection}50`,
      'inputOption.activeBorder': base.selection,

      // Input Validation
      'inputValidation.errorBackground': base.background,
      'inputValidation.errorForeground': palette.ruby,
      'inputValidation.errorBorder': palette.ruby,
      'inputValidation.infoBackground': base.background,
      'inputValidation.infoForeground': palette.lapis,
      'inputValidation.infoBorder': palette.lapis,
      'inputValidation.warningBackground': base.background,
      'inputValidation.warningForeground': palette.amber,
      'inputValidation.warningBorder': palette.amber,

      // Scrollbar
      'scrollbar.shadow': base.shadow,
      'scrollbarSlider.activeBackground': `${base.selection}50`,
      'scrollbarSlider.background': `${base.selection}55`,
      'scrollbarSlider.hoverBackground': `${base.selection}99`,

      // Badge
      'badge.foreground': base.background,
      'badge.background': palette[variant],

      // Progress Bar
      'progressBar.background': palette[variant],

      // List
      'list.activeSelectionBackground': `${base.selection}50`,
      'list.activeSelectionForeground': base.foreground,
      'list.dropBackground': base.selection,
      'list.focusBackground': base.selection,
      'list.focusForeground': base.foreground,
      'list.highlightForeground': base.foreground,
      'list.hoverBackground': `${base.selection}50`,
      'list.hoverForeground': base.textMid,
      'list.inactiveSelectionBackground': `${base.selection}80`,
      'list.inactiveSelectionForeground': base.foreground,
      'list.inactiveFocusBackground': `${base.selection}80`,
      'list.invalidItemForeground': palette.ruby,
      'list.errorForeground': palette.ruby,
      'list.warningForeground': palette.amber,
      'listFilterWidget.background': base.background,
      'listFilterWidget.outline': base.selection,
      'listFilterWidget.noMatchesOutline': palette.ruby,

      // Tree
      'tree.indentGuidesStroke': base.selection,

      // Activity Bar
      'activityBar.background': base.background,
      'activityBar.dropBorder': base.selection,
      'activityBar.foreground': base.foreground,
      'activityBar.inactiveForeground': getBaseColor(base.textMid, base.textDark),
      'activityBar.border': base.background,
      'activityBarBadge.background': palette[variant],
      'activityBarBadge.foreground': base.background,

      // Side Bar
      'sideBar.background': base.backgroundDark,
      'sideBar.foreground': getBaseColor(base.foreground, base.selection),
      'sideBarTitle.foreground': palette[variant],
      'sideBarSectionHeader.background': base.backgroundDark,
      'sideBarSectionHeader.foreground': palette[variant],
      'sideBarSectionHeader.border': base.background,

      // Tab
      'tab.activeBackground': base.background,
      'tab.unfocusedActiveBackground': base.background,
      'tab.activeForeground': base.foreground,
      'tab.border': base.backgroundDark,
      'tab.activeBorderTop': palette[variant],
      'tab.unfocusedActiveBorderTop': base.background,
      'tab.inactiveBackground': base.backgroundDark,
      'tab.inactiveForeground': getBaseColor(base.textMid, base.textDark),
      'tab.unfocusedActiveForeground': base.foreground,
      'tab.unfocusedInactiveForeground': getBaseColor(base.textMid, base.textDark),
      'tab.hoverForeground': palette[variant],

      // Peek View
      'peekView.border': palette.lapis,
      'peekViewEditor.background': base.selection,
      'peekViewEditorGutter.background': base.background,
      'peekViewEditor.matchHighlightBackground': `${base.selection}50`,
      'peekViewEditor.matchHighlightBorder': palette.lapis,
      'peekViewResult.background': base.selection,
      'peekViewResult.fileForeground': base.selection,
      'peekViewResult.lineForeground': base.foreground,
      'peekViewResult.matchHighlightBackground': `${palette.lapis}33`,
      'peekViewResult.selectionBackground': base.selection,
      'peekViewResult.selectionForeground': base.foreground,
      'peekViewTitle.background': base.selection,
      'peekViewTitleDescription.foreground': base.selection,
      'peekViewTitleLabel.foreground': base.selection,

      // Icon
      'icon.foreground': base.foreground,

      // Checkbox
      'checkbox.background': base.background,
      'checkbox.foreground': base.foreground,
      'checkbox.border': base.background,

      // Merge
      'merge.currentHeaderBackground': `${palette.lapis}70`,
      'merge.currentContentBackground': `${palette.lapis}22`,
      'merge.incomingHeaderBackground': `${palette.peridot}70`,
      'merge.incomingContentBackground': `${palette.peridot}22`,
      'merge.border': base.selection,
      'merge.commonHeaderBackground': `${base.selection}70`,
      'merge.commonContentBackground': `${base.selection}55`,

      // Panel
      'panel.background': base.background,
      'panel.border': palette[variant],
      'panel.dropBorder': base.selection,
      'panelTitle.activeBorder': palette[variant],
      'panelTitle.activeForeground': base.foreground,
      'panelTitle.inactiveForeground': getBaseColor(base.textMid, base.textDark),
      'panelInput.border': base.selection,
      'panelSection.border': base.selection,
      'panelSection.dropBackground': base.selection,
      'panelSectionHeader.background': base.background,
      'panelSectionHeader.foreground': palette[variant],

      // Status Bar
      'statusBar.background': base.background,
      'statusBar.foreground': base.foreground,
      'statusBar.border': base.background,
      'statusBar.debuggingBackground': palette.amber,
      'statusBar.debuggingForeground': base.background,
      'statusBar.noFolderBackground': palette.ruby,
      'statusBar.noFolderForeground': base.background,
      'statusBarItem.activeBackground': base.selection,
      'statusBarItem.hoverBackground': base.background,
      'statusBarItem.remoteBackground': palette.peridot,
      'statusBarItem.remoteForeground': base.background,

      // Title Bar
      'titleBar.activeBackground': base.background,
      'titleBar.activeForeground': base.foreground,
      'titleBar.inactiveBackground': base.background,
      'titleBar.inactiveForeground': base.selection,
      'titleBar.border': base.background,

      // Menu
      'menubar.selectionForeground': base.foreground,
      'menubar.selectionBackground': base.selection,
      'menu.foreground': base.foreground,
      'menu.background': base.background,
      'menu.selectionForeground': base.foreground,
      'menu.selectionBackground': base.selection,

      // Notifications
      'notificationCenter.border': base.background,
      'notificationCenterHeader.foreground': base.foreground,
      'notificationCenterHeader.background': base.background,
      'notificationToast.border': base.background,
      'notifications.foreground': base.foreground,
      'notifications.background': base.background,
      'notifications.border': base.background,
      'notificationLink.foreground': base.foreground,

      // Extension Button
      'extensionButton.prominentBackground': palette[variant],
      'extensionButton.prominentForeground': base.background,
      'extensionButton.prominentHoverBackground': `${base.selection}50`,

      // Picker Group
      'pickerGroup.border': base.selection,
      'pickerGroup.foreground': palette[variant],

      // Terminal
      'terminal.background': base.background,
      'terminal.border': palette[variant],
      'terminal.foreground': base.foreground,
      'terminal.ansiBlack': base.selectionDark,
      'terminal.ansiBlue': palette.lapis,
      'terminal.ansiBrightBlue': paletteLight.lapis,
      'terminal.ansiBrightCyan': paletteLight.aquamarine,
      'terminal.ansiBrightGreen': paletteLight.peridot,
      'terminal.ansiBrightBlack': base.selection,
      'terminal.ansiBrightMagenta': paletteLight.amethyst,
      'terminal.ansiBrightRed': paletteLight.ruby,
      'terminal.ansiBrightWhite': base.foreground,
      'terminal.ansiBrightYellow': paletteLight.amber,
      'terminal.ansiCyan': palette.aquamarine,
      'terminal.ansiGreen': palette.peridot,
      'terminal.ansiMagenta': palette.amethyst,
      'terminal.ansiRed': palette.ruby,
      'terminal.ansiWhite': base.foreground,
      'terminal.ansiYellow': palette.amber,
      'terminal.selectionBackground': `${base.selection}33`,
      'terminalCursor.background': palette[variant],
      'terminalCursor.foreground': palette[variant],

      // Debug Toolbar
      'debugToolBar.background': base.selection,
      'debugToolBar.border': base.selection,

      // Welcome Page
      'welcomePage.buttonBackground': base.selection,
      'welcomePage.buttonHoverBackground': `${base.selection}99`,
      'walkThrough.embeddedEditorBackground': base.background,

      // Git Decoration
      'gitDecoration.modifiedResourceForeground': palette.lapis,
      'gitDecoration.deletedResourceForeground': palette.ruby,
      'gitDecoration.untrackedResourceForeground': palette.peridot,
      'gitDecoration.ignoredResourceForeground': `${base.selection}70`,
      'gitDecoration.conflictingResourceForeground': palette.ruby,

      // Settings
      'settings.headerForeground': base.foreground,
      'settings.modifiedItemIndicator': palette[variant],
      'settings.dropdownBackground': base.selectionDark,
      'settings.dropdownForeground': base.foreground,
      'settings.dropdownBorder': base.selectionDark,
      'settings.dropdownListBorder': base.selectionDark,
      'settings.checkboxBackground': base.selectionDark,
      'settings.checkboxForeground': base.foreground,
      'settings.checkboxBorder': base.selectionDark,
      'settings.textInputBackground': base.selectionDark,
      'settings.textInputForeground': base.foreground,
      'settings.textInputBorder': base.selectionDark,
      'settings.numberInputBackground': base.selectionDark,
      'settings.numberInputForeground': base.foreground,
      'settings.numberInputBorder': base.selectionDark,

      // Breadcrumb
      'breadcrumb.foreground': base.foreground,
      'breadcrumb.background': base.background,
      'breadcrumb.focusForeground': base.foreground,
      'breadcrumb.activeSelectionForeground': base.foreground,
      'breadcrumbPicker.background': base.background,
    },
    tokenColors: [
      {
        scope: [],
        settings: {
          foreground: base.foreground,
        },
      },
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          fontStyle: 'italic',
          foreground: getBaseColor(base.textMid, base.textDark),
        },
      },
      {
        name: 'Variables',
        scope: ['variable', 'string constant.other.placeholder', 'source'],
        settings: {
          foreground: base.foreground,
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
          foreground: palette.amethyst,
        },
      },
      {
        name: 'Invalid',
        scope: ['invalid', 'invalid.illegal'],
        settings: {
          foreground: palette.ruby,
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
          foreground: palette.lapis,
        },
      },
      {
        name: 'Keyword',
        scope: ['keyword'],
        settings: {
          foreground: palette.amethyst,
        },
      },
      {
        name: 'Constant, Number',
        scope: ['constant.language.boolean', 'constant.numeric'],
        settings: {
          foreground: palette.amber,
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
          foreground: base.foreground,
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
          foreground: palette.aquamarine,
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
          foreground: palette.ruby,
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
          foreground: palette.amethyst,
        },
      },
      {
        name: 'Block Level Variables',
        scope: ['meta.block variable.other'],
        settings: {
          foreground: base.foreground,
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
          foreground: base.foreground,
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
          foreground: palette.peridot,
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
          foreground: palette.lapis,
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
          foreground: palette.ruby,
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
          foreground: palette.ruby,
        },
      },
      {
        name: 'Sub-methods',
        scope: ['entity.name.module.js', 'variable.import.parameter.js'],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'Language methods',
        scope: ['variable.language'],
        settings: {
          fontStyle: 'italic',
          foreground: palette.ruby,
        },
      },
      {
        name: 'entity.name.method.js',
        scope: ['entity.name.method.js'],
        settings: {
          fontStyle: 'italic',
          foreground: palette.ruby,
        },
      },
      {
        name: 'meta.method.js',
        scope: [
          'meta.class-method.js entity.name.function.js',
          'variable.function.constructor',
        ],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'Attributes',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: palette.aquamarine,
        },
      },
      {
        name: 'HTML Attributes',
        scope: [
          'text.html.basic entity.other.attribute-name.html',
          'text.html.basic entity.other.attribute-name',
        ],
        settings: {
          foreground: palette.aquamarine,
        },
      },
      {
        name: 'CSS Classes',
        scope: [
          'entity.other.attribute-name.class',
          'punctuation.definition.entity.css',
        ],
        settings: {
          foreground: palette.aquamarine,
        },
      },
      {
        name: "CSS ID's",
        scope: ['source.sass keyword.control'],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'Inserted',
        scope: ['markup.inserted'],
        settings: {
          foreground: palette.peridot,
        },
      },
      {
        name: 'Deleted',
        scope: ['markup.deleted'],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'Changed',
        scope: ['markup.changed'],
        settings: {
          foreground: palette.amethyst,
        },
      },
      {
        name: 'Regular Expressions',
        scope: ['string.regexp'],
        settings: {
          foreground: palette.aquamarine,
        },
      },
      {
        name: 'Escape Characters',
        scope: ['constant.character.escape'],
        settings: {
          foreground: palette.ruby,
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
          foreground: palette.ruby,
        },
      },
      {
        name: 'ES7 Bind Operator',
        scope: [
          'source.js constant.other.object.key.js string.unquoted.label.js',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: palette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 0',
        scope: [
          'source.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 1',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 2',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: palette.aquamarine,
        },
      },
      {
        name: 'JSON Key - Level 3',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 4',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: palette.aquamarine,
        },
      },
      {
        name: 'JSON Key - Level 5',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 6',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: palette.aquamarine,
        },
      },
      {
        name: 'JSON Key - Level 7',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'JSON Key - Level 8',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: palette.aquamarine,
        },
      },
      {
        name: 'Markup - Italic',
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic',
          foreground: palette.ruby,
        },
      },
      {
        name: 'Markup - Bold',
        scope: ['markup.bold'],
        settings: {
          fontStyle: 'bold',
          foreground: palette.ruby,
        },
      },
      {
        name: 'Markup - Underline',
        scope: ['markup.underline'],
        settings: {
          fontStyle: 'underline',
          foreground: palette.amethyst,
        },
      },
      {
        name: 'Markup - Strike',
        scope: ['markup.strike'],
        settings: {
          fontStyle: 'italic',
          foreground: palette.amber,
        },
      },
      {
        name: 'Markup - Quote',
        scope: ['markup.quote'],
        settings: {
          fontStyle: 'italic',
          foreground: palette.ruby,
        },
      },
      {
        name: 'Markup - Raw Block',
        scope: ['markup.raw.block'],
        settings: {
          foreground: palette.aquamarine,
        },
      },
      {
        name: 'Markup - Table',
        scope: ['markup.table'],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'Markdown - Plain',
        scope: [
          'text.html.markdown',
          'punctuation.definition.list_item.markdown',
        ],
        settings: {
          foreground: base.foreground,
        },
      },
      {
        name: 'Markdown - Markup Raw Inline',
        scope: [
          'text.html.markdown markup.raw.inline',
          'text.html.markdown markup.inline.raw.string.markdown',
        ],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        name: 'Markdown - Line Break',
        scope: ['text.html.markdown meta.dummy.line-break'],
        settings: {
          foreground: base.foreground,
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
          foreground: palette.peridot,
        },
      },
      {
        name: 'Markdown - Blockquote',
        scope: ['markup.quote', 'punctuation.definition.blockquote.markdown'],
        settings: {
          fontStyle: 'italic',
          foreground: palette.ruby,
        },
      },
      {
        name: 'Markdown - Link',
        scope: ['string.other.link.title.markdown'],
        settings: {
          fontStyle: 'underline',
          foreground: palette.amber,
        },
      },
      {
        name: 'Markdown - Raw Block Fenced',
        scope: ['markup.raw.block.fenced.markdown'],
        settings: {
          foreground: base.foreground,
        },
      },
      {
        name: 'Markdown - Fenced Bode Block',
        scope: [
          'punctuation.definition.fenced.markdown',
          'variable.language.fenced.markdown',
        ],
        settings: {
          foreground: base.foreground,
        },
      },
      {
        name: 'Markdown - Fenced Language',
        scope: ['variable.language.fenced.markdown'],
        settings: {
          fontStyle: '',
          foreground: base.foreground,
        },
      },
      {
        name: 'Markdown - Separator',
        scope: ['meta.separator'],
        settings: {
          fontStyle: '',
          foreground: base.foreground,
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: palette.amber,
        },
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: palette.amethyst,
        },
      },
      {
        scope: ['storage.type.error.go'],
        settings: {
          foreground: palette.ruby,
        },
      },
      {
        scope: 'punctuation.other.period.go',
        settings: {
          foreground: palette.aquamarine,
        },
      },
    ],
  };
};
