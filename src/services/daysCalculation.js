
export function daysAfterLaunch(obj) {
    
    let launchDate = obj.split("T")[0].split("-")
    let [launchYear,launchMonth,launchDay] = [...launchDate]
    launchDate = `${launchMonth}-${launchDay}-${launchYear}`

    let today = new Date();
    let currentDate = `${(today.getMonth()+1)}-${today.getDate()}-${today.getFullYear()}`;
    
    let launch = new Date(launchDate)
    let current = new Date(currentDate)
    
    let difference = current.getTime() - launch.getTime()
    let days = Math.ceil(difference / (1000 * 3600 * 24));
    
    return days
}


