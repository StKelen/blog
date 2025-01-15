import { usePlateEditor } from '@udecode/plate/react';

import components from '../components';
import plugins from '../plugins';

export const useCreateEditor = () => {
  return usePlateEditor({
    override: {
      components: components,
    },
    plugins: plugins,
    value: [],
  });
};
