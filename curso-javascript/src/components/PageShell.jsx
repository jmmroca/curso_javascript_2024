// src/components/PageShell.jsx
import LogoHeader from "./LogoHeader";
import MenuPrincipal from "./MenuPrincipal";

export default function PageShell({ children }) {
  return (
    <div className="
      min-h-screen text-textc antialiased
      bg-[radial-gradient(1200px_700px_at_15%_0%,#0e1620_0%,theme(colors.bg.DEFAULT)_60%)]
    ">
      <header className="px-5 md:px-6 pt-4">
        <div className="max-w-shell mx-auto flex items-center justify-between gap-4">
          <LogoHeader />
          <MenuPrincipal />
        </div>
      </header>
      <main className="px-5 py-8 md:px-6 md:py-12">
        <div className="max-w-content mx-auto">{children}</div>
      </main>
    </div>
  );
}