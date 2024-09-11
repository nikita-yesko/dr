// import "../../dist/css/tailwind.css"

import cHeader from './components/header'
import cSwiper from './components/swiper'
import cQuiz from './components/quiz'
import cFooter from './components/footer'
import cScript from './components/script';

import ResponsiveBackgroundHandler from './components/responsive'

import cTailwind from './components/tailwind'


const initScripts = {
  init: function () {
    ResponsiveBackgroundHandler()
    cHeader()
    cSwiper()
    cQuiz()
    cTailwind()
    cFooter()
    cScript()
  },
}
initScripts.init()
