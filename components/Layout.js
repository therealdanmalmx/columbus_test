import { DataProvider } from '../contexts/DataContext';

function Layout({ children }) {

  return (
    <DataProvider>
        <main>
            {children}
        </main>
    </DataProvider>
  )
}

export default Layout;