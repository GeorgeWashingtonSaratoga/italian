import random

current_city = "void"
class Giorgio:
    def __init__(self):
        self.name = "Giorgio"
        self.health = 100
        self.attack = 10
        self.defense = 5
        self.slippery = 1
        self.polenta = 1
        self.festivity = 0
        self.speed = 1
        self.inventory = ["Pasta", "Wine", "Tiramisù"]
    
    def take_damage(self, damage):
        actual_damage = damage - self.defense
        if actual_damage < 0:
            actual_damage = 0
        self.health -= actual_damage
        print(f"{self.name} takes {actual_damage} damage!")
        if self.health <= 0:
            print(f"{self.name} has died!")
            print("You've died.")
            print("Would you like to restart? ")
            print("1. Yes ")
            print("2. No ")
            
            choice = input("Enter your choice: ")
        
            if choice == "1":
                main()
            elif choice == "2":
                print("Damn u dead lol")
                

    def attack_enemy(self, enemy):
        print(f"{self.name} attacks {enemy.name}!")
        damage = self.attack
        enemy.take_damage(damage)
   
    def use_item(self, item):
        if item in self.inventory:
            if item == "Pasta":
                self.health += 20
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and recovers 20 health!")
            elif item == "Wine":
                self.attack += 5
                self.inventory.remove(item)
                print(f"{self.name} drinks {item} and gains 5 attack!")
            elif item == "Gold Chain":
                if "Don " in self.name:
                    print(f"{self.name} wears {item} and is incredibely cool!")
                    self.inventory.remove(item)
                else: 
                    self.name = "Don " + self.name
                    print(f"{self.name} wears {item} and gets a new moniker!")
                    self.inventory.remove(item)
            elif item == "Bread":
                self.slippery += 1
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes more elusive!")
            elif item == "Tiramisù":
                self.health += 30
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and recovers 30 health!")
            elif item == "Espresso":
                self.attack += 10
                self.inventory.remove(item)
                print(f"{self.name} drinks {item} and gains 10 attack!")
            elif item == "Pizza":
                self.health += 50
                self.attack += 10
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gets a huge stat boost!")
            elif item == "Gelato":
                self.slippery += 2
                self.attack += 5
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes super elusive!")
            elif item == "Bistecca alla Fiorentina":
                self.slippery += 5
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes very elusive!")
            elif item == "Ribollita":
                self.defense += 5
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes super resistant!")
            elif item == "Pappa al pomodoro":
                self.slippery -= 2
                self.attack += 8
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and loses some elusiveness, but becomes stronger!")
            elif item == "Cappuccino":
                self.attack -=4
                self.defense +=5
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and loses some attack, but becomes resistant!")
            elif item == "Supplì":
                self.defense -=4
                self.slippery +=5
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and loses some defense, but becomes elusive!")
            elif item == "Carciofi alla romana":
                self.defense +=1
                self.slippery +=1
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gains some defense and becomes elusive!")
            elif item == "Risotto":
                self.attack +=1
                self.slippery +=1
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gains some attack and becomes elusive!")
            elif item == "Cicchetti":
                self.attack +=1
                self.defense +=1
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gains some attack and becomes resistant!")
            elif item == "Sarde in saor":
                self.defense +=1
                self.speed +=1
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gains some defense and becomes faster!")
            elif item == "Spritz":
                self.defense +=3
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes resistant!")
            elif item == "Polenta e schie":
                self.polenta +=5
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and their desire for polenta has increased!")
            elif item == "Polenta":
                self.polenta +=1
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and their desire for polenta has mildly increased!")
            elif item == "Arancini":
                self.defense +=3
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gains defense!")
            elif item == "Casoncelli":
                self.attack += 3
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gains attack!")
            elif item == "Panettone":
                self.festivity += 5
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gains a signifcant amount of holiday spirit!")
            elif item == "Focaccia":
                self.speed += 3
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes faster!")
            elif item == "Pasta alla norma":
                self.speed += 5
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gains significant speed!")
            elif item == "Cannoli":
                self.festivity += 3
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes a little more festive!")
            elif item == "Cioccolato di Modica":
                self.speed -= 3
                self.festivity += 4
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes a little more slower, but more festive!")
            elif item == "Artisanal Goods":
                self.health -= 50
                self.inventory.remove(item)
                print(f"{self.name} opens {item} and reveals a pipe bomb!")
            elif item == "Mask":
                self.health += 50
                self.inventory.remove(item)
                print(f"{self.name} wears a {item} for hours at a time and gains health!")
            elif item == "Gondola":
                self.attack += 30
                self.inventory.remove(item)
                print(f"{self.name} equips {item} and becomes more powerful!")
            elif item == "Glass":
                self.festivity += 30
                self.inventory.remove(item)
                print(f"{self.name} equips {item} and becomes more festive!")
            elif item == "Meat":
                self.festivity -= 30
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes more grim.")
            elif item == "Cheese":
                self.festivity += 30
                self.inventory.remove(item)
                print(f"{self.name} consumes {item} and becomes more festive! Hooray!")
            elif item == "Stiletto":
                self.attack += 30
                self.inventory.remove(item)
                print(f"{self.name} wields {item} and becomes more powerful!")
            elif item == "Stiletto":
                self.attack += 30
                self.inventory.remove(item)
                print(f"{self.name} wields {item} and becomes more powerful!")
            elif item == "Fish":
                self.attack += 2
                self.inventory.remove(item)
                print(f"{self.name} wields {item} and becomes marginally more powerful!")
            elif item == "Car Part":
                self.defense += 30
                self.health -= 3
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes bulkier!")
            elif item == "Soccer Ball":
                self.speed += 10
                self.inventory.remove(item)
                print(f"{self.name} gains skill from {item} and becomes speedier!")
            elif item == "Cioccolato":
                self.festivity += 10
                self.inventory.remove(item)
                print(f"{self.name} enjoys {item} and becomes cheerier!")
            elif item == "Designer Clothes":
                self.festivity += 20
                self.inventory.remove(item)
                print(f"{self.name} wears {item} and becomes gleeful!")
            elif item == "Spray Paint":
                self.slippery += 10
                self.inventory.remove(item)
                print(f"{self.name} pockets {item} and becomes more elusive!")
            elif item == "Risotto alla milanese":
                self.defense += 10
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and bulks up!")
            elif item == "Cotoletta alla milanese":
                self.defense += 15
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes more resistant!")
            elif item == "Ossobuco":
                self.defense += 20
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes reinforced!")
            elif item == "Pizza napoletana":
                self.health += 20
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and gains health!")
            elif item == "Spaghetti alle vongole":
                self.speed += 10
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes faster!")
            elif item == "Mozzarella di bufala":
                self.speed -= 20
                self.defense += 20
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes one with the buffalo!")
            elif item == "Babà":
                self.festivity += 20
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes joyous!")
            elif item == "Agnolotti":
                self.attack += 10
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes stronger!")
            elif item == "Bagna càuda":
                self.speed += 10
                self.inventory.remove(item)
                print(f"{self.name} drinks {item} and becomes faster!")
            elif item == "Grissini":
                self.speed -= 10
                self.defense += 30
                self.inventory.remove(item)
                print(f"{self.name} crunches upon {item} and becomes slower, yet more resistant!")
            elif item == "Cassata":
                self.festivity += 20
                self.inventory.remove(item)
                print(f"{self.name} conumes {item} and becomes chipper!")
            elif item == "Caponata":
                self.attack += 10
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes stronger!")
            elif item == "Panelle":
                self.speed += 10
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes faster!")
            elif item == "Important Document":
                if "Presidente del Consiglio dei Ministri, " in self.name:
                    print(f"{self.name} has {item} and nothing happens!")
                    self.inventory.remove(item)
                else: 
                     self.name = "Presidente del Consiglio dei Ministri, " + self.name
                     self.inventory.remove(item)
                     print(f"{self.name} uses {item} and becomes prime minister of Italy!")
            elif item == "Polenta con crema di fungi":
                self.polenta += 10
                self.inventory.remove(item)
                print(f"{self.name} eats {item} and becomes faster!")
        else:
            print(f"{self.name} does not have {item} in his inventory.")

class Enemy:
    def __init__(self, name, health, attack, defense, chance, min, max, loot):
        self.name = name
        self.health = health
        self.attack = attack
        self.defense = defense
        self.chance = chance
        self.min = min
        self.max = max
        self.loot = loot
   
    def take_damage(self, damage):
        self.health -= damage
        print(f"{self.name} takes {damage} damage!")
        if self.health <= 0:
            print(f"{self.name} has been defeated!")
            return True
        return False
   
    def attack_player(self, player):
        print(f"{self.name} attacks {player.name}!")
        damage = self.attack
        player.take_damage(damage)

class Area:
    def __init__(self, name_data):
        self.name = name_data - '_data'
        self.description = name_data.description
        self.food = name_data.foods

florence_data = {
    'name': 'Florence',
    'description': 'A beautiful city in Tuscany, known for its art and architecture.',
    'foods': ["Bistecca alla Fiorentina", "Ribollita", "Pappa al pomodoro"]
}

rome_data = {
    'name': 'Rome',
    'description': 'The Eternal City. Explore the historic streets and marvel at the ancient architecture.',
    'foods': ["Pizza", "Pasta", "Gelato", "Cappuccino", "Supplì", "Carciofi alla romana"]
}

venice_data = {
    'name': 'Venice',
    'description': 'The Floating City. Sail down the canals and discover the hidden corners of this unique city.',
    'foods': ["Risotto", "Cicchetti", "Sarde in saor", "Spritz", "Polenta e schie", "Tiramisù"]
}

brescia_data = {
    "name": "Brescia",
    "description": "A city in Lombardy known for its rich history and beautiful architecture.",
    "foods": ["Polenta", "Risotto", "Casoncelli", "Panettone", "Focaccia"]
}

modica_data = {
    "name": "Modica",
    "description": "A city in Sicily known for its chocolate and Baroque architecture.",
    "foods": ["Arancini", "Pasta alla norma", "Cannoli", "Cioccolato di Modica"]
}

milan_data = {
    "name": "Milan",
    "description": "The fashion capital of Italy and home to the famous Milan Cathedral.",
    "foods": ["Risotto alla milanese", "Cotoletta alla milanese", "Panettone", "Ossobuco"]
}

naples_data = {
    "name": "Naples",
    "description": "A city in southern Italy known for its pizza and historic center.",
    "foods": ["Pizza napoletana", "Spaghetti alle vongole", "Mozzarella di bufala", "Babà"]
}

turin_data = {
    "name": "Turin",
    "description": "A city in northern Italy known for its architecture and cuisine.",
    "foods": ["Agnolotti", "Bagna càuda", "Grissini", "Tiramisù"]
}

palermo_data = {
    "name": "Palermo",
    "description": "The capital city of Sicily known for its food, architecture, and history.",
    "foods": ["Cassata", "Caponata", "Arancine", "Panelle"]
}

def collect_food(player, area):
    print(f"{player.name} searches the {area['name']} area and finds:")
    for food in area['foods']:
        if random.randint(1, 3) == 1:
            print(f"some {food}!")
            player.inventory.append(food)
    print(f"{player.name} adds the food to his inventory.")

def main():
    print("Welcome to the Adventures of Giorgio!")
    giorgio = Giorgio()
    print(f"{giorgio.name} has started his journey in Italy.")
   
    while True:
        print("\nWhat would you like to do?")
        print("1. Explore the city")
        print("2. Collect Food")
        print("3. Check inventory")
        print("4. Quit")
       
        choice = input("Enter your choice: ")
       
        if choice == "1":
            explore_city(giorgio)
        elif choice == "2":
            rancity = random.randint(1, 9)
            if rancity == 1:
                current_city = rome_data
            elif rancity == 2:
                current_city = venice_data
            elif rancity == 3:
                current_city = florence_data
            elif rancity == 4:
                current_city = brescia_data
            elif rancity == 5:
                current_city = modica_data
            elif rancity == 6:
                current_city = milan_data
            elif rancity == 7:
                current_city = naples_data
            elif rancity == 8:
                current_city = turin_data
            elif rancity == 9:
                current_city = palermo_data
            collect_food(giorgio, current_city)
        elif choice == "3":
            check_inventory(giorgio)
        elif choice == "4":
            print("Thanks for playing! Arrivederci!")
            break
        else:
            print("Invalid choice. Please try again.")

def cont(player):
    print(f"{player.name} has continued his journey in Italy.")
   
    while True:
        print("\nWhat would you like to do?")
        print("1. Explore the city")
        print("2. Collect Food")
        print("3. Check inventory")
        print("4. Quit")
       
        choice = input("Enter your choice: ")
       
        if choice == "1":
            explore_city(player)
        elif choice == "2":
            rancity = random.randint(1, 9)
            if rancity == 1:
                current_city = rome_data
            elif rancity == 2:
                current_city = venice_data
            elif rancity == 3:
                current_city = florence_data
            elif rancity == 4:
                current_city = brescia_data
            elif rancity == 5:
                current_city = modica_data
            elif rancity == 6:
                current_city = milan_data
            elif rancity == 7:
                current_city = naples_data
            elif rancity == 8:
                current_city = turin_data
            elif rancity == 9:
                current_city = palermo_data
            collect_food(player, current_city)
        elif choice == "3":
            check_inventory(player)
        elif choice == "4":
            print("Thanks for playing! Arrivederci!")
            break
        else:
            print("Invalid choice. Please try again.")
def encounter(player, enemy):
    print("\nWhat would you like to do?")
    print("1. Attack")
    print("2. Use item")
    print("3. Run away")
    
    choice = input("Enter your choice: ")
    
    if choice == "1":
        player.attack_enemy(enemy)
        if enemy.health <= 0:
            player.inventory.append(enemy.loot)
            if random.randint(1, 100) * player.polenta >= 90:
                if player.polenta <= 10:
                    player.inventory.append("Polenta")
                elif player.polenta >= 10 and player.polenta <= 50:
                    player.inventory.append("Polenta e schie")
                elif player.polenta >= 51:
                    player.inventory.append("Polenta con crema di fungi")
            cont(player)
        enemy.attack_player(player)
    elif choice == "2":
        print("Which item would you like to use?")
        for item in player.inventory:
            print(item)
            
        choice = input("Enter your item: ")
        
        player.use_item(choice)
        enemy.attack_player(player)
    elif choice == "3":
        run_chance = random.randint(enemy.min, enemy.max)
        if run_chance * player.slippery <= enemy.chance:
            print(f"{player.name} couldn't run!")
            enemy.attack_player(player)
        else: 
            print(f"{player.name} ran away!")
            cont(player)

def explore_city(player):
    rancity = random.randint(1, 9)
    if rancity == 1:
        current_city = "Rome"
    elif rancity == 2:
        current_city = "Venice"
    elif rancity == 3:
        current_city = "Florence"
    elif rancity == 4:
        current_city = "Brescia"
    elif rancity == 5:
        current_city = "Modica"
    elif rancity == 6:
        current_city = "Milan"
    elif rancity == 7:
        current_city = "Naples"
    elif rancity == 8:
        current_city = "Turin"
    elif rancity == 9:
        current_city = "Palermo"
    print(f"{player.name} is exploring {current_city}.")
    enemy_chance = random.randint(1, 31)
    if enemy_chance <= 3:
        enemy = Enemy("Mafia Boss", 100, 20, 5, 45, 1, 50, "Gold Chain")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)
    if enemy_chance >= 4 and enemy_chance <= 6 :
        enemy = Enemy("Bread Salesman", 20, 5, 0, 20, 1, 25, "Bread")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)
    if enemy_chance >= 7 and enemy_chance <= 10 and current_city == "Venice":
        if random.randint(1, 4) == 1:
            enemy = Enemy("Mask Maker", 35, 12, 6, 25, 1, 30, "Mask")
        elif random.randint(1, 4) == 2:
            enemy = Enemy("Gondola Thief", 40, 10, 8, 30, 1, 35, "Gondola")
        elif random.randint(1,4) == 3:
            enemy = Enemy("Gondolier", 20, 7, 8, 25, 1, 35, "Espresso")
        else:
            enemy = Enemy("Glassblower", 50, 6, 7, 40, 1, 45, "Glass")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)
    if enemy_chance >= 11 and enemy_chance <= 13 and current_city == "Rome":
        enemy = Enemy("Gelato Vendor", 30, 8, 2, 43, 1, 45, "Gelato")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)
    if enemy_chance >= 14 and enemy_chance <= 16 and current_city == "Florence":
        if random.randint(1, 3) == 1:
            enemy = Enemy("Pizzaiolo", 40, 10, 5, 30, 1, 35, "Pizza")
        elif random.randint(1, 3) == 2:
            enemy = Enemy("Artisan", 50, 12, 8, 40, 2, 50, "Artisanal Goods")
        else:
            enemy = Enemy("Cheese Maker", 45, 8, 6, 35, 1, 40, "Cheese")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)
    if enemy_chance >= 17 and enemy_chance <= 19 and current_city == "Brescia":
        if random.randint(1, 3) == 1:
            enemy = Enemy("Butcher", 40, 15, 5, 30, 1, 35, "Meat")
        elif random.randint(1, 3) == 2:
            enemy = Enemy("Wine Connoisseur", 35, 10, 10, 40, 2, 50, "Wine")
        else:
            enemy = Enemy("Baker", 30, 5, 5, 35, 1, 40, "Focaccia")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)
    if enemy_chance >= 20 and enemy_chance <= 22 and current_city == "Milan":
        if random.randint(1, 3) == 1:
            enemy = Enemy("Fashion Designer", 40, 10, 5, 30, 1, 35, "Designer Clothes")
        elif random.randint(1, 3) == 2:
            enemy = Enemy("Graffiti Artist", 30, 15, 8, 25, 1, 30, "Spray Paint")
        else:
            enemy = Enemy("Pasta Chef", 45, 8, 6, 35, 1, 40, "Pasta")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)
            
    if enemy_chance >= 23 and enemy_chance <= 25 and current_city == "Naples":
        if random.randint(1, 3) == 1:
            enemy = Enemy("Pizza Maker", 40, 10, 5, 30, 1, 35, "Pizza")
        elif random.randint(1, 3) == 2:
            enemy = Enemy("Camorra Member", 30, 15, 8, 25, 1, 30, "Important Documents")
        else:
            enemy = Enemy("Gelato Vendor", 45, 8, 6, 35, 1, 40, "Gelato")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)

    if enemy_chance >= 26 and enemy_chance <= 28 and current_city == "Turin":
        if random.randint(1, 3) == 1:
            enemy = Enemy("Juventus Fan", 40, 10, 5, 30, 1, 35, "Soccer Ball")
        elif random.randint(1, 3) == 2:
            enemy = Enemy("Chocolate Maker", 30, 15, 8, 25, 1, 30, "Cioccolato")
        else:
            enemy = Enemy("Fiat Mechanic", 45, 8, 6, 35, 1, 40, "Car Part")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)
    if enemy_chance >= 29 and enemy_chance <= 31 and current_city == "Palermo":
        if random.randint(1, 3) == 1:
            enemy = Enemy("Mafioso", 45, 12, 8, 30, 1, 35, "Stiletto")
        elif random.randint(1, 3) == 2:
            enemy = Enemy("Arancini Vendor", 30, 15, 10, 25, 1, 30, "Arancini")
        else:
            enemy = Enemy("Fishmonger", 40, 10, 6, 35, 1, 40, "Fish")
        print(f"{enemy.name} has appeared!")
        while True:
            encounter(player, enemy)
    if enemy_chance == 0 and current_city == "void":
        enemy = Enemy("VOID", 300, 300, 300, 300, 0, 1, "VOID")
        print("{void.name} has appeared!")
        while True:
            encounter(player, enemy)
def check_inventory(player):
    print(f"{player.name}'s inventory.")
    for item in player.inventory:
        print(item)
    
    print("Which item would you like to use?")
               
    choice = input("Enter your item: ")
           
    player.use_item(choice)
main()
