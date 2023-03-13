import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'
    ]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    })
  ],

  rules: [

    ['color_white', {color:"#ffffff"  }],
    ['search_input', { border: "2px solid #ff7a22","border-right":"none" }],
    ['search_button', { border: " 1px solid #ff7a22",background:"#ff7a22" }],

    // 我玩过的
    ['menu', { border: " 1px solid #eaeaea",background:"#f8f8f8",color:"#7d7c7c" }],

    // 游戏说明文字
    ['color_text', {color:"#616161"  }],

  ],

  transformers: [transformerDirectives(), transformerVariantGroup()]
})
