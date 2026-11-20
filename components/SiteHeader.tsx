'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from '@clerk/nextjs';

const SiteHeader = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between border-b border-black/10 bg-white/95 px-6 backdrop-blur-md md:px-10">

      {/* Left: Logo */}
      <div className="flex items-center">
        <Link
          href={isSignedIn && !isLandingPage ? '/dashboard' : '/'}
          className="flex items-center"
        >
          <Image
            src="/social/brand/logo-navbar-dark.png"
            alt="Outpost"
            width={314}
            height={160}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      {/* Center: Navigation */}
      {isLandingPage && (
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-sm font-medium text-black md:flex">

          <Link
            href="#features"
            className="transition-colors hover:text-black/60"
          >
            Product
          </Link>

          <Link
            href="#how-it-works"
            className="transition-colors hover:text-black/60"
          >
            How it works
          </Link>

          <Link
            href="#pricing"
            className="transition-colors hover:text-black/60"
          >
            Pricing
          </Link>

        </nav>
      )}

      {/* Right: Authentication */}
      <div className="flex items-center gap-3">

        {isLoaded && (
          <>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm"
                  className="bg-gray-500 text-white hover:bg-orange-600 hover:text-white"
                >
                  Sign in
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button variant="default" size="sm"
                  className="bg-pink-500 text-white hover:bg-orange-600">
                  Sign up
                </Button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </>
        )}

      </div>

    </header>
  );
};

export default SiteHeader;
