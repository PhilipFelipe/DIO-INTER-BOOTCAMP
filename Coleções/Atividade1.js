users = new Map()
users.set('Luiz', 'admin')
users.set('Maria', 'admin')
users.set('Carlos', 'regular')
users.set('Pedro', 'admin')
users.set('Felipe', 'regular')
users.set('Miguel', 'regular')
users.set('Ana', 'admin')

function getAdmins(map) {
    for(let [key, value] of map) {
        if (value == 'admin') console.log(key)
    }
}

getAdmins(users)