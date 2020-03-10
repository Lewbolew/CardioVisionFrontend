



export function formatTime(d: Date):string {
    const year = d.getFullYear();
    const day = d.getDate();
    const month = d.getMonth();

    return day + '-' + (month + 1) + '-' + year;
}
