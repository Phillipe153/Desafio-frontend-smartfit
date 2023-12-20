export interface Unidades {
    content: string,// "\n<p>Av. Dom Severino, 1733 &#8211; Fátima<br>Teresina, PI</p>\n"
    fountain: string, //"partial"
    id:  number, //10998878976097
    locker_room: string //"allowed"
    mask: string, //"required"
    opened: boolean,//true
    schedules: [{
        hour: string, //"06h às 22h"
        weekdays: string, // "Seg. à Sex."
    },
    {
        hour: string, //"06h às 22h"
        weekdays: string, // "Seg. à Sex."
    },{
        weekdays: string //"Sáb.",
        hour: string // "Fechada"
    },
    {
        weekdays: string //"Dom.",
        hour: string // "Fechada"
      }]
    title: string, //  "Dom Severino"
    towel: string, //  "required"
}