function countHours(year, holidays) {
    let cantidadHorasExtras = 0;

    for(let i = 0; i < holidays.length; i++){
        let fecha = new Date(holidays[i] + '/' + year)
        if(fecha.getDay() > 0 && fecha.getDay() < 6){
            cantidadHorasExtras += 2;
        }
    }

    return cantidadHorasExtras
}  

countHours(2022, ['01/06', '04/01', '12/25'])