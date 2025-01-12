export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  ariaLabel?: string;
}

// types.ts (or wherever your types are defined)
export interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  role?: string; 
  tabIndex?: number;  
}