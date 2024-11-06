import { useStore } from "@nanostores/react";
import { TextIcon } from "@webstudio-is/icons";
import { ToolbarToggleItem, Tooltip } from "@webstudio-is/design-system";
import { $isEditMode } from "~/shared/nano-states";
import { emitCommand } from "~/builder/shared/commands";

export const EditorButton = () => {
  const isEditMode = useStore($isEditMode);

  return (
    <Tooltip content="Toggle editor">
      <ToolbarToggleItem
        value="editor"
        aria-label="Toggle editor"
        variant="preview"
        data-state={isEditMode ? "on" : "off"}
        onClick={() => emitCommand("toggleEditor")}
        tabIndex={0}
      >
        <TextIcon />
      </ToolbarToggleItem>
    </Tooltip>
  );
};
