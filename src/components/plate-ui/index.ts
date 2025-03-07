import { withProps } from '@udecode/cn';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { EquationPlugin } from '@udecode/plate-math/react';
import { ParagraphPlugin, PlateLeaf } from '@udecode/plate/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { SlashInputPlugin } from '@udecode/plate-slash-command/react';
import { ImagePlugin, PlaceholderPlugin } from '@udecode/plate-media/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { ColumnPlugin, ColumnItemPlugin } from '@udecode/plate-layout/react';
import { CodeBlockPlugin, CodeLinePlugin, CodeSyntaxPlugin } from '@udecode/plate-code-block/react';
import {
  TablePlugin,
  TableRowPlugin,
  TableCellPlugin,
  TableCellHeaderPlugin,
} from '@udecode/plate-table/react';
import {
  CodePlugin,
  BoldPlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';

import { TogglePlugin } from '@udecode/plate-toggle/react';
import { HrElement } from '@/components/plate-ui/hr-element';
import { ToggleElement } from '@/components/plate-ui/toggle-element';
import { withPlaceholders } from '@/components/plate-ui/placeholder';
import { HeadingElement } from '@/components/plate-ui/heading-element';
import { EquationElement } from '@/components/plate-ui/equation-element';
import { ParagraphElement } from '@/components/plate-ui/paragraph-element';
import { BlockquoteElement } from '@/components/plate-ui/blockquote-element';
import { SlashInputElement } from '@/components/plate-ui/slash-input-element';

import { CodeLeaf } from '@/components/plate-ui/code-leaf';
import { CodeSyntaxLeaf } from '@/components/plate-ui/code-syntax-leaf';
import { CodeLineElement } from '@/components/plate-ui/code-line-element';
import { CodeBlockElement } from '@/components/plate-ui/code-block-element';

import { ColumnElement } from '@/components/plate-ui/column-element';
import { ColumnGroupElement } from '@/components/plate-ui/column-group-element';

import { TableElement } from '@/components/plate-ui/table-element';
import { TableRowElement } from '@/components/plate-ui/table-row-element';
import { TableCellElement, TableCellHeaderElement } from '@/components/plate-ui/table-cell-element';

import { ImageElement } from '@/components/plate-ui/image-element';
import { MediaPlaceholderElement } from '@/components/plate-ui/media-placeholder-element';

const editorComponents = {
  [SlashInputPlugin.key]: SlashInputElement,

  [ParagraphPlugin.key]: ParagraphElement,
  [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: 'h1' }),
  [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: 'h2' }),
  [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: 'h3' }),
  [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: 'h4' }),
  [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: 'h5' }),
  [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: 'h6' }),
  

  [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
  [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
  [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
  [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),

  [TogglePlugin.key]: ToggleElement,
  [HorizontalRulePlugin.key]: HrElement,
  [EquationPlugin.key]: EquationElement,
  [BlockquotePlugin.key]: BlockquoteElement,

  [CodePlugin.key]: CodeLeaf,
  [CodeLinePlugin.key]: CodeLineElement,
  [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
  [CodeBlockPlugin.key]: CodeBlockElement,

  [ColumnItemPlugin.key]: ColumnElement,
  [ColumnPlugin.key]: ColumnGroupElement,

  [TablePlugin.key]: TableElement,
  [TableRowPlugin.key]: TableRowElement,
  [TableCellPlugin.key]: TableCellElement,
  [TableCellHeaderPlugin.key]: TableCellHeaderElement,

  [ImagePlugin.key]: ImageElement,
  [PlaceholderPlugin.key]: MediaPlaceholderElement,
};

export default withPlaceholders(editorComponents);
