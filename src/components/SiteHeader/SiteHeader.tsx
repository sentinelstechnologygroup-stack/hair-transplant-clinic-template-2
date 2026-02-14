import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#050a14]/70 bg-[#050a14]/90">
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
}
