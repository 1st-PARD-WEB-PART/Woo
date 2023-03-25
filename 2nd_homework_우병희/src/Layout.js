import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24  }}>
      <Outlet /> 
        
      </header>
      <main>
      
        {/*router안에 있는 거 */}
      </main>
    </div>
  );
};

export default Layout;