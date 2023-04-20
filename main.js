var canvas = document.getElementById(`canvas`)
var ctx = canvas.getContext(`2d`);
var input = document.getElementById(`input`)
var submit = document.getElementById(`enter`)
var bg = document.getElementById(`bg`)
var butt = document.getElementById(`butt`)
var menu = document.getElementById(`menu`)
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 512, 512);
ctx.fillStyle = "#00FF00";
ctx.drawImage("bg", 512, 19)
var current_city = `void`;
var gaming = true;
var battling = false;
var log = [];
class Giorgio {
    constructor() {
        this.name = `Giorgio`
        this.health = 100
        this.attack = 10
        this.defense = 5
        this.slippery = 1
        this.polenta = 1
        this.festivity = 0
        this.speed = 1
        this.inventory = [`Pasta`, `Wine`, `Tiramisù`]
    }
    
    take_damage(damage) {
        var actual_damage = damage - this.defense
        if (actual_damage < 0) {
            actual_damage = 0;
        }
        this.health -= actual_damage
        console.log(`${this.name} takes ${actual_damage} damage!`)
        if (this.health <= 0) {
            console.log(`${this.name} has died!`);
            console.log(`You've died.`);
            console.log(`Would you like to restart? `);
            console.log(`1. Yes `);
            console.log(`2. No `);
            
            choice = prompt(`Enter your choice: `)
        
            if (choice == `1`) {
                main();
            } else if (choice == `2`) {
                console.log(`Haha u dead lol`);
            }
        }
    }          

    attack_enemy(enemy) {
        var damage = 0;
        console.log(`${this.name} attacks ${enemy.name}!`);
        damage = this.attack;
        enemy.take_damage(damage);
    }
    use_item(item){
        if (this.inventory.includes(item)) {
            if (item == "Pasta") {
                this.health += 20;
                this.inventory.pop(item);
                console.log(`${this.name} eats ${item} and recovers 20 health!`);
            } else if (item == `Wine`) {
                this.attack += 5;
                this.inventory.pop(item);
                console.log(`${this.name} drinks ${item} and gains 5 attack!`);
            } else if (item == `Gold Chain`) {
                if (`Don ` in this.name) {
                    console.log(`${this.name} wears ${item} and is incredibely cool!`)
                    this.inventory.pop(item);
                }  else {
                    this.name = `Don ` + this.name
                    console.log(`${this.name} wears ${item} and gets a new moniker!`)
                    this.inventory.pop(item);
                }
            } else if (item == `Bread`) {
                this.slippery += 1
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes more elusive!`)
            } else if (item == `Tiramisù`) {
                this.health += 30
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and recovers 30 health!`)
            } else if (item == `Espresso`) {
                this.attack += 10
                this.inventory.pop(item)
                console.log(`${this.name} drinks ${item} and gains 10 attack!`)
            } else if (item == `Pizza`) {
                this.health += 50
                this.attack += 10
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gets a huge stat boost!`)
            } else if (item == `Gelato`) {
                this.slippery += 2
                this.attack += 5
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes super elusive!`)
            } else if (item == `Bistecca alla Fiorentina`) {
                this.slippery += 5
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes very elusive!`)
            } else if (item == `Ribollita`) {
                this.defense += 5
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes super resistant!`)
            } else if (item == `Pappa al pomodoro`) {
                this.slippery -= 2
                this.attack += 8
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and loses some elusiveness, but becomes stronger!`)
            } else if (item == `Cappuccino`) {
                this.attack -=4
                this.defense +=5
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and loses some attack, but becomes resistant!`)
            } else if (item == `Supplì`) {
                this.defense -=4
                this.slippery +=5
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and loses some defense, but becomes elusive!`)
            } else if (item == `Carciofi alla romana`) {
                this.defense +=1
                this.slippery +=1
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gains some defense and becomes elusive!`)
            } else if (item == `Risotto`) {
                this.attack +=1
                this.slippery +=1
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gains some attack and becomes elusive!`)
            } else if (item == `Cicchetti`) {
                this.attack +=1
                this.defense +=1
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gains some attack and becomes resistant!`)
            } else if (item == `Sarde in saor`) {
                this.defense +=1
                this.speed +=1
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gains some defense and becomes faster!`)
            } else if (item == `Spritz`) {
                this.defense +=3
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes resistant!`)
            } else if (item == `Polenta e schie`) {
                this.polenta +=5
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and their desire for polenta has increased!`)
            } else if (item == `Polenta`) {
                this.polenta +=1
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and their desire for polenta has mildly increased!`)
            } else if (item == `Arancini`) {
                this.defense +=3
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gains defense!`)
            } else if (item == `Casoncelli`) {
                this.attack += 3
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gains attack!`)
            } else if (item == `Panettone`) {
                this.festivity += 5
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gains a signifcant amount of holiday spirit!`)
            } else if (item == `Focaccia`) {
                this.speed += 3
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes faster!`)
            } else if (item == `Pasta alla norma`) {
                this.speed += 5
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gains significant speed!`)
            } else if (item == `Cannoli`) {
                this.festivity += 3
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes a little more festive!`)
            } else if (item == `Cioccolato di Modica`) {
                this.speed -= 3
                this.festivity += 4
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes a little more slower, but more festive!`)
            } else if (item == `Artisanal Goods`) {
                this.health -= 50
                this.inventory.pop(item)
                console.log(`${this.name} opens ${item} and reveals a pipe bomb!`)
            } else if (item == `Mask`) {
                this.health += 50
                this.inventory.pop(item)
                console.log(`${this.name} wears a ${item} for hours at a time and gains health!`)
            } else if (item == `Gondola`) {
                this.attack += 30
                this.inventory.pop(item)
                console.log(`${this.name} equips ${item} and becomes more powerful!`)
            } else if (item == `Glass`) {
                this.festivity += 30
                this.inventory.pop(item)
                console.log(`${this.name} equips ${item} and becomes more festive!`)
            } else if (item == `Meat`) {
                this.festivity -= 30
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes more grim.`)
            } else if (item == `Cheese`) {
                this.festivity += 30
                this.inventory.pop(item)
                console.log(`${this.name} consumes ${item} and becomes more festive! Hooray!`)
            } else if (item == `Stiletto`) {
                this.attack += 30
                this.inventory.pop(item)
                console.log(`${this.name} wields ${item} and becomes more powerful!`)
            } else if (item == `Fish`) {
                this.attack += 2
                this.inventory.pop(item)
                console.log(`${this.name} wields ${item} and becomes marginally more powerful!`)
            } else if (item == `Car Part`) {
                this.defense += 30
                this.health -= 3
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes bulkier!`)
            } else if (item == `Soccer Ball`) {
                this.speed += 10
                this.inventory.pop(item)
                console.log(`${this.name} gains skill of ${item} and becomes speedier!`)
            } else if (item == `Cioccolato`) {
                this.festivity += 10
                this.inventory.pop(item)
                console.log(`${this.name} enjoys ${item} and becomes cheerier!`)
            } else if (item == `Designer Clothes`) {
                this.festivity += 20
                this.inventory.pop(item)
                console.log(`${this.name} wears ${item} and becomes gleeful!`)
            } else if (item == `Spray Paint`) {
                this.slippery += 10
                this.inventory.pop(item)
                console.log(`${this.name} pockets ${item} and becomes more elusive!`)
            } else if (item == `Risotto alla milanese`) {
                this.defense += 10
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and bulks up!`)
            } else if (item == `Cotoletta alla milanese`) {
                this.defense += 15
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes more resistant!`)
            } else if (item == `Ossobuco`) {
                this.defense += 20
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes reinforced!`)
            } else if (item == `Pizza napoletana`) {
                this.health += 20
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and gains health!`)
            } else if (item == `Spaghetti alle vongole`) {
                this.speed += 10
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes faster!`)
            } else if (item == `Mozzarella di bufala`) {
                this.speed -= 20
                this.defense += 20
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes one with the buffalo!`)
            } else if (item == `Babà`) {
                this.festivity += 20
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes joyous!`)
            } else if (item == `Agnolotti`) {
                this.attack += 10
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes stronger!`)
            } else if (item == `Bagna càuda`) {
                this.speed += 10
                this.inventory.pop(item)
                console.log(`${this.name} drinks ${item} and becomes faster!`)
            } else if (item == `Grissini`) {
                this.speed -= 10
                this.defense += 30
                this.inventory.pop(item)
                console.log(`${this.name} crunches upon ${item} and becomes slower, yet more resistant!`)
            } else if (item == `Cassata`) {
                this.festivity += 20
                this.inventory.pop(item)
                console.log(`${this.name} conumes ${item} and becomes chipper!`)
            } else if (item == `Caponata`) {
                this.attack += 10
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes stronger!`)
            } else if (item == `Panelle`) {
                this.speed += 10
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes faster!`)
            } else if (item == `Important Document`) {
                if (`Presidente del Consiglio dei Ministri, ` in this.name) {
                    console.log(`${this.name} has ${item} and nothing happens!`)
                    this.inventory.pop(item)
                } else {
                     this.name = `Presidente del Consiglio dei Ministri, ` + this.name
                     this.inventory.pop(item)
                     console.log(`${this.name} uses ${item} and becomes prime minister of Italy!`)
                }
            } else if (item == `Polenta con crema di fungi`) {
                this.polenta += 10
                this.inventory.pop(item)
                console.log(`${this.name} eats ${item} and becomes faster!`)
            } else {
            console.log(`${this.name} does not have ${item} in his inventory.`)
         }
        }
    }
}
class Enemy {
    constructor(name, health, attack, defense, chance, min, max, loot) {
        this.name = name
        this.health = health
        this.attack = attack
        this.defense = defense
        this.chance = chance
        this.min = min
        this.max = max
        this.loot = loot
    }
    take_damage(damage) {
        this.health -= damage
        console.log(`${this.name} takes ${damage} damage!`)
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated!`)
            battling = false;
        }
        battling = true;
    }
    attack_player(player) {
        var damage = 0;
        console.log(`${this.name} attacks ${player.name}!`)
        damage = this.attack
        player.take_damage(damage)
    }
}

florence_data = {
    'name': 'Florence',
    'description': 'A beautiful city in Tuscany, known for its art and architecture.',
    'foods': [`Bistecca alla Fiorentina`, `Ribollita`, `Pappa al pomodoro`]
}

rome_data = {
    'name': 'Rome',
    'description': 'The Eternal City. Explore the historic streets and marvel at the ancient architecture.',
    'foods': [`Pizza`, `Pasta`, `Gelato`, `Cappuccino`, `Supplì`, `Carciofi alla romana`]
}

venice_data = {
    'name': 'Venice',
    'description': 'The Floating City. Sail down the canals and discover the hidden corners of this unique city.',
    'foods': [`Risotto`, `Cicchetti`, `Sarde in saor`, `Spritz`, `Polenta e schie`, `Tiramisù`]
}

brescia_data = {
    "name": `Brescia`,
    "description": `A city in Lombardy known for its rich history and beautiful architecture.`,
    "foods": [`Polenta`, `Risotto`, `Casoncelli`, `Panettone`, `Focaccia`]
}

modica_data = {
    "name": `Modica`,
    "description": `A city in Sicily known for its chocolate and Baroque architecture.`,
    "foods": [`Arancini`, `Pasta alla norma`, `Cannoli`, `Cioccolato di Modica`]
}

milan_data = {
    "name": `Milan`,
    "description": `The fashion capital of Italy and home to the famous Milan Cathedral.`,
    "foods": [`Risotto alla milanese`, `Cotoletta alla milanese`, `Panettone`, `Ossobuco`]
}

naples_data = {
    "name": `Naples`,
    "description": `A city in southern Italy known for its pizza and historic center.`,
    "foods": [`Pizza napoletana`, `Spaghetti alle vongole`, `Mozzarella di bufala`, `Babà`]
}

turin_data = {
    "name": `Turin`,
    "description": `A city in northern Italy known for its architecture and cuisine.`,
    "foods": [`Agnolotti`, `Bagna càuda`, `Grissini`, `Tiramisù`]
}

palermo_data = {
    "name": `Palermo`,
    "description": `The capital city of Sicily, known for its food, architecture, and history.`,
    "foods": [`Cassata`, `Caponata`, `Arancine`, `Panelle`]
}

function collect_food(player, area) {
    console.log(`${player.name} searches the ${area['name']} area and finds:`)
    for (var i = 0; i < area['foods'].length; i++) {
        if (Math.floor(Math.random() * (3 - 1) + 1) == 1) {
            console.log(`some ${area['foods'][i]}!`)
            player.inventory.push(area['foods'][i]);
        }
    }
    console.log(`${player.name} adds the food to his inventory.`)
}
function main() {
    console.log(`Welcome to the Adventures of Giorgio!`)
    giorgio = new Giorgio()
    console.log(`${giorgio.name} has started his journey in Italy.`)
    var gaming = true;
    while (gaming == true) {
        console.log(`\nWhat would you like to do?`)
        console.log(`1. Explore the city`)
        console.log(`2. Collect Food`)
        console.log(`3. Check inventory`)
        console.log(`4. Quit`)
       
        choice = prompt(`Enter your choice: `)
       
        if (choice == `1`){ 
            explore_city(giorgio)
        } else if (choice == `2`) {
            rancity = Math.floor(Math.random() * (9 - 1) + 1)
            if (rancity == 1){
                current_city = rome_data
            } else if (rancity == 2) {
                current_city = venice_data
            } else if (rancity == 3) {
                current_city = florence_data
            } else if (rancity == 4) {
                current_city = brescia_data
            } else if (rancity == 5) {
                current_city = modica_data
            } else if (rancity == 6) {
                current_city = milan_data
            } else if (rancity == 7) {
                current_city = naples_data
            } else if (rancity == 8) {
                current_city = turin_data
            } else if (rancity == 9) {
                current_city = palermo_data
            } 
            collect_food(giorgio, current_city)
        } else if (choice == `3`) {
            check_inventory(giorgio)
        } else if (choice == `4`) {
            console.log(`Thanks for playing! Arrivederci!`)
            gaming = false;
        } else {
            console.log(`Invalid choice. Please try again.`)
        }
    }
}
function cont(player) {
    console.log(`${player.name} has continued his journey in Italy.`)
    var gaming = true;
   
    while (gaming == true) {
        console.log(`\nWhat would you like to do?`)
        console.log(`1. Explore the city`)
        console.log(`2. Collect Food`)
        console.log(`3. Check inventory`)
        console.log(`4. Quit`)
       
        choice = prompt(`Enter your choice: `)
       
        if (choice == `1`){ 
            explore_city(player)
        } else if (choice == `2`) {
            rancity = Math.floor(Math.random() * (9 - 1) + 1)
            if (rancity == 1){
                current_city = rome_data
            } else if (rancity == 2) {
                current_city = venice_data
            } else if (rancity == 3) {
                current_city = florence_data
            } else if (rancity == 4) {
                current_city = brescia_data
            } else if (rancity == 5) {
                current_city = modica_data
            } else if (rancity == 6) {
                current_city = milan_data
            } else if (rancity == 7) {
                current_city = naples_data
            } else if (rancity == 8) {
                current_city = turin_data
            } else if (rancity == 9) {
                current_city = palermo_data
            } 
            collect_food(player, current_city)
        } else if (choice == `3`) {
            check_inventory(player)
        } else if (choice == `4`) {
            console.log(`Thanks for playing! Arrivederci!`)
            gaming = false;
        } else {
            console.log(`Invalid choice. Please try again.`)
        }
    }
}
function encounter(player, enemy) {
    battling = true;
    while (battling == true && gaming == true) {
    console.log(`\nWhat would you like to do?`)
    console.log(`1. Attack`)
    console.log(`2. Use item`)
    console.log(`3. Run away`)
    
    choice = prompt(`Enter your choice: `)
    
    if (choice == `1`) {
        player.attack_enemy(enemy)
        if (enemy.health <= 0) {
            player.inventory.push(enemy.loot)
            if (Math.floor(Math.random() * (100 - 1) + 1) * player.polenta >= 90) {
                if (player.polenta <= 10) {
                    player.inventory.push(`Polenta`)
                } else if (player.polenta >= 10 && player.polenta <= 50){
                    player.inventory.push(`Polenta e schie`)
                } else if (player.polenta >= 51) {
                    player.inventory.push(`Polenta con crema di fungi`)
                }
            }
            cont(player)
        }
        enemy.attack_player(player)
    } else if (choice == `2`) {
        console.log(`Which item would you like to use?`)
        for (item in player.inventory) {
            console.log(item)
        }
        choice = prompt(`Enter your item: `)
        
        player.use_item(choice)
        enemy.attack_player(player)
    } else if (choice == `3`) {
        run_chance = Math.floor(Math.random() * (enemy.max - enemy.min) + enemy.min)
        if (run_chance * player.slippery <= enemy.chance) {
            console.log(`${player.name} couldn't run!`)
            enemy.attack_player(player)
        } else {
            console.log(`${player.name} ran away!`)
            cont(player)
        }
    }}
}
function explore_city(player) {
    var rancity = Math.floor(Math.random() * (9 - 1) + 1);
    if (rancity == 1) {
        current_city = `Rome`
    } else if (rancity == 2){
        current_city = `Venice`
    } else if (rancity == 3){
        current_city = `Florence`
    } else if (rancity == 4){
        current_city = `Brescia`
    } else if (rancity == 5){
        current_city = `Modica`
    } else if (rancity == 6){
        current_city = `Milan`
    } else if (rancity == 7){
        current_city = `Naples`
    } else if (rancity == 8){
        current_city = `Turin`
    } else if (rancity == 9){
        current_city = `Palermo`
    }
    console.log(`${player.name} is exploring ${current_city}.`)
    enemy_chance = Math.floor(Math.random() * (31 - 1) + 1);
    if (enemy_chance <= 3 && enemy_chance > 0){
        enemy = new Enemy(`Mafia Boss`, 100, 20, 5, 45, 1, 50, `Gold Chain`)
        console.log(`${enemy.name} has appeared!`)
        encounter(player, enemy)
        } else if (enemy_chance >= 4 && enemy_chance <= 6){
            enemy = new Enemy(`Bread Salesman`, 20, 5, 0, 20, 1, 25, `Bread`)
            console.log(`${enemy.name} has appeared!`)
                encounter(player, enemy)
            } else if (enemy_chance >= 7 && enemy_chance <= 10 && current_city == `Venice`){
                if (Math.floor(Math.random() * (4 - 1) + 1) == 1){
                    enemy = new Enemy(`Mask Maker`, 35, 12, 6, 25, 1, 30, `Mask`)}
                else if (Math.floor(Math.random() * (4 - 1) + 1) == 2){
                    enemy = new Enemy(`Gondola Thief`, 40, 10, 8, 30, 1, 35, `Gondola`)}
                else if (Math.floor(Math.random() * (4 - 1) + 1) == 3){
                    enemy = new Enemy(`Gondolier`, 20, 7, 8, 25, 1, 35, `Espresso`)}
                else{
                    enemy = new Enemy(`Glassblower`, 50, 6, 7, 40, 1, 45, `Glass`)}
                console.log(`${enemy.name} has appeared!`)
                    encounter(player, enemy)
                    } else if (enemy_chance >= 11 && enemy_chance <= 13 && current_city == `Rome`){
                    enemy = new Enemy(`Gelato Vendor`, 30, 8, 2, 43, 1, 45, `Gelato`)
                    console.log(`${enemy.name} has appeared!`)
                        encounter(player, enemy)
                        } else if (enemy_chance >= 14 && enemy_chance <= 16 && current_city == `Florence`){
                            if (Math.floor(Math.random() * (3 - 1) + 1) == 1){
                                enemy = new Enemy(`Pizzaiolo`, 40, 10, 5, 30, 1, 35, `Pizza`)}
                            else if (Math.floor(Math.random() * (3 - 1) + 1) == 2){
                                enemy = new Enemy(`Artisan`, 50, 12, 8, 40, 2, 50, `Artisanal Goods`)}
                            else {
                                enemy = new Enemy(`Cheese Maker`, 45, 8, 6, 35, 1, 40, `Cheese`)}
                            console.log(`${enemy.name} has appeared!`)
                            encounter(player, enemy)
                            } else if (enemy_chance >= 17 && enemy_chance <= 19 & current_city == `Brescia`){
                                if (Math.floor(Math.random() * (3 - 1) + 1) == 1) {
                                    enemy = new Enemy(`Butcher`, 40, 15, 5, 30, 1, 35, `Meat`)}
                                else if (Math.floor(Math.random() * (3 - 1) + 1) == 2) {
                                    enemy = new Enemy(`Wine Connoisseur`, 35, 10, 10, 40, 2, 50, `Wine`)}
                                else {
                                    enemy = new Enemy(`Baker`, 30, 5, 5, 35, 1, 40, `Focaccia`)}
                                console.log(`${enemy.name} has appeared!`)
                                encounter(player, enemy)
                                } else if (enemy_chance >= 20 && enemy_chance <= 22 && current_city == `Milan`){
                                    if (Math.floor(Math.random() * (3 - 1) + 1) == 1){
                                        enemy = new Enemy(`Fashion Designer`, 40, 10, 5, 30, 1, 35, `Designer Clothes`)}
                                    else if (Math.floor(Math.random() * (3 - 1) + 1) == 2){
                                        enemy = new Enemy(`Graffiti Artist`, 30, 15, 8, 25, 1, 30, `Spray Paint`)}
                                    else {
                                        enemy = new Enemy(`Pasta Chef`, 45, 8, 6, 35, 1, 40, `Pasta`)}
                                    console.log(`${enemy.name} has appeared!`)
                                    encounter(player, enemy)
                                    } else if (enemy_chance >= 23 && enemy_chance <= 25 && current_city == `Naples`){
                                        if (Math.floor(Math.random() * (3 - 1) + 1) == 1){
                                            enemy = new Enemy(`Pizza Maker`, 40, 10, 5, 30, 1, 35, `Pizza`)}
                                        else if (Math.floor(Math.random() * (3 - 1) + 1) == 2){
                                            enemy = new Enemy(`Camorra Member`, 30, 15, 8, 25, 1, 30, `Important Documents`)}
                                        else {
                                            enemy = new Enemy(`Gelato Vendor`, 45, 8, 6, 35, 1, 40, `Gelato`)}
                                        console.log(`${enemy.name} has appeared!`)
                                        encounter(player, enemy)
                                        } else if (enemy_chance >= 26 && enemy_chance <= 28 && current_city == `Turin`){
                                            if (Math.floor(Math.random() * (3 - 1) + 1) == 1){
                                                enemy = new Enemy(`Juventus Fan`, 40, 10, 5, 30, 1, 35, `Soccer Ball`)}
                                            else if (Math.floor(Math.random() * (3 - 1) + 1) == 2){
                                                enemy = new Enemy(`Chocolate Maker`, 30, 15, 8, 25, 1, 30, `Cioccolato`)}
                                            else {
                                                enemy = new Enemy(`Fiat Mechanic`, 45, 8, 6, 35, 1, 40, `Car Part`)}
                                            console.log(`${enemy.name} has appeared!`)
                                                encounter(player, enemy)
                                            } else if (enemy_chance >= 29 && enemy_chance <= 31 && current_city == `Palermo`){
                                                if (Math.floor(Math.random() * (3 - 1) + 1) == 1){
                                                    enemy = new Enemy(`Mafioso`, 45, 12, 8, 30, 1, 35, `Stiletto`)}
                                                else if (Math.floor(Math.random() * (3 - 1) + 1) == 2){
                                                    enemy = new Enemy(`Arancini Vendor`, 30, 15, 10, 25, 1, 30, `Arancini`)}
                                                else {
                                                    enemy = new Enemy(`Fishmonger`, 40, 10, 6, 35, 1, 40, `Fish`)}
                                                console.log(`${enemy.name} has appeared!`)
                                                
                                                encounter(player, enemy)
                                                } else  if (enemy_chance <= 0){
                                                    enemy = new Enemy(`VOID`, 300, 300, 300, 300, 1, 1, `VOID`)
                                                    console.log(`{void.name} has appeared!`)
                                                    encounter(player, enemy)
                                                    }
}

function check_inventory(player) {
    console.log(`${player.name}'s inventory.`)

    for (var i = 0; i < player.inventory.length; i++) {
        console.log(player.inventory[i]);
    }

    console.log(`\nWhich item would you like to use?`)
               
    choice = prompt(`Enter your item: `)
           
    player.use_item(choice)
}

function draw() {
    if (log.length >= 10) {
        var i = 0;
        for (i <= 10;;) {
        ctx.fillText(log[log.length-i], 10, 512 - 10 * i);
        i += 1;
        }
    } else {
        var i = 0;
        for (i <= log.length;;) {
        ctx.fillText(log[log.length-i], 10, 512 - 10 * i);
        i += 1;
        }
    }
}
main()