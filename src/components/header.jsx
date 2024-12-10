import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, showSignInState] = useState(false);

  const [search, setSearch] = useSearchParams();

  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      showSignInState(true);
    }
  }, [search]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      showSignInState(false);
      setSearch({});
    }
  }

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="/talentLinkLogo.png" className="h-10 sm:h-14" alt="header-logo" />
        </Link>

        <div className="flex gap-2 sm:gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => showSignInState(true)}>
              Login
            </Button>
            {/* <SignInButton /> */}
          </SignedOut>
          <SignedIn>
            
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full">
                  <PenBox size={20} className="mr-2" />
                  Post a job
                </Button>
              </Link>
            )}

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpFallbackRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
