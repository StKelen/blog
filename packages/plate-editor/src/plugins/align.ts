import { ParagraphPlugin } from '@udecode/plate/react';
import { HEADING_LEVELS } from '@udecode/plate-heading';
import { ImagePlugin } from '@udecode/plate-media/react';
import { AlignPlugin } from '@udecode/plate-alignment/react';

export default AlignPlugin.extend({
  inject: {
    targetPlugins: [ParagraphPlugin.key, ...HEADING_LEVELS, ImagePlugin.key],
  },
});
