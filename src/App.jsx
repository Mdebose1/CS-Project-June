import React from 'react'
import { Navbar } from './components/Navbar';
import { Home } from './views/Home';
import { Profile } from './views/Profile';
import { Cart } from './views/Cart'
import { Genre } from './views/Genre'
import { Popular } from './views/Popular'
import { Shop } from './views/Shop'
import { SignIn } from './views/SignIn'
// import { LogOut } from './views/LogOut'
import { Items } from './views/Items'
import { Route, Routes } from 'react-router-dom';


export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mt-4">
      <Routes>
        <Route exact path='/' element={< Home /> } />
        <Route exact path='/users/profile' element={< Profile /> } />
        <Route exact path='/cart' element={< Cart /> } />
        <Route exact path='/genre' element={< Genre /> } />
        <Route exact path='/items' element={< Items /> } />
        <Route exact path='/popular' element={< Popular /> } />
        <Route exact path='/shop' element={< Shop /> } />
        <Route exact path='/SignIn' element={< SignIn /> } />
        {/* <Route exact path='/logOut' element={< LogOout /> } /> */}




        
      </Routes>

      </main>

      <footer>

      </footer>
    </>

  )
}


