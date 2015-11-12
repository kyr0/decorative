export default class Log {

    // stupid but effective when .apply() is not supported on console.log (like in chrome ;)
    static log(a1, a2, a3, a4, a5) {

        if (console.log) {

            if (a1 && a2 && a3 && a4 && a5) {
                console.log(a1, a2, a3, a4, a5);
                return;
            }

            if (a1 && a2 && a3 && a4) {
                console.log(a1, a2, a3, a4);
                return;
            }

            if (a1 && a2 && a3) {
                console.log(a1, a2, a3);
                return;
            }

            if (a1 && a2) {
                console.log(a1, a2);
                return;
            }

            if (a1) {
                console.log(a1);
            }
        }
    }
}