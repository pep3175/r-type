namespace SpriteKind {
    export const Asteroid = SpriteKind.create()
    export const badShoot = SpriteKind.create()
    export const myShoot = SpriteKind.create()
    export const Tourelle = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 c c c c 8 8 
8 8 8 8 8 8 8 8 8 8 c c c c 8 8 
8 8 8 8 8 8 8 8 8 8 c c c c 8 8 
8 8 8 8 8 8 8 8 8 8 c c c c 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 c c 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 c c 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 c c c 8 8 8 8 
8 8 8 8 8 8 8 8 8 c c c 8 8 8 8 
8 8 8 8 8 8 8 8 8 c c c 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`
}
sprites.onOverlap(SpriteKind.badShoot, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    bomb = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, ship, screenCenter.vx + 50, 20)
    bomb.ax = -100
    bomb.ay = 300
    bomb.setKind(SpriteKind.myShoot)
})
sprites.onOverlap(SpriteKind.myShoot, SpriteKind.Asteroid, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.myShoot, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
scene.onHitWall(SpriteKind.Player, function (sprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.myShoot, SpriteKind.Tourelle, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shoot = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, ship, 150, 0)
    shoot.setKind(SpriteKind.myShoot)
})
function createEnemies () {
    if (Math.percentChance(50)) {
        badBomb = sprites.create(img`
. . . . . . . a a a . . . . . . 
. . . . . . a a a a a a . . . . 
. . . . a a a a a a a a . . . . 
. . . a a a a a a a a a . . . . 
. . a a a a a a a a a a a . . . 
. . a a a a a a a a a a a a . . 
. . a a a a a a a a a a a a . . 
. . a a a a a a a a a a a a . . 
. . a a a a a a a a a a a a . . 
. . a a a a a a a a a a a a . . 
. . . a a a a a a a a a a . . . 
. . . . . a a a a a a a a . . . 
. . . . . . . . a a a a a . . . 
. . . . . . . . a a a a . . . . 
. . . . . . . . a a a a . . . . 
. . . . . . . . a a a a . . . . 
`, SpriteKind.Asteroid)
        badBomb.setPosition(screenCenter.x + scene.screenWidth(), Math.randomRange(10, 110))
        badBomb.vx = -50
    }
    if (Math.percentChance(75)) {
        badShip = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f . . 
. . . . . . . . . . . f f f . . 
. . . f f f . . . . f f f f . . 
. . f f f f f f f f f f f f . . 
. . f 2 2 f f f f f f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        badShip.setPosition(screenCenter.x + scene.screenWidth(), Math.randomRange(10, 110))
        badShip.follow(ship, 50)
    }
    if (Math.percentChance(30)) {
        tourelle = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Tourelle)
        if (Math.percentChance(80)) {
            bas = 1
        }
        tourelle.setPosition(screenCenter.x + scene.screenWidth(), 120 * bas)
    }
}
let projectile: Sprite = null
let mag = 0
let yVel = 0
let xVel = 0
let projectile2: Sprite = null
let bas = 0
let tourelle: Sprite = null
let badShip: Sprite = null
let badBomb: Sprite = null
let shoot: Sprite = null
let bomb: Sprite = null
let screenCenter: Sprite = null
let ship: Sprite = null
scene.setBackgroundColor(8)
tiles.setTilemap(tiles.createTilemap(
            hex`400008000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000002000000000000000002000000000200000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.hazardHole,myTiles.tile1,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,myTiles.tile2,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter,myTiles.tile3],
            TileScale.Sixteen
        ))
info.setLife(3)
ship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 . . . . 3 3 . . . . . . . 
. . . 3 . . 3 3 3 3 . . . . . . 
. . . 3 3 3 3 3 3 3 3 3 . . . . 
. . . 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
screenCenter = sprites.create(img`
. 
`, SpriteKind.Player)
ship.setPosition(40, 60)
screenCenter.setPosition(80, 60)
screenCenter.setFlag(SpriteFlag.Ghost, true)
scene.cameraFollowSprite(screenCenter)
screenCenter.setVelocity(15, 0)
controller.moveSprite(ship, 80, 80)
game.onUpdate(function () {
    if (ship.x < screenCenter.x - scene.screenWidth() / 2 + 10) {
        ship.x = screenCenter.x - scene.screenWidth() / 2 + 10
    }
})
game.onUpdateInterval(1000, function () {
    createEnemies()
    for (let value3 of sprites.allOfKind(SpriteKind.Tourelle)) {
        if (Math.percentChance(50)) {
            projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, value3, 0, 0)
            projectile2.setKind(SpriteKind.badShoot)
            xVel = ship.x - projectile2.x
            yVel = ship.y - projectile2.y
            mag = Math.sqrt(xVel * xVel + yVel * yVel)
            projectile2.setVelocity(xVel * (50 / mag), yVel * (50 / mag))
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Math.percentChance(75)) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, value, -200, 0)
        }
    }
})
