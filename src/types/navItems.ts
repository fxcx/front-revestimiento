// navData.ts
export enum NavCategories {
    COLORES = 'COLORES',
    REVESTIMIENTOS = 'REVESTIMIENTOS',
    PISOS = 'PISOS',
    PRODUCTOS = 'PRODUCTOS',
    CONTACTO = 'CONTACTO'
  }
  
  // Definir constantes para las subcategorías y descripciones
  export const navItems = [
    { 
      name: NavCategories.COLORES, 
      href: '/colores', 
      dropdown: true, 
      subcategories: [
        { name: 'Interiores', href: '/colores/interiores', description: 'Colores para interiores' },
        { name: 'Exteriores', href: '/colores/exteriores', description: 'Colores para exteriores' },
        { name: 'Paletas de Color', href: '/colores/paletas', description: 'Diferentes paletas' },
      ]
    },
    { name: NavCategories.REVESTIMIENTOS, href: '/revestimientos', dropdown: false },
    { 
      name: NavCategories.PISOS, 
      href: '/pisos', 
      dropdown: true, 
      subcategories: [
        { name: 'Madera', href: '/pisos/madera', description: 'Pisos de madera' },
        { name: 'Cerámica', href: '/pisos/ceramica', description: 'Pisos de cerámica' },
        { name: 'Vinílicos', href: '/pisos/vinilicos', description: 'Pisos vinílicos' },
      ]
    },
    { 
      name: NavCategories.PRODUCTOS, 
      href: '/shop', 
      dropdown: true, 
      subcategories: [
        { name: 'Pinturas', href: '/shop/pinturas', description: 'Diversas pinturas' },
        { name: 'Herramientas', href: '/shop/herramientas', description: 'Herramientas' },
        { name: 'Accesorios', href: '/shop/accesorios', description: 'Accesorios varios' },
      ]
    },
    { name: NavCategories.CONTACTO, href: '/contacto', dropdown: false },
  ]
  