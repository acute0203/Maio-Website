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
      ],
    },
  ])
