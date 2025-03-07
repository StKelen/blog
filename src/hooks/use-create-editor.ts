import { usePlateEditor } from '@udecode/plate/react';

import components from '@/components/plate-ui';
import plugins from '@/lib/editor-plugins';

export const useCreateEditor = () => {
  return usePlateEditor({
    override: {
      components: components,
    },
    plugins: plugins,
    value: [],
  });
};
