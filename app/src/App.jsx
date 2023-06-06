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
import AdminReports from './components/AdminReports'
import AdminRoutes from './PrivateRouter/AdminRoutes'
import Report from './pages/Report'

import PrivateRoutes from "./PrivateRouter/PrivateRoutes";
import Unauthorized from './components/Errors/Unauthorized'
import NotFound from './components/Errors/NotFound'
import Logout from './components/Logout'
import CookieConsent from 'react-cookie-consent'


function App() {
    return (
        <div className="App bg-ghost-white ">

            {/* To display on all sites */}
            <Header />

            <div className="min-h-screen h-full">

                {/* Defining all routes for application */}
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route element={<LoginPage />} path='/login' />
                    <Route element={<ToS />} path='/termsofservice' />
                    <Route path='/contact' element={<Report title="Contact us:" placeholder="I need help with..." />}/>
                    
                    {/* Tool routes */}
                    <Route path='/tools'>
                        <Route index element={<ToolsOverview />} />
                        <Route path=':id' element={<ToolPage />} />

                        <Route path='report'>
                          <Route path=':id' element={<Report isTool={true} hasImageUpload={true}/>} />
                        </Route>
                    </Route>


                    {/* Login Protected Routes */}
                    <Route element={<PrivateRoutes />}>

                        {/* Genereal user protected routes */}
                        <Route element={<UserPage />} path="/userpage" />
                        <Route element={<Logout />} path='/logout' />

                        {/* Report routes */}
                        <Route path='/report' element={<Report title="Submit a report:" placeholder="Report about..." hasImageUpload={true} />}/>
                        

                        {/* Admin protected routes */}
                        <Route element={<AdminRoutes />}>
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
                    </Route>



                    {/* Error Routes */}
                    <Route path='/unauthorized' element={<Unauthorized />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </div>

            <CookieConsent
                location="bottom"
                buttonText="Okay!"
                cookieName="CookieConsent"
                style={{ background: "#925688" }}
                acceptOnScroll={true}
                acceptOnScrollPercentage={10}
                onAccept={(byScroll) => {
                    alert('By continuing you are accepting cookies');
                  }}
                buttonStyle={{ color: "#FFF", background: "#306339", fontSize: "13px" }}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>

            <Footer />
        </div>
    )
}

export default App
