let myScore = 0
let maxScore = 100
scene.setBackgroundColor(15)
scene.setBackgroundImage(img`
    22222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222
    22222222222222222222222f...................................................................................................................f22222222222222222222
    22222222222222222222222f...................................................................................................................f22222222222222222222
    22222222222222222222222f...................................................................................................................f22222222222222222222
    22222222222222222222222f...ffffffffffffffffffffffffffffffffffffffffffffffffffff...ffffffffffffffffffffffffffffffffffffffffffffffffffffff...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    55555555555555555555555f...f.............................................ffffff...ffffff...............................................f...f55555555555555555555
    55555555555555555555555f...f..........................................fff...............fff............................................f...f55555555555555555555
    55555555555555555555555f...f........................................ff.....................ff..........................................f...f55555555555555555555
    55555555555555555555555f...f.......................................f......fffffffffffff......f.........................................f...f55555555555555555555
    55555555555555555555555f...f.....................................ff....fff......f......fff....ff.......................................f...f55555555555555555555
    55555555555555555555555f...f....................................f....ff.........f.........ff....f......................................f...f55555555555555555555
    55555555555555555555555f...f...................................f....f...........f...........f....f.....................................f...f55555555555555555555
    55555555555555555555555f...f..................................f...ff............f............ff...f....................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...fffffffffffffffffffffffffffffffffff...f..............f..............f...fffffffffffffffffffffffffffffffffffff...f55555555555555555555
    55555555555555555555555f.........................................f..............f..............f...........................................f55555555555555555555
    55555555555555555555555f.........................................fffffffffffffffffffffffffffffff...........................................f55555555555555555555
    55555555555555555555555f.........................................f..............f..............f...........................................f55555555555555555555
    55555555555555555555555f...fffffffffffffffffffffffffffffffffff...f..............f..............f...fffffffffffffffff..fffffffff...ffffff...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...fffffffffffffffff..fffffffff...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f..............................f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f..............................f5555f...f55555555555555555555
    555555555555555555555555f..f.................................f...f..............f..............f...fffff..ffffffffff..ffffffff...ff5555f..f555555555555555555555
    555555555555555555555555f...f................................f...f..............f..............f...f222f..f22222222f..f222222f...f5555f...f555555555555555555555
    555555555555555555555555f...f................................f...f..............f..............f...f222f..f22222222f..f222222f...f5555f...f555555555555555555555
    555555555555555555555555f...f................................f...f..............f..............f...f222f..f22222222f..f22222f....f5555f...f555555555555555555555
    555555555555555555555555f...f................................f...f..............f..............f...f222f..f22222222f..f22222f...f55555f...f555555555555555555555
    5555555555555555555555555f...f...............................f...f..............f..............f...f222f..f22222222f..f22222f...f5555f...f5555555555555555555555
    5555555555555555555555555f...f...............................f...f..............f..............f...f222f..f222ff222f..f2222f....f5555f...f5555555555555555555555
    5555555555555555555555555f...f...............................f....ff............f............ff....f222f..f22f66f22f..f2222f...f55555f...f5555555555555555555555
    55555555555555555555555555f...f...............................f.....f...........f...........f.....f2222f..f2f6666f2f..f222f....f5555f...f55555555555555555555555
    55555555555555555555555555f...f................................ff....ff.........f.........ff....ff22222f..f2f6666f2f..f222f...f55555f...f55555555555555555555555
    55555555555555555555555555f...f..................................ff....fff......f......fff....ff2222222f..f2f6666f2f..f22f....f55555f...f55555555555555555555555
    555555555555555555555555555f...f...................................f......fffffffffffff......f222222222f..f2f6666f2f..f22f...f55555f...f555555555555555555555555
    555555555555555555555555555f...f....................................ff.....................ff2222222222f..f2f6666f2f..f2f....f55555f...f555555555555555555555555
    2222222222222222222222222222f...f.....................................fff...............fff222222222222f..f22f66f22f..f2f...f55555f...f2222222222222222222222222
    2222222222222222222222222222f...f........................................ffffff...ffffff552222222222222f..f222ff222f..ff....f55555f...f2222222222222222222222222
    22222222222222222222222222222f...f............................................f...f55555552222222222222f..f22222222f..f....f55555f...f22222222222222222222222222
    22222222222222222222222222222f...f............................................f...f55555552222222222222f..f22222222f.......f55555f...f22222222222222222222222222
    222222222222222222222222222222f...f...........................................f...ffffffffffffffffffffff..f22222222f........f555f...f222222222222222222222222222
    222222222222222222222222222222f...f...........................................f...........................f22222222f.........ff5f...f222222222222222222222222222
    2222222222222222222222222222222f...f..........................................f...........................f22222222f...........f...f2222222222222222222222222222
    2222222222222222222222222222222f...f..........................................f...ffffffffffffffffffffff..f2222222f.....f5f........f2222222222222222222222222222
    22222222222222222222222222222222f...f.........................................f...f55555552222222222222f..f2222222f....f555f......f22222222222222222222222222222
    222222222222222222222222222222222f...f........................................f...f55555552222222222222f..f22222ff....f55555f....f222222222222222222222222222222
    222222222222222222222222222222222f...f........................................f...f55555552222222222222f..f2222f.....f5555555f...f222222222222222222222222222222
    2222222222222222222222222222222222f...f.......................................f...f55555552222222222222f..f222f.....f5555555f...f2222222222222222222222222222222
    22222222222222222222222222222222222f...f......................................f...f55555552222222222222f..f22f.....f5555555f...f22222222222222222222222222222222
    222222222222222222222222222222222222f...f.....................................f...f55555552222222222222f..fff.....f5555555f...f222222222222222222222222222222222
    222222222222222222222222222222222222f....f....................................f...f55555552222222222222f.........f5555555f....f222222222222222222222222222222222
    2222222222222222222222222222222222222f....f...................................f...f55555552222222222222f........f5555555f....f2222222222222222222222222222222222
    22222222222222222222222222222222222222f....f..................................f...f5555555222222222222ff......ff5555555f....f22222222222222222222222222222222222
    222222222222222222222222222222222222222f....f.................................f...f55555552222222222ff.......f55555555f....f222222222222222222222222222222222222
    2222222222222222222222222222222222222222f....f................................f...f555555522222222ff.......ff55555555f....f2222222222222222222222222222222222222
    22222222222222222222222222222222222222222f....f...............................f...f555555522222fff.......ff555555555f....f22222222222222222222222222222222222222
    222222222222222222222222222222222222222222f....f..............................f...f55555552ffff........ff5555555555f....f222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222ff...ff............................f...fffffffff..........ff5555555555ff...ff2222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222f....f...........................f...f................ff55555555555f....f222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222f....ff.........................f...f.............fff55555555555ff....f2222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222ff....ff.......................f...f........fffff555555555555ff....ff22222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222f.....ff.....................f...fffffffff555555555555555ff.....f2222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222ff.....ff...................f...f555555555555555555555ff.....ff22222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222ff.....ff.................f...f5555555555555555555ff.....ff2222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222ff.....fff..............f...f5555555555555555fff.....ff222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222ff......fff...........f...f5555555555555fff......ff22222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222ff.......ffff.......f...f555555555ffff.......ff2222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222fff........ffffffff...ffffffffff........fff222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fff...............................fff222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222fffff.....................fffff222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222
    `)
scene.setBackgroundImage(img`
    22222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222
    22222222222222222222222f...................................................................................................................f22222222222222222222
    22222222222222222222222f...................................................................................................................f22222222222222222222
    22222222222222222222222f...................................................................................................................f22222222222222222222
    22222222222222222222222f...ffffffffffffffffffffffffffffffffffffffffffffffffffff...ffffffffffffffffffffffffffffffffffffffffffffffffffffff...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    22222222222222222222222f...f..................................................f...f....................................................f...f22222222222222222222
    55555555555555555555555f...f.............................................ffffff...ffffff...............................................f...f55555555555555555555
    55555555555555555555555f...f..........................................fff...............fff............................................f...f55555555555555555555
    55555555555555555555555f...f........................................ff.....................ff..........................................f...f55555555555555555555
    55555555555555555555555f...f.......................................f......fffffffffffff......f.........................................f...f55555555555555555555
    55555555555555555555555f...f.....................................ff....fff......f......fff....ff.......................................f...f55555555555555555555
    55555555555555555555555f...f....................................f....ff.........f.........ff....f......................................f...f55555555555555555555
    55555555555555555555555f...f...................................f....f...........f...........f....f.....................................f...f55555555555555555555
    55555555555555555555555f...f..................................f...ff............f............ff...f....................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f...................................f...f55555555555555555555
    55555555555555555555555f...fffffffffffffffffffffffffffffffffff...f..............f..............f...fffffffffffffffffffffffffffffffffffff...f55555555555555555555
    55555555555555555555555f.........................................f..............f..............f...........................................f55555555555555555555
    55555555555555555555555f.........................................fffffffffffffffffffffffffffffff...........................................f55555555555555555555
    55555555555555555555555f.........................................f..............f..............f...........................................f55555555555555555555
    55555555555555555555555f...fffffffffffffffffffffffffffffffffff...f..............f..............f...fffffffffffffffff..fffffffff...ffffff...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f555555555555555f..f5555555f...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...fffffffffffffffff..fffffffff...f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f..............................f5555f...f55555555555555555555
    55555555555555555555555f...f.................................f...f..............f..............f...f..............................f5555f...f55555555555555555555
    555555555555555555555555f..f.................................f...f..............f..............f...fffff..ffffffffff..ffffffff...ff5555f..f555555555555555555555
    555555555555555555555555f...f................................f...f..............f..............f...f222f..f22222222f..f222222f...f5555f...f555555555555555555555
    555555555555555555555555f...f................................f...f..............f..............f...f222f..f22222222f..f222222f...f5555f...f555555555555555555555
    555555555555555555555555f...f................................f...f..............f..............f...f222f..f22222222f..f22222f....f5555f...f555555555555555555555
    555555555555555555555555f...f................................f...f..............f..............f...f222f..f22222222f..f22222f...f55555f...f555555555555555555555
    5555555555555555555555555f...f...............................f...f..............f..............f...f222f..f22222222f..f22222f...f5555f...f5555555555555555555555
    5555555555555555555555555f...f...............................f...f..............f..............f...f222f..f222ff222f..f2222f....f5555f...f5555555555555555555555
    5555555555555555555555555f...f...............................f....ff............f............ff....f222f..f22f66f22f..f2222f...f55555f...f5555555555555555555555
    55555555555555555555555555f...f...............................f.....f...........f...........f.....f2222f..f2f6666f2f..f222f....f5555f...f55555555555555555555555
    55555555555555555555555555f...f................................ff....ff.........f.........ff....ff22222f..f2f6666f2f..f222f...f55555f...f55555555555555555555555
    55555555555555555555555555f...f..................................ff....fff......f......fff....ff2222222f..f2f6666f2f..f22f....f55555f...f55555555555555555555555
    555555555555555555555555555f...f...................................f......fffffffffffff......f222222222f..f2f6666f2f..f22f...f55555f...f555555555555555555555555
    555555555555555555555555555f...f....................................ff.....................ff2222222222f..f2f6666f2f..f2f....f55555f...f555555555555555555555555
    2222222222222222222222222222f...f.....................................fff...............fff222222222222f..f22f66f22f..f2f...f55555f...f2222222222222222222222222
    2222222222222222222222222222f...f........................................ffffff...ffffff552222222222222f..f222ff222f..ff....f55555f...f2222222222222222222222222
    22222222222222222222222222222f...f............................................f...f55555552222222222222f..f22222222f..f....f55555f...f22222222222222222222222222
    22222222222222222222222222222f...f............................................f...f55555552222222222222f..f22222222f.......f55555f...f22222222222222222222222222
    222222222222222222222222222222f...f...........................................f...ffffffffffffffffffffff..f22222222f........f555f...f222222222222222222222222222
    222222222222222222222222222222f...f...........................................f...........................f22222222f.........ff5f...f222222222222222222222222222
    2222222222222222222222222222222f...f..........................................f...........................f22222222f...........f...f2222222222222222222222222222
    2222222222222222222222222222222f...f..........................................f...ffffffffffffffffffffff..f2222222f.....f5f........f2222222222222222222222222222
    22222222222222222222222222222222f...f.........................................f...f55555552222222222222f..f2222222f....f555f......f22222222222222222222222222222
    222222222222222222222222222222222f...f........................................f...f55555552222222222222f..f22222ff....f55555f....f222222222222222222222222222222
    222222222222222222222222222222222f...f........................................f...f55555552222222222222f..f2222f.....f5555555f...f222222222222222222222222222222
    2222222222222222222222222222222222f...f.......................................f...f55555552222222222222f..f222f.....f5555555f...f2222222222222222222222222222222
    22222222222222222222222222222222222f...f......................................f...f55555552222222222222f..f22f.....f5555555f...f22222222222222222222222222222222
    222222222222222222222222222222222222f...f.....................................f...f55555552222222222222f..fff.....f5555555f...f222222222222222222222222222222222
    222222222222222222222222222222222222f....f....................................f...f55555552222222222222f.........f5555555f....f222222222222222222222222222222222
    2222222222222222222222222222222222222f....f...................................f...f55555552222222222222f........f5555555f....f2222222222222222222222222222222222
    22222222222222222222222222222222222222f....f..................................f...f5555555222222222222ff......ff5555555f....f22222222222222222222222222222222222
    222222222222222222222222222222222222222f....f.................................f...f55555552222222222ff.......f55555555f....f222222222222222222222222222222222222
    2222222222222222222222222222222222222222f....f................................f...f555555522222222ff.......ff55555555f....f2222222222222222222222222222222222222
    22222222222222222222222222222222222222222f....f...............................f...f555555522222fff.......ff555555555f....f22222222222222222222222222222222222222
    222222222222222222222222222222222222222222f....f..............................f...f55555552ffff........ff5555555555f....f222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222ff...ff............................f...fffffffff..........ff5555555555ff...ff2222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222f....f...........................f...f................ff55555555555f....f222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222f....ff.........................f...f.............fff55555555555ff....f2222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222ff....ff.......................f...f........fffff555555555555ff....ff22222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222f.....ff.....................f...fffffffff555555555555555ff.....f2222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222ff.....ff...................f...f555555555555555555555ff.....ff22222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222ff.....ff.................f...f5555555555555555555ff.....ff2222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222ff.....fff..............f...f5555555555555555fff.....ff222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222ff......fff...........f...f5555555555555fff......ff22222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222ff.......ffff.......f...f555555555ffff.......ff2222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222fff........ffffffff...ffffffffff........fff222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fff...............................fff222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222fffff.....................fffff222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222
    `)
