export default function evaluateDestionationType(type) {
    switch (type) {
        case 'envelope':
            return 0;
        case 'ost_sentiero_percorso':
            return 1;
        case 'ost_attrattore':
            return 2;
        case 'ost_servizi':
            return 3;
        case 'ost_waypoint':
            return 4;
        default:
            return 0;

    }
}
