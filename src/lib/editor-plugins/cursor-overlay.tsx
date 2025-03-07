import { CursorOverlay } from '@/components/plate-ui/cursor-overlay';
import { CursorOverlayPlugin } from '@udecode/plate-selection/react';

export default CursorOverlayPlugin.configure({
  render: { afterEditable: () => <CursorOverlay /> },
});
