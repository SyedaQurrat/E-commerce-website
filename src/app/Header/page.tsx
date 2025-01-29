'use client'
import ServerHeader from "@/components/Header/ServerHeader";
import ClientHeader from "@/components/Header/ClientHeader";

export default function Header() {
  return (
    <>
      <ServerHeader />
      <ClientHeader />
    </>
  );
}
