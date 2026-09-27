import Tippy from "@tippyjs/react";

interface Props {
  children: React.ReactElement;
  content: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  /** Keep the tooltip open on click, e.g. so a "Copied!" message can show. */
  hideOnClick?: boolean;
}

// The site's one tooltip, styled like its cards by the "site" theme in
// globals.css.
export const Tooltip = (props: Props) => {
  return (
    <Tippy
      content={props.content}
      placement={props.placement ?? "top"}
      hideOnClick={props.hideOnClick ?? true}
      theme="site"
      arrow={false}
      offset={[0, 8]}
      animation="site"
      duration={[200, 150]}
      maxWidth={320}
    >
      {props.children}
    </Tippy>
  );
};
