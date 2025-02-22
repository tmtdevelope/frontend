/** @format */

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationLinkProps } from "./type";

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  ariaLabel,
  role, 
  tabIndex,  
}) => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`link ${isActive ? "active" : ""}`}
      role={role}  
      aria-label={ariaLabel}
      aria-current={isActive ? "page" : undefined}
      tabIndex={tabIndex} 
    >
      {children}
    </Link>
  );
};