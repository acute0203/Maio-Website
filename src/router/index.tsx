import React, { ReactElement, Suspense } from "react"
import { useRoutes } from "react-router-dom"

const LayoutWrapper = React.lazy(() =>
  import("../components/common/layout/LayoutWrapper").then(
    ({ LayoutWrapper }) => ({
      default: LayoutWrapper,
    }),
  ),
)

const HomePage = React.lazy(() =>
  import("../pages/home").then(({ HomePage }) => ({
    default: HomePage,
  })),
)

const ProductsPage = React.lazy(() =>
  import("../pages/products").then(({ ProductsPage }) => ({
    default: ProductsPage,
  })),
)

const HirePage = React.lazy(() =>
  import("../pages/hire").then(({ HirePage }) => ({
    default: HirePage,
  })),
)

const ContactPage = React.lazy(() =>
  import("../pages/contact").then(({ ContactPage }) => ({
    default: ContactPage,
  })),
)

export const RouterMap = (): ReactElement | null =>
  useRoutes([
    {
      element: (
        <Suspense>
          <LayoutWrapper />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/products",
          element: (
            <Suspense>
              <ProductsPage />
            </Suspense>
          ),
        },
        {
          path: "/hire",
          element: (
            <Suspense>
              <HirePage />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense>
              <ContactPage />
            </Suspense>
          ),
        },
      ],
    },
  ])
