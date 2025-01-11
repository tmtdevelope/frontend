export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}
