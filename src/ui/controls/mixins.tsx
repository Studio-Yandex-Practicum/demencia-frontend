export interface TextUppercaseProps {
  uppercase?: boolean;
}

export const textUppercaseMixIn = (props: TextUppercaseProps): string => {
  if (!props.uppercase) {
    return "";
  }

  return `
    text-transform: uppercase;
  `;
};
