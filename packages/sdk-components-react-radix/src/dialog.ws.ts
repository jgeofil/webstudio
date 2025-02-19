import {
  DialogIcon,
  TriggerIcon,
  ContentIcon,
  OverlayIcon,
  HeadingIcon,
  TextIcon,
  ButtonElementIcon,
} from "@webstudio-is/icons/svg";
import {
  defaultStates,
  type PresetStyle,
  type WsComponentMeta,
  type WsComponentPropsMeta,
} from "@webstudio-is/sdk";
import { div, button, h2, p } from "@webstudio-is/sdk/normalize.css";
import {
  propsDialog,
  propsDialogContent,
  propsDialogTrigger,
  propsDialogOverlay,
  propsDialogClose,
  propsDialogTitle,
  propsDialogDescription,
} from "./__generated__/dialog.props";
import { buttonReset } from "./shared/preset-styles";

const presetStyle = {
  div,
} satisfies PresetStyle<"div">;

const titlePresetStyle = {
  h2,
} satisfies PresetStyle<"h2">;

const descriptionPresetStyle = {
  p,
} satisfies PresetStyle<"p">;

// @todo add [data-state] to button and link
export const metaDialogTrigger: WsComponentMeta = {
  type: "container",
  icon: TriggerIcon,
  stylable: false,
  constraints: {
    relation: "ancestor",
    component: { $eq: "Dialog" },
  },
};

export const metaDialogOverlay: WsComponentMeta = {
  type: "container",
  presetStyle,
  icon: OverlayIcon,
  constraints: [
    {
      relation: "ancestor",
      component: { $eq: "Dialog" },
    },
    {
      relation: "descendant",
      component: { $eq: "DialogContent" },
    },
  ],
};

export const metaDialogContent: WsComponentMeta = {
  type: "container",
  presetStyle,
  icon: ContentIcon,
  constraints: [
    {
      relation: "ancestor",
      component: { $eq: "DialogOverlay" },
    },
    // often deleted by users
    // though radix starts throwing warnings in console
    /*
    {
      relation: "descendant",
      component: { $eq: "DialogTitle" },
    },
    {
      relation: "descendant",
      component: { $eq: "DialogDescription" },
    },
    */
    {
      relation: "descendant",
      component: { $eq: "DialogClose" },
    },
  ],
};

export const metaDialogTitle: WsComponentMeta = {
  type: "container",
  presetStyle: titlePresetStyle,
  icon: HeadingIcon,
  constraints: {
    relation: "ancestor",
    component: { $eq: "DialogContent" },
  },
};

export const metaDialogDescription: WsComponentMeta = {
  type: "container",
  presetStyle: descriptionPresetStyle,
  icon: TextIcon,
  constraints: {
    relation: "ancestor",
    component: { $eq: "DialogContent" },
  },
};

export const metaDialogClose: WsComponentMeta = {
  type: "container",
  presetStyle: {
    button: [buttonReset, button].flat(),
  },
  states: defaultStates,
  icon: ButtonElementIcon,
  label: "Close Button",
  constraints: {
    relation: "ancestor",
    component: { $eq: "DialogContent" },
  },
};

export const metaDialog: WsComponentMeta = {
  type: "container",
  constraints: [
    {
      relation: "descendant",
      component: { $eq: "DialogTrigger" },
    },
    {
      relation: "descendant",
      component: { $eq: "DialogOverlay" },
    },
  ],
  icon: DialogIcon,
  stylable: false,
};

export const propsMetaDialog: WsComponentPropsMeta = {
  props: propsDialog,
  initialProps: [],
};

export const propsMetaDialogTrigger: WsComponentPropsMeta = {
  props: propsDialogTrigger,
};

export const propsMetaDialogContent: WsComponentPropsMeta = {
  props: propsDialogContent,
  initialProps: [],
};

export const propsMetaDialogOverlay: WsComponentPropsMeta = {
  props: propsDialogOverlay,
  initialProps: [],
};

export const propsMetaDialogClose: WsComponentPropsMeta = {
  props: propsDialogClose,
  initialProps: [],
};

export const propsMetaDialogTitle: WsComponentPropsMeta = {
  props: propsDialogTitle,
  initialProps: [],
};

export const propsMetaDialogDescription: WsComponentPropsMeta = {
  props: propsDialogDescription,
  initialProps: [],
};
