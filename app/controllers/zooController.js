import { albatross } from "../models/albatross.js";
import { billygoat } from "../models/billygoat.js";
import { capybara } from "../models/capybara.js";
import { dingo } from "../models/dingo.js";
import { egret } from "../models/egret.js";
import { frog } from "../models/frog.js";
import { gator } from "../models/gator.js";
import { hare } from "../models/hare.js";
import { iguana } from "../models/iguana.js";
import { jellyfish } from "../models/jellyfish.js";
import { kangaroo } from "../models/kangaroo.js";
import { lemur } from "../models/lemur.js";
import { monkey } from "../models/monkey.js";
import { narwhal } from "../models/narwhal.js";
import { orangutan } from "../models/orangutan.js";
import { panther } from "../models/panther.js";
import { quail } from "../models/quail.js";
import { rhino } from "../models/rhino.js";
import { snake } from "../models/snake.js";
import { tiger } from "../models/tiger.js";
import { uakari } from "../models/uakari.js";
import { vulture } from "../models/vulture.js";
import { wolverine } from "../models/wolverine.js";
import { xolmis } from "../models/xolmis.js";
import { yak } from "../models/yak.js";
import { zebra } from "../models/zebra.js";


let alby = new albatross("alby", "White", "F", 5, 0, "small")
let billy = new billygoat("billy", "Gray", "F", 100, 10, "small")
let capy = new capybara("capy", "Brown", "F", 15, 1, "large")
let dingi = new dingo("dingi", "Brown", "F", 30, 5, "medium")
let egy = new egret("egy", "Blue", "F", 7, 0, "small")
let froge = new frog("froge", "Green", "F", .5, 0, "small")
let gatorboi = new gator("gatorboi", "Green", "F", 200, 60, "big")
let hary = new hare("harry", "Brown", "F", 5, 1, "small")
let iggy = new iguana("iggy", "Green", "F", 4, 25, "small")
let jellyboi = new jellyfish("jellyboi", "Purple", "F", 2, 0, "none")
let roo = new kangaroo("roo", "Light Brown", "F", 150, 15, "medium")
let lemmy = new lemur("lemmy", "Brown", "F", 30, 5, "small")
let mony = new monkey("mony", "Black", "F", 15, 7, "small")
let pokiboi = new narwhal("pokiboi", "Silver", "F", 300, 70, "one HUGE tooth")
let orangy = new orangutan("orangy", "Orange", "F", 70, 25, "medium")
let chewy = new panther("chewy", "Black", "F", 90, 20, "large")
let flappy = new quail("flappy", "Brown", "F", 3, 0, "small")
let rammyboi = new rhino("rammyboi", "Gray", "F", 400, 20, "large")
let snek = new snake("snek", "Green", "F", 10, 20, "small")
let tigger = new tiger("tigger", "Orange", "F", 250, 30, "large")
let what = new uakari("what", "Brown", "F", 5, 0, "small")
let garbageman = new vulture("garbage man", "Black", "F", 14, 0, "small")
let hugh = new wolverine("hugh", "Gray", "F", 30, 4, "large")
let what2 = new xolmis("what2", "Brown", "F", 10, 0, "small")
let buffaloboi = new yak("buffaloboi", "Gray", "F", 300, 10, "medium")
let stripey = new zebra("Stripey", "Green", "F", 200, 30, "medium")


let animal = [alby, billy, capy, dingi, egy, froge, gatorboi, hary, iggy, jellyboi, roo, mony, lemmy, pokiboi, orangy, chewy, flappy, rammyboi, snek, tigger, what, garbageman, hugh, what2, buffaloboi, stripey]


export class teethSort {
    teethSort(size) {
        let AnimTemplate = ""

        for (let i = 0; i < animal.length; i++) {
            let anim = animal[i]

            if (size == "large" && anim.teethSize == "large") {
                AnimTemplate += `
                <div class="col text-center">
                    <h6>${anim.name} has ${anim.teethSize} teeth</h6>
                </div>`
            }
            if (size == "medium" && anim.teethSize == "medium") {
                AnimTemplate += `
                <div class="col text-center">
                    <h6>${anim.name} has ${anim.teethSize} teeth</h6>
                </div>`
            }
            if (size == "small" && anim.teethSize == "small") {
                AnimTemplate += `
                <div class="col text-center">
                    <h6>${anim.name} has ${anim.teethSize} teeth</h6>
                </div>`
            }
            document.getElementById("anim").innerHTML = AnimTemplate

        }
    }
}