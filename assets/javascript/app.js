/**
 * 
 *  This is the app.js file
 * 
 */

/**
 *     TODO:   make time class
 *             
 * 
 */
class GameAnswer {
    m_szAnswer = "";
    m_bIsTrue = false;
    constructor(_szAnswer, _bIsTrue) {
        this.m_szAnswer = _szAnswer;
        this.m_bIsTrue = _bIsTrue;
    }
}
class GameQuestion {

    m_szGameQuestion = "";
    m_szAnswers = [];

    constructor(_szQuestion) {
        this.m_szGameQuestion = _szQuestion;
    }

}

class Game {

    // constructors
    constructor() {

    }

    // fields
    m_szGameQuestions = [];
    m_nCurTime = 0;
    m_nStartTime = 30;
    m_bIsRunning = false;
    m_nRandomQIndex = [4];
    m_nNumCorrect = 0;
    m_nNumWrong = 0;
    m_nNumUnanswered = 0;

    m_hInterval;

    // methods
    startTime() {

        // get a handle to the game
        var hGame = this;

        if (!hGame.m_bIsRunning) {
            hGame.m_bIsRunning = true;
            hGame.m_nCurTime = hGame.m_nStartTime;
            this.setTime();
            hGame.setInterval(setInterval(function () { hGame.updateTime(hGame) }, 1000));
        }
    }
    setInterval(_interval) {
        this.m_hInterval = _interval;
    }
    setTime() {
        $("#game-timer").text(this.m_nCurTime);

    }
    clearTime() {

        // get a handle to the game
        var hGame = this;

        clearInterval(hGame.m_hInterval);
    }

    stopTime() {
        this.m_bIsRunning = false;
    }

    updateTime(_game) {


        // if the game isnt running dont update the time
        if (!_game.m_bIsRunning)
            return;


        _game.m_nCurTime--;
        _game.setTime();
        if (_game.m_nCurTime <= 0) {


            // times up!

            // find the total that were right or wrong 
            _game.checkUserAnswers();

            // display the total page
            location.href = "total.html?numCorrect=" + _game.m_nNumCorrect 
                + "&numIncorrect=" + _game.m_nNumWrong
                + "&numUnanswered=" + _game.m_nNumUnanswered;

            // save the values
            // localStorage.setItem("right", 7);
            // localStorage.setItem("wrong", 8);



            _game.m_nCurTime = 0;

        }
    }

    checkUserAnswers() {

        var hGame = this;

        // check if any buttons were selected
        // for (var i = 0; ){

        // }
        var answered = false;
        // check if the correct answer matches the users selection
        for (var i = 0; i < hGame.m_szGameQuestions[hGame.m_nRandomQIndex[0]].m_szAnswers.length; ++i) {

            var temp = ".q1" + i.toString() ;

            if (hGame.m_szGameQuestions[hGame.m_nRandomQIndex[0]].m_szAnswers[i].m_bIsTrue === true) {
                if ($(temp).is(':checked')) {
                    hGame.m_nNumCorrect++;
                    answered = true;
                }
            }
            else if ($(temp).is(':checked')) {
                hGame.m_nNumWrong++;
                answered = true;
            }

        }
        if (answered === false) {
            hGame.m_nNumUnanswered++;
        }
        answered = false;

        /////////////////////////////////////////////////////////////////
        for (var i = 0; i < hGame.m_szGameQuestions[hGame.m_nRandomQIndex[1]].m_szAnswers.length; ++i) {

            var temp = ".q2" + i.toString() ;

            if (hGame.m_szGameQuestions[hGame.m_nRandomQIndex[1]].m_szAnswers[i].m_bIsTrue === true) {
                if ($(temp).is(':checked')) {
                    hGame.m_nNumCorrect++;
                    answered = true;
                }
            }
            else if ($(temp).is(':checked')) {
                hGame.m_nNumWrong++;
                answered = true;
            }

        }
        if (answered === false) {
            hGame.m_nNumUnanswered++;
        }
        answered = false;

        /////////////////////////////////////////////////////////////////
        for (var i = 0; i < hGame.m_szGameQuestions[hGame.m_nRandomQIndex[2]].m_szAnswers.length; ++i) {

            var temp = ".q3" + i.toString() ;

            if (hGame.m_szGameQuestions[hGame.m_nRandomQIndex[2]].m_szAnswers[i].m_bIsTrue === true) {
                if ($(temp).is(':checked')) {
                    hGame.m_nNumCorrect++;
                    answered = true;
                }
            }
            else if ($(temp).is(':checked')) {
                hGame.m_nNumWrong++;
                answered = true;
            }

        }
        if (answered === false) {
            hGame.m_nNumUnanswered++;
        }
        answered = false;

        /////////////////////////////////////////////////////////////////
        for (var i = 0; i < hGame.m_szGameQuestions[hGame.m_nRandomQIndex[3]].m_szAnswers.length; ++i) {

            var temp = ".q3" + i.toString() ;

            if (hGame.m_szGameQuestions[hGame.m_nRandomQIndex[3]].m_szAnswers[i].m_bIsTrue === true) {
                if ($(temp).is(':checked')) {
                    hGame.m_nNumCorrect++;
                    answered = true;
                }
            }
            else if ($(temp).is(':checked')) {
                hGame.m_nNumWrong++;
                answered = true;
            }

        }
        if (answered === false) {
            hGame.m_nNumUnanswered++;
        }
        answered = false;
    }

    resetGame() {

        // get a handle to the game ( class )
        var hGame = this;

    }

    initGame() {

        // populate the array of questions
        this.populateGameQuestions();

        // find four random indicies to pick 4 random questions with
        this.findFourRandomNum();

        // set questions
        this.setQuestions();

        // start the timer
        this.startTime();

    }

    setQuestions() {

        // get a handle to the game
        var hGame = this;

        // variable to make things easier to read :)
        var gameQuestion = hGame.m_szGameQuestions[hGame.m_nRandomQIndex[0]];

        // set the question1
        $("#q1").text(gameQuestion.m_szGameQuestion);

        // set the answers
        $("#q1a1").text(gameQuestion.m_szAnswers[0].m_szAnswer);
        $("#q1a2").text(gameQuestion.m_szAnswers[1].m_szAnswer);
        $("#q1a3").text(gameQuestion.m_szAnswers[2].m_szAnswer);
        $("#q1a4").text(gameQuestion.m_szAnswers[3].m_szAnswer);

        // set the question2
        gameQuestion = hGame.m_szGameQuestions[hGame.m_nRandomQIndex[1]];
        $("#q2").text(gameQuestion.m_szGameQuestion);

        // set the answers
        $("#q2a1").text(gameQuestion.m_szAnswers[0].m_szAnswer);
        $("#q2a2").text(gameQuestion.m_szAnswers[1].m_szAnswer);
        $("#q2a3").text(gameQuestion.m_szAnswers[2].m_szAnswer);
        $("#q2a4").text(gameQuestion.m_szAnswers[3].m_szAnswer);

        // set the question3
        gameQuestion = hGame.m_szGameQuestions[hGame.m_nRandomQIndex[2]];
        $("#q3").text(gameQuestion.m_szGameQuestion);

        // set the answers
        $("#q3a1").text(gameQuestion.m_szAnswers[0].m_szAnswer);
        $("#q3a2").text(gameQuestion.m_szAnswers[1].m_szAnswer);
        $("#q3a3").text(gameQuestion.m_szAnswers[2].m_szAnswer);
        $("#q3a4").text(gameQuestion.m_szAnswers[3].m_szAnswer);

        // set the question4
        gameQuestion = hGame.m_szGameQuestions[hGame.m_nRandomQIndex[3]];
        $("#q4").text(gameQuestion.m_szGameQuestion);

        // set the answers
        $("#q4a1").text(gameQuestion.m_szAnswers[0].m_szAnswer);
        $("#q4a2").text(gameQuestion.m_szAnswers[1].m_szAnswer);
        $("#q4a3").text(gameQuestion.m_szAnswers[2].m_szAnswer);
        $("#q4a4").text(gameQuestion.m_szAnswers[3].m_szAnswer);
    }

    findFourRandomNum() {

        // get a handle to the game
        var hGame = this;

        // clear the random questions if there already are some
        while (hGame.m_nRandomQIndex.length != 0) {
            hGame.m_nRandomQIndex.pop();
        }

        while (hGame.m_nRandomQIndex.length != 4) {

            // generate a random number
            var ranNum = Math.floor(Math.random() * hGame.m_szGameQuestions.length);

            // check if its a number already in the list
            if (!hGame.m_nRandomQIndex.includes(ranNum))
                hGame.m_nRandomQIndex.push(ranNum);


        }

        hGame.m_nRandomQIndex.forEach(function (_item) {
            console.log(_item);
        });
        // console.log(hGame.m_nRandomQIndex[i]);

    }

    populateGameQuestions() {

        // q1
        var question = new GameQuestion("What state are we living in?");
        question.m_szAnswers.push(new GameAnswer("Florida", false));
        question.m_szAnswers.push(new GameAnswer("Colorado", true));
        question.m_szAnswers.push(new GameAnswer("Hawaii", false));
        question.m_szAnswers.push(new GameAnswer("Alaska", false));
        this.m_szGameQuestions.push(question);

        // q2
        var question = new GameQuestion("Which of these are a food?");
        question.m_szAnswers.push(new GameAnswer("Dirt", false));
        question.m_szAnswers.push(new GameAnswer("Pizza", true));
        question.m_szAnswers.push(new GameAnswer("Grass", false));
        question.m_szAnswers.push(new GameAnswer("Poo", false));
        this.m_szGameQuestions.push(question);

        // q3
        var question = new GameQuestion("What is the biggest whale in the sea?");
        question.m_szAnswers.push(new GameAnswer("Blue Whale", true));
        question.m_szAnswers.push(new GameAnswer("Shamu", false));
        question.m_szAnswers.push(new GameAnswer("Humpback", false));
        question.m_szAnswers.push(new GameAnswer("Whale Shark", false));
        this.m_szGameQuestions.push(question);

        // q4
        var question = new GameQuestion("What is the final frontier?");
        question.m_szAnswers.push(new GameAnswer("Caves", false));
        question.m_szAnswers.push(new GameAnswer("Ocean", false));
        question.m_szAnswers.push(new GameAnswer("Space", true));
        question.m_szAnswers.push(new GameAnswer("Mars", false));
        this.m_szGameQuestions.push(question);

        // q5
        var question = new GameQuestion("What was the first Star Wars movie that was made?");
        question.m_szAnswers.push(new GameAnswer("A New Hope", true));
        question.m_szAnswers.push(new GameAnswer("Return of the Jedi", false));
        question.m_szAnswers.push(new GameAnswer("The Empire Strikes back", false));
        question.m_szAnswers.push(new GameAnswer("The Phantom Menace", false));
        this.m_szGameQuestions.push(question);

        // q6
        var question = new GameQuestion("Which of the following actors was in Thor: Ragnorok?");
        question.m_szAnswers.push(new GameAnswer("Matt Damon", false));
        question.m_szAnswers.push(new GameAnswer("Samuel L. Jackson", false));
        question.m_szAnswers.push(new GameAnswer("Natalie Portman", false));
        question.m_szAnswers.push(new GameAnswer("Jeff Goldblum", true));
        this.m_szGameQuestions.push(question);

    }


}


/**********************************************************************/
// TODO:    put this in its own .js file
/** index.html */
$("#startBtn").on("click", goToGameplay);

function goToGameplay() {
    location.href = "game.html";

}



/**********************************************************************/
// TODO:    put this in its own .js file
/** game.html */
var game = new Game();
game.initGame();

