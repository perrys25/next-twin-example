/**
 * From twin.examples
 * https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components-typescript#add-the-global-styles
 */

'use client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
    body: {
        WebkitTapHighlightColor: theme`colors.purple.500`,
        ...tw`antialiased`,
    },
})

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomStyles />
    </>
)

export default GlobalStyles