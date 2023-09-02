export type ButtonType = {
  onClick: () => void;
  type: string;
  children: React.ReactNode;
  disabled: boolean;
  className: string;
}