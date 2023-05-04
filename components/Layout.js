import Meta from './Meta'
import { withRouter } from 'next/router'
// import Background from "./Background";
import { SidebarNavVisibilityProvider } from '../contexts/SidebarNavVisibilityContext'
import { ProjectDetailsDialogProvider } from '../contexts/ProjectDetailsDialogContext'
import dynamic from 'next/dynamic'

const Background = dynamic(() => import('./Background'), {
  ssr: false,
})

const Providers = ({ children }) => {
  return (
    <ProjectDetailsDialogProvider>
      <SidebarNavVisibilityProvider>{children}</SidebarNavVisibilityProvider>
    </ProjectDetailsDialogProvider>
  )
}

const Layout = ({ children, router }) => {
  return (
    <>
      <Meta />
      <div className="relative">
        <Background />
        <Providers>{children}</Providers>
      </div>
    </>
  )
}

export default withRouter(Layout)
