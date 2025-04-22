"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";
import CustomerCard from "../customer/CustomerCard";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";

const HeaderRight = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  console.log("=>session", session);

  const AuthHeaderRight = () => {
    if (pathname == "/") router.push("/a");
    return (
      <>
        <Drawer direction='right'>
          <DrawerTrigger>
            <div className='flex gap-2 cursor-pointer'>
              <CustomerCard customer={session.customer} variant='short' />
              <MenuIcon className='icon text-gray-400' />
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DialogTitle>
              <div className='w-full flex justify-center p-2'>
                <CustomerCard variant='normal' customer={session.customer} />
              </div>
            </DialogTitle>
            <DrawerDescription> </DrawerDescription>

            <DrawerFooter>
              <Button
                variant='ghost'
                onClick={() => {
                  signOut();
                }}
              >
                Выйти
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  };

  const GuestHeaderRight = () => {
    return (
      <>
        <Button
          onClick={() => {
            signIn();
          }}
        >
          Войти
        </Button>
      </>
    );
  };

  return (
    <div className='header-item header-right'>
      {session && <AuthHeaderRight />}
      {session === undefined && <></>}
      {session === null && <GuestHeaderRight />}
    </div>
  );
};

export default HeaderRight;
