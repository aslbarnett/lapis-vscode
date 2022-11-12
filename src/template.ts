import { alpha, generateColorPalette } from './helpers';
import base from './editor/base';
import { Shade, BaseVariant, Variant } from './types';
import tokens from './editor/tokens';

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
  const {
    basePalette,
    colorPalette,
    lightColorPalette,
    primaryBgColor: primaryBackgroundColor,
    secondaryBgColor: secondaryBackgroundColor,
  } = generateColorPalette(shade);

  function getBaseColor(defaultColor: string, stealthColor: string): string {
    return baseVariant === 'stealth' ? stealthColor : defaultColor;
  }

  return {
    name: name,
    type: 'dark',
    colors: {
      ...base(basePalette, colorPalette),

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
      'editor.selectionBackground': alpha(basePalette.selection, 0.6),
      'editor.selectionForeground': basePalette.foreground,
      'editor.inactiveSelectionBackground': alpha(basePalette.selection, 0.6),
      'editor.selectionHighlightBackground': alpha(basePalette.selection, 0.6),
      'editor.wordHighlightBackground': alpha(basePalette.selection, 0.6),
      'editor.wordHighlightStrongBackground': alpha(basePalette.selection, 0.8),
      'editor.findMatchBackground': alpha(basePalette.selection, 0.5),
      'editor.findMatchHighlightBackground': alpha(basePalette.selection, 0.5),
      'editor.findRangeHighlightBackground': alpha(basePalette.selection, 0.5),
      'editor.findMatchBorder': colorPalette.lapis,
      'editor.hoverHighlightBackground': alpha(basePalette.selection, 0.5),
      'editor.lineHighlightBackground': alpha(basePalette.selection, 0.5),
      'editor.lineHighlightBorder': alpha(basePalette.selection, 0.5),
      'editor.rangeHighlightBackground': alpha(basePalette.selection, 0.5),
      'editorLineNumber.foreground':
        shade === 'light'
          ? basePalette.text
          : getBaseColor(basePalette.textMid, basePalette.textDark),
      'editorLineNumber.activeForeground':
        shade === 'light' ? colorPalette[variant] : basePalette.foreground,
      'editorCursor.background': primaryBackgroundColor,
      'editorCursor.foreground': colorPalette[variant],
      'editorLink.activeForeground': colorPalette.lapis,
      'editorWhitespace.foreground': alpha(basePalette.selection, 0.5),
      'editorIndentGuide.background':
        shade === 'light' ? basePalette.selection : basePalette.selectionDark,
      'editorIndentGuide.activeBackground': colorPalette[variant],
      'editorInlayHint.background': primaryBackgroundColor,
      'editorInlayHint.foreground': alpha(basePalette.selection, 0.99),
      'editorRuler.foreground': basePalette.selection,
      'editorCodeLens.foreground': basePalette.foreground,
      'editorBracketMatch.background': alpha(basePalette.selection, 0.6),
      'editorBracketMatch.border': colorPalette.lapis,

      // Editor Overview Ruler
      'editorOverviewRuler.border': basePalette.selection,
      'editorOverviewRuler.findMatchForeground': colorPalette.lapis,
      'editorOverviewRuler.rangeHighlightForeground': basePalette.selection,
      'editorOverviewRuler.selectionHighlightForeground': alpha(
        basePalette.selection,
        0.5
      ),
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
      'diffEditor.insertedTextBackground': alpha(colorPalette.peridot, 0.22),
      'diffEditor.insertedTextBorder': alpha(colorPalette.peridot, 0.44),
      'diffEditor.removedTextBackground': alpha(colorPalette.ruby, 0.22),
      'diffEditor.removedTextBorder': alpha(colorPalette.ruby, 0.44),
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
      'button.hoverBackground': alpha(colorPalette[variant], 0.99),

      // Dropdown
      'dropdown.background': basePalette.selection,
      'dropdown.listBackground': primaryBackgroundColor,
      'dropdown.border': basePalette.selection,
      'dropdown.foreground': basePalette.foreground,

      // Input
      'input.background': primaryBackgroundColor,
      'input.border': basePalette.selection,
      'input.foreground': basePalette.foreground,
      'input.placeholderForeground': alpha(basePalette.selection, 0.5),
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
      'scrollbarSlider.activeBackground': alpha(basePalette.selection, 0.5),
      'scrollbarSlider.background': alpha(basePalette.selection, 0.6),
      'scrollbarSlider.hoverBackground': alpha(basePalette.selection, 0.99),

      // Badge
      'badge.foreground': primaryBackgroundColor,
      'badge.background': colorPalette[variant],

      // Progress Bar
      'progressBar.background': colorPalette[variant],

      // List
      'list.activeSelectionBackground':
        shade === 'light'
          ? alpha(basePalette.selectionDark, 0.7)
          : alpha(basePalette.selectionDark, 0.9),
      'list.activeSelectionForeground': basePalette.foreground,
      'list.dropBackground':
        shade === 'light'
          ? alpha(basePalette.selectionDark, 0.7)
          : alpha(basePalette.selectionDark, 0.9),
      'list.focusBackground':
        shade === 'light'
          ? alpha(basePalette.selectionDark, 0.7)
          : alpha(basePalette.selectionDark, 0.9),
      'list.focusForeground': basePalette.foreground,
      'list.highlightForeground': basePalette.foreground,
      'list.hoverBackground': alpha(basePalette.selection, 0.5),
      'list.hoverForeground': basePalette.textMid,
      'list.inactiveSelectionBackground':
        shade === 'light'
          ? alpha(basePalette.selectionDark, 0.7)
          : alpha(basePalette.selectionDark, 0.9),
      'list.inactiveSelectionForeground': basePalette.foreground,
      'list.inactiveFocusBackground':
        shade === 'light'
          ? alpha(basePalette.selectionDark, 0.7)
          : alpha(basePalette.selectionDark, 0.9),
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
      'peekViewEditor.background': alpha(basePalette.selectionDark, 0.5),
      'peekViewEditorGutter.background': primaryBackgroundColor,
      'peekViewEditor.matchHighlightBackground': alpha(
        basePalette.selection,
        0.5
      ),
      'peekViewEditor.matchHighlightBorder': basePalette.foreground,
      'peekViewResult.background': alpha(basePalette.selectionDark, 0.5),
      'peekViewResult.fileForeground': basePalette.foreground,
      'peekViewResult.lineForeground': colorPalette[variant],
      'peekViewResult.matchHighlightBackground': basePalette.selectionDark,
      'peekViewResult.selectionBackground': basePalette.selection,
      'peekViewResult.selectionForeground': basePalette.foreground,
      'peekViewTitle.background': alpha(basePalette.selectionDark, 0.5),
      'peekViewTitleDescription.foreground': basePalette.foreground,
      'peekViewTitleLabel.foreground': basePalette.foreground,

      // Icon
      'icon.foreground': basePalette.foreground,

      // Checkbox
      'checkbox.background': primaryBackgroundColor,
      'checkbox.foreground': basePalette.foreground,
      'checkbox.border': primaryBackgroundColor,

      // Merge
      'merge.currentHeaderBackground': alpha(colorPalette.lapis, 0.7),
      'merge.currentContentBackground': alpha(colorPalette.lapis, 0.22),
      'merge.incomingHeaderBackground': alpha(colorPalette.peridot, 0.7),
      'merge.incomingContentBackground': alpha(colorPalette.peridot, 0.22),
      'merge.border': basePalette.selection,
      'merge.commonHeaderBackground': alpha(basePalette.selection, 0.7),
      'merge.commonContentBackground': alpha(basePalette.selection, 0.6),

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
      'extensionButton.prominentHoverBackground': alpha(
        basePalette.selection,
        0.5
      ),

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
      'terminal.selectionBackground': alpha(basePalette.selection, 0.33),
      'terminalCursor.background': colorPalette[variant],
      'terminalCursor.foreground': colorPalette[variant],

      // Debug Toolbar
      'debugToolBar.background': basePalette.selection,
      'debugToolBar.border': basePalette.selection,

      // Welcome Page
      'welcomePage.buttonBackground': basePalette.selection,
      'welcomePage.buttonHoverBackground': alpha(basePalette.selection, 0.99),
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
    tokenColors: tokens(basePalette, colorPalette, baseVariant, shade),
  };
};
