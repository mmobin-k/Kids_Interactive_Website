var alphaData = [
  {l: 'A', w: 'Apple'},
  {l: 'B', w: 'Butterfly'},
  {l: 'C', w: 'Cat'},
  {l: 'D', w: 'Dog'},
  {l: 'E', w: 'Elephant'},
  {l: 'F', w: 'Frog'},
  {l: 'G', w: 'Giraffe'},
  {l: 'H', w: 'Hippo'},
  {l: 'I', w: 'Ice Cream'},
  {l: 'J', w: 'Jaguar'},
  {l: 'K', w: 'Kangaroo'},
  {l: 'L', w: 'Lion'},
  {l: 'M', w: 'Monkey'},
  {l: 'N', w: 'Nest'},
  {l: 'O', w: 'Owl'},
  {l: 'P', w: 'Penguin'},
  {l: 'Q', w: 'Quail'},
  {l: 'R', w: 'Rabbit'},
  {l: 'S', w: 'Starfish'},
  {l: 'T', w: 'Turtle'},
  {l: 'U', w: 'Umbrella'},
  {l: 'V', w: 'Violin'},
  {l: 'W', w: 'Whale'},
  {l: 'X', w: 'Xylophone'},
  {l: 'Y', w: 'Yo-yo'},
  {l: 'Z', w: 'Zebra'}
];

var numWords = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five',
  'Six', 'Seven', 'Eight', 'Nine', 'Ten'
];

var accentColors = [
  '#E53935', '#8E24AA', '#1E88E5', '#00897B',
  '#F4511E', '#E91E8C', '#3949AB', '#43A047',
  '#FB8C00', '#00ACC1', '#6D4C41'
];

var rhymes = [
  {
    title: 'Twinkle Twinkle Little Star',
    audio: 'audio/rhyme-twinkle.mp3',
    lines: 'Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.\nTwinkle, twinkle, little star,\nHow I wonder what you are!'
  },
  {
    title: 'Baa Baa Black Sheep',
    audio: 'audio/rhyme-baa-baa.mp3',
    lines: 'Baa, baa, black sheep,\nHave you any wool?\nYes sir, yes sir,\nThree bags full!\nOne for the master,\nOne for the dame,\nAnd one for the little boy\nWho lives down the lane.'
  },
  {
    title: 'Jack and Jill',
    audio: 'audio/rhyme-jack-and-jill.mp3',
    lines: 'Jack and Jill went up the hill\nTo fetch a pail of water.\nJack fell down and broke his crown,\nAnd Jill came tumbling after.\nUp Jack got and home did trot,\nAs fast as he could caper.\nHe went to bed to mend his head,\nWith vinegar and brown paper.'
  },
  {
    title: 'Rain Rain Go Away',
    audio: 'audio/rhyme-rain-rain.mp3',
    lines: 'Rain, rain, go away,\nCome again another day.\nLittle children want to play,\nRain, rain, go away!'
  },
  {
    title: 'Hickory Dickory Dock',
    audio: 'audio/rhyme-hickory.mp3',
    lines: 'Hickory dickory dock,\nThe mouse ran up the clock.\nThe clock struck one,\nThe mouse ran down,\nHickory dickory dock!'
  },
  {
    title: 'Itsy Bitsy Spider',
    audio: 'audio/rhyme-itsy-bitsy.mp3',
    lines: 'The itsy bitsy spider\nWent up the water spout.\nDown came the rain\nAnd washed the spider out.\nOut came the sun\nAnd dried up all the rain,\nAnd the itsy bitsy spider\nWent up the spout again!'
  },
  {
    title: 'Mary Mary Quite Contrary',
    audio: 'audio/rhyme-mary-mary.mp3',
    lines: 'Mary, Mary, quite contrary,\nHow does your garden grow?\nWith silver bells\nAnd cockle shells,\nAnd pretty maids all in a row.'
  },
  {
    title: 'Humpty Dumpty',
    audio: 'audio/rhyme-humpty-dumpty.mp3',
    lines: "Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.\nAll the king's horses\nAnd all the king's men,\nCouldn't put Humpty together again!"
  }
];

var quizBank = [
  {q: 'Which letter does "Apple" start with?',  options: ['A', 'B', 'C', 'D'],  answer: 'A'},
  {q: 'Which letter does "Elephant" start with?', options: ['E', 'F', 'G', 'H'], answer: 'E'},
  {q: 'Which letter does "Monkey" start with?',   options: ['L', 'M', 'N', 'O'], answer: 'M'},
  {q: 'Which letter does "Zebra" start with?',    options: ['X', 'Y', 'Z', 'W'], answer: 'Z'},
  {q: 'Which letter does "Penguin" start with?',  options: ['P', 'Q', 'R', 'S'], answer: 'P'},
  {q: 'How many letters are in the word CAT?',    options: ['2', '3', '4', '5'], answer: '3'},
  {q: 'What comes after the number 4?',           options: ['3', '6', '5', '7'], answer: '5'},
  {q: 'What comes before the number 8?',          options: ['6', '7', '9', '10'], answer: '7'},
  {q: 'How many fingers are on one hand?',        options: ['4', '6', '5', '3'], answer: '5'},
  {q: 'What is 3 + 3?',                           options: ['5', '6', '7', '8'], answer: '6'},
  {q: 'Which nursery rhyme has a "little star"?', options: ['Baa Baa Black Sheep', 'Humpty Dumpty', 'Twinkle Twinkle Little Star', 'Jack and Jill'], answer: 'Twinkle Twinkle Little Star'},
  {q: 'Who fell down a hill in a nursery rhyme?', options: ['Humpty Dumpty', 'Jack and Jill', 'Mary Mary', 'Itsy Bitsy Spider'], answer: 'Jack and Jill'}
];

var currentAudioPath = null;
var activeAudio = null;
var quizScore = 0;
var quizTotal = 0;
var currentQuiz = null;
var quizAnswered = false;

function playAudioFile(path) {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  var audio = new Audio(path);
  activeAudio = audio;
  audio.play().catch(function() {
    console.log('Audio placeholder not found: ' + path + '. Replace with real audio files.');
  });
}

function handlePopupPlay(event) {
  event.stopPropagation();
  if (currentAudioPath) {
    playAudioFile(currentAudioPath);
  }
}

function handleRhymePlay(event, path) {
  event.stopPropagation();
  playAudioFile(path);
}

function buildAlpha() {
  var grid = document.getElementById('alphaGrid');
  alphaData.forEach(function(d) {
    var card = document.createElement('div');
    card.className = 'alpha-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Letter ' + d.l + ', ' + d.l + ' is for ' + d.w);
    card.innerHTML =
      '<span class="big-letter" aria-hidden="true">' + d.l + '</span>' +
      '<span class="small-letter" aria-hidden="true">' + d.l.toLowerCase() + '</span>' +
      '<span class="word">' + d.w + '</span>';

    function open() {
      var letter = d.l.toLowerCase();
      showPopup(
        d.l,
        d.l + ' is for ' + d.w,
        'images/letter-' + letter + '.jpg',
        'A picture of a ' + d.w + ' representing the letter ' + d.l,
        'audio/letter-' + letter + '.wav'
      );
    }

    card.onclick = open;
    card.onkeydown = function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    };
    grid.appendChild(card);
  });
}

function buildNums() {
  var grid = document.getElementById('numGrid');
  for (var i = 0; i <= 10; i++) {
    var card = document.createElement('div');
    card.className = 'num-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Number ' + i + ', ' + numWords[i]);
    var dots = i === 0 ? '' : new Array(i + 1).join('.');
    card.innerHTML =
      '<span class="big-num" aria-hidden="true">' + i + '</span>' +
      '<span class="dot-count" aria-hidden="true">' + dots + '</span>' +
      '<span class="num-word">' + numWords[i] + '</span>' +
      '<span class="tap-hint" aria-hidden="true">tap to hear</span>';

    card.onclick = (function(n) {
      return function() {
        showPopup(
          n.toString(),
          numWords[n],
          'images/number-' + n + '.jpg',
          'An illustration showing the number ' + n,
          'audio/number-' + n + '.wav'
        );
      };
    })(i);

    card.onkeydown = (function(n) {
      return function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showPopup(
            n.toString(),
            numWords[n],
            'images/number-' + n + '.jpg',
            'An illustration showing the number ' + n,
            'audio/number-' + n + '.wav'
          );
        }
      };
    })(i);

    grid.appendChild(card);
  }
}

function buildRhymes() {
  var list = document.getElementById('rhymeList');
  rhymes.forEach(function(r) {
    var card = document.createElement('div');
    card.className = 'rhyme-card';

    card.innerHTML =
      '<div class="rhyme-header" tabindex="0" role="button" aria-expanded="false" aria-controls="body-' + slugify(r.title) + '">' +
        '<span class="rhyme-name">' + r.title + '</span>' +
        '<span class="rhyme-arrow" aria-hidden="true">&#9654;</span>' +
      '</div>' +
      '<div class="rhyme-body" id="body-' + slugify(r.title) + '" aria-hidden="true">' +
        '<div class="audio-bar">' +
          '<button class="play-btn" aria-label="Play audio for ' + r.title + '">&#9654;</button>' +
          '<div class="audio-label">Play audio<br>Placeholder: ' + r.audio + '</div>' +
        '</div>' +
        r.lines.replace(/\n/g, '<br>') +
        '<p class="rhyme-transcript">Transcript: ' + r.lines.replace(/\n/g, ' / ') + '</p>' +
      '</div>';

    var header = card.querySelector('.rhyme-header');
    var body = card.querySelector('.rhyme-body');

    function toggle() {
      var wasOpen = card.classList.contains('open');
      document.querySelectorAll('.rhyme-card').forEach(function(x) {
        x.classList.remove('open');
        x.querySelector('.rhyme-header').setAttribute('aria-expanded', 'false');
        x.querySelector('.rhyme-body').setAttribute('aria-hidden', 'true');
      });
      if (!wasOpen) {
        card.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        body.setAttribute('aria-hidden', 'false');
      }
    }

    header.onclick = toggle;
    header.onkeydown = function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    };

    card.querySelector('.play-btn').onclick = function(e) {
      handleRhymePlay(e, r.audio);
    };

    list.appendChild(card);
  });
}

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function loadQuiz() {
  quizAnswered = false;
  var box = document.getElementById('quizBox');
  var idx = Math.floor(Math.random() * quizBank.length);
  currentQuiz = quizBank[idx];

  var optionsHtml = currentQuiz.options.map(function(opt) {
    return '<li>' +
      '<button class="quiz-option" data-value="' + opt + '">' + opt + '</button>' +
      '</li>';
  }).join('');

  box.innerHTML =
    '<p class="quiz-question">' + currentQuiz.q + '</p>' +
    '<ul class="quiz-options" role="list">' + optionsHtml + '</ul>';

  box.querySelectorAll('.quiz-option').forEach(function(btn) {
    btn.onclick = function() {
      if (quizAnswered) return;
      checkAnswer(btn.getAttribute('data-value'));
    };
    btn.onkeydown = function(e) {
      if ((e.key === 'Enter' || e.key === ' ') && !quizAnswered) {
        e.preventDefault();
        checkAnswer(btn.getAttribute('data-value'));
      }
    };
  });

  document.getElementById('quizScore').textContent = '';
}

function checkAnswer(chosen) {
  quizAnswered = true;
  quizTotal++;
  var correct = chosen === currentQuiz.answer;
  if (correct) quizScore++;

  var box = document.getElementById('quizBox');
  box.querySelectorAll('.quiz-option').forEach(function(btn) {
    btn.disabled = true;
    if (btn.getAttribute('data-value') === currentQuiz.answer) {
      btn.classList.add('correct');
      btn.setAttribute('aria-label', btn.textContent + ' - correct answer');
    } else if (btn.getAttribute('data-value') === chosen && !correct) {
      btn.classList.add('wrong');
      btn.setAttribute('aria-label', btn.textContent + ' - wrong answer');
    }
  });

  var result = document.createElement('p');
  result.className = 'quiz-result ' + (correct ? 'pass' : 'fail');
  result.setAttribute('role', 'alert');
  result.textContent = correct
    ? 'Great job! That is correct!'
    : 'Not quite. The correct answer is: ' + currentQuiz.answer;
  box.appendChild(result);

  document.getElementById('quizScore').textContent =
    'Score: ' + quizScore + ' out of ' + quizTotal + ' answered correctly.';
}

function showTab(tab) {
  document.querySelectorAll('.tab-section').forEach(function(s) {
    s.classList.remove('active');
    s.setAttribute('aria-hidden', 'true');
  });
  document.querySelectorAll('.nav-link').forEach(function(a) {
    a.classList.remove('active');
    a.removeAttribute('aria-current');
  });

  var section = document.getElementById('section-' + tab);
  if (section) {
    section.classList.add('active');
    section.removeAttribute('aria-hidden');
  }

  var navLink = document.querySelector('[data-tab="' + tab + '"]');
  if (navLink) {
    navLink.classList.add('active');
    navLink.setAttribute('aria-current', 'page');
  }

  if (tab === 'quiz') {
    loadQuiz();
  }
}

function showPopup(display, label, imagePath, imageAlt, audioPath) {
  var randomColor = accentColors[Math.floor(Math.random() * accentColors.length)];

  document.getElementById('popDisplay').textContent = display;
  document.getElementById('popDisplay').style.color = randomColor;
  document.getElementById('popLabel').textContent = label;
  document.getElementById('popImgPath').innerHTML = 
  '<img src="' + imagePath + '" alt="' + label + '">';
  document.getElementById('popAudioLabel').innerHTML = '';

  currentAudioPath = audioPath;

  var overlay = document.getElementById('popup');
  overlay.classList.add('show');
  overlay.removeAttribute('aria-hidden');

  var closeBtn = overlay.querySelector('.popup-close');
  if (closeBtn) closeBtn.focus();
}

function closePopup() {
  var overlay = document.getElementById('popup');
  overlay.classList.remove('show');
  overlay.setAttribute('aria-hidden', 'true');
  currentAudioPath = null;
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('popup')) {
    closePopup();
  }
}

function validateForm() {
  var valid = true;

  var name = document.getElementById('fieldName');
  var nameError = document.getElementById('nameError');
  if (!name.value.trim()) {
    nameError.textContent = 'Please enter your name.';
    name.classList.add('invalid');
    valid = false;
  } else {
    nameError.textContent = '';
    name.classList.remove('invalid');
  }

  var email = document.getElementById('fieldEmail');
  var emailError = document.getElementById('emailError');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    emailError.textContent = 'Please enter your email address.';
    email.classList.add('invalid');
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    email.classList.add('invalid');
    valid = false;
  } else {
    emailError.textContent = '';
    email.classList.remove('invalid');
  }

  var age = document.getElementById('fieldAge');
  var ageError = document.getElementById('ageError');
  if (!age.value) {
    ageError.textContent = 'Please select an age group.';
    age.classList.add('invalid');
    valid = false;
  } else {
    ageError.textContent = '';
    age.classList.remove('invalid');
  }

  var message = document.getElementById('fieldMessage');
  var messageError = document.getElementById('messageError');
  if (!message.value.trim()) {
    messageError.textContent = 'Please enter a message.';
    message.classList.add('invalid');
    valid = false;
  } else if (message.value.trim().length < 10) {
    messageError.textContent = 'Your message must be at least 10 characters.';
    message.classList.add('invalid');
    valid = false;
  } else {
    messageError.textContent = '';
    message.classList.remove('invalid');
  }

  var consent = document.getElementById('fieldConsent');
  var consentError = document.getElementById('consentError');
  if (!consent.checked) {
    consentError.textContent = 'You must agree before submitting.';
    consent.classList.add('invalid');
    valid = false;
  } else {
    consentError.textContent = '';
    consent.classList.remove('invalid');
  }

  return valid;
}

function initNav() {
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var tab = link.getAttribute('data-tab');
      showTab(tab);
    });
  });
}

function initForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
      form.reset();
      var success = document.getElementById('formSuccess');
      success.classList.add('show');
      success.removeAttribute('aria-hidden');
      success.focus();
      setTimeout(function() {
        success.classList.remove('show');
        success.setAttribute('aria-hidden', 'true');
      }, 6000);
    } else {
      var firstError = form.querySelector('.invalid');
      if (firstError) firstError.focus();
    }
  });
}

function initKeyboardEscape() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });
}

function initSections() {
  document.querySelectorAll('.tab-section').forEach(function(s) {
    if (!s.classList.contains('active')) {
      s.setAttribute('aria-hidden', 'true');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initNav();
  initForm();
  initKeyboardEscape();
  initSections();
  buildAlpha();
  buildNums();
  buildRhymes();
  loadQuiz();
});
