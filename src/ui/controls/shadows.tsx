import { css } from "styled-components";

export const shadowHoverButtonMixIn = css`
  box-shadow: 5px 5px 20px 2px ${(p) => p.theme.colors.shadow};
`;

export const shadowLargeButtonMixIn = css`
  box-shadow: 5px 5px 15px 2px ${(p) => p.theme.colors.shadow};
`;

export const shadowHoverLargeButtonMixIn = css`
  box-shadow: 5px 5px 20px 4px ${(p) => p.theme.colors.shadow};
`;

export const shadowCardMixIn = css`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
`;

export const shadowPopupMixIn = css`
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
`;
