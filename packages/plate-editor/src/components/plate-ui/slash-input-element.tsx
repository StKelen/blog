'use client';
import { withRef } from '@udecode/cn';
import { type PlateEditor, ParagraphPlugin } from '@udecode/plate/react';

import { HEADING_KEYS } from '@udecode/plate-heading';
import { TablePlugin } from '@udecode/plate-table/react';
import { TogglePlugin } from '@udecode/plate-toggle/react';
import { CodeBlockPlugin } from '@udecode/plate-code-block/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { INDENT_LIST_KEYS, ListStyleType } from '@udecode/plate-indent-list';
import { EquationPlugin } from '@udecode/plate-math/react';

import { insertBlock } from '@/lib/transforms';

import {
  InlineCombobox,
  InlineComboboxContent,
  InlineComboboxEmpty,
  InlineComboboxGroup,
  InlineComboboxInput,
  InlineComboboxItem,
} from './inline-combobox';
import { PlateElement } from './plate-element';

type Group = {
  group: string;
  items: Item[];
};

interface Item {
  icon: string;

  onSelect: (editor: PlateEditor, value: string) => void;

  value: string;
  className?: string;
  focusEditor?: boolean;
  keywords?: string[];
  label?: string;
}

const groups: Group[] = [
  {
    group: 'Basic blocks',
    items: [
      {
        icon: 'ri-paragraph',
        keywords: ['paragraph'],
        label: 'Text',
        value: ParagraphPlugin.key,
      },
      {
        icon: 'ri-h-1',
        keywords: ['title', 'h1'],
        label: 'Heading 1',
        value: HEADING_KEYS.h1,
      },
      {
        icon: 'ri-h-2',
        keywords: ['subtitle', 'h2'],
        label: 'Heading 2',
        value: HEADING_KEYS.h2,
      },
      {
        icon: 'ri-h-3',
        keywords: ['subtitle', 'h3'],
        label: 'Heading 3',
        value: HEADING_KEYS.h3,
      },
      {
        icon: 'ri-list-unordered',
        keywords: ['unordered', 'ul', '-'],
        label: 'Bulleted list',
        value: ListStyleType.Disc,
      },
      {
        icon: 'ri-list-ordered',
        keywords: ['ordered', 'ol', '1'],
        label: 'Numbered list',
        value: ListStyleType.Decimal,
      },
      {
        icon: 'ri-list-check-3',
        keywords: ['checklist', 'task', 'checkbox', '[]'],
        label: 'To-do list',
        value: INDENT_LIST_KEYS.todo,
      },
      {
        icon: 'ri-dropdown-list',
        keywords: ['collapsible', 'expandable'],
        label: 'Toggle',
        value: TogglePlugin.key,
      },
      {
        icon: 'ri-code-s-slash-line',
        keywords: ['```'],
        label: 'Code Block',
        value: CodeBlockPlugin.key,
      },
      {
        icon: 'ri-table-3',
        label: 'Table',
        value: TablePlugin.key,
      },
      {
        icon: 'ri-quote-text',
        keywords: ['citation', 'blockquote', 'quote', '>'],
        label: 'Blockquote',
        value: BlockquotePlugin.key,
      },
      {
        icon: 'ri-separator',
        keywords: ['divide', 'horizontal', '---'],
        label: 'Horizontal Rule',
        value: HorizontalRulePlugin.key,
      },
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      },
    })),
  },
  {
    group: 'Advanced blocks',
    items: [
      {
        icon: 'ri-layout-column-line',
        label: 'Column',
        value: 'action_three_columns',
      },
      {
        focusEditor: false,
        icon: 'ri-square-root',
        label: 'Equation',
        value: EquationPlugin.key,
      },
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      },
    })),
  },
];

export const SlashInputElement = withRef<typeof PlateElement>(({ className, ...props }, ref) => {
  const { children, editor, element } = props;

  return (
    <PlateElement
      ref={ref}
      as="span"
      className={className}
      data-slate-value={element.value}
      {...props}
    >
      <InlineCombobox element={element} trigger="/">
        <InlineComboboxInput />
        <InlineComboboxContent>
          <InlineComboboxEmpty>No results</InlineComboboxEmpty>
          {groups.map(({ group, items }) => (
            <InlineComboboxGroup key={group} heading={group}>
              {items.map(({ focusEditor, icon, keywords, label, value, onSelect }) => (
                <InlineComboboxItem
                  key={value}
                  value={value}
                  onSelect={() => onSelect(editor, value)}
                  focusEditor={focusEditor}
                  group={group}
                  keywords={keywords}
                >
                  <div className="mr-2 text-muted-foreground">
                    <i className={icon} />
                  </div>
                  {label ?? value}
                </InlineComboboxItem>
              ))}
            </InlineComboboxGroup>
          ))}
        </InlineComboboxContent>
      </InlineCombobox>

      {children}
    </PlateElement>
  );
});
