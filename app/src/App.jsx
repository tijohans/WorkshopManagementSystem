import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing-Page'
import ToolsOverview from './pages/ToolsOverview'
import ToolPage from './pages/ToolPage'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import ToS from './pages/ToS'
import AdminDashboard from './pages/AdminDashboard'
import AdminUserEdit from './pages/AdminUserEdit'
import AdminToolEdit from './pages/AdminToolsEdit'

import PrivateRoutes from "./PrivateRoutes";
import Unauthorized from './components/Errors/Unauthorized'
import NotFound from './components/Errors/NotFound'


function App() {
	return (
		<div className="App bg-ghost-white ">
			<Header />
      <div className="min-h-screen h-full">
        <Routes>

        <Route element={<PrivateRoutes />}>
              <Route element={<UserPage />} path="/userpage"/>
              <Route element={<AdminDashboard />} path='/admin' />

              <Route path='/admin/user'>
            <Route index element={<AdminUserEdit />} />
            <Route path=':id' element={<AdminUserEdit edit="true" />} />
          </Route>

          <Route path='/admin/tool'>
            <Route index element={<AdminToolEdit />} />
            <Route path=':id' element={<AdminToolEdit edit="true" />} />
          </Route>
            </Route>


          <Route path='/' element={<Landing />} />

          <Route path='/tools'>
            <Route index element={<ToolsOverview />} />
            <Route path=':id' element={<ToolPage />} />
          </Route>
          
          <Route element={<LoginPage />} path='/login' />
          <Route element={<ToS />} path='/termsofservice' />
          <Route path='/unauthorized' element={<Unauthorized />}></Route>

                    {/* Login Protected Routes */}
					<Route element={<UserPage />} path='/userpage' />


                    {/* Admin Protected Routes */}
					<Route element={<AdminDashboard />} path='/admin' />;

					<Route path='/admin/user'>
						<Route index element={<AdminUserEdit />} />
						<Route path=':id' element={<AdminUserEdit edit="true" />} />
					</Route>

					<Route path='/admin/tool'>
						<Route index element={<AdminToolEdit />} />
						<Route path=':id' element={<AdminToolEdit edit="true" />} />
					</Route>

                    {/* 404 Route */}
                    <Route path='*' element={<NotFound />}></Route>
                     <Route path='/unauthorized' element={<Unauthorized />}></Route>
				</Routes>
			</div>

			<Footer />
		</div>
	)
}

export default App
