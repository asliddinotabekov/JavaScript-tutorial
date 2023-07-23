const data = new Date()

function formatAMPM(date,add) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime =  hours + ':' + minutes + ' ' + ampm;
    var strTime2 = `${hours}:${minutes}:${add} ${ampm}`
    return add !== undefined ? strTime2 : strTime
  }

  function  format(param){
    let result = null
    let weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let day = weeks[data.getDay()]
    let sana = data.getDate()
    let oy = month[data.getMonth()]
    let oy_num = data.getMonth()+1
    let yil = data.getFullYear()
    switch(param){
        case "L": result = `0${oy_num}/${sana}/${yil}`; break
        case "l" : result = `${oy_num}/${sana}/${yil}`; break
        case "LL" : result = `${oy} ${sana}, ${yil}`; break
        case "ll" : result = `${oy.slice(0,3)} ${sana}, ${yil}`; break
        case "ll" : result = `${oy.slice(0,3)} ${sana}, ${yil}`; break
        case 'LLL' : result = `${oy} ${sana}, ${yil} ${formatAMPM(data)}`; break
        case 'lll' : result = `${oy.slice(0,3)} ${sana}, ${yil} ${formatAMPM(data)}`; break
        case 'LLLL' : result = `${day}, ${oy} ${sana}, ${yil} ${formatAMPM(data)}`; break
        case 'llll' : result = `${day.slice(0,3)}, ${oy.slice(0,3)} ${sana}, ${yil} ${formatAMPM(data)}`; break
        default : result = "iltimos to'g'ri parametr kiriting "
    }
    return  result

  }

function moment(){
    this.format = function(param){
        let natija = null
        switch(param){
            case "LT": natija =`${formatAMPM(data)}`; break
            case "LTS": natija = `${formatAMPM(data,data.getSeconds())}`; break
            case "L" : natija =  `${format("L")}`; break
            case "l" : natija =  `${format("l")}`; break
            case "LL" : natija =  `${format("LL")}`; break
            case "ll" : natija =  `${format("ll")}`; break
            case "LLL" : natija =  `${format("LLL")}`; break
            case "lll" : natija =  format("lll"); break
            case "LLLL" : natija =  `${format("LLLL")}`; break
            case "llll": natija =  format("llll"); break
            default : natija = "iltimos to'g'ri parametr kiriting "
        }
        return natija
    }


}
console.log(new moment().format('llll'));