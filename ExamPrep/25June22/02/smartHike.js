
class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    set username(value) {
        this._username = value;
    }

    get username() {
        return this._username;
    }

    addGoal(peak, altitude) {
        let goal = this.goals[peak];

        if (goal) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = {
            peak: altitude
        };

        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        let currentPeak = this.goals[peak];

        if (!currentPeak) {
            throw Error(`${peak} is not in your current goals`);
        }

        if (this.resources == 0) {
            throw Error('You don\'t have enough resources to start the hike');
        }


        let differenceMultiplied = this.resources - (time * 10);

        if (differenceMultiplied < 0) {
            return 'You don\'t have enough resources to complete the hike';
        }

         

        this.resources = differenceMultiplied;

        let currentHike = {
            peak,
            time,
            difficultyLevel
        };

        this.listOfHikes.push(currentHike);

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;

    }

    rest(time) {
        let multipliedTime = time * 10;
        let addedResource = Math.min(100, this.resources + multipliedTime);

        this.resources = addedResource;

        return this.resources == 100
            ? `Your resources are fully recharged. Time for hiking!`
            : `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {

        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria == 'hard' || criteria == 'easy') {

            let filteredByCriteria = this.listOfHikes.filter(h => h.difficultyLevel == criteria);

            if (filteredByCriteria.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            let minHikeTime = Number.MAX_SAFE_INTEGER;

            for (let h of filteredByCriteria){
               if (h.time < minHikeTime){
                minHikeTime = h.time;
               }
            }

           let bestHike = filteredByCriteria.filter(h => h.time == minHikeTime)[0];

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;


        }else{
            let message = '';
            message += 'All hiking records:\n';
            message += this.listOfHikes
            .map(h => `${this.username} hiked ${h.peak} for ${h.time} hours`)
            .join('\n');

            return message;

        }

    }

}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));



