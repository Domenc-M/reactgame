class Character {
    constructor(name, devName, abilityList){
        this.name = name;
        this.devName = devName;
        this.abilityList = abilityList;
        this.selectImage = require("../assets/img/" + devName + "select.png");
    }
}

export default Character;