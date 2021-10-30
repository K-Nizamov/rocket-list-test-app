import { html } from "../../node_modules/lit-html/lit-html.js"

import { daysAfterLaunch } from "../services/daysCalculation.js"
import * as fetchData from "../services/fetchDataService.js"
import { predicateFunc } from "../services/filterMainData.js"

    const mainCardTemplate = (rocketData) => html`
    <a href="/${rocketData.id}" class="list-of-launches">
            <div class="card-wrapper">
                <img class="img" src=${rocketData.links.mission_patch_small} alt="img">
                <div class="mission-name">
                    <h3 class="title-name">${rocketData.mission_name}</h3>
                    <div class="description">${rocketData.rocket.rocket_name} - launched ${daysAfterLaunch(rocketData.launch_date_utc)} days ago</div>
                </div>
            </div>
            <img class="big-patch-photo" src=${rocketData.links.flickr_images[0]} alt="photo of ...">
    </a>
    `
export function mainPageView(ctx) {
    fetchData.getAllData()
    .then(data => {
        let filtered = data.filter(predicateFunc)
        ctx.render(filtered.map(x => mainCardTemplate(x)))
    })

}
