// Components
import Header from './Header'
import ButtonToTop from './common/ButtonToTop'
// Styles
// Utilities
// Hooks

// Interfaces
interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <ButtonToTop />
      {/* Footer */}
    </>
  )
}
