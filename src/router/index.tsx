import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(() => import('@/views/discover/components/recommend'))
const Ranking = lazy(() => import('@/views/discover/components/ranking'))
const Songs = lazy(() => import('@/views/discover/components/songs'))
const Djradio = lazy(() => import('@/views/discover/components/djradio'))
const Artist = lazy(() => import('@/views/discover/components/artist'))
const Album = lazy(() => import('@/views/discover/components/album'))

const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
