class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    set creator(value) {
        this._creator = value;
    }

    get creator() {
        return this._creator;
    }

    addArticle(articleModel, articleName, quantity) {
        let lowerCaseModel = articleModel.toLowerCase();

        if (!this.possibleArticles[lowerCaseModel]) {
            throw Error('This article model is not included in this gallery!');
        }

        let article = this.listOfArticles.find(a => a.articleName == articleName);

        if (article && article.articleModel == lowerCaseModel) {
            article.quantity += Number(quantity);
        } else {
            let newArticle = {
                articleModel: lowerCaseModel,
                articleName,
                quantity
            }

            this.listOfArticles.push(newArticle);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;

    }


    inviteGuest(guestName, personality) {
        let guestExist = this.findGuestByName(guestName);

        if (guestExist) {
            throw Error(`${guestName} has already been invited.`);
        }

        let points = 0;
        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        } else {
            points = 50;
        }

        let guest = {
            guestName,
            points,
            purchaseArticle: 0
        }

        this.guests.push(guest);

        return `You have successfully invited ${guestName}!`;

    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.findArticleByName(articleName);
        if (!article || article.articleModel != articleModel) {
            throw Error('This article is not found.');
        }

        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        let guest = this.findGuestByName(guestName);
        if (!guest) {
            return 'This guest is not invited.';
        }

        let neededPointsForArticle = this.possibleArticles[articleModel];
        let availablePoints = guest.points;

        if (availablePoints < neededPointsForArticle) {
            return 'You need to more points to purchase the article.';
        } else {
            guest.points -= neededPointsForArticle;
            article.quantity--;
            guest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${neededPointsForArticle} points.`;

    }

    showGalleryInfo(criteria) {
        return criteria == 'article' ? this.returnArticleInfo() : this.returnGuestInfo();
    }

    returnArticleInfo() {

        let message = '';
        message = `Articles information:\n`;
        message += this.listOfArticles
            .map(a => `${a.articleModel} - ${a.articleName} - ${a.quantity}`)
            .join('\n');
        return message;


    }

    returnGuestInfo() {
        let message = '';
        message = `Guests information:\n`;
        message += this.guests
            .map(g => `${g.guestName} - ${g.purchaseArticle}`)
            .join('\n');
        return message;
    }


    findGuestByName(name) {
        return this.guests.find(g => g.guestName == name);
    }

    findArticleByName(name) {
        return this.listOfArticles.find(a => a.articleName == name);
    }

    findArticleByModel(model) {
        return this.listOfArticles[model.toLowerCase()];
    }


}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



