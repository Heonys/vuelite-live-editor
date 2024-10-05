export function Code({ children }: React.PropsWithChildren) {
  return (
    <code
      dir="ltr"
      className="font-mono inline rounded-lg bg-gray-15/40 dark:bg-secondary-button-dark py-0.5 px-1 text-left"
    >
      {children}
    </code>
  );
}
