import { render } from "../../node_modules/lit-html/lit-html.js";

let rootElement = document.querySelector('.site-wrapper')
let contextRender = templateResult => render(templateResult,rootElement)
export function addRender(ctx,next) {

    ctx.render = contextRender

    next()
    
}