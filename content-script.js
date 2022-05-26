//content-script.js

const vocabList = [
    [/gun controls/g, 'child safety laws'],
    [/( gun-control(?=\W))/g, 'child safety'],
    [/gun control/g, 'child safety'],
    [/Gun-control/g, 'Child safety'],
    [/Gun control/g, 'Child safety'],
    [/Gun Control/g, 'Child Safety'],
    [/Gun Safety/g, 'Child-Killing Device Safety'],
    [/comprehensive gun reform/g, 'passing laws to protect children from getting shot in the face'],
    [/gun reform/g, 'protecting children from getting shot in the face'],
    [/shooter/g, 'murderer'],
    [/mass shootings/g, 'completely preventable shootings of more than 4 people with a murder device'],
    [/mass shooting/g, 'completely preventable shooting of more than 4 people with a murder device'],
    [/elementary school shooting/g, 'elementary school ritual child sacrifice'],
    [/Elementary School Shooting/g, 'Elementary School Ritual Child Sacrifice'],
    [/high school shooting/g, 'high school ritual child sacrifice'],
    [/High School Shooting/g, 'High School Ritual Child Sacrifice'],
    [/school shooting/g, 'ritual child sacrifice'],
    [/School Shooting/g, 'Ritual child Sacrifice'],
    [/firearm/g, 'murder device'],
    [/right to bear arms/g, 'right to kill children'],
    [/Second Amendment rights/g, 'Child-Killing rights'],
    [/Second Amendment/g, 'Right to Kill Children'],
    [/Gunman/g, 'Murder Device Owner'],
    [/gunman/g, 'murder device owner'],
    [/handgun/g, 'handheld child-killing device'],
    [/Handgun/g, 'Handheld Child-Killing Device'],
    [/((?<=\W)gun(?=\W))/g, 'child-killing device'],
    [/gunfire/g, 'murder device fire'],
    [/Gunfire/g, 'Murder device fire'],
    [/(Gun(?=\W))/g, 'Child-killing device'],
    [/((?<=\W)guns(?=\W))/g, 'child-killing devices'],
    [/(Guns(?=\W))/g, 'Child-killing devices'],
    [/assault weapon/g, 'group-killing device'],
    [/Assault weapon/g, 'Group-killing device'],
    [/background check/g, 'crazy check'],
    [/rifle/g, 'two-handed murder device'],
    [/Rifle/g, 'Two-Handed Murder Device'],
    [/red flag/g, `make-sure-they-won't-kill-anybody`],
    [/Red Flag/g, `Make-Sure-They-Won't-Kill-Anybody`],
    [/Mass killing/g, `Ritual Human Sacrifice`],
    [/mass killing/g, `ritual human sacrifice`]
];

function replaceWords(element) {
    element.contents().each(function() {
        if (this.nodeType === 3) {
            // let newText = $(this).text();
            // if (newText.indexOf('http') !== -1) {
            //     console.log(newText)
            // }
            for (var i = 0; vocabList.length; i++) {
                const item = vocabList[i];
                const newText = $(this).text().replace(item[0], item[1]);
                this.nodeValue = newText.replace(item[0], item[1]);
            }
            // this.nodeValue = newText;
        }

        if (this.nodeType === 1) {
            // let newText = $(this).html()
            // if (newText.indexOf('http') !== -1) {
            //     console.log(newText)
            // }
            for (var i = 0; i < vocabList.length; i++) {
                const item = vocabList[i];
                const newText = $(this).html().replace(item[0], item[1])
                $(this).html(newText)
            }
            
        }
    })
    
    
};

function runScript() {
    $("div").each((index, element) => {
        const e = $(element);
        replaceWords(e);
    });
};

runScript();
setInterval(runScript, 10000)