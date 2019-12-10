function init() {
    var name;
    var resultX;
    var enemyType;
    var damage;
    var playerTotal = resultX;
    var enemyBattleFlee = false;
    var playerBattleFlee = false;
    var gold = 0;
    var potions = 0;
    var magic = 0;
    var key = 0;
    var battle;

    var player = {
        vitality: 0,
        vitalityT: 0,
        dexterity: 0,
        dexterityT: 0,
        strength: 0,
        strengthT: 0,
        intelligence: 0,
        intelligenceT: 0,
        willpower: 0,
        willpowerT: 0,
        luck: 0,
        luckT: 0
    };

    var enemy = {};

    var slime = {
        name: "Slime",
        vitality: 8,
        vitalityT: 8,
        dexterity: 6,
        dexterityT: 6,
        strength: 6,
        strengthT: 6,
        intelligence: 2,
        intelligenceT: 2,
        willpower: 2,
        willpowerT: 2,
        luck: 2,
        luckT: 2
    };

    var bat = {
        name: "Bat",
        vitality: 10,
        vitalityT: 10,
        dexterity: 16,
        dexterityT: 16,
        strength: 6,
        strengthT: 6,
        intelligence: 5,
        intelligenceT: 5,
        willpower: 5,
        willpowerT: 5,
        luck: 5,
        luckT: 5
    };

    var centipede = {
        name: "Giant Centipede",
        vitality: 12,
        vitalityT: 12,
        dexterity: 6,
        dexterityT: 6,
        strength: 10,
        strengthT: 10,
        intelligence: 7,
        intelligenceT: 7,
        willpower: 8,
        willpowerT: 8,
        luck: 6,
        luckT: 6
    };

    var goblin = {
        name: "Goblin",
        vitality: 14,
        vitalityT: 14,
        dexterity: 9,
        dexterityT: 9,
        strength: 10,
        strengthT: 10,
        intelligence: 9,
        intelligenceT: 9,
        willpower: 10,
        willpowerT: 10,
        luck: 10,
        luckT: 10
    };

    var ghost = {
        name: "Ghost",
        vitality: 18,
        vitalityT: 18,
        dexterity: 16,
        dexterityT: 16,
        strength: 4,
        strengthT: 4,
        intelligence: 16,
        intelligenceT: 16,
        willpower: 8,
        willpowerT: 8,
        luck: 14,
        luckT: 14
    };

    var demon = {
        name: "Demon",
        vitality: 24,
        vitalityT: 24,
        dexterity: 10,
        dexterityT: 10,
        strength: 8,
        strengthT: 8,
        intelligence: 18,
        intelligenceT: 18,
        willpower: 14,
        willpowerT: 14,
        luck: 16,
        luckT: 16
    };

    var death = {
        name: "Angel of Death",
        vitality: 20,
        vitalityT: 20,
        dexterity: 16,
        dexterityT: 16,
        strength: 18,
        strengthT: 18,
        intelligence: 18,
        intelligenceT: 18,
        willpower: 16,
        willpowerT: 16,
        luck: 18,
        luckT: 18
    };

    var model = {
        boardSize: 7,
        numEnemies: 25,
        enemySize: 1,

        enemies: [{
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            },
            {
                locations: [0],
                fight: [""]
            }
        ],

        explore: function (guess) {
            for (var i = 0; i < this.numEnemies; i++) {
                var enemy = this.enemies[i];
                var index = enemy.locations.indexOf(guess);

                if (index >= 0) {
                    enemy.fight[index] = "fight";
                    var battle = true;
                    if (battle == true); {
                        enemyEnc();
                    }
                    return true;
                }
            }
            document.getElementById("gameText").innerHTML = ("You find nothing of interest here.");
            return false;
        },

        generateEnemyLocations: function () {
            var locations;
            for (var i = 0; i < this.numEnemies; i++) {
                do {
                    locations = this.generateEnemy();
                } while (this.collision(locations));
                this.enemies[i].locations = locations;
            }
            console.log("Enemies: ");
            console.log(this.enemies);
        },

        generateEnemy: function () {
            var direction = Math.floor(Math.random() * 2);
            var row, col;

            if (direction === 1) {
                row = Math.floor(Math.random() * this.boardSize);
                col = Math.floor(Math.random() * (this.boardSize - this.enemySize + 1));
            } else {
                row = Math.floor(Math.random() * (this.boardSize - this.enemySize + 1));
                col = Math.floor(Math.random() * this.boardSize);
            }

            var newEnemyLocations = [];
            for (var i = 0; i < this.enemySize; i++) {
                if (direction === 1) {
                    newEnemyLocations.push(row + "" + (col + i));
                } else {
                    newEnemyLocations.push((row + i) + "" + col);
                }
            }
            return newEnemyLocations;
        },

        collision: function (locations) {
            for (var i = 0; i < this.numEnemies; i++) {
                var enemy = this.enemies[i];
                for (var j = 0; j < locations.length; j++) {
                    if (enemy.locations.indexOf(locations[j]) >= 0) {
                        return true;
                    }
                }
            }
            return false;
        }

    };

    var controller = {
        guesses: 0,

        processGuess: function (guess) {
            var location = parseGuess(guess);
            if (location) {
                this.guesses++;
                var monster = model.explore(location);
            }
        }
    }

    function parseGuess(guess) {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if (guess === null || guess.length !== 2) {
            alert("Oops, please enter a letter and a number on the board.");
        } else {
            var firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that isn't on the board.");
            } else if (row < 0 || row >= model.boardSize ||
                column < 0 || column >= model.boardSize) {
                alert("Oops, that's off the board!");
            } else {
                return row + column;
            }
        }
        return null;
    }

    function handleKeyPress(e) {
        var exploreButton = document.getElementById("exploreButton");

        e = e || window.event;

        if (e.keyCode === 13) {
            exploreButton.click();
            return false;
        }
    }

    function handleExploreButton() {
        var guessInput = document.getElementById("playerInput");
        var guess = guessInput.value.toUpperCase();

        controller.processGuess(guess);

        guessInput.value = "";
    }

    document.getElementById("gold").innerHTML = gold;
    document.getElementById("potion").innerHTML = potions;
    document.getElementById("magic").innerHTML = magic;
    document.getElementById("key").innerHTML = key;

    alert("Welcome to Dungeon Destroyer, a turn-based adventure game with randomly generated loot, encounters and treasure. First off, tell us your name.");
    name = prompt("What's yer' name hero?")
    document.getElementById("playerName").innerHTML = name;
    player.name = name;
    alert("Great, now click the next button to proceed with your journey.")
    document.getElementById("gameText").innerHTML = ("Click Below!");
    var comNum = 1;

    document.getElementById("nextButton").onclick = function () {
        if (comNum == 1) {
            document.getElementById("gameText").innerHTML = ("Nice to meet you " + player.name + ". Let's get you started by figurin' your skills.");
            comNum++;
        } else if (comNum == 2) {
            document.getElementById("gameText").innerHTML = ("First, we'll determine your vitality. Feeling healthy adventurer, or are you puny and small?");
            comNum++;
        } else if (comNum == 3) {
            statsRoll();
            document.getElementById("gameText").innerHTML = ("Will you look at that? A " + resultX + ", that's not a bit too shabby.");
            player.vitality = resultX;
            player.vitalityT = resultX;
            document.getElementById("vitality").innerHTML = (player.vitality + "/" + player.vitalityT);

            comNum++;
        } else if (comNum == 4) {
            document.getElementById("gameText").innerHTML = ("What about yer' speed; can ye' run like yon' horse of do you slog around as though your boots be filled with mud?");
            comNum++;
        } else if (comNum == 5) {
            statsRoll();
            document.getElementById("gameText").innerHTML = ("Will you look at that? A " + resultX + ", that's not a bit too shabby.");
            player.dexterity = resultX;
            player.dexterityT = resultX;
            document.getElementById("dexterity").innerHTML = (player.dexterity + "/" + player.dexterityT);
            comNum++;
        } else if (comNum == 6) {
            document.getElementById("gameText").innerHTML = ("Are ye' strong adventurer, or are ye' a wimpy git with no talent or fight?");
            comNum++;
        } else if (comNum == 7) {
            statsRoll();
            document.getElementById("gameText").innerHTML = ("Will you look at that? A " + resultX + ", that's not a bit too shabby.");
            player.strength = resultX;
            player.strengthT = resultX;
            document.getElementById("strength").innerHTML = (player.strength + "/" + player.strengthT);
            comNum++;
        } else if (comNum == 8) {
            document.getElementById("gameText").innerHTML = ("Are ye' brilliant or stupid? Bright or dim?");
            comNum++;
        } else if (comNum == 9) {
            statsRoll();
            document.getElementById("gameText").innerHTML = ("Will you look at that? A " + resultX + ", that's not a bit too shabby.");
            player.intelligence = resultX;
            player.intelligenceT = resultX;
            document.getElementById("intelligence").innerHTML = (player.intelligence + "/" + player.intelligenceT);
            comNum++;
        } else if (comNum == 10) {
            document.getElementById("gameText").innerHTML = ("Wizarding your thing? Never put much faith in magic myself.");
            comNum++;
        } else if (comNum == 11) {
            statsRoll();
            document.getElementById("gameText").innerHTML = ("Will you look at that? A " + resultX + ", that's not a bit too shabby.");
            player.willpower = resultX;
            player.willpowerT = resultX;
            document.getElementById("willpower").innerHTML = (player.willpower + "/" + player.willpowerT);
            comNum++;
        } else if (comNum == 12) {
            document.getElementById("gameText").innerHTML = ("Yar' and finally luck; do ye' have the luck of a new lover, or the luck of a shoe?");
            comNum++;
        } else if (comNum == 13) {
            statsRoll();
            document.getElementById("gameText").innerHTML = ("Will you look at that? A " + resultX + ", that's not a bit too shabby.");
            player.luck = resultX;
            player.luckT = resultX;
            document.getElementById("luck").innerHTML = (player.luck + "/" + player.luckT);
            comNum++;
        } else if (comNum == 13) {
            document.getElementById("gameText").innerHTML = ("Wonderful! Now, 'fore we send you off into the vast beyond a few points of interest to note.");
            comNum++;
        } else if (comNum == 14) {
            document.getElementById("gameText").innerHTML = ("Inside the dungeon you'll be completely alone until you finish the quest. Select locations to explore by using the movement input to select coordinates.");
            comNum++;
        } else if (comNum == 15) {
            document.getElementById("gameText").innerHTML = ("When you're attacked by the beasties, you'll be able to see all their information to the right as well as the action buttons that allow you to fight, defend or flee.");
            comNum++;
        } else if (comNum == 16) {
            document.getElementById("gameText").innerHTML = ("Somewhere in the dungeon one of the beasties carries a magical key. Find the key, and more than likely the Master of the Dungeon will attack you. Beat the Master and you win!");
            comNum++;
        } else if (comNum == 17) {
            document.getElementById("gameText").innerHTML = ("One more thing, take these items, you may need them. Gold helps to build your score, potions can refill your vitality, and magic scrolls build your attack power.");
            comNum++;
            gold += 100;
            potions += 1;
            document.getElementById("gold").innerHTML = gold;
            document.getElementById("potion").innerHTML = potions;
        } else {
            document.getElementById("gameText").innerHTML = ("You enter the dark dungeon (Enter a location to explore).");
            document.getElementById("nextButton").style.visibility = "hidden";
        }
    }

    function statsRoll() {
        var roll;
        roll = Math.ceil(Math.random() * 10);
        if (roll <= 2) {
            resultX = roll * 10;
        } else if (roll >= 3 && roll <= 5) {
            resultX = roll * 4;
        } else {
            resultX = roll * 3;
        }
        return resultX;
    }

    function enemyEnc() {
		document.getElementById("creature").play();
        var enemyType;
        enemyType = Math.ceil(Math.random() * 21);
        if (enemyType >= 1 && enemyType <= 6) {
            document.getElementById("enemyImg").style.visibility = "visible";
            document.getElementById("enemyImg").src = "assets/blob.png";
            enemy = slime;
            document.getElementById("enemyName").innerHTML = slime.name;
            document.getElementById("eHP").innerHTML = slime.vitality + "/" + slime.vitalityT;
            document.getElementById("eDEX").innerHTML = slime.dexterity + "/" + slime.dexterityT;
            document.getElementById("eSTR").innerHTML = slime.strength + "/" + slime.strengthT;
            document.getElementById("eINT").innerHTML = slime.intelligence + "/" + slime.intelligenceT;
            document.getElementById("eWILL").innerHTML = slime.willpower + "/" + slime.willpowerT;
            document.getElementById("eLUCK").innerHTML = slime.luck + "/" + slime.luckT;
            document.getElementById("gameText").innerHTML = (name + " encounters a " + enemy.name + "! What will " + name + "'s first action be?");
        } else if (enemyType >= 7 && enemyType <= 10) {
            document.getElementById("enemyImg").style.visibility = "visible";
            document.getElementById("enemyImg").src = "assets/bat.png";
            enemy = bat;
            document.getElementById("enemyName").innerHTML = bat.name;
            document.getElementById("eHP").innerHTML = bat.vitality + "/" + bat.vitalityT;
            document.getElementById("eDEX").innerHTML = bat.dexterity + "/" + bat.dexterityT;
            document.getElementById("eSTR").innerHTML = bat.strength + "/" + bat.strengthT;
            document.getElementById("eINT").innerHTML = bat.intelligence + "/" + bat.intelligenceT;
            document.getElementById("eWILL").innerHTML = bat.willpower + "/" + bat.willpowerT;
            document.getElementById("eLUCK").innerHTML = bat.luck + "/" + bat.luckT;
            document.getElementById("gameText").innerHTML = (name + " encounters a " + enemy.name + "! What will " + name + "'s first action be?");
        } else if (enemyType >= 11 && enemyType <= 14) {
            document.getElementById("enemyImg").style.visibility = "visible";
            document.getElementById("enemyImg").src = "assets/centipede.png";
            enemy = centipede;
            document.getElementById("enemyName").innerHTML = centipede.name;
            document.getElementById("eHP").innerHTML = centipede.vitality + "/" + centipede.vitalityT;
            document.getElementById("eDEX").innerHTML = centipede.dexterity + "/" + centipede.dexterityT;
            document.getElementById("eSTR").innerHTML = centipede.strength + "/" + centipede.strengthT;
            document.getElementById("eINT").innerHTML = centipede.intelligence + "/" + centipede.intelligenceT;
            document.getElementById("eWILL").innerHTML = centipede.willpower + "/" + centipede.willpower;
            document.getElementById("eLUCK").innerHTML = centipede.luck + "/" + centipede.luckT;
            document.getElementById("gameText").innerHTML = (name + " encounters a " + enemy.name + "! What will " + name + "'s first action be?");
        } else if (enemyType >= 15 && enemyType <= 17) {
            document.getElementById("enemyImg").style.visibility = "visible";
            document.getElementById("enemyImg").src = "assets/goblin.png";
            enemy = goblin;
            document.getElementById("enemyName").innerHTML = goblin.name;
            document.getElementById("eHP").innerHTML = goblin.vitality + "/" + goblin.vitalityT;
            document.getElementById("eDEX").innerHTML = goblin.dexterity + "/" + goblin.dexterityT;
            document.getElementById("eSTR").innerHTML = goblin.strength + "/" + goblin.strengthT;
            document.getElementById("eINT").innerHTML = goblin.intelligence + "/" + goblin.intelligenceT;
            document.getElementById("eWILL").innerHTML = goblin.willpower + "/" + goblin.willpowerT;
            document.getElementById("eLUCK").innerHTML = goblin.luck + "/" + goblin.luckT;
            document.getElementById("gameText").innerHTML = (name + " encounters a " + enemy.name + "! What will " + name + "'s first action be?");
        } else if (enemyType >= 18 && enemyType <= 19) {
            document.getElementById("enemyImg").style.visibility = "visible";
            document.getElementById("enemyImg").src = "assets/ghost.png";
            enemy = ghost;
            document.getElementById("enemyName").innerHTML = ghost.name;
            document.getElementById("eHP").innerHTML = ghost.vitality + "/" + ghost.vitalityT;
            document.getElementById("eDEX").innerHTML = ghost.dexterity + "/" + ghost.dexterityT;
            document.getElementById("eSTR").innerHTML = ghost.strength + "/" + ghost.strengthT;
            document.getElementById("eINT").innerHTML = ghost.intelligence + "/" + ghost.intelligenceT;
            document.getElementById("eWILL").innerHTML = ghost.willpower + "/" + ghost.willpowerT;
            document.getElementById("eLUCK").innerHTML = ghost.luck + "/" + ghost.luckT;
            document.getElementById("gameText").innerHTML = (name + " encounters a " + enemy.name + "! What will " + name + "'s first action be?");
        } else {
            document.getElementById("enemyImg").style.visibility = "visible";
            document.getElementById("enemyImg").src = "assets/demon.png";
            enemy = demon;
            document.getElementById("enemyName").innerHTML = demon.name;
            document.getElementById("eHP").innerHTML = demon.vitality + "/" + demon.vitalityT;
            document.getElementById("eDEX").innerHTML = demon.dexterity + "/" + demon.dexterityT;
            document.getElementById("eSTR").innerHTML = demon.strength + "/" + demon.strengthT;
            document.getElementById("eINT").innerHTML = demon.intelligence + "/" + demon.intelligenceT;
            document.getElementById("eWILL").innerHTML = demon.willpower + "/" + demon.willpowerT;
            document.getElementById("eLUCK").innerHTML = demon.luck + "/" + demon.luckT;
            document.getElementById("gameText").innerHTML = (name + " encounters a " + enemy.name + "! What will " + name + "'s first action be?");
        }
    }


    document.getElementById("attackButton").onclick = function () {
        if (player.vitality <= 0) {
            gameOver();
        } else {
            damage = Math.ceil((player.strength / 4));
            document.getElementById("eHP").innerHTML = (enemy.vitality -= damage) + "/" + (enemy.vitalityT);
            enemyBlock = false;
            document.getElementById("gameText").innerHTML = (name + " attacks for " + damage + " damage.");
			document.getElementById("swing").play();
            setTimeout(enemyAction, 2000);
        }
    }

    document.getElementById("fleeButton").onclick = function () {
        var fleeChance = (Math.ceil(Math.random() * 4));
        if (player.vitality <= 0) {
            gameOver();
        } else {
            if (fleeChance == 4) {
                playerBattleFlee = true;
                document.getElementById("gameText").innerHTML = (name + " flees the battle.");
                setTimeout(battleEnd, 4000);
            } else {
                document.getElementById("gameText").innerHTML = (name + " fails to flee the battle.");
                setTimeout(enemyAction, 2000);
            }
        }
    }

    document.getElementById("potionButton").onclick = function () {
        if (player.vitality <= 0) {
            gameOver();
        } else {
            if (potions > 0) {
                if (player.vitality < player.vitalityT)
                    document.getElementById("gameText").innerHTML = (name + " gulps down a health potion.");
                player.vitality = player.vitalityT;
                potions -= 1;
                document.getElementById("potion").innerHTML = potions;
                document.getElementById("vitality").innerHTML = player.vitality + "/" + player.vitalityT;
            } else {
                document.getElementById("gameText").innerHTML = (name + " is out of potions.");
            }
        }
    }

    function enemyAction() {
        var action = Math.ceil(Math.random() * 10);
        if (enemy.vitality <= 0) {
            document.getElementById("gameText").innerHTML = ("The " + enemy.name + " is dead.");
            setTimeout(battleEnd, 2000);
        } else {
            if (action >= 1 && action <= 7) {
                damage = Math.ceil(((enemy.strength) / 2));
                document.getElementById("vitality").innerHTML = (player.vitality -= damage) + "/" + player.vitalityT;
                document.getElementById("gameText").innerHTML = ("The " + enemy.name + " attacks " + name + " for " + damage + " damage. How does " + name + " respond?");
            } else {
                document.getElementById("gameText").innerHTML = ("The " + enemy.name + " tries to flee in fear.");
                setTimeout(fleeMonster, 2000);

                function fleeMonster() {
                    var fleeChance = (Math.ceil(Math.random() * 4));
                    if (fleeChance == 4) {
                        enemyBattleFlee = true;
                        document.getElementById("gameText").innerHTML = ("The " + enemy.name + " flees the battle.");
                        setTimeout(battleEnd, 4000);
                    } else {
                        document.getElementById("gameText").innerHTML = ("The " + enemy.name + " fails to flee.");
                    }
                }
            }
        }
    }

    function battleEnd() {
		document.getElementById("victory").play();
        var goldAward = (Math.ceil(Math.random() * player.luck));
        var extra = Math.ceil(Math.random() * 6);
        if (enemyBattleFlee == true) {
            cleanUp();
            document.getElementById("gameText").innerHTML = ("The monster escaped. Where should " + name + " explore next?");
        } else if (playerBattleFlee == true) {
            cleanUp();
            document.getElementById("gameText").innerHTML = (name + "escaped. Where should " + name + " explore next?");
        } else {
            gold = gold += goldAward;
            if (extra >= 4) {
                cleanUp();
                document.getElementById("gameText").innerHTML = (name + " was victorious. " + name + " collects their winnings.");
                document.getElementById("gold").innerHTML = gold;
                setTimeout(foundTreasure, 2000);
            } else {
                cleanUp();
                document.getElementById("gameText").innerHTML = (name + " was victorious. " + name + " collects their winnings.");
                document.getElementById("gold").innerHTML = gold;
            }
        }
    }

    function foundTreasure() {
        var treasure = Math.ceil((Math.random()) * 25);
        console.log(treasure);
        if (treasure == 25) {
            document.getElementById("gameText").innerHTML = (name + " found the magic key. The Master of the Dungeon appears. What will " + player.name + " do?");
            key += 1;
            document.getElementById("key").innerHTML = key;
            enemy = death;
            document.getElementById("enemyImg").style.visibility = "visible";
            document.getElementById("enemyImg").src = "assets/death.png";
            document.getElementById("enemyName").innerHTML = death.name;
            document.getElementById("eHP").innerHTML = death.vitality + "/" + death.vitalityT;
            document.getElementById("eDEX").innerHTML = death.dexterity + "/" + death.dexterityT;
            document.getElementById("eSTR").innerHTML = death.strength + "/" + death.strengthT;
            document.getElementById("eINT").innerHTML = death.intelligence + "/" + death.intelligenceT;
            document.getElementById("eWILL").innerHTML = death.willpower + "/" + death.willpowerT;
            document.getElementById("eLUCK").innerHTML = death.luck + "/" + death.luckT;
        } else if (treasure >= 1 && treasure <= 10) {
            document.getElementById("gameText").innerHTML = (name + " was lucky. Hidden away on the corpse, they found a stash of gold. Where should " + name + " explore next?");
            gold += 500;
            document.getElementById("gold").innerHTML = gold;
        } else if (treasure >= 11 && treasure <= 20) {
            document.getElementById("gameText").innerHTML = (name + " was lucky. Hidden away on the corpse, they found a potion. Where should " + name + " explore next?");
            potions += 1;
            document.getElementById("potion").innerHTML = potions;
        } else  {
            document.getElementById("gameText").innerHTML = (name + " was lucky. Hidden away on the corpse, they found a magic scroll. Where should " + name + " explore next?");
            magic += 1;
            player.strength += 1;
            player.strengthT += 1;
            document.getElementById("magic").innerHTML = magic;
            document.getElementById("strength").innerHTML = player.strength + "/" + player.strengthT;
        } 
    }

    function cleanUp() {
        if (enemy.name == slime.name)
        {
            slime.vitality = 8;
        } else if (enemy.name == bat.Name){
            bat.vitality = 10;
        } else if (enemy.name == centipede.Name){
            centipede.vitality = 12;
        } else if (enemy.name == goblin.Name){
            goblin.vitality = 14;
        } else if (enemy.name == ghost.Name){
            ghost.vitality = 18;
        } else {
            demon.vitality = 24;
        }
        document.getElementById("enemyImg").style.visibility = "hidden";
        document.getElementById("eHP").innerHTML = "0/0";
        document.getElementById("eDEX").innerHTML = "0/0";
        document.getElementById("eSTR").innerHTML = "0/0";
        document.getElementById("eINT").innerHTML = "0/0";
        document.getElementById("eWILL").innerHTML = "0/0";
        document.getElementById("eLUCK").innerHTML = "0/0";
    }

    function gameOver() {
        document.getElementById("gameText").innerHTML = (name + " died.");
        alert("Game Over! Reload the page to play again.")
    }

    var exploreButton = document.getElementById("exploreButton");
    exploreButton.onclick = handleExploreButton;

    var guessInput = document.getElementById("playerInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateEnemyLocations();
}

window.onload = init;