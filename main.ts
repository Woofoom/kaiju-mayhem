namespace SpriteKind {
    export const SpecialEnemy = SpriteKind.create()
}
// Damage system
sprites.onOverlap(SpriteKind.Player, SpriteKind.SpecialEnemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(5000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MotherKaiju,
    assets.animation`MotherKaijuLasering`,
    100,
    false
    )
    pause(250)
    IMMA_FIRE_MY_LASER = sprites.createProjectileFromSprite(assets.image`IMMAFIRINMYLASAR`, MotherKaiju, 100, 0)
    animation.runImageAnimation(
    IMMA_FIRE_MY_LASER,
    assets.animation`LaserAnim`,
    100,
    false
    )
    pause(500)
    animation.runImageAnimation(
    MotherKaiju,
    assets.animation`MamaKaijuMove`,
    100,
    true
    )
})
// Set overlap
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    BabyKaiju.setPosition(180, randint(30, 110))
})
// Reset game
info.onLifeZero(function () {
    blockSettings.writeNumber("lives", 3)
    blockSettings.writeNumber("score", 0)
    game.gameOver(true)
})
// Scoring system
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    BabyKaiju.setPosition(180, randint(30, 110))
})
// Damage system
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.SpecialEnemy, function (sprite, otherSprite) {
    Plane.setPosition(180, randint(30, 110))
})
// Damage system
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(5000)
})
let IMMA_FIRE_MY_LASER: Sprite = null
let Plane: Sprite = null
let BabyKaiju: Sprite = null
let MotherKaiju: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
MotherKaiju = sprites.create(assets.image`MamaKaijuStart`, SpriteKind.Player)
controller.moveSprite(MotherKaiju, 0, 100)
scroller.scrollBackgroundWithSpeed(-50, 0)
MotherKaiju.setStayInScreen(true)
info.setLife(3)
let Car = sprites.create(assets.image`CarStart`, SpriteKind.Enemy)
animation.runImageAnimation(
Car,
assets.animation`CarMove`,
100,
true
)
Car.setPosition(145, 35)
Car.setVelocity(-50, 0)
BabyKaiju = sprites.create(assets.image`BabyKaijuStart`, SpriteKind.Food)
animation.runImageAnimation(
BabyKaiju,
assets.animation`BabyKaijuMove`,
100,
true
)
info.setScore(blockSettings.readNumber("score"))
info.setLife(blockSettings.readNumber("lives"))
let Version = textsprite.create("Kaiju Mayhem", 0, 9)
Version.setPosition(80, 116)
animation.runImageAnimation(
MotherKaiju,
assets.animation`MamaKaijuMove`,
100,
true
)
Plane = sprites.create(assets.image`PlaneStart`, SpriteKind.SpecialEnemy)
animation.runImageAnimation(
Plane,
assets.animation`PlaneAnim`,
100,
true
)
Plane.setPosition(145, 35)
Plane.setVelocity(-50, 0)
Plane.follow(MotherKaiju, 50)
// Save game
game.onUpdate(function () {
    blockSettings.writeNumber("score", info.score())
    blockSettings.writeNumber("lives", info.life())
})
// Set affectors
game.onUpdateInterval(5000, function () {
    Car.setPosition(180, randint(30, 110))
    Car.setVelocity(-50, 0)
    BabyKaiju.setPosition(180, randint(30, 110))
    BabyKaiju.setVelocity(-50, 0)
    Plane.setPosition(180, randint(30, 110))
    Plane.setVelocity(-50, 0)
})
