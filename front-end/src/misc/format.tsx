export function DateFormat(dateRoot: string, euaMode?: boolean) {
    const data = new Date(dateRoot);

    const date = data.getDate();
    const month = data.getMonth();
    

    const year = data.getFullYear();

    // Formmated
    const dateFormmated = date.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })

    const monthFormmated = month.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })


    const monthString = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"][month];
    
    return euaMode ? `${year}-${monthFormmated}-${dateFormmated}` : `${date} de ${monthString} de ${year}`
}
  