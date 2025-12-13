import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Service } from './pages/Service';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import{ Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import { Error } from './pages/Error';
import { Logout } from './pages/Logout';
import { AdminLayout } from './components/layouts/Admin-layout';
import { AdminContact } from './pages/Admin-Contact';
import { AdminUser } from './pages/Admin-User';
import { AdminUpdate } from './pages/Admin-Update';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/logout' element={<Logout/>} />
      {/* Astric(*) in a code mean if user is accessing any another page that is not in website */}
      {/* implementing error page */}
      <Route path='*' element={<Error/>}/>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route path='contacts' element={<AdminContact/>}/>
        <Route path='users' element={<AdminUser/>}/>
        <Route path='users/:id/edit' element={<AdminUpdate/>}/>
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App