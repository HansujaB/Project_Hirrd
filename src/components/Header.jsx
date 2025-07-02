import React, { useState , useEffect} from 'react'
import { Button } from './ui/button';
import {Link , useSearchParams} from 'react-router-dom';
import { PenBox ,BriefcaseBusiness, Heart} from 'lucide-react';
import { SignedOut , SignedIn , UserButton, SignIn, useUser} from '@clerk/clerk-react';
const Header = () => {

  const[showSignIn, setShowSignIn]=useState(false);
  const[search , setSearch]= useSearchParams();
  const{user} =useUser();

useEffect(()=> {
  if(search.get("sign-in")){
    setShowSignIn(true);
  }
},[search])

  const handleOverlayClick=(e) =>{
    if(e.target ===e.currentTarget){
      setShowSignIn(false);
    }
  }
  return (
    <>
    <nav className='py-4 flex justify-between items-center px-4'>
        <Link to="/">
        <img src="./logo.png" className='h-10'/>
        </Link>
            <div className='flex gap-8'>
            <SignedOut>
              <Button onClick={()=> setShowSignIn(true)} variant="outline" className="rounded-full">Login</Button>
            </SignedOut>
            
            <SignedIn>
              <Link to="/post-job">
              <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className="mr-2"></PenBox>
              Post a Job
            </Button>
              </Link>
              <UserButton
              appearance={
                {
                  elements:{
                    avatarBox:"w-10 h-10"
                  }
                }
              }
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label='My Jobs'
                    labelIcon={<BriefcaseBusiness size={15}/>}
                    href="/MyJobs"
                  />
                  <UserButton.Link
                  label='Saved Jobs'
                    labelIcon={<Heart size={15}/>}
                    href="/SavedJobs"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
            </div>
    </nav>
    {showSignIn && (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleOverlayClick}>
      <SignIn
      signUpForceRedirectUrl="/onboarding"
      fallbackRedirectUrl="/onboarding"
      />
    </div>
    ) }
    </>
  )
}

export default Header
