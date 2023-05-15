// Components
import Header from "./Header";
// Styles
// Utilities
// Hooks

// Interfaces
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      {/* Footer */}
    </>
  );
}
