export enum NavCategories {
  SERVICIOS = 'SERVICIOS',
  REVESTIMIENTOS = 'REVESTIMIENTOS',
  PISOS = 'PISOS',
  PRODUCTOS = 'PRODUCTOS',
}

export const navItems = [
  {
    name: NavCategories.SERVICIOS,
    href: '/servicios',
    dropdown: false,
  },
  {
    name: NavCategories.REVESTIMIENTOS,
    href: '/revestimientos',
    dropdown: false,
  },
  {
    name: NavCategories.PISOS,
    href: '/pisos',
    dropdown: false,
  },
  {
    name: NavCategories.PRODUCTOS,
    href: '/shop',
    dropdown: false,
  },
]
