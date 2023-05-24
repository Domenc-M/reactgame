class Character {
    constructor(name, devName, abilityList, description){
        this.name = name;
        this.devName = devName;
        this.abilityList = abilityList;
        this.description = description;
        this.selectImage = require("../assets/img/" + devName + "/" + devName + "select.png");
        this.splashImage = require("../assets/img/" + devName + "/" + devName + "splash.png");
    }
}

export default Character;