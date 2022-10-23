import React from "react";

const routes = [
  {
    title: "Inicio",
    slug: "/",
    ariaLabel: "Volver al inicio",
  },
  {
    title: "Blog",
    slug: "/blog/",
    ariaLabel: "Ver las entradas del blog",
  },
  {
    title: "Contacto",
    slug: "/contacto/",
    ariaLabel: "Ver como contactar",
  },
];

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full pt-6">
    {routes.map((route, i) => {
      return (
        <a
          href={route.slug}
          key={route.slug}
          className="p-3 my-1 font-mono text-lg font-light text-right text-gray-900 cursor-pointer dark:text-gray-100 hover:opacity-80"
          onClick={closeMenu}
          alt={route.ariaLabel}
          title={route.ariaLabel}
          aria-label={route.ariaLabel}
        >
          {route.title}
        </a>
      );
    })}
  </nav>
);

export default Navigation;
