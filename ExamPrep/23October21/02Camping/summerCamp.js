class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    get organizer() {
        return this._organizer;
    }

    set organizer(value) {
        this._organizer = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp[condition]) {
            throw Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(c => c.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        };

        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;

    }

    unregisterParticipant(name) {
        let participant = this.listOfParticipants.find(p => p.name == name);

        if (!participant) {
            throw Error(`The ${name} is not registered in the camp.`);
        }

        let participantIndex = this.listOfParticipants.indexOf(participant);
        this.listOfParticipants.splice(participantIndex, 1);

        return `The ${name} removed successfully.`;

    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(p => p.name == participant1);

        if (!player1) {
            throw Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == 'Battleship') {
            player1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame == 'WaterBalloonFights') {

            let player2 = this.listOfParticipants.find(p => p.name == participant2);

            if (!player2) {
                throw Error(`Invalid entered name/s.`);
            }

            if (player1.condition != player2.condition) {
                throw Error(`Choose players with equal condition.`);
            }

            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (player2.power > player1.power) {
                player2.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`
            }

        }

    }

    toString() {
       let message = '';
       message += `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
       message += this.listOfParticipants
       .sort((a, b) => b.wins - a.wins)
       .map(p => `${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
       .join('\n');

       return message;
    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));

console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


