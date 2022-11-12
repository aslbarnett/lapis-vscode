import { BasePalette, BaseVariant, ColorPalette, Shade } from '../types';

export default (
  basePalette: BasePalette,
  colorPalette: ColorPalette,
  baseVariant: BaseVariant,
  shade: Shade | undefined
) => {
  function getBaseColor(defaultColor: string, stealthColor: string): string {
    return baseVariant === 'stealth' ? stealthColor : defaultColor;
  }

  return [
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
      name: 'Go Function',
      scope: 'keyword.function.go',
      settings: {
        foreground: colorPalette.lapis,
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
  ];
};
