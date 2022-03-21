export type SearchBoxProps = {
  isOpen: boolean;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
  className?: string;
};
