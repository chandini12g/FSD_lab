"use strict";
class College {
    collegeName = "SVECW";
    static university = "JNTUK";
    display() {
        console.log("College:", this.collegeName);
        console.log("University:", College.university);
    }
}
let c = new College();
c.display();
