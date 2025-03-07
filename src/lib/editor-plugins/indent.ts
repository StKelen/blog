'use client';

import { ParagraphPlugin } from '@udecode/plate/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { CodeBlockPlugin } from '@udecode/plate-code-block/react';
import { HEADING_LEVELS } from '@udecode/plate-heading';
import { IndentPlugin } from '@udecode/plate-indent/react';
import { TogglePlugin } from '@udecode/plate-toggle/react';

export default IndentPlugin.extend({
  inject: {
    targetPlugins: [
      ParagraphPlugin.key,
      ...HEADING_LEVELS,
      BlockquotePlugin.key,
      CodeBlockPlugin.key,
      TogglePlugin.key,
    ],
  },
});
