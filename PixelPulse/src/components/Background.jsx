export default function Background() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <div className="animated-gradient-bg absolute inset-0 h-full w-full" />
      <div className="site-grid-overlay absolute inset-0 h-full w-full" />
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c" />
    </div>
  );
}
