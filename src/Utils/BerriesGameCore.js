class BerriesGameCore {
    constructor(berries) {
        this.berries = berries;
        this.life = 3;
        this.canFlip = true;
    }
    
    get actives() {
        return this.berries.filter(berry => berry.flipped && !berry.mached);
    };
    get activesCount() {
        return this.actives.length;
    };
    get isOver() {
        return this.life === 0;
    };
    get youWin() {
        return this.berries.every(berry => berry.mached);
    }

    setGameLife(value) {
        this.life = value;
    }
    flipHandler(index, event) {
        const berrie = this.berries[index];

        if (berrie.flipped || berrie.mached || !this.canFlip) return;

        let current = event.currentTarget;
        let flipCard = current.querySelector('.flip-card');
        let inner = current.querySelector('.flip-card-inner');

        flipCard.classList.toggle('flip');
        inner.classList.toggle('flip');

        this.berries[index].flipped = !this.berries[index].flipped;

        this.canFlip = this.activesCount < 2;

        this.activesCount === 2 && this.checkMatch();
    }
    checkMatch() {
        let first = this.actives[0];
        let second = this.actives[1];

        if (first.id === second.id) {
            first.mached = true;
            second.mached = true;
            this.canFlip = true;
        }

        if (first.id !== second.id) {
            this.setGameLife(this.life - 1);

            if (!this.isOver && !this.youWin) {
                setTimeout(() => {
                    this.resetNoMatchedElements();
                    this.canFlip = true;
                }, 700);
            }
        }
    }
    resetNoMatchedElements() {
        this.berries.forEach((berrie, i) => {
            if (!berrie.mached) {
                let current = document.getElementById('card_item_id_' + i);
                let flipCard = current.querySelector('.flip-card');
                let inner = current.querySelector('.flip-card-inner');

                flipCard.classList.remove('flip');
                inner.classList.remove('flip');
                berrie.flipped = false;
            }
        });
    }
    resetAllElement() {
        this.berries.forEach((berrie, i) => {
            let current = document.getElementById('card_item_id_' + i);
            let flipCard = current.querySelector('.flip-card');
            let inner = current.querySelector('.flip-card-inner');

            flipCard.classList.remove('flip');
            inner.classList.remove('flip');
            berrie.flipped = false;
        });
    }
    resetGame() {
        this.resetAllElement();
        this.setGameLife(3);
        this.canFlip = true;
    }
}

export default BerriesGameCore;