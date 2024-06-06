import router from './'
import judgePermission from "../utils/judgePermission";

router.beforeEach = (to, from, next) => {
    if(to.meta && to.meta.routes && to.meta.routes.length) {
        const passFlag = judgePermission(to, from)
        passFlag && next()
    }
}