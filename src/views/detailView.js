import { html } from "../../node_modules/lit-html/lit-html.js"

import * as fetchData from "../services/fetchDataService.js"
import { predicateFunc } from "../services/filterMainData.js"

let rocketDetailTemplate = (oneRocketObj,index) => html`
        <div class="details-page-wrapper">
            <section class="card-details">
                <article class="card-title">
                    <button id="back" class="back-to-main"><</button>
                    <h2 class="mission-name-detail-page">
                        ${oneRocketObj.mission_name}
                    </h2>
                </article>
                <article class="card-content">
                    <img class="img-card" src=${oneRocketObj.links.mission_patch} alt="img">
                    <p class="mission-text-content">${oneRocketObj.details}</p>
                </article>
            </section>
            <section class="images-content-wrapper">
                <img class="main-img" src=${oneRocketObj.links.flickr_images[index]} alt="main-img">
                <div class="small-images-wrapper">
                    <button class="arrow left"><</button>
                    <img class="rotation-images" src=${oneRocketObj.links.flickr_images[0]} alt="another-rocket-img">
                    <img class="rotation-images" src=${oneRocketObj.links.flickr_images[1]} alt="another-rocket-img">
                    <img class="rotation-images" src=${oneRocketObj.links.flickr_images[2]} alt="another-rocket-img">
                    <button class="arrow right">></button>
                </div>
            </section>
        </div>
        `
export function rocketDetailView(ctx) {

    let id = ctx.params.id
    
    fetchData.getAllData()
    .then(data => {
        let filtered = data.filter(predicateFunc)
        let oneObj = filtered.filter(x => x.id === id)

        let index = 0
        
        document.body.addEventListener("click",arrowsActions)
        
        function arrowsActions(e) {
            let targetTagName = e.target.tagName.toLowerCase()
            
            if (targetTagName == 'button') {
                let arrowClassName = e.target.className;
                    if(arrowClassName.includes('left')){
                        if(index > 0){
                         index -= 1
                         }
                    }
                    if (arrowClassName.includes('right')){
                        if(index < 2){
                         index += 1
                        }
                    }
                    if (arrowClassName.includes('back')){
                        ctx.page.redirect("/")
                    }
                }
                ctx.render(rocketDetailTemplate((oneObj[0]),index))
            }
            ctx.render(rocketDetailTemplate((oneObj[0]),index))
        }
        )
}
