import straw from "./static/images/straw/straw.png"
import wall from './static/images/wall/wall.gif';
import water from './static/images/water/water.gif';
import steel from './static/images/wall/steels.gif';
import tankTop from './static/images/tank/top.gif';
import tankBottom from './static/images/tank/bottom.gif';
import tankLeft from './static/images/tank/left.gif';
import tankRight from './static/images/tank/right.gif';
export default {
    timeout: 10,
    canvas: {
        width: 900,
        height: 600
    },
    model: {
        width: 30,
        height: 30
    },
    straw: {
        num: 120
    },
    wall: {
        num: 80
    },
    water: {
        num: 60
    },
    steel: {
        num: 20
    },
    tank: {
        num: 40
    },
    image: {
        straw,
        wall,
        water,
        steel,
        tankTop,
        tankBottom,
        tankLeft,
        tankRight
    }
}