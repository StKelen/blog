import { ImagePlugin } from '@udecode/plate-media/react';
import { SelectOnBackspacePlugin } from '@udecode/plate-select';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';

export default SelectOnBackspacePlugin.configure({
  options: {
    query: {
      allow: [ImagePlugin.key, HorizontalRulePlugin.key],
    },
  },
});
