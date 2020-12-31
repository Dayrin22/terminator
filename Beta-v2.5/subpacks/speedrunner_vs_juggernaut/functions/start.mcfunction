execute @s[tag=host,scores={players=2..}] ~~~ scoreboard players set @a[tag=host,scores={settings_state=1}] "settings_state" 2
execute @s[tag=host,scores={players=2..,track_count=1..}] ~ ~ ~ tag @r[tag=track] add speedrunner
execute @s[tag=host,scores={players=2..,track_count=1..}] ~ ~ ~ tag @a remove track
execute @s[tag=host,scores={players=2..,track_count=0,speed_alive=0}] ~ ~ ~ tag @r add speedrunner
execute @s[tag=host,scores={players=2..}] ~ ~ ~ tag @a[tag=!speedrunner] add hunter
execute @s[tag=host,scores={players=2..}] ~~~ xp 1l @a
gamerule naturalRegeneration true
gamerule doDaylightCycle false
gamerule doimmediateRespawn false
gamerule showcoordinates true
gamerule spawnRadius 1
gamerule sendCommandFeedback false
gamerule pvp false
gamerule falldamage true
time set noon
execute @s[tag=host,scores={settings_state=2}] ~ ~ ~ clear @a
execute @s[tag=host,scores={settings_state=2}] ~ ~ ~ spawnpoint @a ~ ~ ~
execute @s[tag=host,scores={settings_state=2}] ~~~ playsound mob.elderguardian.curse @a
execute @s[tag=host,scores={settings_state=2}] ~~~ title @a title §cMinecraft Manhunt
execute @s[tag=host,scores={settings_state=2}] ~~~ title @a subtitle §c§lSpeedrunner: §b@a[tag=speedrunner]
execute @s[tag=host,scores={settings_state=2}] ~~~ gamemode s @a
execute @a[tag=host,scores={settings_state=2}] ~~~ effect @a[tag=speedrunner] health_boost 216000 4 true
execute @s[tag=host,scores={settings_state=2}] ~~~ effect @a instant_health 1 255 true
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.armor.chest 0 leather_chestplate 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.armor.head 0 leather_helmet 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.armor.feet 0 leather_boots 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.armor.legs 0 leather_leggings 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.hotbar 0 stone_sword 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.hotbar 1 stone_axe 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.hotbar 2 stone_pickaxe 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.hotbar 3 cooked_beef 8
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.armor.chest 0 iron_chestplate 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.armor.head 0 iron_helmet 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.armor.feet 0 iron_boots 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.armor.legs 0 iron_leggings 1
execute @s[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.hotbar 0 compass {"item_lock": {"mode": "lock_in_inventory"}}, {"keep_on_death": {}}
execute @s[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.hotbar 1 cooked_beef 8
execute @s[tag=host,scores={settings_state=2}] ~~~ effect @a instant_health 1 255
execute @s[tag=host,scores={settings_state=2}] ~~~ effect @a saturation 1 255
tellraw @s[tag=host,scores={settings_state=1}] {"rawtext":[{"text":"§c§lERROR§r Unable to start the game."}]}
tellraw @s[tag=host,scores={players=..1,settings_state=1}] {"rawtext":[{"text":"§c§lERROR§r Cannot start the game if there is only one person."}]}
tellraw @s[tag=host,scores={players=2..,settings_state=1}] {"rawtext":[{"text":"§c§lERROR§r Cannot start the game if there are more than 2 speedrunners."}]}
execute @s[tag=host,scores={settings_state=2}] ~~~ tellraw @a {"rawtext":[{"text":"§ePVP has been turned on."}]}
execute @s[tag=host,scores={settings_state=2}] ~~~ gamerule pvp true
execute @s[tag=host,scores={settings_state=2}] ~~~ gamerule falldamage true