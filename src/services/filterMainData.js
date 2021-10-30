
// Filter data to get only useable and correct objects
export function predicateFunc(dataObj) {
    if (dataObj.links.mission_patch_small != null && dataObj.mission_name != null &&
        dataObj.rocket.rocket_name != null && dataObj.launch_date_utc != null && dataObj.links.flickr_images.length > 0) {
        return dataObj
    }
}