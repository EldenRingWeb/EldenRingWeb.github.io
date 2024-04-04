const hparray = [300,304,312,322,334,347,362,378,396,414,434,455,476,499,522,547,572,598,624,652,680,709,738,769,800,833,870,910,951,994,1037,1081,1125,1170,1216,1262,1308,1355,1402,1450,1476,1503,1529,1555,1581,1606,1631,1656,1680,1704,1727,1750,1772,1793,1814,1834,1853,1871,1887,1900,1906,1912,1918,1924,1930,1936,1942,1948,1954,1959,1965,1971,1977,1982,1988,1993,1999,2004,2010,2015,2020,2026,2031,2036,2041,2046,2051,2056,2060,2065,2070,2074,2078,2082,2086,2090,2094,2097,2100]

const fparray = [40,43,46,49,52,55,58,62,65,68,71,74,77,81,84,87,90,93,96,100,106,112,118,124,130,136,142,148,154,160,166,172,178,184,190,196,202,208,214,220,226,232,238,244,250,256,262,268,274,280,288,297,305,313,321,328,335,341,346,350,352,355,357,360,362,365,367,370,373,375,378,380,383,385,388,391,393,396,398,401,403,406,408,411,414,416,419,421,424,426,429,432,434,437,439,442,444,447,450]

const staminaarray = [80,81,82,84,85,87,88,90,91,92,94,95,97,98,100,101,103,105,106,108,110,111,113,115,116,118,120,121,123,125,126,128,129,131,132,134,135,137,138,140,141,143,144,146,147,149,150,152,153,155,155,155,155,156,156,156,157,157,157,158,158,158,158,159,159,159,160,160,160,161,161,161,162,162,162,162,163,163,163,164,164,164,165,165,165,166,166,166,166,167,167,167,168,168,168,169,169,169,170]

const equiparray = [45,45,45,45,45,45,45,45,46.6,48.2,49.8,51.4,52.9,54.5,56.1,57.7,59.3,60.9,62.5,64.1,65.6,67.2,68.8,70.4,72,73,74.1,75.2,76.4,77.6,78.9,80.2,81.5,82.8,84.1,85.4,86.8,88.1,89.5,90.9,92.3,93.7,95.1,96.5,97.9,99.4,100.8,102.2,103.7,105.2,106.6,108.1,109.6,111,112.5,114,115.5,117,118.5,120,121,122.1,123.1,124.1,125.1,126.2,127.2,128.2,129.2,130.3,131.3,132.3,133.3,134.4,135.4,136.4,137.4,138.5,139.5,140.5,141.5,142.6,143.6,144.6,145.6,146.7,147.7,148.7,149.7,150.8,151.8,152.8,153.8,154.9,155.9,156.9,157.9,159,160]

const discoverarray = [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,192,192,193,194,195,196,197,198,199]

const runearray = [673,689,706, 723, 740, 757, 775, 793, 811, 829, 847, 1038, 1238, 1445, 1659, 1882, 2113, 2353, 2601, 2857, 3122, 3395, 3678, 3970, 4270, 4580, 4899, 5228, 5567, 5915, 6273, 6640, 7018, 7407, 7805, 8214, 8633, 9064, 9505, 9956, 10419, 10893, 11379, 11876, 12384, 12904, 13435, 13979, 14535, 15102, 15682, 16274, 16879, 17497, 18127, 18770, 19425, 20094, 20777, 21472, 22181, 22903, 23640, 24390, 25153, 25931, 26723, 27530, 28351, 29186, 30036, 30900, 31780, 32675, 33584, 34509, 35449, 36405, 37377, 38364, 39367, 40385, 41420, 42472, 43539, 44623, 45723, 46841, 47975, 49125, 50293, 51478, 52681, 53901, 55138, 56393, 57665, 58956, 60265, 61591, 62936, 64299, 65681, 67082, 68501, 69939, 71395, 72871, 74367, 75881, 77415, 78968, 80542, 82135, 83747, 85380, 87033, 88707, 90401, 92115, 93850, 95605, 97382, 99180, 100998, 102838, 104699, 106582, 108487, 110413, 112361, 114330, 116322, 118337, 120373, 122432, 124513, 126618, 128745, 130894, 133067, 135263, 137483, 139726, 141992, 144282, 146595, 148933, 151295, 153680, 156090, 158524, 160983, 163467, 165975, 168508, 171065, 173648, 176257, 178890, 181549, 184233, 186944, 189680, 192441, 195229, 198043, 200884, 203751, 206644, 209564, 212510, 215484, 218485, 221512, 224567, 227649, 230759, 233897, 237062, 240255, 243475, 246724, 250002, 253307, 256641, 260003, 263395, 266815, 270263, 273741, 277248, 280785, 284351, 287946, 291571, 295225, 298910, 302625, 306369, 310144, 313949, 317785, 321652, 325549, 329477, 333435, 337425, 341447, 345499, 349583, 353698, 357846, 362025, 366235, 370478, 374753, 379061, 383401, 387773, 392178, 396615, 401086, 405590, 410126, 414696, 419299, 423936, 428607, 433311, 438049, 442820, 447626, 452467, 457341, 462250, 467193, 472172, 477185, 482232, 487315, 492433, 497587, 502776, 508000, 513260, 518555, 523887, 529255, 534658, 540098, 545574, 551087, 556637, 562223, 567846, 573505, 579202, 584937, 590708, 596517, 602363, 608248, 614170, 620129, 626127, 632163, 638238, 644351, 650502, 656692, 662920, 669188, 675495, 681840, 688225, 694649, 701113, 707617, 714160, 720743, 727365, 734028, 740732, 747475, 754259, 761083, 767949, 774855, 781801, 788789, 795818, 802889, 810001, 817154, 824349, 831585, 838864, 846185, 853547, 860952, 868399, 875889, 883422, 890997, 898615, 906275, 913979, 921727, 929517, 937351, 945228, 953150, 961115, 969123, 977176, 985273, 993415, 1001601, 1009831, 1018106, 1026425, 1034790, 1043200, 1051654, 1060154, 1068699, 1077290, 1085927, 1094609, 1103337, 1112110, 1120930, 1129797, 1138709, 1147668, 1156673, 1165726, 1174825, 1183970, 1193163, 1202403, 1211691, 1221026, 1230408, 1239838, 1249315, 1258841, 1268415, 1278036, 1287706, 1297424, 1307191, 1317007, 1326871, 1336784, 1346745, 1356756, 1366817, 1376926, 1387085, 1397293, 1407552, 1417860, 1428217, 1438625, 1449083, 1459592, 1470151, 1480760, 1491420, 1502130, 1512892, 1523705, 1534568, 1545483, 1556449, 1567467, 1578537, 1589658, 1600831, 1612055, 1623332, 1634662, 1646043, 1657477, 1668963, 1680503, 1692095, 1703739, 1715437, 1727188, 1738993, 1750851, 1762762, 1774727, 1786745, 1798818, 1810945, 1823125, 1835360, 1847649, 1859993, 1872392, 1884845, 1897353, 1909915, 1922533, 1935207, 1947935, 1960719, 1973558, 1986454, 1999405, 2012411, 2025474, 2038593, 2051769, 2065001, 2078289, 2091634, 2105035, 2118494, 2132010, 2145582, 2159212, 2172899, 2186644, 2200447, 2214307, 2228225, 2242200, 2256234, 2270327, 2284477, 2298686, 2312953, 2327280, 2341665, 2356108, 2370611, 2385173, 2399795, 2414476, 2429216, 2444016, 2458875, 2473795, 2488775, 2503814, 2518914, 2534074, 2549295, 2564577, 2579919, 2595322, 2610785, 2626310, 2641897, 2657544, 2673253, 2689023, 2704856, 2720750, 2736705, 2752723, 2768803, 2784946, 2801151, 2817418, 2833748, 2850140, 2866596, 2883115, 2899696, 2916341, 2933049, 2949821, 2966657, 2983556, 3000519, 3017545, 3034636, 3051792, 3069011, 3086295, 3103643, 3121057, 3138535, 3156077, 3173685, 3191358, 3209097, 3226901, 3244770, 3262705, 3280705, 3298772, 3316905, 3335103, 3353368, 3371699, 3390097, 3408562, 3427093, 3445691, 3464355, 3483087, 3501887, 3520753, 3539687, 3558688, 3577758, 3596895, 3616099, 3635372, 3654713, 3674123, 3693601, 3713147, 3732762, 3752445, 3772198, 3792020, 3811910, 3831870, 3851899, 3871998, 3892167, 3912405, 3932713, 3953090, 3973538, 3994057, 4014645, 4035304, 4056033, 4076834, 4097705, 4118646, 4139659, 4160743, 4181899, 4203126, 4224424, 4245794, 4267235, 4288749, 4310335, 4331992, 4353722, 4375524, 4397399, 4419347, 4441367, 4463460, 4485625, 4507864, 4530177, 4552562, 4575021, 4597553, 4620160, 4642840, 4665593, 4688421, 4711323, 4734300, 4757351, 4780476, 4803676, 4826950, 4850300, 4873725, 4897224, 4920799, 4944449, 4968175, 4991977, 5015854, 5039807, 5063835, 5087940, 5112122, 5136379, 5160713, 5185123, 5209611, 5234175, 5258815, 5283533, 5308328, 5333201, 5358151, 5383178, 5408283, 5433465, 5458726, 5484065, 5509481, 5534976, 5560549, 5586201, 5611932, 5637741, 5663629, 5689595, 5715641, 5741767, 5767971, 5794255, 5820618, 5847062, 5873585, 5900187, 5926870, 5953633, 5980477, 6007401, 6034405, 6061490, 6088655, 6115902, 6143230, 6170638, 6198128, 6225699, 6253352, 6281087, 6308903, 6336801, 6364780, 6392842, 6420987, 6449213, 6477522, 6505913, 6534388, 6562945, 6591584, 6620307, 6649113, 6678003, 6706976, 6736032, 6765172, 6794395, 6823703, 6853095, 6882570, 6912130, 6941774, 6971503, 7001317, 7031215, 7061198, 7091265, 7121418, 7151657, 7181980, 7212389, 7242883, 7273464, 7304130, 7334881, 7365719, 7396643, 7427654, 7458751, 7489934, 7521204, 7552560, 7584004, 7615535, 7647152, 7678857, 7710649, 7742529, 7774497, 7806552, 7838695, 7870925, 7903244, 7935652, 7968147, 8000731, 8033403, 8066165, 8099015, 8131953, 8164981, 8198098, 8231305, 8264601, 8297986, 8331461, 8365025, 8398680, 8432425, 8466259, 8500184, 8534199, 8568305, 8602502, 8636789, 8671167, 8705635, 8740195, 8774847, 8809589, 8844423, 8879348];

console.log(runearray.length)

function getEldenRingData(name) {
    fetch("https://eldenring.fanapis.com/api/classes?name=" + name)
        .then(data => data.json())
        .then(response => {           
            document.querySelector(".vigor").min = parseInt(response.data[0].stats.vigor);
            document.querySelector(".vigor").value = parseInt(response.data[0].stats.vigor);
            
            document.querySelector(".mind").min = parseInt(response.data[0].stats.mind);
            document.querySelector(".mind").value = parseInt(response.data[0].stats.mind);
            
            document.querySelector(".endurance").min = parseInt(response.data[0].stats.endurance);
            document.querySelector(".endurance").value = parseInt(response.data[0].stats.endurance);
            
            document.querySelector(".strength").min = parseInt(response.data[0].stats.strength);
            document.querySelector(".strength").value = parseInt(response.data[0].stats.strength);
            
            document.querySelector(".dexterity").min = parseInt(response.data[0].stats.dexterity);
            document.querySelector(".dexterity").value = parseInt(response.data[0].stats.dexterity);
            
            document.querySelector(".intelligence").min = parseInt(response.data[0].stats.intelligence);
            document.querySelector(".intelligence").value = parseInt(response.data[0].stats.intelligence);
            
            document.querySelector(".faith").min = parseInt(response.data[0].stats.faith);
            document.querySelector(".faith").value = parseInt(response.data[0].stats.faith);
            
            document.querySelector(".arcane").min = parseInt(response.data[0].stats.arcane);
            document.querySelector(".arcane").value = parseInt(response.data[0].stats.arcane);
            
            document.querySelector("#slider1").min = parseInt(response.data[0].stats.vigor);
            document.querySelector("#slider1").value = parseInt(response.data[0].stats.vigor);
            
             document.querySelector("#slider2").min = parseInt(response.data[0].stats.mind);
            document.querySelector("#slider2").value = parseInt(response.data[0].stats.mind);
           
            document.querySelector("#slider3").min = parseInt(response.data[0].stats.endurance);
            document.querySelector("#slider3").value = parseInt(response.data[0].stats.endurance);
            
            document.querySelector("#slider4").min = parseInt(response.data[0].stats.strength);
            document.querySelector("#slider4").value = parseInt(response.data[0].stats.strength);
            
            document.querySelector("#slider5").min = parseInt(response.data[0].stats.dexterity);
            document.querySelector("#slider5").value = parseInt(response.data[0].stats.dexterity);
            
            document.querySelector("#slider6").min = parseInt(response.data[0].stats.intelligence);
            document.querySelector("#slider6").value = parseInt(response.data[0].stats.intelligence);
            
            document.querySelector("#slider7").min = parseInt(response.data[0].stats.faith);
            document.querySelector("#slider7").value = parseInt(response.data[0].stats.faith);
            
            document.querySelector("#slider8").min = parseInt(response.data[0].stats.arcane);
            document.querySelector("#slider8").value = parseInt(response.data[0].stats.arcane);
            

            level = (parseInt(document.querySelector(".vigor").value) + parseInt(document.querySelector(".mind").value) + parseInt(document.querySelector(".endurance").value) + parseInt(document.querySelector(".strength").value) + parseInt(document.querySelector(".dexterity").value) + parseInt(document.querySelector(".intelligence").value) + parseInt(document.querySelector(".faith").value) + parseInt(document.querySelector(".arcane").value)) - 79;
            document.getElementById("level").value = level;

            document.querySelectorAll('#slider1, #slider2, #slider3, #slider4, #slider5, #slider6, #slider7, #slider8').forEach(element => {
                addEventListener('input', function () {
                    level = (parseInt(document.querySelector(".vigor").value) + parseInt(document.querySelector(".mind").value) + parseInt(document.querySelector(".endurance").value) + parseInt(document.querySelector(".strength").value) + parseInt(document.querySelector(".dexterity").value) + parseInt(document.querySelector(".intelligence").value) + parseInt(document.querySelector(".faith").value) + parseInt(document.querySelector(".arcane").value)) - 79;
                    document.getElementById("level").value = level;
                });
            })

         });

    // HP
    var hpvaluestring = document.querySelector('.vigor').value;

    var hpvalue = parseInt(hpvaluestring);

    document.getElementById("hp").textContent = hparray[hpvalue - 1];


    //FP

    var fpvaluestring = document.querySelector('.mind').value;

    var fpvalue = parseInt(fpvaluestring);

    document.getElementById("fp").textContent = fparray[fpvalue - 1];

    //STAMINA

    var staminavaluestring = document.querySelector('.endurance').value;

    var staminavalue = parseInt(staminavaluestring);

    document.getElementById("stamina").textContent = staminaarray[staminavalue - 1];

    //EQUIP LOAD

    var equipvaluestring = document.querySelector('.endurance').value;

    var equipvalue = parseInt(equipvaluestring);

    document.getElementById("equip").textContent = equiparray[equipvalue - 1];

    var lightload = equiparray[equipvalue - 1] * 0.3;

    var mediumload = equiparray[equipvalue - 1] * 0.7;

    var lightloadrounded = Math.round(lightload * 10) / 10;

    var mediumloadrounded = Math.round(mediumload * 10) / 10;

    document.getElementById("equiploadpercent1").textContent = lightloadrounded;

    document.getElementById("equiploadpercent2").textContent = mediumloadrounded;

    //DISCOVERY

    var discovervaluestring = document.querySelector('.arcane').value;

    var discovervalue = parseInt(discovervaluestring);

    document.getElementById("discover").textContent = discoverarray[discovervalue - 1];

    // //TOTAL RUNES

    // var trvaluestring = document.querySelector('#level').value;

    // var trvalue = parseInt(trvaluestring);

    // var newrunetotalarray = runearray[0]

    // for (i = 0; i < trvalue; i++) {
    //     var newrunetotalarray = newrunetotalarray + runearray[i];
    // }

    // document.getElementById("total_runes").textContent = newrunetotalarray.toLocaleString();

    // //RUNES TO NEXT LEVEL

    // var rlvaluestring = document.querySelector('#level').value;

    // var rlvalue = parseInt(rlvaluestring);

    // var newrunelevelarray = runearray[rlvalue];

    // document.getElementById("runetonextlevel").textContent = newrunelevelarray.toLocaleString();

}

function softCapColours() {
    if (parseInt(document.querySelector(".vigor").value) >= 40 && parseInt(document.querySelector(".vigor").value) < 60) {
        var vigor = document.querySelector(".vigor")
        vigor.style.color = "darkorange"
        }
    else if (parseInt(document.querySelector(".vigor").value) >= 60) {
        var vigor = document.querySelector(".vigor")
        vigor.style.color = "red"
    }
    else {
        var vigor = document.querySelector(".vigor")
        vigor.style.color = "white"
    }

    if (parseInt(document.querySelector(".mind").value) >= 50 && parseInt(document.querySelector(".mind").value) < 57) {
        var mind= document.querySelector(".mind")
        mind.style.color = "#FFC000"
        }
    else if (parseInt(document.querySelector(".mind").value) >= 57 && parseInt(document.querySelector(".mind").value) < 60) {
        var mind= document.querySelector(".mind")
        mind.style.color = "darkorange"
    }
    else if (parseInt(document.querySelector(".mind").value) >= 60) {
        var mind= document.querySelector(".mind")
        mind.style.color = "red"
    }
    else {
        var mind= document.querySelector(".mind")
        mind.style.color = "white"
    }

    if (parseInt(document.querySelector(".endurance").value) >= 50 && parseInt(document.querySelector(".endurance").value) < 60) {
        var endurance = document.querySelector(".endurance")
        endurance.style.color = "darkorange"
        }
    else if (parseInt(document.querySelector(".endurance").value) >= 60) {
        var endurance = document.querySelector(".endurance")
        endurance.style.color = "red"
    }
    else {
        var endurance = document.querySelector(".endurance")
        endurance.style.color = "white"
    }

    if (parseInt(document.querySelector(".strength").value) >= 20 && parseInt(document.querySelector(".strength").value) < 55) {
        var strength= document.querySelector(".strength")
        strength.style.color = "#FFC000"
        }
    else if (parseInt(document.querySelector(".strength").value) >= 55 && parseInt(document.querySelector(".strength").value) < 80) {
        var strength= document.querySelector(".strength")
        strength.style.color = "darkorange"
    }
    else if (parseInt(document.querySelector(".strength").value) >= 80) {
        var strength= document.querySelector(".strength")
        strength.style.color = "red"
    }
    else {
        var strength= document.querySelector(".strength")
        strength.style.color = "white"
    }

    if (parseInt(document.querySelector(".dexterity").value) >= 20 && parseInt(document.querySelector(".dexterity").value) < 55) {
        var dexterity= document.querySelector(".dexterity")
        dexterity.style.color = "#FFC000"
        }
    else if (parseInt(document.querySelector(".dexterity").value) >= 55 && parseInt(document.querySelector(".dexterity").value) < 80) {
        var dexterity= document.querySelector(".dexterity")
        dexterity.style.color = "darkorange"
    }
    else if (parseInt(document.querySelector(".dexterity").value) >= 80) {
        var dexterity= document.querySelector(".dexterity")
        dexterity.style.color = "red"
    }
    else {
        var dexterity= document.querySelector(".dexterity")
        dexterity.style.color = "white"
    }

    if (parseInt(document.querySelector(".intelligence").value) >= 20 && parseInt(document.querySelector(".intelligence").value) < 55) {
        var intelligence= document.querySelector(".intelligence")
        intelligence.style.color = "#FFC000"
        }
    else if (parseInt(document.querySelector(".intelligence").value) >= 55 && parseInt(document.querySelector(".intelligence").value) < 80) {
        var intelligence= document.querySelector(".intelligence")
        intelligence.style.color = "darkorange"
    }
    else if (parseInt(document.querySelector(".intelligence").value) >= 80) {
        var intelligence= document.querySelector(".intelligence")
        intelligence.style.color = "red"
    }
    else {
        var intelligence= document.querySelector(".intelligence")
        intelligence.style.color = "white"
    }

    if (parseInt(document.querySelector(".faith").value) >= 20 && parseInt(document.querySelector(".faith").value) < 55) {
        var faith= document.querySelector(".faith")
        faith.style.color = "#FFC000"
        }
    else if (parseInt(document.querySelector(".faith").value) >= 55 && parseInt(document.querySelector(".faith").value) < 80) {
        var faith= document.querySelector(".faith")
        faith.style.color = "darkorange"
    }
    else if (parseInt(document.querySelector(".faith").value) >= 80) {
        var faith= document.querySelector(".faith")
        faith.style.color = "red"
    }
    else {
        var faith= document.querySelector(".faith")
        faith.style.color = "white"
    }

    if (parseInt(document.querySelector(".arcane").value) >= 20 && parseInt(document.querySelector(".arcane").value) < 55) {
        var arcane= document.querySelector(".arcane")
        arcane.style.color = "#FFC000"
        }
    else if (parseInt(document.querySelector(".arcane").value) >= 55 && parseInt(document.querySelector(".arcane").value) < 80) {
        var arcane= document.querySelector(".arcane")
        arcane.style.color = "darkorange"
    }
    else if (parseInt(document.querySelector(".arcane").value) >= 80) {
        var arcane= document.querySelector(".arcane")
        arcane.style.color = "red"
    }
    else {
        var arcane= document.querySelector(".arcane")
        arcane.style.color = "white"
    }
}

selname = "Vagabond"

function clicked(theID) {
    document.getElementById(selname).textContent = "Choose"
    document.getElementById(selname).className = "button"
    document.getElementById(theID).textContent = "Selected"
    document.getElementById(theID).className = "button active"
    selname = document.getElementById(theID).name
}
       
function submitForm(event) {
    // HP
    var hpvaluestring = document.querySelector('.vigor').value;

    var hpvalue = parseInt(hpvaluestring);

    document.getElementById("hp").textContent = hparray[hpvalue - 1];


    //FP

    var fpvaluestring = document.querySelector('.mind').value;

    var fpvalue = parseInt(fpvaluestring);

    document.getElementById("fp").textContent = fparray[fpvalue - 1];

    //STAMINA

    var staminavaluestring = document.querySelector('.endurance').value;

    var staminavalue = parseInt(staminavaluestring);

    document.getElementById("stamina").textContent = staminaarray[staminavalue - 1];

    //EQUIP LOAD

    var equipvaluestring = document.querySelector('.endurance').value;

    var equipvalue = parseInt(equipvaluestring);

    document.getElementById("equip").textContent = equiparray[equipvalue - 1];

    var lightload = equiparray[equipvalue - 1] * 0.3;

    var mediumload = equiparray[equipvalue - 1] * 0.7;

    var lightloadrounded = Math.round(lightload * 10) / 10;

    var mediumloadrounded = Math.round(mediumload * 10) / 10;

    document.getElementById("equiploadpercent1").textContent = lightloadrounded;

    document.getElementById("equiploadpercent2").textContent = mediumloadrounded;

    //DISCOVERY

    var discovervaluestring = document.querySelector('.arcane').value;

    var discovervalue = parseInt(discovervaluestring);

    document.getElementById("discover").textContent = discoverarray[discovervalue - 1];

    //TOTAL RUNES

    var trvaluestring = document.querySelector('#level').value;

    var trvalue = parseInt(trvaluestring);

    var newrunetotalarray = runearray[0]

    for (i = 0; i < trvalue; i++) {
        var newrunetotalarray = newrunetotalarray + runearray[i];
    }

    document.getElementById("total_runes").textContent = newrunetotalarray.toLocaleString();

    //RUNES TO NEXT LEVEL

    var rlvaluestring = document.querySelector('#level').value;

    var rlvalue = parseInt(rlvaluestring);

    var newrunelevelarray = runearray[rlvalue];

    document.getElementById("runetonextlevel").textContent = newrunelevelarray.toLocaleString();

}

function runeCalc() {
    var levelcurrentstring = document.getElementById('levelcurrent').value;

    var levelcurrentminus1 = parseInt(levelcurrentstring);

    var levelwantstring = document.getElementById('levelwant').value;

    var levelwantminus2 = parseInt(levelwantstring);

    var levelcurrent = levelcurrentminus1 - 1;

    var levelwant = levelwantminus2 - 2;

    var newrunearray = runearray[levelcurrent];

    for (let i = levelcurrent; i < levelwant; i++) {
        var newrunearray = newrunearray + runearray[i + 1];
    }

    document.getElementById('runes').textContent = newrunearray.toLocaleString();
}


function levelCalc() {
    var levelcurrentstring = document.getElementById('levelcurrent1').value;

    var levelcurrentminus1 = parseInt(levelcurrentstring);

    var runecurrentstring = document.getElementById('runecurrent1').value;

    var runecurrentvalue = parseInt(runecurrentstring);

    var levelcurrent = levelcurrentminus1 - 1;

    var levelarray = []

    var newrunearray = runearray[levelcurrent];

    i = 1

    while (newrunearray < runecurrentvalue) {
        newrunearray += runearray[levelcurrent + i]
        levelarray.push(newrunearray)
        i++
    }

    document.getElementById('runes1').textContent = levelarray.length + 1;
}

//MOHGWYN BIRD
function mbRune() {
    var mbrunesper10sec = 11036 * 6;

    document.getElementById('runefarm').textContent = mbrunesper10sec;
    document.getElementById('button').textContent = document.getElementById('mbm').textContent;
}

//MOHGWYN ALBINAURIC
function maRune() {
    var marunesper10sec = 28616 * 5;

    document.getElementById('runefarm').textContent = marunesper10sec;
    document.getElementById('button').textContent = document.getElementById('mam').textContent;
}

//CAELID VULGAR MILITIAMEN
function cvmRune() {
    var cvmrunesper10sec = 4368;

    document.getElementById('runefarm').textContent = cvmrunesper10sec;
    document.getElementById('button').textContent = document.getElementById('cvmm').textContent;
}

//LENNE'S RISE BOULDER
function lrbRune() {
    var lrbrunesper10sec = 1952 * 3;

    document.getElementById('runefarm').textContent = lrbrunesper10sec;
    document.getElementById('button').textContent = document.getElementById('lrbm').textContent;
}

//NG+
function ngRunes () {
    var change = parseInt(document.getElementById('runefarm').textContent);
    var increase = change * 2;
    document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1
}

//NG+1
function ng1Runes () {
    var change = parseInt(document.getElementById('runefarm').textContent);
    var increase = change * 2.05;
    document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1
}

//NG+2
function ng2Runes () {
    var change = parseInt(document.getElementById('runefarm').textContent);
    var increase = change * 2.1;
    document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1
}

//NG+3
function ng3Runes () {
    var change = parseInt(document.getElementById('runefarm').textContent);
    var increase = change * 2.125;
    document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1
}

//NG+4
function ng4Runes () {
    var change = parseInt(document.getElementById('runefarm').textContent);
    var increase = change * 2.2;
    document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1
}
//NG+5
function ng5Runes () {
    var change = parseInt(document.getElementById('runefarm').textContent);
    var increase = change * 2.25;
    document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1
}

//NG+6
function ng6Runes () {
    var change = parseInt(document.getElementById('runefarm').textContent);
    var increase = change * 2.5;
    document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1
}

//NG+7
function ng7Runes () {
    var change = parseInt(document.getElementById('runefarm').textContent);
    var increase = change * 2.75;
    document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1
}

//CHECKBOX

function scarabIncrease() {
    if (document.getElementById('scarabcheck').checked == true) {
        var change = parseInt(document.getElementById('runefarm').textContent);
        if (document.getElementById('fowlfootcheck').checked == true) {
            var increase = change / 1.3 * 1.5;
        }
        else {
            var increase = change * 1.20;
        }
        document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1;
    }
    else if (document.getElementById('scarabcheck').checked == false) {
        if (document.getElementById('fowlfootcheck').checked == true) {
            parseInt(document.getElementById('runefarm').textContent) / 1.5
        }
        else {
            parseInt(document.getElementById('runefarm').textContent) / 1.2
        }
            
    }
}

function fowlfootIncrease() {
    if (document.getElementById('fowlfootcheck').checked == true) {
        var change = parseInt(document.getElementById('runefarm').textContent);
        if (document.getElementById('scarabcheck').checked == true) {
            var increase = change / 1.2 * 1.5;
        }
        else {
            var increase = change * 1.30;
        }
        document.getElementById('runefarm').textContent = Math.round(increase * 1) / 1;
    }
    else if (document.getElementById('fowlfootcheck').checked == false) {
        if (document.getElementById('scarabcheck').checked == true) {
            parseInt(document.getElementById('runefarm').textContent) / 1.5
        }
        else {
            parseInt(document.getElementById('runefarm').textContent) / 1.3
        }
        
    }
}

function timeForRunes() {
    var runemessagestring = document.getElementById('runes').textContent;
    var runemessage = parseFloat(runemessagestring.replace(/,/g, ''))
    
    var runefarmmessage = parseInt(document.getElementById('runefarm').textContent);

    var sum = runemessage / runefarmmessage;

    var sumrounded = Math.round(sum * 1) / 1;
        document.getElementById('timeforrune').textContent = "~" + sumrounded + "mins";
    
    if (sumrounded.toString().length > 2) {
        var sumfinal = sumrounded/60;
        var sumrounded1 = Math.round(sumfinal * 10) / 10;
        document.getElementById('timeforrune').textContent = "~" + sumrounded1 + "hrs";
    }
}