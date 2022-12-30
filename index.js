const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");
      let homeScoreValue = 0;
      let awayScoreValue = 0;

const homeInc1Button = document.getElementById("home-inc-1");
      homeInc1Button.addEventListener("click", function() {
        homeScoreValue++;
        homeScore.textContent = homeScoreValue;
      });

const homeInc2Button = document.getElementById("home-inc-2");
      homeInc2Button.addEventListener("click", function() {
        homeScoreValue += 2;
        homeScore.textContent = homeScoreValue;
      });

const homeInc3Button = document.getElementById("home-inc-3");
      homeInc3Button.addEventListener("click", function() {
        homeScoreValue += 3;
        homeScore.textContent = homeScoreValue;
      });
      
const homeResetButton = document.getElementById("home-reset");
      homeResetButton.addEventListener("click", function() {
        homeScoreValue = 0;
        homeScore.textContent = homeScoreValue;
      });

const awayInc1Button = document.getElementById("away-inc-1");
      awayInc1Button.addEventListener("click", function() {
        awayScoreValue++;
        awayScore.textContent = awayScoreValue;
      });

const awayInc2Button = document.getElementById("away-inc-2");
      awayInc2Button.addEventListener("click", function() {
        awayScoreValue += 2;
        awayScore.textContent = awayScoreValue;
      });

const awayInc3Button = document.getElementById("away-inc-3");
      awayInc3Button.addEventListener("click", function() {
        awayScoreValue += 3;
        awayScore.textContent = awayScoreValue;
      });
      
const awayResetButton = document.getElementById("away-reset");
      awayResetButton.addEventListener("click", function() {
        awayScoreValue = 0;
        awayScore.textContent = awayScoreValue;
      });