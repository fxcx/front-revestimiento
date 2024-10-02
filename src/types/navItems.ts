// navData.ts
export enum NavCategories {
  SERVICIOS = 'SERVICIOS',
  REVESTIMIENTOS = 'REVESTIMIENTOS',
  PISOS = 'PISOS',
  PRODUCTOS = 'PRODUCTOS',
  CONTACTO = 'CONTACTO'
}

export const navItems = [
  {
    name: NavCategories.SERVICIOS,
    href: '/servicios', dropdown: true,
    subcategories: [
      { name: 'Revestimientos', href: '/servicios/muros', description: 'Servicios para muros' },
      { name: 'Microcemento', href: '/servicios/pisos', description: 'Servicios para pisos' },
      { name: 'MenbranaFlex', href: '/servicios/techos', description: 'Servicios para techos' },
    ]
  },
  { name: NavCategories.REVESTIMIENTOS, href: '/revestimientos', dropdown: false },
  {
    name: NavCategories.PISOS,
    href: '/pisos',
    dropdown: false,
    subcategories: [
      { name: 'Madera', href: '/pisos/madera', description: 'Pisos de madera' },
      { name: 'Microcemento', href: '/pisos/micropcemento', description: 'Pisos de microcemento' },
      { name: 'Vinílicos', href: '/pisos/vinilicos', description: 'Pisos vinílicos' },
    ]
  },
  {
    name: NavCategories.PRODUCTOS,
    href: '/shop',
    dropdown: false,
    subcategories: [
      { name: 'Cellador', href: '/shop/cellador', description: 'cellador' },
      { name: 'Pisos Termicos', href: '/shop/pisos', description: 'Pisos termicos' },
      { name: 'base coat', href: '/shop/base coat', description: 'base coat' },
      { name: 'base niveladora', href: '/shop/base niveladora', description: 'base niveladora' },
      { name: 'Mallas', href: '/shop/Mallas', description: 'mallas' },
    ]
  },
  { name: NavCategories.CONTACTO, href: '/contacto', dropdown: false },
]
