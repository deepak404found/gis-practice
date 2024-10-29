'use client'

import { store } from '@gis-practice/states/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function ReduxProvider(
  {
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
