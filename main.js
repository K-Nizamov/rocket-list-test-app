import page from "./node_modules/page/page.mjs"

import { mainPageView } from "./src/views/launchesListView.js"
import { addRender } from "./src/middlewares/renderMiddlewares.js"
import { rocketDetailView } from "./src/views/detailView.js"

page(addRender)

page("/", mainPageView)
page("/:id",rocketDetailView)
page.start()




