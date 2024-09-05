const rectObj = {
    name: 'rectangle 1',
    width: 10,
    height: 10
}

Object.seal(rectObj)

let descriptors = Object.getOwnPropertyDescriptors(rectObj)

rectObj.color = 'blue'

delete rectObj.name

rectObj.width = 20

const circleObj = {
    name: 'Circle 1',
    radius: 30
}

Object.freeze(circleObj)

descriptors = Object.getOwnPropertyDescriptors(circleObj)
circleObj.color = 'green'
delete circleObj.name
circleObj.name = 'New Name'

console.log('rectObj is sealed?', Object.isSealed(reactObj))
console.log('rectObj is sealed?', Object.isFrozen(reactObj))
console.log('circleObj is sealed?', Object.isSealed(reactObj))
console.log('circleObj is frozen?', Object.isFrozen(reactObj))
