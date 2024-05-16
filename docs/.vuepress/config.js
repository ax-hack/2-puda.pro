import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'ru-RU',

  title: '2х-пудовка',
  description: 'Силачи старой школы, упражнения с гирями',

  theme: defaultTheme({
    logo: '/2puda-icon.png',

    navbar: ['/', '/content'],
  }),

  bundler: viteBundler(),
})
