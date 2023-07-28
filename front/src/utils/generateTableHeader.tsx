export const generateHeader = (header: string) =>
  (header.charAt(0).toUpperCase() + header.slice(1)).replace(/_/g, " ");
