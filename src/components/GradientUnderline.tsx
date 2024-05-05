export default function GradientUnderline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative inline max-w-max">
      {children}
      <span className="absolute bg-gradient w-full h-1 z-[-1]"></span>
    </div>
  );
}
